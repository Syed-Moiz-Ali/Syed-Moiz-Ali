<div align="center">

<!-- HERO SVG — name + animated underline -->
<svg width="600" height="110" viewBox="0 0 600 110" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @media (prefers-color-scheme: dark) {
        .name { fill: #ffffff; }
        .sub  { fill: #888888; }
        .line { stroke: #7C3AED; }
        .dot  { fill: #7C3AED; }
      }
      @media (prefers-color-scheme: light) {
        .name { fill: #0a0a0a; }
        .sub  { fill: #666666; }
        .line { stroke: #7C3AED; }
        .dot  { fill: #7C3AED; }
      }
    </style>
  </defs>
  <text x="300" y="58" font-family="'Segoe UI', system-ui, sans-serif" font-size="48" font-weight="700" letter-spacing="-2" text-anchor="middle" class="name">Syed Moiz Ali</text>
  <text x="300" y="84" font-family="'Courier New', monospace" font-size="13" letter-spacing="3" text-anchor="middle" class="sub">FLUTTER DEVELOPER · MOBILE ENGINEER</text>
  <line x1="120" y1="96" x2="120" y2="96" stroke-width="2" stroke-linecap="round" class="line">
    <animate attributeName="x2" from="120" to="480" dur="1.2s" fill="freeze" begin="0.3s" calcMode="spline" keySplines="0.4 0 0.2 1"/>
  </line>
  <circle cx="120" cy="96" r="3" class="dot">
    <animate attributeName="cx" from="120" to="480" dur="1.2s" fill="freeze" begin="0.3s" calcMode="spline" keySplines="0.4 0 0.2 1"/>
  </circle>
</svg>

<!-- STATUS BADGE ROW -->
<svg width="560" height="36" viewBox="0 0 560 36" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @media (prefers-color-scheme: dark) {
        .pill-bg   { fill: #161616; stroke: #2a2a2a; }
        .pill-open { fill: #0d2016; stroke: #1a4a2e; }
        .pt        { fill: #666; }
        .po        { fill: #4ade80; }
        .dot-g     { fill: #22c55e; }
      }
      @media (prefers-color-scheme: light) {
        .pill-bg   { fill: #f5f5f5; stroke: #e0e0e0; }
        .pill-open { fill: #f0fdf4; stroke: #bbf7d0; }
        .pt        { fill: #888; }
        .po        { fill: #16a34a; }
        .dot-g     { fill: #22c55e; }
      }
    </style>
  </defs>
  <!-- Open to work -->
  <rect x="0" y="6" width="130" height="24" rx="12" class="pill-open" stroke-width="1"/>
  <circle cx="18" cy="18" r="4" class="dot-g">
    <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/>
  </circle>
  <text x="28" y="22" font-family="'Courier New', monospace" font-size="11" class="po">open to work</text>
  <!-- Flutter -->
  <rect x="140" y="6" width="76" height="24" rx="12" class="pill-bg" stroke-width="1"/>
  <text x="178" y="22" font-family="'Courier New', monospace" font-size="11" text-anchor="middle" class="pt">Flutter</text>
  <!-- Firebase -->
  <rect x="226" y="6" width="76" height="24" rx="12" class="pill-bg" stroke-width="1"/>
  <text x="264" y="22" font-family="'Courier New', monospace" font-size="11" text-anchor="middle" class="pt">Firebase</text>
  <!-- Riverpod -->
  <rect x="312" y="6" width="80" height="24" rx="12" class="pill-bg" stroke-width="1"/>
  <text x="352" y="22" font-family="'Courier New', monospace" font-size="11" text-anchor="middle" class="pt">Riverpod</text>
  <!-- REST -->
  <rect x="402" y="6" width="76" height="24" rx="12" class="pill-bg" stroke-width="1"/>
  <text x="440" y="22" font-family="'Courier New', monospace" font-size="11" text-anchor="middle" class="pt">REST APIs</text>
  <!-- Node -->
  <rect x="488" y="6" width="68" height="24" rx="12" class="pill-bg" stroke-width="1"/>
  <text x="522" y="22" font-family="'Courier New', monospace" font-size="11" text-anchor="middle" class="pt">Node.js</text>
</svg>

<!-- LINKS -->

[![Email](https://img.shields.io/badge/Email-dev.syedmoizali%40gmail.com-7C3AED?style=flat&labelColor=0a0a0a&color=161616&logo=gmail&logoColor=7C3AED)](mailto:dev.syedmoizali@gmail.com)&nbsp;
[![LinkedIn](https://img.shields.io/badge/LinkedIn-dev--syed--moiz--ali-7C3AED?style=flat&labelColor=0a0a0a&color=161616&logo=linkedin&logoColor=7C3AED)](https://www.linkedin.com/in/dev-syed-moiz-ali/)&nbsp;
[![GitHub](https://img.shields.io/badge/GitHub-Syed--Moiz--Ali-7C3AED?style=flat&labelColor=0a0a0a&color=161616&logo=github&logoColor=7C3AED)](https://github.com/Syed-Moiz-Ali)

</div>

---

<!-- ABOUT — minimal SVG card -->
<div align="center">

<svg width="680" height="72" viewBox="0 0 680 72" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @media (prefers-color-scheme: dark) {
        .card { fill: #0f0f0f; stroke: #1f1f1f; }
        .ct   { fill: #e0e0e0; }
        .cs   { fill: #555; }
        .acc  { fill: #7C3AED; }
      }
      @media (prefers-color-scheme: light) {
        .card { fill: #fafafa; stroke: #e8e8e8; }
        .ct   { fill: #111; }
        .cs   { fill: #888; }
        .acc  { fill: #7C3AED; }
      }
    </style>
  </defs>
  <rect width="680" height="72" rx="10" class="card" stroke-width="1"/>
  <rect x="0" y="0" width="3" height="72" rx="1.5" class="acc"/>
  <text x="22" y="28" font-family="'Segoe UI', system-ui, sans-serif" font-size="14" font-weight="600" class="ct">Building cross-platform mobile apps with Flutter &amp; Dart</text>
  <text x="22" y="50" font-family="'Courier New', monospace" font-size="11" class="cs">Firebase · REST APIs · Riverpod · Clean Architecture · Node.js · TypeScript</text>
</svg>

</div>

&nbsp;

---

## Stack

<!-- SKILLS GRID SVG -->
<div align="center">

<svg width="680" height="220" viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @media (prefers-color-scheme: dark) {
        .gc   { fill: #0f0f0f; stroke: #1f1f1f; }
        .gh   { fill: #161616; }
        .gl   { fill: #444; }
        .gv   { fill: #e0e0e0; }
        .ga   { fill: #a78bfa; }
      }
      @media (prefers-color-scheme: light) {
        .gc   { fill: #fafafa; stroke: #e8e8e8; }
        .gh   { fill: #f0f0f0; }
        .gl   { fill: #aaa; }
        .gv   { fill: #111; }
        .ga   { fill: #7C3AED; }
      }
    </style>
  </defs>

  <!-- Row 1 -->
  <!-- Mobile -->
  <rect x="0"   y="0" width="163" height="100" rx="8" class="gc" stroke-width="1"/>
  <rect x="0"   y="0" width="163" height="28"  rx="8" class="gh"/>
  <rect x="0"   y="20" width="163" height="8" class="gh"/>
  <text x="12"  y="19" font-family="'Courier New', monospace" font-size="10" letter-spacing="2" class="gl">MOBILE</text>
  <text x="12"  y="52" font-family="'Segoe UI', system-ui, sans-serif" font-size="13" font-weight="600" class="ga">Flutter</text>
  <text x="12"  y="70" font-family="'Segoe UI', system-ui, sans-serif" font-size="13" font-weight="600" class="ga">Dart</text>
  <text x="12"  y="88" font-family="'Segoe UI', system-ui, sans-serif" font-size="13" font-weight="600" class="ga">Riverpod</text>

  <!-- Backend -->
  <rect x="172" y="0" width="163" height="100" rx="8" class="gc" stroke-width="1"/>
  <rect x="172" y="0" width="163" height="28"  rx="8" class="gh"/>
  <rect x="172" y="20" width="163" height="8" class="gh"/>
  <text x="184" y="19" font-family="'Courier New', monospace" font-size="10" letter-spacing="2" class="gl">BACKEND</text>
  <text x="184" y="52" font-family="'Segoe UI', system-ui, sans-serif" font-size="13" font-weight="600" class="gv">Node.js</text>
  <text x="184" y="70" font-family="'Segoe UI', system-ui, sans-serif" font-size="13" font-weight="600" class="gv">TypeScript</text>
  <text x="184" y="88" font-family="'Segoe UI', system-ui, sans-serif" font-size="13" font-weight="600" class="gv">Python · Express</text>

  <!-- Cloud & Data -->
  <rect x="344" y="0" width="163" height="100" rx="8" class="gc" stroke-width="1"/>
  <rect x="344" y="0" width="163" height="28"  rx="8" class="gh"/>
  <rect x="344" y="20" width="163" height="8" class="gh"/>
  <text x="356" y="19" font-family="'Courier New', monospace" font-size="10" letter-spacing="2" class="gl">CLOUD &amp; DATA</text>
  <text x="356" y="52" font-family="'Segoe UI', system-ui, sans-serif" font-size="13" font-weight="600" class="gv">Firebase</text>
  <text x="356" y="70" font-family="'Segoe UI', system-ui, sans-serif" font-size="13" font-weight="600" class="gv">REST APIs</text>
  <text x="356" y="88" font-family="'Segoe UI', system-ui, sans-serif" font-size="13" font-weight="600" class="gv">Hive</text>

  <!-- Tools -->
  <rect x="516" y="0" width="164" height="100" rx="8" class="gc" stroke-width="1"/>
  <rect x="516" y="0" width="164" height="28"  rx="8" class="gh"/>
  <rect x="516" y="20" width="164" height="8" class="gh"/>
  <text x="528" y="19" font-family="'Courier New', monospace" font-size="10" letter-spacing="2" class="gl">TOOLS</text>
  <text x="528" y="52" font-family="'Segoe UI', system-ui, sans-serif" font-size="13" font-weight="600" class="gv">Git · Figma</text>
  <text x="528" y="70" font-family="'Segoe UI', system-ui, sans-serif" font-size="13" font-weight="600" class="gv">Dio · Postman</text>
  <text x="528" y="88" font-family="'Segoe UI', system-ui, sans-serif" font-size="13" font-weight="600" class="gv">VS Code</text>

  <!-- Row 2: what I build -->
  <rect x="0"   y="112" width="163" height="100" rx="8" class="gc" stroke-width="1"/>
  <rect x="0"   y="112" width="163" height="28"  rx="8" class="gh"/>
  <rect x="0"   y="132" width="163" height="8" class="gh"/>
  <text x="12"  y="131" font-family="'Courier New', monospace" font-size="10" letter-spacing="2" class="gl">MOBILE APPS</text>
  <text x="12"  y="158" font-family="'Segoe UI', system-ui, sans-serif" font-size="12" class="gv">iOS &amp; Android</text>
  <text x="12"  y="176" font-family="'Segoe UI', system-ui, sans-serif" font-size="12" class="gv">Clean UI / Animations</text>
  <text x="12"  y="194" font-family="'Segoe UI', system-ui, sans-serif" font-size="12" class="gv">Production-ready</text>

  <rect x="172" y="112" width="163" height="100" rx="8" class="gc" stroke-width="1"/>
  <rect x="172" y="112" width="163" height="28"  rx="8" class="gh"/>
  <rect x="172" y="132" width="163" height="8" class="gh"/>
  <text x="184" y="131" font-family="'Courier New', monospace" font-size="10" letter-spacing="2" class="gl">API INTEGRATION</text>
  <text x="184" y="158" font-family="'Segoe UI', system-ui, sans-serif" font-size="12" class="gv">REST · Firebase</text>
  <text x="184" y="176" font-family="'Segoe UI', system-ui, sans-serif" font-size="12" class="gv">Clean data layers</text>
  <text x="184" y="194" font-family="'Segoe UI', system-ui, sans-serif" font-size="12" class="gv">Error handling / cache</text>

  <rect x="344" y="112" width="163" height="100" rx="8" class="gc" stroke-width="1"/>
  <rect x="344" y="112" width="163" height="28"  rx="8" class="gh"/>
  <rect x="344" y="132" width="163" height="8" class="gh"/>
  <text x="356" y="131" font-family="'Courier New', monospace" font-size="10" letter-spacing="2" class="gl">STATE MGMT</text>
  <text x="356" y="158" font-family="'Segoe UI', system-ui, sans-serif" font-size="12" class="gv">Riverpod-first</text>
  <text x="356" y="176" font-family="'Segoe UI', system-ui, sans-serif" font-size="12" class="gv">Scalable architecture</text>
  <text x="356" y="194" font-family="'Segoe UI', system-ui, sans-serif" font-size="12" class="gv">Testable · Maintainable</text>

  <rect x="516" y="112" width="164" height="100" rx="8" class="gc" stroke-width="1"/>
  <rect x="516" y="112" width="164" height="28"  rx="8" class="gh"/>
  <rect x="516" y="132" width="164" height="8" class="gh"/>
  <text x="528" y="131" font-family="'Courier New', monospace" font-size="10" letter-spacing="2" class="gl">OPEN SOURCE</text>
  <text x="528" y="158" font-family="'Segoe UI', system-ui, sans-serif" font-size="12" class="gv">Merged PRs</text>
  <text x="528" y="176" font-family="'Segoe UI', system-ui, sans-serif" font-size="12" class="gv">Public packages</text>
  <text x="528" y="194" font-family="'Segoe UI', system-ui, sans-serif" font-size="12" class="gv">Community contrib.</text>
</svg>

</div>

&nbsp;

---

## GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=Syed-Moiz-Ali&show_icons=true&theme=transparent&hide_border=true&rank_icon=github&title_color=7C3AED&text_color=888888&icon_color=7C3AED&include_all_commits=true&count_private=true" height="150" />
&nbsp;&nbsp;
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Syed-Moiz-Ali&layout=compact&theme=transparent&hide_border=true&title_color=7C3AED&text_color=888888" height="150" />

&nbsp;

<img src="https://streak-stats.demolab.com?user=Syed-Moiz-Ali&theme=transparent&hide_border=true&ring=7C3AED&fire=7C3AED&currStreakLabel=7C3AED&sideLabels=888888&dates=555555" width="56%" />

</div>

&nbsp;

---

## Contribution Graph

<div align="center">
<img src="https://github-readme-activity-graph.vercel.app/graph?username=Syed-Moiz-Ali&theme=github-compact&hide_border=true&radius=6&color=888888&line=7C3AED&point=7C3AED&area=true&area_color=7C3AED" width="100%" />
</div>

&nbsp;

---

<!-- CONTACT FOOTER SVG -->
<div align="center">

<svg width="680" height="90" viewBox="0 0 680 90" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @media (prefers-color-scheme: dark) {
        .fc { fill: #0f0f0f; stroke: #2a2a2a; }
        .fa { fill: #a78bfa; }
        .fs { fill: #555; }
        .fb { fill: #7C3AED; }
        .fbt { fill: #fff; }
        .acc2 { stroke: #7C3AED; }
      }
      @media (prefers-color-scheme: light) {
        .fc { fill: #fafafa; stroke: #e0e0e0; }
        .fa { fill: #7C3AED; }
        .fs { fill: #999; }
        .fb { fill: #7C3AED; }
        .fbt { fill: #fff; }
        .acc2 { stroke: #7C3AED; }
      }
    </style>
  </defs>
  <rect width="680" height="90" rx="10" class="fc" stroke-width="1"/>
  <line x1="0" y1="0" x2="680" y2="0" stroke-width="2" class="acc2"/>
  <text x="24" y="36" font-family="'Segoe UI', system-ui, sans-serif" font-size="18" font-weight="700" class="fa">Open to Flutter &amp; Mobile roles</text>
  <text x="24" y="58" font-family="'Courier New', monospace" font-size="11" class="fs">Reach out — I'd love to build something great together.</text>
  <!-- email btn -->
  <rect x="380" y="22" width="130" height="34" rx="6" class="fb"/>
  <text x="445" y="44" font-family="'Courier New', monospace" font-size="11" text-anchor="middle" class="fbt">dev.syedmoizali@gmail.com</text>
  <!-- github btn -->
  <rect x="522" y="22" width="130" height="34" rx="6" fill="none" stroke-width="1" class="acc2"/>
  <text x="587" y="44" font-family="'Courier New', monospace" font-size="11" text-anchor="middle" class="fa">github/Syed-Moiz-Ali</text>
</svg>

</div>

&nbsp;

<div align="center">
<sub><code>Flutter Developer · Mobile App Engineer · Open Source Contributor</code></sub>
</div>
