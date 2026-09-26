#!/usr/bin/env python3
"""Genera la web lista para publicar: mete el CSS en el HTML y copia el JS.

Uso: python build.py
"""
import re
import shutil
from datetime import date
from pathlib import Path

HERE = Path(__file__).parent
SRC = HERE / "src"
SITE = "https://denoroautomations.com"


def build_page(src_name, out_name, css):
    html = (SRC / src_name).read_text(encoding="utf-8")
    html = html.replace("<style>/*CSS*/</style>", f"<style>\n{css}\n</style>")
    (HERE / out_name).write_text(html, encoding="utf-8")
    return len(html)


def main():
    css = (SRC / "styles.css").read_text(encoding="utf-8")
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)                      # fuera comentarios
    css = re.sub(r"\n\s*\n", "\n", css).strip()
    n1 = build_page("index.src.html", "index.html", css)
    n2 = build_page("legal.src.html", "legal.html", css)
    n3 = build_page("automatizaciones.src.html", "automatizaciones.html", css)
    shutil.copy(SRC / "app.js", HERE / "app.js")

    hoy = date.today().isoformat()
    (HERE / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
        f'  <url><loc>{SITE}/</loc><lastmod>{hoy}</lastmod><changefreq>monthly</changefreq><priority>1.0</priority>\n'
        f'    <xhtml:link rel="alternate" hreflang="es" href="{SITE}/"/>\n'
        f'    <xhtml:link rel="alternate" hreflang="en" href="{SITE}/?lang=en"/>\n'
        f'    <xhtml:link rel="alternate" hreflang="x-default" href="{SITE}/"/></url>\n'
        f'  <url><loc>{SITE}/automatizaciones.html</loc><lastmod>{hoy}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority>\n'
        f'    <xhtml:link rel="alternate" hreflang="es" href="{SITE}/automatizaciones.html"/>\n'
        f'    <xhtml:link rel="alternate" hreflang="en" href="{SITE}/automatizaciones.html?lang=en"/>\n'
        f'    <xhtml:link rel="alternate" hreflang="x-default" href="{SITE}/automatizaciones.html"/></url>\n'
        f'  <url><loc>{SITE}/legal.html</loc><lastmod>{hoy}</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>\n'
        '</urlset>\n', encoding="utf-8")
    (HERE / "robots.txt").write_text(
        "User-agent: *\nAllow: /\n\n"
        f"Sitemap: {SITE}/sitemap.xml\n", encoding="utf-8")
    (HERE / "CNAME.ejemplo").write_text(
        "# Renombra este fichero a CNAME y pon dentro tu dominio (una línea, sin https://)\n"
        "# ejemplo: denoro.es\n", encoding="utf-8")
    print(f"index.html {n1 // 1024} KB · legal.html {n2 // 1024} KB · "
          f"automatizaciones.html {n3 // 1024} KB · sitemap.xml · robots.txt")


if __name__ == "__main__":
    main()
