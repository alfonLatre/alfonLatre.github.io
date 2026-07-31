(function () {
  var STORAGE_KEY = 'site-lang';

  function applyAttrTranslations(lang) {
    document.querySelectorAll('[data-attr]').forEach(function (el) {
      var value = el.getAttribute('data-' + lang);
      if (value !== null) {
        el.setAttribute(el.getAttribute('data-attr'), value);
      }
    });
  }

  function setLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    applyAttrTranslations(lang);
  }

  function initLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    var browser = (navigator.language || 'es').toLowerCase().indexOf('es') === 0 ? 'es' : 'en';
    setLang(saved || browser);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });
  }

  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLang();
    initMobileNav();
  });
})();
