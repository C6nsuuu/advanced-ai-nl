// Draait prompt v5 uit prompt.md, met de bron uit bronnen/rolex-staat.md,
// op B01–B05 uit test-set-bron.md, één run.
// Elke run is een aparte `claude -p --model haiku`-aanroep, zonder tools,
// vanuit een nieuwe lege map buiten de repo.
// Gebruik (vanuit deze map): node run-bron.mjs <uitvoermap>
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, existsSync, readdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const buildDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.argv[2];
if (!outDir) throw new Error("Gebruik: node run-bron.mjs <uitvoermap>");
if (existsSync(outDir) && readdirSync(outDir).length) throw new Error(`${outDir} is niet leeg`);
mkdirSync(outDir, { recursive: true });
const workDir = mkdtempSync(join(tmpdir(), "build-run-"));
const read = (f) => readFileSync(join(buildDir, f), "utf8").replace(/\r\n/g, "\n");

// Bron: alles onder de streep in bronnen/rolex-staat.md.
const bron = read("bronnen/rolex-staat.md").split("\n---\n")[1].trim();

// Prompt: het ```text-blok uit prompt.md, afgeknipt na "ADVERTENTIE", met de bron ingevuld.
const block = read("prompt.md").match(/```text\n([\s\S]*?)\n```/)[1];
const head = block
  .slice(0, block.indexOf("ADVERTENTIE\n") + "ADVERTENTIE\n".length)
  .replace("[plak de tekst uit bronnen/rolex-staat.md]", bron);

// Advertenties: de tekst tussen aanhalingstekens in de kolom Vraag van elke Bxx-rij.
const ads = {};
for (const m of read("test-set-bron.md").matchAll(/^\| (B0\d) \| "(.*?)" \|/gm)) ads[m[1]] = m[2];

for (const [id, ad] of Object.entries(ads)) {
  const input = head + `Titel:\nTekst: ${ad}\nVerkoper:\n`;
  writeFileSync(join(outDir, `${id}-input.txt`), input);
  // shell: true om de npm-shim van claude te vinden; "\"\"" geeft een lege --tools.
  const r = spawnSync("claude", [
    "-p", "--model", "haiku", "--tools", "\"\"", "--safe-mode", "--strict-mcp-config",
    "--no-session-persistence", "--output-format", "json",
  ], { cwd: workDir, input, encoding: "utf8", shell: true, timeout: 180000 });
  writeFileSync(join(outDir, `${id}-run1.raw.json`), r.stdout + (r.stderr ? "\nSTDERR:\n" + r.stderr : ""));
  let text = "";
  try { text = JSON.parse(r.stdout).result; } catch { text = "PARSE-FOUT"; }
  writeFileSync(join(outDir, `${id}-run1.txt`), text);
  console.log(id, "klaar");
}
console.log("Werkmap (leeg gebleven):", workDir);
