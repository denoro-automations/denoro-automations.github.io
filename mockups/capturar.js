const { chromium } = require('playwright');
const path = require('path');
const shots = [
  { file: 'panel.html',       out: 'panel',           w: 940 },
  { file: 'comprobar.html',   out: 'panel-detect',    w: 940 },
  { file: 'aviso.html',       out: 'aviso-email',     w: 640 },
  { file: 'informe.html',     out: 'informe-semanal', w: 620 },
  { file: 'panel-movil.html', out: 'panel-movil',     w: 390 },
];
(async () => {
  const b = await chromium.launch();
  for (const s of shots) {
    const p = await b.newPage({ viewport: { width: s.w, height: 800 }, deviceScaleFactor: 2 });
    await p.goto('file://' + path.resolve(s.file));
    await p.waitForTimeout(200);
    const h = Math.ceil(await p.evaluate(() => document.documentElement.getBoundingClientRect().height));
    await p.setViewportSize({ width: s.w, height: h });
    await p.waitForTimeout(150);
    await p.screenshot({ path: `/tmp/shots/${s.out}.png` });
    console.log(s.out, `${s.w}x${h}`, '→', `${s.w*2}x${h*2}`);
    await p.close();
  }
  await b.close();
})();
