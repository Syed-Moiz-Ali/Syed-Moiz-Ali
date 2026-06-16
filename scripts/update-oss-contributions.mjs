import fs from "node:fs";

const username = process.env.GITHUB_USERNAME || "Syed-Moiz-Ali";
const token = process.env.GITHUB_TOKEN;
const readmePath = "README.md";

if (!token) {
  throw new Error("Missing GITHUB_TOKEN");
}

const headers = {
  Authorization: `Bearer ${token}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

async function fetchMergedPRs() {
  const query = encodeURIComponent(`author:${username} type:pr is:merged`);
  const url = `https://api.github.com/search/issues?q=${query}&sort=updated&order=desc&per_page=100`;

  const response = await fetch(url, { headers });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`GitHub API error: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return data.items || [];
}

function getRepositoryName(item) {
  return item.repository_url.replace("https://api.github.com/repos/", "");
}

function buildMarkdown(prs) {
  if (!prs.length) {
    return `<p align="center">No merged PRs found yet. Start contributing and this section will update automatically.</p>`;
  }

  const grouped = new Map();

  for (const pr of prs) {
    const repo = getRepositoryName(pr);
    if (!grouped.has(repo)) {
      grouped.set(repo, []);
    }
    grouped.get(repo).push(pr);
  }

  const repoCount = grouped.size;
  const totalPRs = prs.length;

  const lines = [];
  lines.push(`<p align="center"><sub>${totalPRs} merged PRs across ${repoCount} repositories</sub></p>`);
  lines.push(``);

  for (const [repo, repoPRs] of grouped.entries()) {
    const encoded = repo.replace(/[^a-zA-Z0-9/_-]/g, "_");
    const recent = repoPRs
      .slice(0, 2)
      .map((pr) => `[${escapeMarkdown(pr.title)}](${pr.html_url})`)
      .join(" · ");

    lines.push(`<a href="https://github.com/${repo}"><img src="https://img.shields.io/static/v1?label=${encoded}&message=${repoPRs.length}+merged+PRs&color=7C3AED&style=for-the-badge&logo=github" alt="${repo}" /></a>`);
    lines.push(`<br />`);
    lines.push(`<sub>Recent: ${recent}</sub>`);
    lines.push(`<br /><br />`);
  }

  return lines.join(`\n`);
}

function escapeMarkdown(text) {
  return text.replace(/\|/g, "\\|");
}

function updateReadme(section) {
  const readme = fs.readFileSync(readmePath, "utf8");

  const start = "<!-- OSS-CONTRIBUTIONS:START -->";
  const end = "<!-- OSS-CONTRIBUTIONS:END -->";

  const pattern = new RegExp(`${start}[\\s\\S]*?${end}`);

  if (!pattern.test(readme)) {
    throw new Error("README markers not found");
  }

  const updated = readme.replace(pattern, `${start}\n${section}\n${end}`);

  fs.writeFileSync(readmePath, updated);
}

const prs = await fetchMergedPRs();
const section = buildMarkdown(prs);
updateReadme(section);

console.log(`Updated README with ${prs.length} merged PRs.`);
