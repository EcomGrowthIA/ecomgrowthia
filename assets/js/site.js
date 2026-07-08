/* ============================================================
   ECOMGROWTHIA — SITE JS
   ============================================================ */

/* === NAV MOBILE TOGGLE === */
(function () {
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
})();

/* === ACTIVE NAV LINK === */
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__link, .navbar__mobile .navbar__link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href && path.includes(href.replace('.html', ''))) {
      link.classList.add('active');
    }
  });
})();

/* === SCROLL REVEAL === */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach(el => observer.observe(el));
})();

/* === SPOTLIGHT CARD EFFECT === */
(function () {
  const cards = document.querySelectorAll('.card--spotlight');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
      card.style.setProperty('--spotlight', '1');
    });
    card.addEventListener('mouseleave', () => card.style.setProperty('--spotlight', '0'));
  });
})();

/* === NAV SCROLL === */
(function () {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 40
      ? 'rgba(5,11,20,0.97)'
      : 'rgba(5,11,20,0.85)';
  }, { passive: true });
})();

/* ============================================================
   COUNTRY CODES — lista completa de países del mundo
   ============================================================ */
const COUNTRY_CODES = [
  { code: '+34',  flag: '🇪🇸' },
  { code: '+1',   flag: '🇺🇸' },
  { code: '+44',  flag: '🇬🇧' },
  { code: '+49',  flag: '🇩🇪' },
  { code: '+33',  flag: '🇫🇷' },
  { code: '+39',  flag: '🇮🇹' },
  { code: '+351', flag: '🇵🇹' },
  { code: '+52',  flag: '🇲🇽' },
  { code: '+54',  flag: '🇦🇷' },
  { code: '+57',  flag: '🇨🇴' },
  { code: '+56',  flag: '🇨🇱' },
  { code: '+51',  flag: '🇵🇪' },
  { code: '+58',  flag: '🇻🇪' },
  { code: '+593', flag: '🇪🇨' },
  { code: '+502', flag: '🇬🇹' },
  { code: '+503', flag: '🇸🇻' },
  { code: '+504', flag: '🇭🇳' },
  { code: '+505', flag: '🇳🇮' },
  { code: '+506', flag: '🇨🇷' },
  { code: '+507', flag: '🇵🇦' },
  { code: '+591', flag: '🇧🇴' },
  { code: '+595', flag: '🇵🇾' },
  { code: '+598', flag: '🇺🇾' },
  { code: '+53',  flag: '🇨🇺' },
  { code: '+1809',flag: '🇩🇴' },
  { code: '+55',  flag: '🇧🇷' },
  { code: '+7',   flag: '🇷🇺' },
  { code: '+86',  flag: '🇨🇳' },
  { code: '+81',  flag: '🇯🇵' },
  { code: '+82',  flag: '🇰🇷' },
  { code: '+91',  flag: '🇮🇳' },
  { code: '+92',  flag: '🇵🇰' },
  { code: '+880', flag: '🇧🇩' },
  { code: '+62',  flag: '🇮🇩' },
  { code: '+63',  flag: '🇵🇭' },
  { code: '+84',  flag: '🇻🇳' },
  { code: '+66',  flag: '🇹🇭' },
  { code: '+60',  flag: '🇲🇾' },
  { code: '+65',  flag: '🇸🇬' },
  { code: '+61',  flag: '🇦🇺' },
  { code: '+64',  flag: '🇳🇿' },
  { code: '+27',  flag: '🇿🇦' },
  { code: '+234', flag: '🇳🇬' },
  { code: '+254', flag: '🇰🇪' },
  { code: '+20',  flag: '🇪🇬' },
  { code: '+212', flag: '🇲🇦' },
  { code: '+213', flag: '🇩🇿' },
  { code: '+216', flag: '🇹🇳' },
  { code: '+218', flag: '🇱🇾' },
  { code: '+249', flag: '🇸🇩' },
  { code: '+251', flag: '🇪🇹' },
  { code: '+255', flag: '🇹🇿' },
  { code: '+256', flag: '🇺🇬' },
  { code: '+260', flag: '🇿🇲' },
  { code: '+263', flag: '🇿🇼' },
  { code: '+90',  flag: '🇹🇷' },
  { code: '+972', flag: '🇮🇱' },
  { code: '+966', flag: '🇸🇦' },
  { code: '+971', flag: '🇦🇪' },
  { code: '+974', flag: '🇶🇦' },
  { code: '+965', flag: '🇰🇼' },
  { code: '+98',  flag: '🇮🇷' },
  { code: '+964', flag: '🇮🇶' },
  { code: '+963', flag: '🇸🇾' },
  { code: '+962', flag: '🇯🇴' },
  { code: '+961', flag: '🇱🇧' },
  { code: '+32',  flag: '🇧🇪' },
  { code: '+31',  flag: '🇳🇱' },
  { code: '+41',  flag: '🇨🇭' },
  { code: '+43',  flag: '🇦🇹' },
  { code: '+45',  flag: '🇩🇰' },
  { code: '+46',  flag: '🇸🇪' },
  { code: '+47',  flag: '🇳🇴' },
  { code: '+358', flag: '🇫🇮' },
  { code: '+354', flag: '🇮🇸' },
  { code: '+48',  flag: '🇵🇱' },
  { code: '+420', flag: '🇨🇿' },
  { code: '+36',  flag: '🇭🇺' },
  { code: '+40',  flag: '🇷🇴' },
  { code: '+30',  flag: '🇬🇷' },
  { code: '+380', flag: '🇺🇦' },
  { code: '+375', flag: '🇧🇾' },
  { code: '+370', flag: '🇱🇹' },
  { code: '+371', flag: '🇱🇻' },
  { code: '+372', flag: '🇪🇪' },
  { code: '+421', flag: '🇸🇰' },
  { code: '+386', flag: '🇸🇮' },
  { code: '+385', flag: '🇭🇷' },
  { code: '+381', flag: '🇷🇸' },
  { code: '+387', flag: '🇧🇦' },
  { code: '+382', flag: '🇲🇪' },
  { code: '+389', flag: '🇲🇰' },
  { code: '+355', flag: '🇦🇱' },
  { code: '+359', flag: '🇧🇬' },
  { code: '+353', flag: '🇮🇪' },
  { code: '+352', flag: '🇱🇺' },
  { code: '+356', flag: '🇲🇹' },
  { code: '+357', flag: '🇨🇾' },
];

/* === BUILD COUNTRY SELECT === */
function sizePhoneSelect(sel) {
  const code = sel.value || '+34';
  sel.style.width = (66 + code.length * 8) + 'px';
}

function buildCountrySelect(selectEl) {
  COUNTRY_CODES.forEach(({ code, flag }) => {
    const opt = document.createElement('option');
    opt.value = code;
    opt.textContent = `${code} ${flag}`;
    if (code === '+34') opt.selected = true;
    selectEl.appendChild(opt);
  });
  sizePhoneSelect(selectEl);
  selectEl.addEventListener('change', () => sizePhoneSelect(selectEl));
}

/* === INIT PHONE GROUPS === */
(function () {
  document.querySelectorAll('.phone-country-select').forEach(buildCountrySelect);
})();

/* ============================================================
   FORM VALIDATION
   ============================================================ */
function validateField(field) {
  const input = field.querySelector('input, textarea, select');
  const errorEl = field.querySelector('.field-error');
  if (!input || !errorEl) return true;

  const isEmpty = input.value.trim() === '';
  if (input.required && isEmpty) {
    field.classList.add('field--invalid');
    errorEl.classList.add('visible');
    return false;
  }

  if (input.type === 'email' && input.value.trim() !== '') {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
    if (!validEmail) {
      field.classList.add('field--invalid');
      errorEl.classList.add('visible');
      return false;
    }
  }

  field.classList.remove('field--invalid');
  errorEl.classList.remove('visible');
  return true;
}

function validateForm(form) {
  const fields = form.querySelectorAll('.field');
  let valid = true;
  fields.forEach(field => {
    if (!validateField(field)) valid = false;
  });
  return valid;
}

/* Live validation on blur */
(function () {
  document.querySelectorAll('.field input, .field textarea, .field select').forEach(input => {
    input.addEventListener('blur', () => {
      const field = input.closest('.field');
      if (field) validateField(field);
    });
    input.addEventListener('input', () => {
      const field = input.closest('.field');
      if (field && field.classList.contains('field--invalid')) validateField(field);
    });
  });
})();

/* === CONTACT FORM HANDLER === */
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validateForm(form)) {
      const firstInvalid = form.querySelector('.field--invalid input, .field--invalid textarea');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Enviando…';

    setTimeout(() => {
      form.innerHTML = `
        <div style="text-align:center; padding:40px 0;">
          <div style="font-size:48px; margin-bottom:16px;">✓</div>
          <h3 style="font-family:var(--f-head);font-size:22px;margin-bottom:12px;color:var(--c-text)">Mensaje enviado</h3>
          <p style="color:var(--c-text-muted)">Te responderemos en menos de 24h. Mientras tanto, puedes llamarnos al <a href="tel:+34685480503" style="color:var(--c-accent)">+34 685 480 503</a>.</p>
        </div>`;
    }, 1200);
  });
})();

/* ============================================================
   CHECKOUT — PAYMENT INTEGRATION PLACEHOLDERS
   ============================================================ */

async function createKlarnaPaymentSession(orderData) {
  // TODO: POST /api/checkout/klarna — requiere KLARNA_API_KEY / KLARNA_API_SECRET en backend
  console.warn('[Checkout] createKlarnaPaymentSession — pendiente de integración');
  return null;
}

async function createSequraPaymentSession(orderData) {
  // TODO: POST /api/checkout/sequra — requiere SEQURA_API_KEY / SEQURA_API_SECRET en backend
  console.warn('[Checkout] createSequraPaymentSession — pendiente de integración');
  return null;
}

async function createCheckoutSession(orderData) {
  // TODO: POST /api/checkout/session
  console.warn('[Checkout] createCheckoutSession — pendiente de integración');
  return null;
}

async function createRecurringMaintenanceSubscription(customerId) {
  // TODO: POST /api/checkout/subscription — mantenimiento mensual 300€ + IVA
  console.warn('[Checkout] createRecurringMaintenanceSubscription — pendiente de integración');
  return null;
}

/* === CHECKOUT PAYMENT METHOD SELECTOR === */
(function () {
  const radios = document.querySelectorAll('input[name="payment_method"]');
  const finInfo = document.getElementById('financing-info');
  if (!radios.length) return;

  radios.forEach(r => {
    r.addEventListener('change', () => {
      const isFinancing = r.value === 'klarna' || r.value === 'sequra';
      if (finInfo) finInfo.classList.toggle('visible', isFinancing && r.checked);
    });
  });

  // Label click for payment options
  document.querySelectorAll('.payment-option label').forEach(label => {
    label.addEventListener('click', () => {
      const radio = label.previousElementSibling;
      if (radio && radio.type === 'radio') {
        radio.checked = true;
        radio.dispatchEvent(new Event('change'));
      }
    });
  });
})();
