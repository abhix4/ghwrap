// app/api/wrapped/route.ts
import { NextRequest, NextResponse } from "next/server";

const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

export async function GET(req: NextRequest, { params }: { params: { username: string } }) {
  try {
       const {username} = await params;

    if (!username) {
      return NextResponse.json({ error: "username is required" }, { status: 400 });
    }

    const year = new Date().getFullYear();
    const from = new Date(`${year}-01-01T00:00:00Z`).toISOString();
    const to = new Date(`${year}-12-31T23:59:59Z`).toISOString();

    // Updated GraphQL Query
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
        Authorization: `Bearer ${process.env.NEXT_APP_GIT_ACCESS_TOKEN}`, // move your token to env
      },
      body: JSON.stringify({
        query,
        variables: { login: username, from, to },
      }),
    });

    const data = await ghRes.json();

    if (!ghRes.ok || data.errors) {
      return NextResponse.json({ error: "GitHub API error", details: data.errors }, { status: 502 });
    }

    const user = data.data?.user;
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const repos = user.repositories.nodes || [];

    // Aggregate language usage
    const languageMap: Record<string, number> = {};

    repos.forEach((repo: any) => {
      repo.languages?.edges?.forEach((edge: any) => {
        const name = edge.node.name;
        const size = edge.size;
        languageMap[name] = (languageMap[name] || 0) + size;
      });
    });

    // Convert to sortable array
    const topLanguages = Object.entries(languageMap)
      .map(([name, size]) => ({ name, size }))
      .sort((a, b) => b.size - a.size)
      .slice(0, 5); // top 5 languages

    const wrapped = {
      profile: {
        login: user.login,
        name: user.name,
        avatarUrl: user.avatarUrl,
      },
      stats: {
        totalCommits: user.contributionsCollection.totalCommitContributions,
        totalPRs: user.contributionsCollection.totalPullRequestContributions,
        totalIssues: user.contributionsCollection.totalIssueContributions,
        totalContributions: user.contributionsCollection.contributionCalendar.totalContributions,
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
