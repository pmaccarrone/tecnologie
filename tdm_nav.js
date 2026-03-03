/**
 * TdM Navigation Bar - Componente condiviso
 * Tecnologie di Produzione - Accademia Albertina di Torino
 * v2.0 - Navbar globale + gestione selezione cross-pagina
 */
(function() {
  'use strict';

  var NAV_ITEMS = [
    { id: 'home',      label: 'Home',        href: 'TdM_Home.html',             color: '#ffffff' },
    { id: 'db',        label: 'Database',     href: 'TdM_DB_tecnologie.html',    color: '#4ecdc4' },
    { id: 'forma',     label: 'Mappa Forma',  href: 'TdM_Mappa_Forma.html',      color: '#ff6b6b' },
    { id: 'materiale', label: 'Mappa Mat.',   href: 'TdM_Mappa_Materiale.html',  color: '#ffd700' },
    { id: 'tecnologia',label: 'Mappa Tecn.',  href: 'TdM_Mappa_tecnologie.html', color: '#a29bfe' },
    { id: 'tutorial',  label: 'Tutorial',     href: 'tutorial_tecnologie.html',   color: '#74b9ff' }
  ];

  var currentPage = '';
  var path = window.location.pathname.split('/').pop() || 'TdM_Home.html';
  if (path === '' || path === 'index.html') path = 'TdM_Home.html';
  NAV_ITEMS.forEach(function(item) {
    if (path === item.href) currentPage = item.id;
  });

  // Non mostrare nav sulla Home (ha i pulsantoni)
  if (currentPage === 'home') return;

  // === CSS ===
  var style = document.createElement('style');
  style.textContent = 
    '#tdm-nav{background:#12122a;border-bottom:1px solid rgba(255,255,255,0.1);padding:0.35rem 1rem;display:flex;align-items:center;gap:0.5rem;font-family:system-ui,-apple-system,sans-serif;position:sticky;top:0;z-index:10000}' +
    '#tdm-nav .tdm-nav-logo{height:32px;width:auto;cursor:pointer;flex-shrink:0;transition:opacity 0.2s}' +
    '#tdm-nav .tdm-nav-logo:hover{opacity:0.7}' +
    '#tdm-nav .tdm-nav-title{color:#fff;font-size:0.75rem;font-weight:600;white-space:nowrap;line-height:1.2}' +
    '#tdm-nav .tdm-nav-title span{color:#00d4ff;font-weight:400;font-size:0.6rem;display:block}' +
    '#tdm-nav .tdm-nav-page{font-size:0.85rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;white-space:nowrap;margin-right:auto}' +
    '#tdm-nav .tdm-nav-links{display:flex;gap:0.3rem;flex-shrink:0;align-items:center}' +
    '#tdm-nav .tdm-nav-btn{padding:0.25rem 0.6rem;border-radius:5px;text-decoration:none;font-size:0.65rem;font-weight:600;border:1.5px solid;transition:all 0.2s;cursor:pointer;white-space:nowrap;background:rgba(26,26,46,0.9)}' +
    '#tdm-nav .tdm-nav-btn:hover{transform:translateY(-1px);filter:brightness(1.3)}' +
    '#tdm-nav .tdm-nav-btn.active{opacity:0.4;pointer-events:none}' +
    '#tdm-sel-dialog{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);z-index:99999;justify-content:center;align-items:center;font-family:system-ui,sans-serif}' +
    '#tdm-sel-dialog.show{display:flex}' +
    '#tdm-sel-dialog .dlg{background:#1a1a2e;border:1px solid rgba(255,255,255,0.2);border-radius:12px;padding:1.5rem;max-width:400px;text-align:center;color:#fff;box-shadow:0 8px 32px rgba(0,0,0,0.5)}' +
    '#tdm-sel-dialog h3{margin:0 0 0.5rem;font-size:1rem;color:#00d4ff}' +
    '#tdm-sel-dialog p{color:#aaa;font-size:0.85rem;margin:0 0 1.2rem}' +
    '#tdm-sel-dialog .dlg-btns{display:flex;gap:0.8rem;justify-content:center}' +
    '#tdm-sel-dialog .dlg-btn{padding:0.5rem 1.2rem;border-radius:8px;border:none;font-weight:600;font-size:0.8rem;cursor:pointer;transition:all 0.2s}' +
    '#tdm-sel-dialog .dlg-btn:hover{transform:translateY(-1px)}' +
    '#tdm-sel-dialog .dlg-keep{background:#4ecdc4;color:#000}' +
    '#tdm-sel-dialog .dlg-clear{background:#333;color:#fff;border:1px solid #555}' +
    '@media(max-width:700px){#tdm-nav{padding:0.3rem 0.5rem;gap:0.3rem}#tdm-nav .tdm-nav-title{display:none}#tdm-nav .tdm-nav-page{font-size:0.7rem;margin-right:auto}#tdm-nav .tdm-nav-btn{padding:0.2rem 0.4rem;font-size:0.6rem}}';
  document.head.appendChild(style);

  // === NAVBAR ===
  var nav = document.createElement('div');
  nav.id = 'tdm-nav';

  var logo = document.createElement('img');
  logo.className = 'tdm-nav-logo';
  logo.src = 'logo_albertina_scontornato.png';
  logo.alt = 'Home';
  logo.title = 'Torna alla Home';
  logo.onclick = function() { window.location.href = 'TdM_Home.html'; };
  nav.appendChild(logo);

  var title = document.createElement('div');
  title.className = 'tdm-nav-title';
  title.innerHTML = 'Tecnologie di Produzione<span>Accademia Albertina &middot; Prof. Maccarrone</span>';
  nav.appendChild(title);

  // Titolo pagina corrente
  var pageTitles = { db: 'DATABASE', forma: 'MAPPA FORMA', materiale: 'MAPPA MATERIALE', tecnologia: 'MAPPA TECNOLOGIA', tutorial: 'TUTORIAL' };
  if (currentPage && pageTitles[currentPage]) {
    var currentItem = NAV_ITEMS.find(function(it) { return it.id === currentPage; });
    var pageTitle = document.createElement('div');
    pageTitle.className = 'tdm-nav-page';
    pageTitle.textContent = pageTitles[currentPage];
    pageTitle.style.color = currentItem ? currentItem.color : '#fff';
    nav.appendChild(pageTitle);
  }

  var linksDiv = document.createElement('div');
  linksDiv.className = 'tdm-nav-links';

  NAV_ITEMS.forEach(function(item) {
    if (item.id === 'home') return;
    var a = document.createElement('a');
    a.className = 'tdm-nav-btn' + (item.id === currentPage ? ' active' : '');
    a.href = item.href;
    a.textContent = item.label;
    a.style.borderColor = item.color;
    a.style.color = item.color;
    if (item.id !== currentPage) {
      a.addEventListener('click', function(e) {
        var sel = getSelectionData();
        if (sel && sel.length > 0) {
          e.preventDefault();
          showSelectionDialog(item.href, sel.length);
        }
      });
    }
    linksDiv.appendChild(a);
  });
  nav.appendChild(linksDiv);

  // === SELECTION DIALOG ===
  var dialog = document.createElement('div');
  dialog.id = 'tdm-sel-dialog';
  dialog.innerHTML = 
    '<div class="dlg">' +
    '<h3>Selezioni attive</h3>' +
    '<p id="tdm-sel-msg"></p>' +
    '<div class="dlg-btns">' +
    '<button class="dlg-btn dlg-keep" id="tdm-sel-keep">S\u00ec, mantieni</button>' +
    '<button class="dlg-btn dlg-clear" id="tdm-sel-clear">No, vai pulito</button>' +
    '</div></div>';

  // Inject
  document.body.insertBefore(dialog, document.body.firstChild);
  document.body.insertBefore(nav, document.body.firstChild);

  // === SELECTION LOGIC ===
  function getSelectionData() {
    try {
      var d = localStorage.getItem('tdm_selected');
      return d ? JSON.parse(d) : [];
    } catch(e) { return []; }
  }

  function clearSel() {
    try { localStorage.removeItem('tdm_selected'); } catch(e) {}
  }

  var pendingHref = '';

  function showSelectionDialog(href, count) {
    pendingHref = href;
    document.getElementById('tdm-sel-msg').textContent = 
      'Hai ' + count + ' tecnologi' + (count === 1 ? 'a' : 'e') + ' selezionat' + (count === 1 ? 'a' : 'e') + '.';
    dialog.classList.add('show');
  }

  document.getElementById('tdm-sel-keep').onclick = function() {
    dialog.classList.remove('show');
    window.location.href = pendingHref;
  };

  document.getElementById('tdm-sel-clear').onclick = function() {
    dialog.classList.remove('show');
    var sep = pendingHref.indexOf('?') >= 0 ? '&' : '?';
    window.location.href = pendingHref + sep + 'nosel=1';
  };

  dialog.addEventListener('click', function(e) {
    if (e.target === dialog) dialog.classList.remove('show');
  });

  // === API PUBBLICA ===
  window.tdmNav = {
    setSelection: function(arr) {
      try { localStorage.setItem('tdm_selected', JSON.stringify(arr || [])); } catch(e) {}
    },
    getSelection: function() { return getSelectionData(); },
    clearSelection: clearSel
  };

})();
