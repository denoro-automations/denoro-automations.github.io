/* Denoro Automations — landing */
(() => {
  // Cuando n8n esté accesible desde internet, pon aquí la URL del webhook:
  // p. ej. 'https://automations.denoro.com/webhook/denoro/contacto'
  const ENDPOINT = 'https://app.denoroautomations.com/webhook/denoro/contacto';
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
    masEyebrow: 'Beyond the monitor', masTitle: 'Five more automations for your store',
    mas1: '<b>Supplier stock</b> syncs their CSV or XML feed with your store and stops itself if it arrives broken',
    mas2: '<b>Invoices</b> numbered, with VAT broken down by rate, as a PDF to the customer',
    mas3: '<b>Abandoned carts</b> reminders to shoppers who opted in, and a count of what came back',
    mas4: '<b>Reviews</b> an alert the same day a negative review lands, and a digest on Mondays',
    mas5: '<b>Product copy</b> SEO titles and descriptions in bulk, ready to import',
    masCta: 'See all seven and what each one does',
    // --- catálogo de automatizaciones ---
    navcat: 'Automations',
    auEyebrow: 'Catalogue · e-commerce', auTitle: 'Seven automations that are already written',
    auLead: 'I am not starting from scratch with you. Every one of these runs today, has a demo mode so you can watch it work before hiring anything, and its code is published for whoever you want to check it.',
    auF1t: 'Built on', auF1: 'n8n, on your server or on mine',
    auF2t: 'Shops', auF2: 'Shopify, WooCommerce, supplier CSV or XML',
    auF3t: 'From', auF3n: '€149', auF3: 'with the scope agreed in writing',
    mCada: 'Runs', mEntrega: 'Output', mEvita: 'Prevents', mMide: 'Measures', auCode: 'See the code',
    a1k: 'Content', a1t: 'Product copy in bulk',
    a1p: 'You hand it the catalogue and it returns SEO titles, meta descriptions and HTML copy ready to import. Without making things up: any figure that is not in the product data is flagged for you to review.',
    a1l1: '<b>In</b> a CSV, your Shopify or your WooCommerce',
    a1l2: '<b>Out</b> a CSV you import straight into the shop',
    a1l3: '<b>Template or AI</b> the template costs nothing; AI uses your own OpenAI key',
    a1c: 'On demand or Mondays', a1a: 'CSV ready to import',
    a2k: 'Inventory', a2t: 'Supplier stock sync',
    a2p: 'Reads your supplier feed and adjusts shop stock every few hours. The point is not that it syncs: it is that it <strong>stops itself</strong> when the feed arrives broken, before it empties your catalogue.',
    a2l1: '<b>Formats</b> CSV or XML, Spanish or English numbers',
    a2l2: '<b>Brakes</b> on number of changes and of sold-out items',
    a2l3: '<b>Dry run</b> shows what it would do without touching anything',
    a2c: '4 hours', a2a: 'Selling what you do not have',
    a3k: 'Sales', a3t: 'Abandoned carts',
    a3p: 'A sequence of reminders to the shopper who stopped halfway, with their cart and a discount when it makes sense. And, above all, the count of how many came back and for how much.',
    a3l1: '<b>Sequence</b> steps and wording are yours to set',
    a3l2: '<b>Consent</b> it only writes to those who opted in',
    a3l3: '<b>Branding</b> the email is signed by your shop, not Denoro',
    a3c: '30 minutes', a3a: 'Euros recovered',
    a4k: 'Reputation', a4t: 'Review monitoring',
    a4p: 'Tells you the same day a negative review lands, which is while replying still changes anything. On Mondays, a digest with the average score, the trend and what people are complaining about.',
    a4l1: '<b>Sources</b> the reviews on your WooCommerce store, or public pages whose robots.txt allows it',
    a4l2: '<b>Themes</b> groups complaints instead of counting words',
    a4l3: '<b>No noise</b> never repeats an alert for a review already seen',
    a4c: '2 hours · digest on Mondays', a4a: '1★ reviews left unanswered',
    a5k: 'Admin', a5t: 'Invoices and delivery notes',
    a5p: 'Numbers them, works out VAT by rate, builds the PDF with your branding and sends it to the customer. An order already invoiced is never renumbered. It is not certified Verifactu software (the Spanish e-invoicing rules): I explain what that means before we start.',
    a5l1: '<b>Numbering</b> correct sequence and VAT breakdown',
    a5l2: '<b>Delivery note</b> in the same PDF if you need it',
    a5l3: '<b>Ledger</b> invoices in CSV for your accountant',
    a5c: '1 hour', a5a: 'PDF to the customer and a CSV ledger',
    a6k: 'Competitors', a6t: 'Price and stock monitoring',
    a6p: 'Watches the prices and stock of the shops you choose and sends one summary when something that affects you changes. With its own client panel to paste the links.',
    a6l1: '<b>Whole catalogue</b> on Shopify and WooCommerce',
    a6l2: '<b>Your price</b> alerts when someone goes below it',
    a6l3: '<b>CSV</b> with the prices in every alert',
    a6c: '1 to 24 hours, your call', a6a: 'Price and stock changes',
    a7k: 'Management', a7t: 'Weekly shop report',
    a7p: 'Mondays at eight, a PDF with the week\'s sales, the products that move and what is about to run out. By email and Telegram.',
    a7l1: '<b>Figures</b> sales, orders and average basket, compared',
    a7l2: '<b>Stock</b> alert on what is below minimum or runs out within 2 weeks',
    a7l3: '<b>PDF</b> ready to forward to anyone',
    a7c: 'Mondays at 8:00', a7a: 'Sales and stock rotation',
    auCtaT: 'Your case is not on the list?',
    auCtaP: 'Almost anything a shop repeats every week can be automated. Tell me what you do by hand and I will tell you whether it is worth it, what it would cost and how long it would take — before anything starts.',
    auCta1: 'Get a quote', auCta2: 'See pricing',
    skip: 'Skip to content', nav1: 'How it works', nav2: 'Demos', nav3: 'Pricing', nav4: 'FAQ', navcta: 'Get a quote',
    heroEyebrow: 'Price monitoring · e-commerce',
    heroTitle: 'Know the moment a competitor drops a price. Without checking yourself.',
    heroLead: 'I watch the prices and stock of the stores you choose and send you one summary on Telegram and by email when something that affects you changes.',
    heroCta1: 'Get a quote', heroCta2: 'See what you get',
    trust1: 'Shopify, WooCommerce and single product pages', trust2: 'Public data only', trust3: 'Fixed price before we start',
    heroCap: 'Your panel: paste the links you want to watch and the system does the rest.',
    howEyebrow: 'How it works', howTitle: 'Three steps and you stop checking',
    how1t: 'You paste the links', how1p: 'A competitor’s whole store or the specific products you care about. The panel works out what each link is and shows you the prices it found before saving anything.',
    how2t: 'I check every few hours', how2p: 'Every 1, 3, 6, 12 or 24 hours — your call. I keep the latest price snapshot of every product and compare it with the previous check.',
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
    fact2n: '€149',
    p1price: '€149', p2price: '€349', p3price: '€599',
    p1tag: 'Basic', p1sub: 'Delivered in 4 days',
    p1f1: 'Up to 3 watched links (a whole store counts as one)', p1f2: 'Alerts on Telegram and by email, with prices as a CSV', p1f3: 'Your panel to change links, frequency and threshold', p1f4: 'Documentation and a step-by-step walkthrough',
    p2tag: 'Standard · most popular', p2sub: 'Delivered in 6 days',
    p2f1: 'Up to 10 watched links', p2f2: 'Everything in Basic',
    p2f3: 'Your own prices set up, so you hear when someone undercuts you',
    p3tag: 'Premium', p3sub: 'Delivered in 8 days',
    p3f1: 'Up to 30 watched links, with everything above', p3f2: 'Weekly PDF report of your store (Shopify or WooCommerce)',
    p3f3: 'Installed on your own n8n, if you prefer', p3f4: '1 month of maintenance included',
    planCta: 'Get a quote', planCta2: 'Get a quote',
    priceNote: 'Optional maintenance: €99/month. If a site changes and stops being readable, I fix it. For the first two weeks after delivery, fixes are always free. Need more links or something different? I will send you a fixed quote.',
    faqEyebrow: 'FAQ', faqTitle: 'What people usually ask me',
    q1: 'Will it work with my competitor’s store?',
    a1: 'With Shopify and WooCommerce stores I read the whole catalogue. With the rest I read individual products, which works on many shops because most publish the price in a standard format (structured data). Before you pay anything I check your links and tell you if one of them is not possible.',
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
    fPlan: 'Package that fits you', fPlan1: 'Basic · €149', fPlan2: 'Standard · €349', fPlan3: 'Premium · €599', fPlan4: 'Recommend me one',
    fMsg: 'Anything else I should know (optional)', fSend: 'Send and get a price',
    footNote: 'E-commerce automation · Spain', footLegal: 'Legal notice', footPriv: 'Privacy', footHome: 'Home',
    fConsent: 'I have read and accept the <a href="legal.html#privacidad">privacy policy</a>. Your data is only used to reply to you.',
    mobileCta: 'Get a free quote',
    cookieText: 'This site uses no advertising or tracking cookies. It only stores the language you pick in your browser and counts visits anonymously, without cookies.',
    cookieOk: 'Got it', cookieNo: 'No measuring', cookieMore: 'More information',
    legalTitle: 'Legal notice and privacy', legalLead: 'Who is behind this site, what data is collected and what you can do about it.',
    lh1: 'Legal notice', lh1a: 'Owner',
    lp1: 'This site belongs to <b>Denoro Automations</b>, the trading name of a personal project building automations for online stores. Contact: <a href="mailto:manelfernandezp1@gmail.com">manelfernandezp1@gmail.com</a>.',
    lh1b: 'Hosting', lp2: 'The site is hosted on GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA), which logs server requests to operate the service and protect it from abuse.',
    lh1c: 'Using this site', lp3: 'The information here is indicative: published prices and lead times are a reference and are confirmed in writing in each quote before any work starts. Texts, images and code belong to Denoro Automations, except third-party trademarks (Shopify, WooCommerce, Telegram, n8n), which belong to their owners and are named only to explain which systems are used.',
    lh1d: 'What the service does and does not do', lp4: 'Depending on the automation, three kinds of information are handled.<br><br><b>Competitor prices and stock.</b> Only public information from product pages is read (name, price, availability and link). No personal data is extracted, no private or password-protected areas are accessed, no protection measures are bypassed, and each site’s robots.txt is respected. If a store does not allow automated reading, it is not monitored.<br><br><b>Reviews.</b> The reviews read are those of the client’s own store (through their WooCommerce) or of public pages whose robots.txt allows it. They include the public name of the author, which only appears in the alert the client receives: for each review a fingerprint is kept to avoid repeat alerts, not its text.<br><br><b>The client’s store data</b> (orders, carts, catalogue and stock). It is processed on behalf of the client, who is the controller, inside their own systems or the n8n they choose, and only for the automation agreed. Before work starts, the processing agreement is put in writing (Article 28 GDPR).',
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
    const catalogo = document.body.classList.contains('catalogo-page');
    document.title = legal
      ? (lang === 'en' ? 'Legal notice and privacy · Denoro Automations' : 'Aviso legal y privacidad · Denoro Automations')
      : (catalogo
        ? (lang === 'en' ? 'Automations for online stores · Denoro Automations'
                         : 'Automatizaciones para tiendas online · Denoro Automations')
        : (lang === 'en' ? 'Competitor price monitoring for online stores · Denoro Automations'
                         : 'Monitor de precios de la competencia para tiendas online · Denoro Automations'));
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
