(function () {
  var btn = document.getElementById('menu-btn');
  var mob = document.getElementById('mobile');
  if (btn && mob) {
    btn.addEventListener('click', function () {
      var open = mob.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
    mob.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { mob.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // Contact form: opens the visitor's mail app with a prefilled message (no third-party form service).
  var f = document.getElementById('contact-form');
  if (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(f);
      var subject = 'Enquiry: ' + (d.get('topic') || 'Befree Inc');
      var body = 'Name: ' + d.get('name') + '\nCompany: ' + d.get('company') + '\nEmail: ' + d.get('email') + '\n\n' + d.get('message');
      window.location.href = 'mailto:info@befreefit.ca?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
})();
