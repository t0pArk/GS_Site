(function () {
  var root = document.documentElement;
  var header = document.getElementById('header');
  var inner = header && header.querySelector('.header-inner');

  // Squarespace pads the first section by the (absolutely positioned) header height.
  function setHeaderHeight() {
    if (inner) root.style.setProperty('--header-height', inner.offsetHeight + 'px');
  }
  setHeaderHeight();
  window.addEventListener('resize', setHeaderHeight);
  window.addEventListener('load', setHeaderHeight);
  if (window.ResizeObserver && inner) new ResizeObserver(setHeaderHeight).observe(inner);

  // Mobile menu
  var burger = document.querySelector('.header-burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Close Menu' : 'Open Menu');
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 800 && document.body.classList.contains('menu-open')) burger.click();
    });
  }

  // Contact form: no backend on a static host, so validate and hand off to the visitor's mail app.
  // To use a form service (Formspree, Netlify Forms, etc.), set an action on the form and remove this.
  var form = document.getElementById('contact-form');
  if (form && !form.getAttribute('action')) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      var fields = Array.prototype.slice.call(form.querySelectorAll('[required]'));
      var invalid = fields.filter(function (f) { return !f.value.trim() || !f.checkValidity(); });
      if (invalid.length) {
        status.hidden = false;
        status.textContent = 'Please fill out all required fields.';
        invalid[0].focus();
        return;
      }
      var v = function (n) { return form.elements[n].value.trim(); };
      var body = v('message') + '\n\n' + v('fname') + ' ' + v('lname') + '\n' + v('email');
      window.location.href = 'mailto:' + form.dataset.recipient +
        '?subject=' + encodeURIComponent(v('subject')) +
        '&body=' + encodeURIComponent(body);
      status.hidden = false;
      status.textContent = 'Thank you!';
    });
  }
})();
