# Instrucciones para agentes que mantienen este repo

- El skill vive en `skill/alkosto-ui-kit/`. Todo lo demás es tooling.
- Fuentes de verdad: `tokens/alkosto-tokens.source.css`, los `.md` del skill, `examples-src/`
  y el set de íconos `ux-alkosto/icons`.
- Archivos generados (no editar a mano): `references/alkosto-tokens.css`,
  `references/alkosto-components.css`, `references/icon-names.txt`, `assets/alk-icons.json`,
  `skill/alkosto-ui-kit/examples/*.html`, `dist/alkosto-ui-kit.zip`.
- Después de cualquier cambio: `node scripts/build.mjs` y commitear también los generados.
- No inventar colores ni tokens. Lo que no viene del export se marca como "recomendación".
- Contenido del skill en español (Colombia). Mantener `SKILL.md` corto; el detalle va en `references/`.
- Registrar cada cambio en `CHANGELOG.md`.
