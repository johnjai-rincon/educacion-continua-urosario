/**
 * EDUCON — Nueva interfaz · JS compartido (vanilla, portable a Drupal 10)
 * En Drupal se carga como librería del tema (educon_advance/global) y cada
 * bloque se puede envolver en Drupal.behaviors sin cambios de lógica.
 */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Menú móvil ---------- */
  var toggle = document.querySelector("[data-nav-toggle]");
  var mobileNav = document.getElementById("menu-movil");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      mobileNav.hidden = open;
    });
  }

  /* ---------- Animaciones de entrada (scroll-trigger + stagger, respeta reduced motion) ---------- */
  var animated = document.querySelectorAll("[data-animate]");
  if (animated.length && "IntersectionObserver" in window && !reducedMotion) {
    var groups = {};
    animated.forEach(function (el) {
      var parent = el.parentElement;
      if (!groups.has ? !groups[parent ? parent.dataset.animGroup || "" : ""] : false) {}
    });
    // stagger por hermanos dentro del mismo contenedor
    animated.forEach(function (el) {
      var siblings = el.parentElement ? el.parentElement.querySelectorAll(":scope > [data-animate]") : [];
      var idx = Array.prototype.indexOf.call(siblings, el);
      if (idx > 0) el.style.setProperty("--stagger", Math.min(idx * 45, 360) + "ms");
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });
    animated.forEach(function (el) { io.observe(el); });
  } else {
    animated.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Contadores de impacto ----------
     El valor REAL está en el HTML (server-side) — la animación es solo
     mejora progresiva. Sin JS o con reduced-motion, el número ya se ve. */
  var counters = document.querySelectorAll("[data-countup]");
  if (counters.length && "IntersectionObserver" in window && !reducedMotion) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        cio.unobserve(entry.target);
        var el = entry.target;
        var target = parseInt(el.getAttribute("data-countup"), 10);
        if (isNaN(target)) return;
        var start = null;
        var dur = 1200;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toLocaleString("es-CO");
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ---------- Catálogo: filtros client-side sobre data-attributes ----------
     En Drupal esto lo reemplazan Views + Facets con AJAX; el prototipo
     replica la interacción para evaluar la UX. */
  var catalogo = document.querySelector("[data-catalogo]");
  if (catalogo) {
    var cards = Array.prototype.slice.call(catalogo.querySelectorAll("[data-card]"));
    var checks = document.querySelectorAll("[data-filtro] input[type=checkbox]");
    var buscador = document.querySelector("[data-buscar]");
    var orden = document.querySelector("[data-orden]");
    var count = document.querySelector("[data-count]");
    var reset = document.querySelector("[data-reset]");
    var empty = document.querySelector("[data-empty]");

    function activos(grupo) {
      return Array.prototype.filter
        .call(checks, function (c) { return c.checked && c.closest("[data-filtro]").getAttribute("data-filtro") === grupo; })
        .map(function (c) { return c.value; });
    }

    function aplicar() {
      var texto = (buscador && buscador.value ? buscador.value : "").toLowerCase().trim();
      var grupos = ["area", "tipo", "modalidad", "nivel"];
      var visibles = 0;
      cards.forEach(function (card) {
        var ok = grupos.every(function (g) {
          var act = activos(g);
          return !act.length || act.indexOf(card.getAttribute("data-" + g)) !== -1;
        });
        if (ok && texto) ok = (card.textContent || "").toLowerCase().indexOf(texto) !== -1;
        card.hidden = !ok;
        if (ok) visibles++;
      });
      if (count) count.textContent = String(visibles);
      if (empty) empty.hidden = visibles !== 0;
    }

    function ordenar() {
      if (!orden) return;
      var val = orden.value;
      var sorted = cards.slice().sort(function (a, b) {
        if (val === "precio-asc") return (+a.dataset.precio || 9e9) - (+b.dataset.precio || 9e9);
        if (val === "precio-desc") return (+b.dataset.precio || 0) - (+a.dataset.precio || 0);
        if (val === "az") return (a.dataset.titulo || "").localeCompare(b.dataset.titulo || "");
        return (a.dataset.fecha || "").localeCompare(b.dataset.fecha || ""); // próximos a iniciar
      });
      sorted.forEach(function (c) { catalogo.appendChild(c); });
    }

    checks.forEach(function (c) { c.addEventListener("change", aplicar); });
    if (buscador) buscador.addEventListener("input", debounce(aplicar, 180));
    if (orden) orden.addEventListener("change", function () { ordenar(); aplicar(); });
    if (reset) reset.addEventListener("click", function () {
      checks.forEach(function (c) { c.checked = false; });
      if (buscador) buscador.value = "";
      aplicar();
    });
    aplicar();
  }

  /* ---------- Subnav: resaltar sección activa ---------- */
  var subnavLinks = document.querySelectorAll(".subnav a[href^='#']");
  if (subnavLinks.length && "IntersectionObserver" in window) {
    var secciones = Array.prototype.map.call(subnavLinks, function (a) {
      return document.getElementById(a.getAttribute("href").slice(1));
    }).filter(Boolean);
    var sio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          subnavLinks.forEach(function (a) {
            var on = a.getAttribute("href") === "#" + entry.target.id;
            if (on) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    secciones.forEach(function (s) { sio.observe(s); });
  }

  function debounce(fn, ms) {
    var t;
    return function () {
      clearTimeout(t);
      var args = arguments, ctx = this;
      t = setTimeout(function () { fn.apply(ctx, args); }, ms);
    };
  }
})();
