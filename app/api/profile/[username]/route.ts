// app/api/wrapped/route.ts
import { NextRequest, NextResponse } from "next/server";

const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ username: string }> }
) {
  try{
    const { username } = await context.params;

    if (!username) {
      return NextResponse.json({ error: "username is required" }, { status: 400 });
    }

    const year = new Date().getFullYear();
    const from = new Date(`${year}-01-01T00:00:00Z`).toISOString();
    const to = new Date(`${year}-12-31T23:59:59Z`).toISOString();

    const query = `
      query GitWrapped($login: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $login) {
          login
          name
          avatarUrl
          contributionsCollection(from: $from, to: $to) {
            totalCommitContributions
            totalPullRequestContributions
            totalIssueContributions
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
          repositories(
            first: 20
            privacy: PUBLIC
            ownerAffiliations: OWNER
            orderBy: { field: STARGAZERS, direction: DESC }
          ) {
            nodes {
              name
              stargazerCount
              languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
                edges {
                  size
                  node {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `;

    const ghRes = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_APP_GIT_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables: { login: username, from, to },
      }),
    });

    const data = await ghRes.json();

    if (!ghRes.ok || data.errors) {
      return NextResponse.json(
        { error: "GitHub API error", details: data.errors },
        { status: 502 },
      );
    }

    const user = data.data?.user;
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const repos = user.repositories.nodes || [];

    // --------- 🔹 Aggregate language usage ----------
    const languageMap: Record<string, number> = {};

    repos.forEach((repo: any) => {
      repo.languages?.edges?.forEach((edge: any) => {
        const name = edge.node.name;
        const size = edge.size;
        languageMap[name] = (languageMap[name] || 0) + size;
      });
    });

    const topLanguages = Object.entries(languageMap)
      .map(([name, size]) => ({ name, size }))
      .sort((a, b) => b.size - a.size)
      .slice(0, 5);

    // --------- ⭐ New stats: streaks, months, stars, etc. ----------

    const calendar = user.contributionsCollection.contributionCalendar;
    const weeks = calendar?.weeks || [];

    type Day = { date: string; contributionCount: number };

    const days: Day[] = [];
    weeks.forEach((week: any) => {
      week.contributionDays?.forEach((day: Day) => {
        days.push(day);
      });
    });

    // Sort by date (just to be safe)
    days.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    let longestStreak = 0;
    let currentStreak = 0;
    let totalActiveDays = 0;

    const monthMap: Record<string, { totalContributions: number }> = {};
    const weekdayMap: Record<number, number> = {}; // 0-6 => total contribs

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const weekdayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    days.forEach((d) => {
      const count = d.contributionCount;
      const dateObj = new Date(d.date);

      const monthKey = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(
        2,
        "0",
      )}`;

      if (!monthMap[monthKey]) {
        monthMap[monthKey] = { totalContributions: 0 };
      }
      monthMap[monthKey].totalContributions += count;

      const weekday = dateObj.getDay();
      weekdayMap[weekday] = (weekdayMap[weekday] || 0) + count;

      if (count > 0) {
        totalActiveDays++;
        currentStreak++;
        if (currentStreak > longestStreak) {
          longestStreak = currentStreak;
        }
      } else {
        currentStreak = 0;
      }
    });

    // Most efficient month (highest total contributions)
    let mostEfficientMonth: {
      month: string | null;
      totalContributions: number;
    } = {
      month: null,
      totalContributions: 0,
    };

    Object.entries(monthMap).forEach(([monthKey, value]) => {
      if (value.totalContributions > mostEfficientMonth.totalContributions) {
        const [, monthStr] = monthKey.split("-");
        const monthIndex = Number(monthStr) - 1;
        mostEfficientMonth = {
          month: `${monthNames[monthIndex]}`,
          totalContributions: value.totalContributions,
        };
      }
    });

    // Busiest day of week
    let busiestDayOfWeek: {
      day: string | null;
      totalContributions: number;
    } = { day: null, totalContributions: 0 };

    Object.entries(weekdayMap).forEach(([weekdayStr, total]) => {
      const weekdayIndex = Number(weekdayStr);
      if (total > busiestDayOfWeek.totalContributions) {
        busiestDayOfWeek = {
          day: weekdayNames[weekdayIndex],
          totalContributions: total,
        };
      }
    });

    // Total stars across all owned repos
    const totalStars = repos.reduce(
      (sum: number, repo: any) => sum + (repo.stargazerCount || 0),
      0,
    );

    // Average commits per day in the year (over full year)
    const totalCommits = user.contributionsCollection.totalCommitContributions;
    const daysInYear =
      (new Date(`${year}-12-31T23:59:59Z`).getTime() -
        new Date(`${year}-01-01T00:00:00Z`).getTime()) /
        (1000 * 60 * 60 * 24) +
      1;

    const averageCommitsPerDay =
      daysInYear > 0 ? Number((totalCommits / daysInYear).toFixed(2)) : 0;

    const wrapped = {
      profile: {
        login: user.login,
        name: user.name,
        avatarUrl: user.avatarUrl,
      },
      stats: {
        totalCommits,
        totalPRs: user.contributionsCollection.totalPullRequestContributions,
        totalIssues: user.contributionsCollection.totalIssueContributions,
        totalContributions: user.contributionsCollection.contributionCalendar.totalContributions,

        // 🆕 Extra stats
        longestStreak,
        currentStreak,
        totalActiveDays,
        mostEfficientMonth,
        busiestDayOfWeek,
        totalStars,
        averageCommitsPerDay,
      },
      topRepos: repos.slice(0, 5).map((repo: any) => ({
        name: repo.name,
        stars: repo.stargazerCount,
      })),
      topLanguages,
      year,
    };

    return NextResponse.json({ wrapped });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
