import fs from "node:fs";

const username = process.env.GITHUB_USERNAME || "Syed-Moiz-Ali";
const token = process.env.GITHUB_TOKEN;
const svgPath = "assets/hero.svg";

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

function escapeXml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function buildSvgContent(prs) {
  if (!prs.length) {
    return `<text x="74" y="1540" fill="#555" font-family="'JetBrains Mono',monospace" font-size="11">No merged PRs found yet.</text>`;
  }

  const grouped = new Map();

  for (const pr of prs) {
    const repo = getRepositoryName(pr);
    if (!grouped.has(repo)) {
      grouped.set(repo, []);
    }
    grouped.get(repo).push(pr);
  }

  const lines = [];
  let y = 1505;
  const startY = y;

  for (const [repo, repoPRs] of grouped.entries()) {
    if (y > 1630) break;

    const short = repo.replace(`${username}/`, "");
    const recent = repoPRs.slice(0, 2).map((pr) =>
      `<a href="${pr.html_url}"><text fill="#A78BFA" font-family="'JetBrains Mono',monospace" font-size="10" text-decoration="underline">${escapeXml(pr.title)}</text></a>`
    ).join(`<text fill="#555" font-family="'JetBrains Mono',monospace" font-size="10"> · </text>`);

    lines.push(`<rect x="72" y="${y}" width="856" height="1" fill="rgba(255,255,255,0.03)"/>`);
    lines.push(`<text x="74" y="${y + 14}" fill="#E8E8E8" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="500">${escapeXml(short)}</text>`);
    lines.push(`<text x="500" y="${y + 14}" fill="#A78BFA" font-family="'JetBrains Mono',monospace" font-size="10">${repoPRs.length} merged PRs</text>`);
    lines.push(`<text x="74" y="${y + 34}" fill="#555" font-family="'JetBrains Mono',monospace" font-size="10">Recent: ${recent}</text>`);

    y += 40;
  }

  return lines.join("\n  ");
}

function updateSvg(section) {
  const svg = fs.readFileSync(svgPath, "utf8");

  const start = "<!-- OSS-CONTRIBUTIONS:START -->";
  const end = "<!-- OSS-CONTRIBUTIONS:END -->";

  const pattern = new RegExp(`${start}[\\s\\S]*?${end}`);

  if (!pattern.test(svg)) {
    throw new Error("SVG markers not found");
  }

  const updated = svg.replace(pattern, `${start}\n  ${section}\n  ${end}`);

  fs.writeFileSync(svgPath, updated);
}

const prs = await fetchMergedPRs();
const section = buildSvgContent(prs);
updateSvg(section);

console.log(`Updated hero.svg with ${prs.length} merged PRs.`);
