# Nueva interfaz — Educación Continua Universidad del Rosario

Implementación del **plan de rediseño EDUCON** (jul 2026): estructura del prototipo Rosario Advance con la **paleta oficial del Kit de Marca** (azul institucional `#002C4D`, rojo UR `#DA0921`, vinotinto `#8C1D32`, tipografía Inter + firma editorial Lora italic).

## Estructura del repositorio

```
├── prototipo/                     ← Sitio estático (deploy en Vercel)
│   ├── index.html                   Homepage (hero + caminos + catálogo + testimonios + cifras)
│   ├── buscar.html                  Catálogo con filtros funcionales (área/tipo/modalidad/nivel/orden)
│   ├── programa.html                Detalle de programa (tema claro, schema Course correcto)
│   ├── empresas.html                B2B con formulario (primer formulario del funnel B2B)
│   ├── area-salud.html              Landing de área de conocimiento (palanca SEO #1)
│   └── assets/css|js               ← FUENTE ÚNICA del sistema de diseño
└── drupal/themes/custom/educon_advance/   ← Tema Drupal 10 (PHP + Twig + YAML)
    ├── educon_advance.info.yml       Tema base stable9, regiones
    ├── educon_advance.libraries.yml  Librerías (mismo css/js del prototipo)
    ├── educon_advance.theme          Preprocess PHP (data-theme, precio, estado)
    ├── components/                   SDC: card-programa · ficha-programa · testimonio
    ├── templates/                    page.html.twig · node--programa--full.html.twig
    └── css/fonts.css                 Inter + Lora self-hosted
```

**Regla de oro:** `prototipo/assets/css/educon.css` y `js/educon.js` son la fuente única del sistema de diseño. Sincronizarlos al tema Drupal — nunca editarlos en dos lugares:

```bash
cp prototipo/assets/css/educon.css drupal/themes/custom/educon_advance/css/educon.css
cp prototipo/assets/js/educon.js  drupal/themes/custom/educon_advance/js/educon.js
```

## Deploy en Vercel (proyecto `nueva-interfaz-educon-urosario`)

1. En Vercel (equipo **marketing-comunicaciones**) → proyecto → Settings → Git → **Connect** este repositorio (`johnjai-rincon/educacion-continua-urosario`).
2. Framework preset: **Other** · Build command: *(vacío)* · Output directory: `prototipo` — ya viene configurado en [`vercel.json`](vercel.json).
3. Cada push a `main` despliega automáticamente. El prototipo lleva `X-Robots-Tag: noindex` (no compite con el sitio real en Google).

## Implementación en Drupal 10 (Acquia)

1. Copiar `drupal/themes/custom/educon_advance/` a `docroot/themes/custom/` del proyecto Acquia.
2. Colocar los `.woff2` de Inter (400/600/800/900) y Lora (500 italic) en `fonts/` — descargarlos de Google Fonts o fontsource.
3. `drush theme:enable educon_advance && drush config:set system.theme default educon_advance`
4. Los componentes SDC se usan con `{% include 'educon_advance:card-programa' with {...} %}` desde Views (Views Template) o templates de nodo.
5. Campos requeridos del content type `programa` y taxonomías: ver `plan-rediseno-educon/03-PLAN-REDISENO.md` §3.1 (documentos del plan).
6. El formulario de programa sigue siendo el **HubSpot hsForm existente** (campo `field_codigo_hubspot`).

## Decisiones de diseño aplicadas

- **Tarjeta 100% clicable** (patrón `::after`): corrige los 1.248 dead clicks/mes medidos en Clarity.
- **Dos temas** por `data-theme`: dark institucional (comercial) / light editorial (detalle de programa).
- **Contadores server-side**: el número real está en el HTML; el count-up es mejora progresiva (corrige el bug "0%" del sitio actual).
- **Animaciones**: entrance con IntersectionObserver + stagger 45 ms, solo `transform/opacity`, respetando `prefers-reduced-motion`.
- **Accesibilidad**: skip-link, focus-visible, touch targets ≥44 px, `aria-current`, `aria-live` en el contador de resultados, labels en todos los campos, `tabular-nums` en precios, `text-wrap: balance` en titulares.
- **Schema.org Course** con `provider` correcto + `offers` + `hasCourseInstance` (corrige el hallazgo crítico C3 de la auditoría SEO).

> ⚠️ Los datos de programas, precios, testimonios y docentes del prototipo son de **demostración** (mezclan programas reales del catálogo con precios estimados). El ribbon superior lo indica en todas las páginas.
