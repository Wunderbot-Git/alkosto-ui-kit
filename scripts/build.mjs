// Genera los archivos derivados del skill y empaqueta el ZIP para Claude.
//
//   node scripts/build.mjs                 → tokens + ZIP (usa los íconos ya versionados)
//   node scripts/build.mjs --icons         → además actualiza los íconos desde el CDN oficial
//   node scripts/build.mjs --icons <ruta>  → actualiza los íconos desde un selection.json local
//
// Fuentes de verdad:
//   tokens/alkosto-tokens.source.css   export original de tokens (Figma → CSS, valores sin unidad)
//   github.com/ux-alkosto/icons        set oficial de íconos (MIT)
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKILL = path.join(ROOT, 'skill', 'alkosto-ui-kit');
const DIST = path.join(ROOT, 'dist');
const ICON_CDN = 'https://cdn.jsdelivr.net/gh/ux-alkosto/icons/selection.json';

// 1) Tokens: el export original no trae unidades (spacing/font-size en px). Los convertimos
//    a CSS utilizable y lo formateamos una variable por línea.
function buildTokens() {
  const src = fs.readFileSync(path.join(ROOT, 'tokens', 'alkosto-tokens.source.css'), 'utf8');
  const body = src.slice(src.indexOf('{') + 1, src.lastIndexOf('}'));
  const decls = body.split(';').map((d) => d.trim()).filter(Boolean).map((d) => {
    const i = d.indexOf(':');
    let [name, value] = [d.slice(0, i).trim(), d.slice(i + 1).trim()];
    if (/^--(spacing|font-size)-\d+$/.test(name) && /^\d+$/.test(value) && value !== '0') value += 'px';
    if (name === '--font-familiy') name = '--font-family'; // typo del export original
    if (name === '--font-family') value = 'Arial, Helvetica, sans-serif';
    return `  ${name}: ${value};`;
  });
  const css = `/* Alkosto UI Kit — design tokens
   Generado por scripts/build.mjs desde tokens/alkosto-tokens.source.css. No editar a mano.
   Spacing y font-size convertidos a px (el export original no trae unidades). */

:root,
[data-theme="alkosto"] {
${decls.join('\n')}
}
`;
  fs.writeFileSync(path.join(SKILL, 'references', 'alkosto-tokens.css'), css);
  console.log(`[tokens] ${decls.length} variables → references/alkosto-tokens.css`);
}

// 2) Íconos: subset compacto {nombre: {w, p:[paths]}} para dibujarlos como SVG inline.
async function buildIcons(source) {
  const data = source && !source.startsWith('http')
    ? JSON.parse(fs.readFileSync(source, 'utf8'))
    : await (await fetch(source || ICON_CDN)).json();
  const out = {};
  for (const i of data.icons) out[i.properties.name] = {w: i.icon.width || 1024, p: i.icon.paths};
  const names = Object.keys(out).sort();
  fs.writeFileSync(path.join(SKILL, 'assets', 'alk-icons.json'), JSON.stringify(out));
  fs.writeFileSync(path.join(SKILL, 'references', 'icon-names.txt'), names.join('\n') + '\n');
  console.log(`[icons] ${names.length} íconos → assets/alk-icons.json + references/icon-names.txt`);
}

// 3) CSS de componentes: se extrae de los bloques ```css de references/components.md,
//    así la documentación y el CSS no se separan nunca.
function buildComponents() {
  const md = fs.readFileSync(path.join(SKILL, 'references', 'components.md'), 'utf8');
  const blocks = [...md.matchAll(/```css\n([\s\S]*?)```/g)].map((m) => m[1].trim());
  const css = `/* Alkosto UI Kit — componentes
   Generado por scripts/build.mjs desde references/components.md. No editar a mano.
   Requiere alkosto-tokens.css. */\n\n${blocks.join('\n\n')}\n`;
  fs.writeFileSync(path.join(SKILL, 'references', 'alkosto-components.css'), css);
  console.log(`[components] ${blocks.length} bloques → references/alkosto-components.css`);
}

// 4) Ejemplos: examples-src/*.html → skill/.../examples/*.html autocontenidos.
//    Marcadores: {{tokens}} {{components}} {{logo}} {{icon:nombre}} {{icon:nombre:tamaño}}
function buildExamples() {
  const icons = JSON.parse(fs.readFileSync(path.join(SKILL, 'assets', 'alk-icons.json'), 'utf8'));
  const read = (...p) => fs.readFileSync(path.join(SKILL, ...p), 'utf8');
  const tokens = read('references', 'alkosto-tokens.css');
  const components = read('references', 'alkosto-components.css');
  const logo = read('assets', 'logo-alkosto.svg').trim();
  const srcDir = path.join(ROOT, 'examples-src');
  const outDir = path.join(SKILL, 'examples');
  fs.mkdirSync(outDir, {recursive: true});
  for (const f of fs.readdirSync(srcDir).filter((f) => f.endsWith('.html'))) {
    const html = fs.readFileSync(path.join(srcDir, f), 'utf8')
      .replaceAll('{{tokens}}', tokens)
      .replaceAll('{{components}}', components)
      .replaceAll('{{logo}}', logo)
      .replace(/\{\{icon:([a-z0-9-]+)(?::(\d+))?\}\}/gi, (_, name, size = '24') => {
        const i = icons[name];
        if (!i) throw new Error(`Ícono no encontrado en ${f}: ${name}`);
        return `<svg class="alk-icon" width="${size}" height="${size}" viewBox="0 0 ${i.w} 1024" fill="currentColor" aria-hidden="true">${i.p.map((d) => `<path d="${d}"/>`).join('')}</svg>`;
      });
    fs.writeFileSync(path.join(outDir, f), html);
    console.log(`[examples] ${f}`);
  }
}

function zip() {
  fs.mkdirSync(DIST, {recursive: true});
  const file = path.join(DIST, 'alkosto-ui-kit.zip');
  fs.rmSync(file, {force: true});
  execFileSync('zip', ['-rqX', file, 'alkosto-ui-kit', '-x', '*.DS_Store'], {cwd: path.join(ROOT, 'skill')});
  console.log(`[zip] ${path.relative(ROOT, file)} (${(fs.statSync(file).size / 1024).toFixed(0)} KB)`);
}

const args = process.argv.slice(2);
buildTokens();
if (args[0] === '--icons') await buildIcons(args[1]);
buildComponents();
buildExamples();
zip();
