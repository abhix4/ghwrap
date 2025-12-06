// app/api/wrapped/route.ts
import { NextRequest, NextResponse } from "next/server";

const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

export async function GET(req: NextRequest, { params }: { params: { username: string } }) {
  try {
    const {username} = await params;

    if (!username) {
      return NextResponse.json(
        { error: "username is required" },
        { status: 400 }
      );
    }

    const y = new Date().getFullYear();
    const from = new Date(`${y}-01-01T00:00:00Z`).toISOString();
    const to = new Date(`${y}-12-31T23:59:59Z`).toISOString();

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
            first: 5
            orderBy: { field: STARGAZERS, direction: DESC }
            privacy: PUBLIC
            ownerAffiliations: OWNER
          ) {
            nodes {
              name
              stargazerCount
              primaryLanguage {
                name
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
        Authorization: `Bearer `,
      },
      body: JSON.stringify({
        query,
        variables: { login: username, from, to },
      }),
    });

    const data = await ghRes.json();

    if (!ghRes.ok || data.errors) {
      console.error("GitHub error:", data.errors);
      return NextResponse.json(
        { error: "GitHub API error", details: data.errors },
        { status: 502 }
      );
    }

    const user = data.data?.user;
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Shape a simpler "wrapped" response
    const contributions = user.contributionsCollection;
    const repos = user.repositories.nodes ?? [];

    const wrapped = {
      profile: {
        login: user.login,
        name: user.name,
        avatarUrl: user.avatarUrl,
      },
      stats: {
        totalCommits: contributions.totalCommitContributions,
        totalPRs: contributions.totalPullRequestContributions,
        totalIssues: contributions.totalIssueContributions,
        totalContributions: contributions.contributionCalendar.totalContributions,
      },
      topRepos: repos.map((r: any) => ({
        name: r.name,
        stars: r.stargazerCount,
        language: r.primaryLanguage?.name ?? "Unknown",
      })),
      year: y,
    };

    return NextResponse.json({ wrapped });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
