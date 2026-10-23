// Genera los archivos derivados de los skills y empaqueta un ZIP por skill.
//
//   node scripts/build.mjs                 → tokens, componentes, copias compartidas, ejemplos y ZIPs
//   node scripts/build.mjs --icons         → además actualiza los íconos desde el CDN oficial
//   node scripts/build.mjs --icons <ruta>  → actualiza los íconos desde un selection.json local
//
// Fuentes de verdad:
//   tokens/alkosto-tokens.source.css   export original de tokens (Figma → CSS, valores sin unidad)
//   github.com/ux-alkosto/icons        set oficial de íconos (MIT)
//   skill/*/ (archivos .md)            documentación de cada skill
//   examples-src/<skill>/*.html        plantillas de ejemplos (archivos _*.css/_*.js son parciales)
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const KIT = path.join(ROOT, 'skill', 'alkosto-ui-kit');
const DECKS = path.join(ROOT, 'skill', 'alkosto-presentaciones');
const DIST = path.join(ROOT, 'dist');
const ICON_CDN = 'https://cdn.jsdelivr.net/gh/ux-alkosto/icons/selection.json';
const read = (...p) => fs.readFileSync(path.join(...p), 'utf8');
const write = (file, data) => { fs.mkdirSync(path.dirname(file), {recursive: true}); fs.writeFileSync(file, data); };

// 1) Tokens: el export original no trae unidades (spacing/font-size en px).
function buildTokens() {
  const src = read(ROOT, 'tokens', 'alkosto-tokens.source.css');
  const body = src.slice(src.indexOf('{') + 1, src.lastIndexOf('}'));
  const decls = body.split(';').map((d) => d.trim()).filter(Boolean).map((d) => {
    const i = d.indexOf(':');
    let [name, value] = [d.slice(0, i).trim(), d.slice(i + 1).trim()];
    if (/^--(spacing|font-size)-\d+$/.test(name) && /^\d+$/.test(value) && value !== '0') value += 'px';
    if (name === '--font-familiy') name = '--font-family'; // typo del export original
    if (name === '--font-family') value = 'Arial, Helvetica, sans-serif';
    return `  ${name}: ${value};`;
  });
  write(path.join(KIT, 'references', 'alkosto-tokens.css'), `/* Alkosto UI Kit — design tokens
   Generado por scripts/build.mjs desde tokens/alkosto-tokens.source.css. No editar a mano.
   Spacing y font-size convertidos a px (el export original no trae unidades). */

:root,
[data-theme="alkosto"] {
${decls.join('\n')}
}
`);
  console.log(`[tokens] ${decls.length} variables`);
}

// 2) Íconos: subset compacto {nombre: {w, p:[paths]}} para dibujarlos como SVG inline.
async function buildIcons(source) {
  const data = source && !source.startsWith('http')
    ? JSON.parse(read(source))
    : await (await fetch(source || ICON_CDN)).json();
  const out = {};
  for (const i of data.icons) out[i.properties.name] = {w: i.icon.width || 1024, p: i.icon.paths};
  const names = Object.keys(out).sort();
  write(path.join(KIT, 'assets', 'alk-icons.json'), JSON.stringify(out));
  write(path.join(KIT, 'references', 'icon-names.txt'), names.join('\n') + '\n');
  console.log(`[icons] ${names.length} íconos`);
}

// 3) CSS de componentes, extraído de los bloques ```css de references/components.md.
function buildComponents() {
  const md = read(KIT, 'references', 'components.md');
  const blocks = [...md.matchAll(/```css\n([\s\S]*?)```/g)].map((m) => m[1].trim());
  write(path.join(KIT, 'references', 'alkosto-components.css'), `/* Alkosto UI Kit — componentes
   Generado por scripts/build.mjs desde references/components.md. No editar a mano.
   Requiere alkosto-tokens.css. */\n\n${blocks.join('\n\n')}\n`);
  console.log(`[components] ${blocks.length} bloques`);
}

// 4) Copias compartidas: el skill de presentaciones debe funcionar solo.
function syncShared() {
  const copy = (from, to) => fs.cpSync(from, to);
  copy(path.join(KIT, 'references', 'alkosto-tokens.css'), path.join(DECKS, 'assets', 'alkosto-tokens.css'));
  copy(path.join(KIT, 'assets', 'logo-alkosto.svg'), path.join(DECKS, 'assets', 'logo-alkosto.svg'));
  copy(path.join(KIT, 'assets', 'alk-icons.json'), path.join(DECKS, 'assets', 'alk-icons.json'));
  copy(path.join(KIT, 'references', 'icon-names.txt'), path.join(DECKS, 'assets', 'icon-names.txt'));
  copy(path.join(KIT, 'scripts', 'icon.py'), path.join(DECKS, 'scripts', 'icon.py'));
  copy(path.join(ROOT, 'examples-src', 'alkosto-presentaciones', '_deck.css'), path.join(DECKS, 'assets', 'deck.css'));
  copy(path.join(ROOT, 'examples-src', 'alkosto-presentaciones', '_deck.js'), path.join(DECKS, 'assets', 'deck.js'));
  console.log('[shared] tokens, logo, íconos y motor del deck → alkosto-presentaciones');
}

// 5) Ejemplos autocontenidos. Marcadores:
//    {{tokens}} {{components}} {{deck-css}} {{deck-js}} {{logo}} {{icon:nombre}} {{icon:nombre:tamaño}}
function buildExamples() {
  const icons = JSON.parse(read(KIT, 'assets', 'alk-icons.json'));
  const parts = {
    tokens: read(KIT, 'references', 'alkosto-tokens.css'),
    components: read(KIT, 'references', 'alkosto-components.css'),
    'deck-css': read(ROOT, 'examples-src', 'alkosto-presentaciones', '_deck.css'),
    'deck-js': read(ROOT, 'examples-src', 'alkosto-presentaciones', '_deck.js'),
    logo: read(KIT, 'assets', 'logo-alkosto.svg').trim(),
  };
  const targets = {'alkosto-ui-kit': path.join(KIT, 'examples'), 'alkosto-presentaciones': path.join(DECKS, 'templates')};
  for (const [skill, outDir] of Object.entries(targets)) {
    const srcDir = path.join(ROOT, 'examples-src', skill);
    for (const f of fs.readdirSync(srcDir).filter((f) => f.endsWith('.html') && !f.startsWith('_'))) {
      let html = read(srcDir, f).replace(/\{\{(tokens|components|deck-css|deck-js|logo)\}\}/g, (_, k) => parts[k]);
      html = html.replace(/\{\{icon:([a-z0-9-]+)(?::(\d+))?\}\}/gi, (_, name, size = '24') => {
        const i = icons[name];
        if (!i) throw new Error(`Ícono no encontrado en ${skill}/${f}: ${name}`);
        return `<svg class="alk-icon" width="${size}" height="${size}" viewBox="0 0 ${i.w} 1024" fill="currentColor" aria-hidden="true">${i.p.map((d) => `<path d="${d}"/>`).join('')}</svg>`;
      });
      if (/\{\{[a-z-]+(:[^}]*)?\}\}/i.test(html)) throw new Error(`Marcador sin resolver en ${skill}/${f}`);
      write(path.join(outDir, f), html);
      console.log(`[examples] ${skill}/${f}`);
    }
  }
}

function zip(skillDir) {
  const name = path.basename(skillDir);
  const file = path.join(DIST, `${name}.zip`);
  fs.mkdirSync(DIST, {recursive: true});
  fs.rmSync(file, {force: true});
  execFileSync('zip', ['-rqX', file, name, '-x', '*.DS_Store', '-x', '*__pycache__*'], {cwd: path.dirname(skillDir)});
  console.log(`[zip] dist/${name}.zip (${(fs.statSync(file).size / 1024).toFixed(0)} KB)`);
}

const args = process.argv.slice(2);
buildTokens();
if (args[0] === '--icons') await buildIcons(args[1]);
buildComponents();
syncShared();
buildExamples();
zip(KIT);
zip(DECKS);
