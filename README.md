# Web de Denoro Automations

Landing bilingüe (español e inglés) publicada en GitHub Pages.

```
src/          index.src.html · automatizaciones.src.html · legal.src.html · styles.css · app.js   ← se edita aquí
src/partials/ header.html · footer.html · cookies.html   ← cabecera, pie y aviso comunes a las tres páginas
build.py      mete el CSS y los trozos comunes en el HTML y genera sitemap.xml y robots.txt
index.html    automatizaciones.html    legal.html    app.js    assets/    ← lo que se publica
```

La cabecera es **una sola** (`src/partials/header.html`): si añades o cambias un apartado del menú, cámbialo ahí
y se aplica a las tres páginas. Los textos en inglés están en `src/app.js` (objeto `EN`), con la misma clave `data-i18n`.
Capturas del catálogo: `assets/auto-*.webp` (800×500), recortadas de `kit-publicacion/capturas/` y de las del panel.

Después de tocar cualquier cosa de `src/`: `python build.py`.

## Lo que hay que rellenar
| Dónde | Qué | Para qué |
|---|---|---|
| `src/app.js` → `GOATCOUNTER` | el código de tu cuenta (por ejemplo `denoro` para `denoro.goatcounter.com`) | contar visitas; vacío = sin medición |
| `src/app.js` → `ENDPOINT` | la URL pública de tu n8n (`https://…/webhook/denoro/contacto`) | que el formulario llegue solo; vacío = abre el correo del visitante |
| `CNAME.ejemplo` | renómbralo a `CNAME` con tu dominio | usar dominio propio en vez de github.io |

## Publicar
1. Repositorio `denoro-automations.github.io` (público).
2. Sube el contenido de esta carpeta a la rama `main`.
3. *Settings → Pages → Deploy from a branch → main / (root)*.
4. En Google Search Console: añadir la propiedad y enviar `sitemap.xml`.

## Lo que ya cumple
- **Legal:** aviso legal y política de privacidad (`legal.html`), casilla de consentimiento en el formulario y aviso de cookies con opción de desactivar la medición.
- **SEO:** título y descripción propios, canonical, hreflang es/en, Open Graph con imagen, datos estructurados (negocio, paquetes y preguntas frecuentes), `sitemap.xml` y `robots.txt`.
- **Velocidad:** CSS dentro del HTML, JS diferido, imágenes en WebP con `width`/`height` y carga diferida; ~136 KB y menos de 1 s en una prueba a 3G rápido (sin contar las fuentes de Google).
- **Antispam:** campo trampa, envío bloqueado si llega en menos de 3 segundos, casilla obligatoria de privacidad y validación también en n8n.
- **Accesibilidad:** contrastes por encima de 4,5:1, foco visible, textos alternativos, sin desbordes a 320 px ni al 200 % de zoom.
