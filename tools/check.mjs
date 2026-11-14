#!/usr/bin/env node
// 리포 관리자용 검사기. 학습자에게는 필요 없다.
// 검사: 커리큘럼 형식·선수 관계, 국내 근거·글로벌 비교 칸(R10), 법령·표준 명칭의 출처 표 수록과 조문 번호 없음(R11),
// 겹침 경계 표(R13), 미리 만든 시각 자료 없음(R5), 설정 JSON 유효성.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const read = (p) => readFileSync(join(root, p), "utf8").replace(/\r\n/g, "\n");

const LEVELS = ["Explain", "Apply", "Evaluate", "Develop"];
const FIELDS = ["선수", "핵심 질문", "목표", "만들어 볼 것", "국내 근거", "글로벌 비교"];
const OPTIONAL = ["경계·연결"];
const AREAS = "FPLQMSDX";
// R11 공식 출처 기관 도메인(spec R11 목록).
const OFFICIAL = ["law.go.kr", "likms.assembly.go.kr", "moel.go.kr", "mfds.go.kr", "kats.go.kr", "standard.go.kr", "me.go.kr", "mss.go.kr", "kosha.or.kr", "haccp.or.kr", "iso.org", "iec.ch", "fao.org", "osha.gov", "europa.eu", "legislation.gov.uk", "fda.gov", "fssc.com", "hse.gov.uk", "smart-factory.kr"];

function parseCurriculum(text) {
  const modules = new Map();
  const problems = [];
  const body = text.split(/^## 겹침 경계/m)[0];
  const blocks = body.split(/^### /m).slice(1);
  for (const block of blocks) {
    const head = block.split("\n")[0];
    const m = head.match(new RegExp(`^([${AREAS}]\\d+) · (.+)$`));
    if (!m) { problems.push(`모듈 제목 형식 오류: ${head}`); continue; }
    const id = m[1];
    if (modules.has(id)) problems.push(`${id}: 중복 id`);
    const fields = {};
    for (const line of block.split("\n").slice(1)) {
      const f = line.match(/^- ([^:]+): (.+)$/);
      if (f) fields[f[1]] = f[2];
    }
    for (const name of FIELDS) if (!fields[name]) problems.push(`${id}: 「${name}」 없음`);
    for (const name of Object.keys(fields)) if (!FIELDS.includes(name) && !OPTIONAL.includes(name)) problems.push(`${id}: 모르는 칸 「${name}」`);
    const dom = fields["국내 근거"];
    if (dom && !/^「/.test(dom) && !dom.startsWith("실무 기준 — 국내 법령 직접 근거 없음") && !(id.startsWith("X") && dom.startsWith("학습자가 고른"))) problems.push(`${id}: 국내 근거 형식 오류(「명칭」 또는 「실무 기준 — 국내 법령 직접 근거 없음」)`);
    for (const line of block.split("\n").slice(1)) if (line.trim() && !line.startsWith("## ") && !/^- [^:]+: .+$/.test(line)) problems.push(`${id}: 칸 형식이 아닌 줄: ${line.slice(0, 30)}`);
    if (fields["목표"] && !LEVELS.some((l) => fields["목표"].startsWith(`${l} — `))) problems.push(`${id}: 목표 수준 형식 오류`);
    const prereq = !fields["선수"] || fields["선수"] === "없음" ? [] : fields["선수"].split(",").map((s) => s.trim());
    modules.set(id, prereq);
  }
  for (const [id, prereq] of modules) for (const p of prereq) if (!modules.has(p)) problems.push(`${id}: 없는 선수 ${p}`);
  const state = new Map();
  const visit = (id, path) => {
    if (state.get(id) === 2 || !modules.has(id)) return;
    if (state.get(id) === 1) { problems.push(`선수 순환: ${[...path, id].join(" → ")}`); return; }
    state.set(id, 1);
    for (const p of modules.get(id)) visit(p, [...path, id]);
    state.set(id, 2);
  };
  for (const id of modules.keys()) visit(id, []);
  return { modules, problems };
}

function findVisualAssets(files) {
  const allowedJs = /^tools\/.*\.m?js$/;
  return files.filter((f) => /\.(html?|css|svg|png|jpe?g|gif|webp|avif)$/i.test(f) || (/\.m?js$/i.test(f) && !allowedJs.test(f)));
}

function findTemplateMarkup(name, text) {
  const hits = [];
  for (const m of text.matchAll(/(```|~~~)[\s\S]*?\1/g)) if (/<(!doctype|html|svg|style|canvas|script)\b/i.test(m[0])) hits.push(name);
  return hits;
}

function main() {
  const mapText = read("curriculum/map.md");
  const { modules, problems } = parseCurriculum(mapText);
  errors.push(...problems);

  // R11: 지도 본문(출처 표 앞)에 쓴 「명칭」은 출처 표에 모두 있어야 하고, 조문 번호를 쓰지 않는다.
  const [mapBody, sourceTable = ""] = mapText.split(/^## 출처/m);
  if (!sourceTable.trim()) errors.push("지도에 「## 출처」 절 없음");
  // 핵심 질문·만들어 볼 것의 「」는 인용이라 뺀다.
  const refLines = mapBody.split("\n").filter((l) => /^- (국내 근거|글로벌 비교|목표|경계·연결): /.test(l)).join("\n");
  // 「」 밖에 쓴 법령명(…법·시행령·규칙·지침·고시)을 잡는다.
  for (const l of mapBody.split("\n").filter((x) => /^- [^:]+: /.test(x))) {
    const bare = l.replace(/「[^」]*」/g, "").match(/[가-힣]+(법|시행령|시행규칙|규칙|지침|고시)(?=[의은는이가을를과와·,.\s)]|$)/g) || [];
    for (const b of bare) if (!/^(방법|기법|문법|실무 기준)$/.test(b) && !/(방법|기법|사법|작업규칙|우선규칙|판정규칙)$/.test(b)) errors.push(`「」 없이 쓴 법령명 의심: ${b}`);
  }
  const names = new Set([...refLines.matchAll(/「([^」]+)」/g)].map((m) => m[1]));
  for (const n of names) if (!sourceTable.includes(`「${n}」`)) errors.push(`출처 표에 없는 명칭: 「${n}」`);
  for (const line of sourceTable.split("\n").filter((l) => l.startsWith("|") && l.includes("「"))) {
    if (!/https?:\/\//.test(line)) errors.push(`출처 표 URL 없음: ${line.slice(0, 40)}`);
    if (!/\d{4}-\d{2}-\d{2}/.test(line)) errors.push(`출처 표 조회일 없음: ${line.slice(0, 40)}`);
    const cells = line.split("|").map((s) => s.trim());
    const url = cells[3] || "", fact = cells[5] || "";
    if (!OFFICIAL.some((d) => new RegExp(`^https?://([a-z0-9-]+\\.)*${d.replace(/\./g, "\\.")}(/|$)`).test(url))) errors.push(`출처 표 URL이 공식 기관 도메인이 아님: ${line.slice(0, 40)}`);
    if (/대기|검색 결과로만/.test(fact) || /^(원문 )?확인 못 함/.test(fact)) errors.push(`출처 표 사실 미확인: ${line.slice(0, 40)}`);
  }
  if (/제\s?\d+\s?조/.test(mapBody)) errors.push("지도 본문에 조문 번호가 있음");
  // R13: 겹침 경계 표
  if (!/^## 겹침 경계/m.test(mapText)) errors.push("지도에 「## 겹침 경계」 절 없음");
  if (!existsSync(join(root, "tutor/sources.md"))) errors.push("tutor/sources.md 없음");
  if (modules.size === 0) errors.push("모듈을 찾지 못함");
  for (const a of AREAS) if (![...modules.keys()].some((id) => id.startsWith(a))) errors.push(`영역 ${a}에 모듈 없음`);

  const files = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], { cwd: root, encoding: "utf8" }).split("\0").filter(Boolean);
  for (const f of findVisualAssets(files)) errors.push(`미리 만든 시각 자료 금지: ${f}`);
  for (const f of files.filter((x) => x.endsWith(".md") && existsSync(join(root, x)))) for (const n of findTemplateMarkup(f, read(f))) errors.push(`복사용 마크업 금지: ${n}`);

  for (const p of [".claude/settings.json", "learner-template/state.json"]) {
    try { JSON.parse(read(p)); } catch (e) { errors.push(`${p}: JSON 오류 ${e.constructor.name}`); }
  }
  if (!existsSync(join(root, "learner-template/log.md"))) errors.push("learner-template/log.md 없음");
  for (const s of readdirSync(join(root, ".claude/skills"))) {
    if (statSync(join(root, ".claude/skills", s)).isDirectory() && !existsSync(join(root, ".claude/skills", s, "SKILL.md"))) errors.push(`스킬 ${s}: SKILL.md 없음`);
  }
  if (!read(".gitignore").split("\n").includes("learner/")) errors.push(".gitignore에 learner/ 없음");

  if (errors.length) { console.error(errors.map((e) => `FAIL ${e}`).join("\n")); process.exit(1); }
  console.log(`OK 모듈 ${modules.size}개, 파일 ${files.length}개 검사`);
}

main();
