// ===== DATA PAKET =====
var packages = [
  // XL Axiata
  { operator: 'xl', operatorName: 'XL Axiata', quota: '7', price: '35.000', validity: '28 Hari', logo: 'image/xl.png' },
  { operator: 'xl', operatorName: 'XL Axiata', quota: '10', price: '40.000', validity: '28 Hari', logo: 'image/xl.png' },
  { operator: 'xl', operatorName: 'XL Axiata', quota: '16', price: '50.000', validity: '28 Hari', logo: 'image/xl.png' },
  { operator: 'xl', operatorName: 'XL Axiata', quota: '23', price: '60.000', validity: '28 Hari', logo: 'image/xl.png' },
  { operator: 'xl', operatorName: 'XL Axiata', quota: '31', price: '70.000', validity: '28 Hari', logo: 'image/xl.png' },
  { operator: 'xl', operatorName: 'XL Axiata', quota: '40', price: '80.000', validity: '28 Hari', logo: 'image/xl.png' },
  { operator: 'xl', operatorName: 'XL Axiata', quota: '50', price: '90.000', validity: '28 Hari', logo: 'image/xl.png' },
  { operator: 'xl', operatorName: 'XL Axiata', quota: '65', price: '100.000', validity: '28 Hari', logo: 'image/xl.png' },
  { operator: 'xl', operatorName: 'XL Axiata', quota: '100', price: '125.000', validity: '28 Hari', logo: 'image/xl.png' },
  { operator: 'xl', operatorName: 'XL Axiata', quota: '150', price: '150.000', validity: '28 Hari', logo: 'image/xl.png' },

  // Tri
  { operator: 'tri', operatorName: 'Tri', quota: '7', price: '35.000', validity: '28 Hari', logo: 'image/tri.png' },
  { operator: 'tri', operatorName: 'Tri', quota: '11', price: '40.000', validity: '28 Hari', logo: 'image/tri.png' },
  { operator: 'tri', operatorName: 'Tri', quota: '15', price: '50.000', validity: '28 Hari', logo: 'image/tri.png' },
  { operator: 'tri', operatorName: 'Tri', quota: '18', price: '55.000', validity: '28 Hari', logo: 'image/tri.png' },
  { operator: 'tri', operatorName: 'Tri', quota: '20', price: '60.000', validity: '28 Hari', logo: 'image/tri.png' },
  { operator: 'tri', operatorName: 'Tri', quota: '30', price: '65.000', validity: '28 Hari', logo: 'image/tri.png' },
  { operator: 'tri', operatorName: 'Tri', quota: '35', price: '75.000', validity: '28 Hari', logo: 'image/tri.png' },
  { operator: 'tri', operatorName: 'Tri', quota: '42', price: '80.000', validity: '28 Hari', logo: 'image/tri.png' },
  { operator: 'tri', operatorName: 'Tri', quota: '65', price: '100.000', validity: '28 Hari', logo: 'image/tri.png' },
  { operator: 'tri', operatorName: 'Tri', quota: '80', price: '120.000', validity: '28 Hari', logo: 'image/tri.png' },
  { operator: 'tri', operatorName: 'Tri', quota: '150', price: '150.000', validity: '28 Hari', logo: 'image/tri.png' },
  { operator: 'tri', operatorName: 'Tri', quota: '300', price: '200.000', validity: '28 Hari', logo: 'image/tri.png' },

  // Telkomsel
  { operator: 'telkomsel', operatorName: 'Telkomsel', quota: '10', price: '50.000', validity: '28 Hari', logo: 'image/telkomsel.png' },
  { operator: 'telkomsel', operatorName: 'Telkomsel', quota: '16', price: '55.000', validity: '28 Hari', logo: 'image/telkomsel.png' },
  { operator: 'telkomsel', operatorName: 'Telkomsel', quota: '25', price: '70.000', validity: '28 Hari', logo: 'image/telkomsel.png' },
  { operator: 'telkomsel', operatorName: 'Telkomsel', quota: '40', price: '85.000', validity: '28 Hari', logo: 'image/telkomsel.png' },
  { operator: 'telkomsel', operatorName: 'Telkomsel', quota: '60', price: '105.000', validity: '28 Hari', logo: 'image/telkomsel.png' },

  // Indosat Ooredoo
  { operator: 'indosat', operatorName: 'Indosat Ooredoo', quota: '40', price: '80.000', validity: '28 Hari', logo: 'image/indosat.png' },
  { operator: 'indosat', operatorName: 'Indosat Ooredoo', quota: '51', price: '90.000', validity: '28 Hari', logo: 'image/indosat.png' },
  { operator: 'indosat', operatorName: 'Indosat Ooredoo', quota: '100', price: '125.000', validity: '28 Hari', logo: 'image/indosat.png' },
  { operator: 'indosat', operatorName: 'Indosat Ooredoo', quota: '150', price: '150.000', validity: '28 Hari', logo: 'image/indosat.png' },

  // Axis
  { operator: 'axis', operatorName: 'Axis', quota: '14', price: '45.000', validity: '28 Hari', logo: 'image/axis.png' },
  { operator: 'axis', operatorName: 'Axis', quota: '22', price: '60.000', validity: '28 Hari', logo: 'image/axis.png' },
  { operator: 'axis', operatorName: 'Axis', quota: '33', price: '75.000', validity: '28 Hari', logo: 'image/axis.png' },
  { operator: 'axis', operatorName: 'Axis', quota: '60', price: '95.000', validity: '28 Hari', logo: 'image/axis.png' }
];

var waNumber = '6287812203568';
var storeName = 'Iman Cell -BERKAH-';
var activeFilter = 'all';
var pendingPackage = null;

// ===== WA ICON SVG =====
var waSvg = '<svg class="wa-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

// ===== PHONE NUMBER UTILITIES =====
function getSavedPhone() {
  try {
    return localStorage.getItem('imancell_phone') || '';
  } catch (e) {
    return '';
  }
}

function savePhone(number) {
  try {
    localStorage.setItem('imancell_phone', number);
  } catch (e) {}
}

function normalizePhone(input) {
  var cleaned = input.replace(/[\s\-()]/g, '');
  if (cleaned.indexOf('+62') === 0) {
    cleaned = '0' + cleaned.substring(3);
  } else if (cleaned.indexOf('62') === 0) {
    cleaned = '0' + cleaned.substring(2);
  }
  return cleaned;
}

function validatePhone(input) {
  var normalized = normalizePhone(input);
  if (!/^\d+$/.test(normalized)) {
    return { valid: false, error: 'Nomor HP hanya boleh berisi angka.' };
  }
  if (normalized.length < 10) {
    return { valid: false, error: 'Nomor HP minimal 10 digit.' };
  }
  if (normalized.length > 13) {
    return { valid: false, error: 'Nomor HP maksimal 13 digit.' };
  }
  return { valid: true, phone: normalized };
}

// ===== MODAL FUNCTIONS =====
function showModal() {
  var modal = document.getElementById('phoneModal');
  var input = document.getElementById('phoneInput');
  var error = document.getElementById('phoneError');
  var savedPhone = getSavedPhone();

  error.style.display = 'none';

  if (savedPhone) {
    input.value = savedPhone;
  } else {
    input.value = '';
  }

  modal.style.display = 'flex';
  setTimeout(function() { input.focus(); }, 100);
}

function hideModal() {
  var modal = document.getElementById('phoneModal');
  modal.style.display = 'none';
}

function openWhatsApp(pkg) {
  var phone = getSavedPhone();
  var message = 'Halo ' + storeName + ', saya ingin memesan:\n' +
    'Produk: ' + pkg.operatorName + ' ' + pkg.quota + ' GB\n' +
    'Harga: Rp' + pkg.price + '\n' +
    'Nomor HP: ' + phone;
  var waLink = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(message);
  window.open(waLink, '_blank');
}

// ===== FILTER TABS =====
function initTabs() {
  var tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      activeFilter = this.getAttribute('data-filter');
      tabs.forEach(function(t) { t.classList.remove('active'); });
      this.classList.add('active');
      renderCards();
    });
  });
}

// ===== RENDER CARDS =====
function renderCards() {
  var grid = document.getElementById('cardGrid');
  if (!grid) return;

  grid.innerHTML = '';

  var filtered = activeFilter === 'all'
    ? packages
    : packages.filter(function(p) { return p.operator === activeFilter; });

  filtered.forEach(function(pkg) {
    var card = document.createElement('div');
    card.className = 'package-card';
    card.setAttribute('data-operator', pkg.operator);
    card.innerHTML =
      '<img src="' + pkg.logo + '" alt="Logo ' + pkg.operatorName + '" class="card-logo">' +
      '<div class="card-quota">' + pkg.quota + ' <span>GB</span></div>' +
      '<div class="card-validity">Masa aktif ' + pkg.validity + '</div>' +
      '<div class="card-price"><span class="currency">Rp</span>' + pkg.price + '</div>' +
      '<button class="btn-whatsapp card-buy-btn" data-operator="' + pkg.operator + '" data-quota="' + pkg.quota + '" data-price="' + pkg.price + '" data-operator-name="' + pkg.operatorName + '">' +
        waSvg + 'Pesan/Beli' +
      '</button>';

    grid.appendChild(card);
  });

  requestAnimationFrame(function() {
    initFadeIn();
  });
}

// ===== INTERSECTION OBSERVER FOR FADE-IN =====
function initFadeIn() {
  var elements = document.querySelectorAll('.fade-in:not(.visible)');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -20px 0px'
    });

    elements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    elements.forEach(function(el) {
      el.classList.add('visible');
    });
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
  initTabs();
  renderCards();
  initFadeIn();

  // Delegated click handler for buy buttons
  document.getElementById('cardGrid').addEventListener('click', function(e) {
    var btn = e.target.closest('.card-buy-btn');
    if (!btn) return;

    var pkgData = {
      operator: btn.getAttribute('data-operator'),
      operatorName: btn.getAttribute('data-operator-name'),
      quota: btn.getAttribute('data-quota'),
      price: btn.getAttribute('data-price')
    };

    var savedPhone = getSavedPhone();
    if (savedPhone) {
      openWhatsApp(pkgData);
    } else {
      pendingPackage = pkgData;
      showModal();
    }
  });

  // Modal submit
  document.getElementById('phoneSubmit').addEventListener('click', function() {
    var input = document.getElementById('phoneInput');
    var error = document.getElementById('phoneError');
    var result = validatePhone(input.value);

    if (!result.valid) {
      error.textContent = result.error;
      error.style.display = 'block';
      input.focus();
      return;
    }

    savePhone(result.phone);
    hideModal();

    if (pendingPackage) {
      openWhatsApp(pendingPackage);
      pendingPackage = null;
    }
  });

  // Enter key on input
  document.getElementById('phoneInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      document.getElementById('phoneSubmit').click();
    }
  });

  // Close modal
  document.getElementById('modalClose').addEventListener('click', function() {
    hideModal();
    pendingPackage = null;
  });

  // Click outside modal to close
  document.getElementById('phoneModal').addEventListener('click', function(e) {
    if (e.target === this) {
      hideModal();
      pendingPackage = null;
    }
  });

  // Ganti Nomor button
  document.getElementById('phoneChange').addEventListener('click', function() {
    var input = document.getElementById('phoneInput');
    var error = document.getElementById('phoneError');
    var changeWrap = document.getElementById('phoneChangeWrap');

    try { localStorage.removeItem('imancell_phone'); } catch (e) {}
    input.value = '';
    error.style.display = 'none';
    changeWrap.style.display = 'none';
    input.focus();
  });

  // Show "Ganti Nomor" when modal opens and phone is saved
  var observer2 = new MutationObserver(function() {
    var modal = document.getElementById('phoneModal');
    var changeWrap = document.getElementById('phoneChangeWrap');
    var saved = getSavedPhone();
    if (modal.style.display === 'flex' && saved) {
      changeWrap.style.display = 'block';
    } else {
      changeWrap.style.display = 'none';
    }
  });

  var phoneModal = document.getElementById('phoneModal');
  observer2.observe(phoneModal, { attributes: true, attributeFilter: ['style'] });
});
