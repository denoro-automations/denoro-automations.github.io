/* Denoro Automations — landing */
(() => {
  // Cuando n8n esté accesible desde internet, pon aquí la URL del webhook:
  // p. ej. 'https://automations.denoro.com/webhook/denoro/contacto'
  const ENDPOINT = '';
  const EMAIL = 'manelfernandezp1@gmail.com';
  // Código de GoatCounter (por ejemplo 'denoro' para denoro.goatcounter.com). Vacío = sin medición.
  const GOATCOUNTER = 'denoro';

  const TG = {
    es: `<b>Denoro · Moda Sol</b>
1.426 productos revisados · 6 cambios

🔻 <b>Te están ganando en precio</b> (1)
• Sudadera con capucha · Tienda competidor: 39,95 € vs tu 44,90 € (−11,0 %)

📉 <b>Bajadas de precio</b> (2)
• Camiseta algodón orgánico: 19,90 € → 16,90 € (−15,1 %)
• Pantalón chino slim: 45,00 € → 39,00 € (−13,3 %)

⛔ <b>Se han quedado sin stock</b> (1)
• Mochila urbana impermeable — 62,00 €`,
    en: `<b>Denoro · Moda Sol</b>
1,426 products checked · 6 changes

🔻 <b>They are undercutting you</b> (1)
• Hooded sweatshirt · Rival store: €39.95 vs your €44.90 (−11.0%)

📉 <b>Price drops</b> (2)
• Organic cotton tee: €19.90 → €16.90 (−15.1%)
• Slim chino trousers: €45.00 → €39.00 (−13.3%)

⛔ <b>Now out of stock</b> (1)
• Waterproof city backpack — €62.00`,
  };

  const EN = {
    skip: 'Skip to content', nav1: 'How it works', nav2: 'Demos', nav3: 'Pricing', nav4: 'FAQ', navcta: 'Get a quote',
    heroEyebrow: 'Price monitoring · e-commerce',
    heroTitle: 'Know the moment a competitor drops a price. Without checking yourself.',
    heroLead: 'I watch the prices and stock of the stores you choose and send you one summary on Telegram and by email when something that affects you changes.',
    heroCta1: 'Get a quote', heroCta2: 'See what you get',
    trust1: 'Shopify, WooCommerce and any product page', trust2: 'Public data only', trust3: 'Fixed price before we start',
    heroCap: 'Your panel: paste the links you want to watch and the system does the rest.',
    howEyebrow: 'How it works', howTitle: 'Three steps and you stop checking',
    how1t: 'You paste the links', how1p: 'A competitor’s whole store or the specific products you care about. The panel works out what each link is and shows you the prices it found before saving anything.',
    how2t: 'I check every few hours', how2p: 'Every 1, 3, 6, 12 or 24 hours — your call. I keep the history of every product and compare it with the previous check.',
    how3p3: 'You get told, with judgement', how3p: 'One message with what changed, not an alert per product. And if you add your own price, I tell you when someone goes below it.',
    chip1: 'Price drops', chip2: 'Price rises', chip3: 'Out of stock', chip4: 'Back in stock', chip5: 'New and removed products', chip6: 'They are undercutting you',
    demoEyebrow: 'Real demos', demoTitle: 'This is exactly what you get',
    demo1t: 'Paste a link and see what I understood',
    demo1p: 'Before anything is saved, the panel shows you the first products with their prices. If a store blocks automated requests, I say so clearly instead of failing silently.',
    demo1l1b: 'Whole store', demo1l1: 'Shopify and WooCommerce, full catalogue.',
    demo1l2b: 'Single product', demo1l2: 'almost any store, with its price and stock.',
    demo1l3b: 'Your price', demo1l3: 'so I only ping you when they undercut you.',
    fact1t: 'Who it is for', fact1: 'Small and mid-sized online stores on Shopify or WooCommerce',
    fact2t: 'From', fact2: 'and a fixed price before we start',
    fact3t: 'Delivery', fact3n: '4–8 days', fact3: 'depending on the package',
    winPanel: 'client panel', winCheck: 'checking a link', winMail: 'weekly report', winAlert: 'email alert',
    detectsLabel: 'What you get told',
    tgTime: 'today · 8:00',
    demo2t: 'One summary, not a hundred notifications',
    demo2p: 'The alert arrives on Telegram and by email, with the full detail and a CSV you can open in Excel. If a site fails once, I keep quiet: I only warn you if it keeps failing.',
    demo2h: 'Example with sample data from a clothing store.',
    demo3t: 'Weekly report of your own store',
    demo3p: 'Besides the monitor, every Monday you can get a PDF with how your week went: sales, orders, average order value, top products and what stock to reorder. It connects to Shopify or WooCommerce.',
    demo3cta: 'See the code on GitHub',
    priceEyebrow: 'Pricing', priceTitle: 'Fixed price before we start',
    priceLead: 'Tell me which sites you want to watch, I send you a price and a delivery date, and there are no surprises.',
    fact2n: '€300',
    p1price: '€300', p2price: '€600', p3price: '€1,000<small>and up</small>',
    p1tag: 'Basic', p1sub: 'Delivered in 4 days',
    p1f1: '1 competitor site, up to 200 products', p1f2: 'Daily history in Google Sheets or CSV', p1f3: 'Documentation and a 5-minute video',
    p2tag: 'Standard · most popular', p2sub: 'Delivered in 6 days',
    p2f1: 'Up to 3 sites and 1,000 products', p2f2: 'Telegram and email alerts when prices or stock change',
    p2f3: 'A panel to add or remove links yourself', p2f4: 'Weekly summary',
    p3tag: 'Premium', p3from: 'and up', p3sub: 'Delivered in 8 days',
    p3f1: 'Everything above, with no fixed product limit', p3f2: 'Weekly report of your store (Shopify or WooCommerce)',
    p3f3: 'Custom automation on your own n8n', p3f4: '1 month of maintenance included',
    planCta: 'Get a quote', planCta2: 'Get a quote',
    priceNote: 'Optional maintenance: €150/month. If a site changes and stops being readable, I fix it. For the first two weeks after delivery, fixes are always free.',
    faqEyebrow: 'FAQ', faqTitle: 'What people usually ask me',
    q1: 'Will it work with my competitor’s store?',
    a1: 'With Shopify and WooCommerce stores I read the whole catalogue. With the rest I read individual products, which works on the vast majority of shops because nearly all of them publish the price in a standard format. Before you pay anything I check your links and tell you if one of them is not possible.',
    q2: 'Is it legal?',
    a2: 'I only read public, non-personal data: product name, price, stock and link — the same you would see by visiting the site. I respect each store’s robots.txt, go slowly so their servers are not bothered, and never touch anything behind a login. If a site says no, I do not watch it.',
    q3: 'Do I need a server or technical knowledge?',
    a3: 'No. You just receive the alerts wherever suits you: email or Telegram. If you would rather have everything running on your own server or your own n8n account, I set it up there and leave it documented.',
    q4: 'What if the competitor’s site changes?',
    a4: 'It happens, which is why the system tells you when it can no longer read a link instead of going quiet. For the first two weeks I fix it for free; after that, with monthly maintenance.',
    q5: 'How long does it take?',
    a5: 'Between 4 and 8 days depending on the package. Before starting I confirm the scope in writing, and you pay half up front and half on delivery.',
    q6: 'Can you watch Amazon or Zara?',
    a6: 'Very large sites block automated requests, so I do not promise them. For marketplaces there are usually alternatives (their own APIs or official reports) and I tell you before you spend any money.',
    formEyebrow: 'Quote', formTitle: 'Tell me what you want to watch',
    formLead: 'I reply with a fixed price and a date. If what you need cannot be done properly, I say so and you pay nothing for asking.',
    fl1b: 'Reply within 24 h', fl1: 'on working days.',
    fl2b: 'No commitment', fl2: 'the quote and the check of your links are free.',
    fl3b: 'Your data', fl3: 'I only use it to reply to you.',
    fNombre: 'Name', fEmail: 'Email', fTienda: 'Your store (link)', fComp: 'Sites you want to watch',
    fCompHint: 'One link per line. A whole store or specific products.',
    fProd: 'Approximate products', fProd1: 'fewer than 200', fProd2: 'between 200 and 1,000', fProd3: 'more than 1,000', fProd4: 'not sure',
    cap1: 'Preview when you add a link. Sample data.', cap2: 'Weekly report as a PDF. Sample data.',
    fPlan: 'Package that fits you', fPlan1: 'Basic · €300', fPlan2: 'Standard · €600', fPlan3: 'Premium · from €1,000', fPlan4: 'Recommend me one',
    fMsg: 'Anything else I should know (optional)', fSend: 'Send and get a price',
    footNote: 'E-commerce automation · Spain', footLegal: 'Legal notice', footPriv: 'Privacy', footHome: 'Home',
    fConsent: 'I have read and accept the <a href="legal.html#privacidad">privacy policy</a>. Your data is only used to reply to you.',
    mobileCta: 'Get a free quote',
    cookieText: 'This site uses no advertising or tracking cookies. It only stores the language you pick in your browser and counts visits anonymously, without cookies.',
    cookieOk: 'Got it', cookieNo: 'No measuring', cookieMore: 'More information',
    legalTitle: 'Legal notice and privacy', legalLead: 'Who is behind this site, what data is collected and what you can do about it.',
    lh1: 'Legal notice', lh1a: 'Owner',
    lp1: 'This site belongs to <b>Denoro Automations</b>, the trading name of a personal project for automation and competitor price monitoring for online stores. Contact: <a href="mailto:manelfernandezp1@gmail.com">manelfernandezp1@gmail.com</a>.',
    lh1b: 'Hosting', lp2: 'The site is hosted on GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA), which logs server requests to operate the service and protect it from abuse.',
    lh1c: 'Using this site', lp3: 'The information here is indicative: published prices and lead times are a reference and are confirmed in writing in each quote before any work starts. Texts, images and code belong to Denoro Automations, except third-party trademarks (Shopify, WooCommerce, Telegram, n8n), which belong to their owners and are named only to explain which systems are used.',
    lh1d: 'What the service does and does not do', lp4: 'The service reads public information from product pages (name, price, availability and link). It does not extract personal data, does not access private or password-protected areas, does not bypass protection measures, and respects each site\u2019s robots.txt. If a store does not allow automated reading, it is not monitored.',
    lh1e: 'Applicable law', lp5: 'This site is governed by Spanish law. For any dispute, the parties submit to the courts of the owner\u2019s domicile, unless the law requires otherwise.',
    lh2: 'Privacy policy', lh2a: 'Who processes your data', lp6: 'Denoro Automations, contactable at <a href="mailto:manelfernandezp1@gmail.com">manelfernandezp1@gmail.com</a>.',
    lh2b: 'What data and what for', lp7: 'Only what you type in the quote form: name, email, your store link, the sites you want to watch, the approximate number of products, the package you are interested in and your message. It is used to reply and prepare the quote you asked for, and nothing else. No newsletters, and nothing is sold or shared for advertising.',
    lh2c: 'Why it is lawful', lp8: 'Because you asked for it: the processing is based on your consent and on steps prior to a possible contract (articles 6.1.a and 6.1.b GDPR).',
    lh2d: 'How long it is kept', lp9: 'If we do not end up working together, one year from your last message. If you hire me, for the duration of the relationship and afterwards for as long as tax and legal obligations require.',
    lh2e: 'Who else sees it', lp10: 'Messages arrive by email (Google Ireland Ltd., Gmail) and as a Telegram alert (Telegram Messenger). The form is processed in n8n, hosted on my own machine in Spain. None of them use your data for anything else. Where a provider is outside the EU, the transfer relies on the European Commission\u2019s standard contractual clauses.',
    lh2f: 'Your rights', lp11: 'You can ask for access to your data, correction or deletion, object to the processing, restrict it or ask for a copy in a file. Write to <a href="mailto:manelfernandezp1@gmail.com">manelfernandezp1@gmail.com</a> and I reply within a month. If you think your data has been mishandled, you can complain to the Spanish Data Protection Agency (<a href="https://www.aepd.es" target="_blank" rel="noopener">aepd.es</a>).',
    lh2g: 'Security', lp12: 'Data is kept in accounts protected with a password and two-step verification, and only the owner has access.',
    lh3: 'Cookies and measurement', lp13: 'This site uses <b>no cookies</b> for advertising, social networks or cross-site tracking.',
    lc1b: 'Language and notice:', lc1: 'your browser stores the language you choose and whether you have seen the notice, so it is not repeated. It stays on your device and you can clear it from the browser.',
    lc2b: 'Visit measurement:', lc2: 'page views are counted with GoatCounter, which uses no cookies, does not store full IP addresses and cannot identify you. You can turn it off in the notice at the bottom or with the button below.',
    lc3b: 'Fonts:', lc3: 'they load from Google Fonts, which receives your IP address to serve the file, like any other image on a site.',
    lOptOut: 'Turn off visit measurement', lUpdated: 'Last updated:',
  };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const ES = {};
  $$('[data-i18n]').forEach((el) => { ES[el.dataset.i18n] = el.innerHTML; });

  let lang = 'es';
  function setLang(next) {
    lang = next === 'en' ? 'en' : 'es';
    const dict = lang === 'en' ? EN : ES;
    $$('[data-i18n]').forEach((el) => { const v = dict[el.dataset.i18n]; if (v !== undefined) el.innerHTML = v; });
    document.documentElement.lang = lang;
    const legal = document.body.classList.contains('legal-page') || location.pathname.endsWith('legal.html');
    document.title = legal
      ? (lang === 'en' ? 'Legal notice and privacy · Denoro Automations' : 'Aviso legal y privacidad · Denoro Automations')
      : (lang === 'en' ? 'Competitor price monitoring for online stores · Denoro Automations'
                       : 'Monitor de precios de la competencia para tiendas online · Denoro Automations');
    $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    // las capturas del producto también cambian de idioma
    $$('[data-shot]').forEach((el) => {
      const base = el.dataset.shot;
      const file = `assets/${base}${lang === 'en' ? '-en' : ''}.webp`;
      if (el.tagName === 'SOURCE') { el.srcset = file; return; }
      if (lang === 'en') { if (!el.dataset.altEs) el.dataset.altEs = el.alt; el.alt = el.dataset.altEn || el.alt; }
      else if (el.dataset.altEs) { el.alt = el.dataset.altEs; }
      el.src = file;
    });
    const tg = $('#tgMsg'); if (tg) tg.innerHTML = TG[lang];
    const q = $('#quote'); if (q) q.dataset.lang = lang;
    try { localStorage.setItem('denoro_lang', lang); } catch (e) { /* sin almacenamiento: da igual */ }
  }
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  $$('.lang button').forEach((b) => b.addEventListener('click', () => {
    if (b.dataset.lang === lang) return;
    const main = document.getElementById('main');
    if (!main || reduced.matches) return setLang(b.dataset.lang);
    // fundido corto: el texto cambia sin que dé un salto
    main.style.transition = 'opacity 120ms var(--e-out)';
    main.style.opacity = '0.35';
    setTimeout(() => { setLang(b.dataset.lang); main.style.opacity = '1'; }, 120);
    setTimeout(() => { main.style.transition = ''; main.style.opacity = ''; }, 420);
  }));

  let saved = null;
  try { saved = localStorage.getItem('denoro_lang'); } catch (e) { saved = null; }
  const urlLang = new URLSearchParams(location.search).get('lang');
  const navEs = (navigator.language || 'es').toLowerCase().startsWith('es');
  setLang(urlLang || saved || (navEs ? 'es' : 'en'));

  const yearEl = $('#year'); if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- almacenamiento seguro ----------
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* navegación privada */ } },
  };

  // ---------- medición de visitas (sin cookies, solo con consentimiento) ----------
  function loadAnalytics() {
    if (!GOATCOUNTER || store.get('denoro_analytics') === 'no' || document.getElementById('gc')) return;
    const s = document.createElement('script');
    s.id = 'gc'; s.async = true; s.dataset.goatcounter = `https://${GOATCOUNTER}.goatcounter.com/count`;
    s.src = 'https://gc.zgo.at/count.js';
    document.head.appendChild(s);
  }
  const optOutState = () => {
    const el = $('#optState'); if (!el) return;
    const off = store.get('denoro_analytics') === 'no';
    el.textContent = off ? (lang === 'en' ? 'Measurement is off on this device.' : 'La medición está desactivada en este dispositivo.') : '';
    const b = $('#optOut'); if (b) b.disabled = off;
  };
  $('#optOut')?.addEventListener('click', () => { store.set('denoro_analytics', 'no'); document.getElementById('gc')?.remove(); optOutState(); });

  // ---------- aviso de cookies ----------
  const bar = $('#cookieBar');
  if (bar) {
    if (!store.get('denoro_cookies')) bar.hidden = false; else if (store.get('denoro_analytics') !== 'no') loadAnalytics();
    const close = (analytics) => { store.set('denoro_cookies', 'ok'); store.set('denoro_analytics', analytics); bar.hidden = true; if (analytics === 'si') loadAnalytics(); optOutState(); dispatchEvent(new Event('scroll')); };
    $('#cookieOk').addEventListener('click', () => close('si'));
    $('#cookieNo').addEventListener('click', () => close('no'));
  } else if (store.get('denoro_analytics') !== 'no') loadAnalytics();
  optOutState();

  // ---------- entrada escalonada al hacer scroll ----------
  // Solo bloques de contenido, una vez, y nunca con prefers-reduced-motion.
  const revealables = $$('.reveal');
  if (revealables.length) {
    if (reduced.matches || !('IntersectionObserver' in window)) {
      revealables.forEach((el) => el.classList.add('in'));
    } else {
      const io = new IntersectionObserver((entries) => {
        const visibles = entries.filter((e) => e.isIntersecting);
        visibles.forEach((e, i) => {
          e.target.style.setProperty('--delay', `${Math.min(i, 4) * 60}ms`);
          e.target.classList.add('in');
          io.unobserve(e.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
      revealables.forEach((el) => io.observe(el));
      // lo que ya está en pantalla al cargar no espera al observador
      requestAnimationFrame(() => revealables.forEach((el) => {
        if (el.getBoundingClientRect().top < innerHeight * 0.9) el.classList.add('in');
      }));
    }
  }

  // ---------- sección actual en el menú ----------
  const navLinks = $$('nav a[href^="#"]:not(.btn)');
  if (navLinks.length) {
    const marca = (id) => navLinks.forEach((a) => {
      if (a.getAttribute('href') === `#${id}`) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
    const secciones = navLinks.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    const repasar = () => {
      const empezadas = secciones.filter((s) => s.getBoundingClientRect().top <= 120);
      const actual = empezadas[empezadas.length - 1];
      if (actual) marca(actual.id); else navLinks.forEach((a) => a.removeAttribute('aria-current'));
    };
    let pendiente = false;
    addEventListener('scroll', () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(() => { pendiente = false; repasar(); });
    }, { passive: true });
    repasar();
  }

  // ---------- botón de contacto fijo en móvil ----------
  const mcta = $('#mobileCta');
  if (mcta) {
    const form = document.getElementById('presupuesto');
    const show = () => {
      const near = form ? form.getBoundingClientRect().top < window.innerHeight * 1.2 : false;
      const cookiesUp = bar && !bar.hidden;
      mcta.hidden = cookiesUp || near || window.scrollY < 240;
      document.body.classList.toggle('has-mobile-cta', !mcta.hidden);
    };
    show();
    addEventListener('scroll', show, { passive: true });
    addEventListener('resize', show);
  }

  // ---------- formulario ----------
  const T = {
    es: { falta: 'Rellena tu nombre, un email válido y al menos un enlace que quieras vigilar.',
          enviando: 'Enviando…', ok: '¡Recibido! Te respondo en menos de 24 h laborables con precio y fecha.',
          mail: 'No he podido enviarlo desde la web. Pulsa aquí para mandármelo por correo (ya va todo escrito).',
          send: 'Enviar y recibir precio', consent: 'Marca la casilla de la política de privacidad para poder responderte.',
          rapido: 'Revisa los datos y vuelve a pulsar Enviar.' },
    en: { falta: 'Please add your name, a valid email and at least one link you want to watch.',
          enviando: 'Sending…', ok: 'Got it! I reply within 24 working hours with a price and a date.',
          mail: 'I could not send it from the site. Click here to email it to me instead (everything is written for you).',
          send: 'Send and get a price', consent: 'Please tick the privacy policy box so I can reply to you.',
          rapido: 'Please check your details and press Send again.' },
  };
  const form = $('#quote'), out = $('#formMsg'), btn = $('#send');
  if (form) $('#abierto').value = String(Date.now());
  const msg = (html, kind) => { out.innerHTML = html ? `<p class="msg ${kind}">${html}</p>` : ''; };
  const mailtoLink = (d) => {
    const body = (lang === 'en' ? 'Name' : 'Nombre') + `: ${d.nombre}\nEmail: ${d.email}\n`
      + (lang === 'en' ? 'My store' : 'Mi tienda') + `: ${d.tienda}\n`
      + (lang === 'en' ? 'Sites to watch' : 'Webs a vigilar') + `:\n${d.competidores}\n`
      + (lang === 'en' ? 'Products' : 'Productos') + `: ${d.productos}\n`
      + (lang === 'en' ? 'Package' : 'Paquete') + `: ${d.paquete}\n\n${d.mensaje}`;
    return `mailto:${EMAIL}?subject=${encodeURIComponent(lang === 'en' ? 'Quote request · Denoro' : 'Solicitud de presupuesto · Denoro')}&body=${encodeURIComponent(body)}`;
  };

  // marca el campo con error, lo enfoca y lo limpia al escribir (WCAG 3.3.1)
  const limpiar = () => $$('#quote [aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));
  const fallo = (el, texto) => {
    limpiar();
    if (el) { el.setAttribute('aria-invalid', 'true'); el.focus({ preventScroll: false }); }
    msg(texto, 'err');
  };
  form?.addEventListener('input', limpiar);

  form?.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const t = T[lang];
    const d = Object.fromEntries(new FormData(form).entries());
    if (d.empresa_web) return;                                  // trampa para bots
    if (Date.now() - Number(d.abierto || 0) < 3000) {           // enviado demasiado rápido: probable bot
      $('#abierto').value = String(Date.now() - 3000);          // el segundo intento de una persona sí pasa
      return msg(t.rapido, 'err');
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email || '');
    if (!d.nombre?.trim()) return fallo($('#nombre'), t.falta);
    if (!emailOk) return fallo($('#email'), t.falta);
    if (!d.competidores?.trim()) return fallo($('#competidores'), t.falta);
    if (!$('#privacidad').checked) return fallo($('#privacidad'), t.consent);
    limpiar();
    msg('', ''); btn.disabled = true; btn.textContent = t.enviando;
    const payload = { ...d, idioma: lang, origen: location.href, enviado: new Date().toISOString() };
    let sent = false;
    if (ENDPOINT) {
      try {
        const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) });
        sent = r.ok;
      } catch (e) { sent = false; }
    }
    btn.disabled = false; btn.textContent = t.send;
    if (sent) { form.reset(); msg(t.ok, 'ok'); }
    else msg(`<a href="${mailtoLink(d)}">${t.mail}</a>`, 'err');
  });
})();
