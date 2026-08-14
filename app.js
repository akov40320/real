/* ===================== Иконки (line-icons, наследуют currentColor) ===================== */
const ICONS = {
  pin: '<path d="M12 21s7-6.4 7-11.8A7 7 0 0 0 5 9.2C5 14.6 12 21 12 21z"/><circle cx="12" cy="9.3" r="2.4"/>',
  heart: '<path d="M12 20.2s-7.6-4.6-10-9.1C.6 7.4 2 3.8 5.7 3.8c2 0 3.4 1.1 4.3 2.6.9-1.5 2.3-2.6 4.3-2.6 3.7 0 5.1 3.6 3.7 7.3-2.4 4.5-10 9.1-10 9.1z"/>',
  heartFill: '<path d="M12 20.2s-7.6-4.6-10-9.1C.6 7.4 2 3.8 5.7 3.8c2 0 3.4 1.1 4.3 2.6.9-1.5 2.3-2.6 4.3-2.6 3.7 0 5.1 3.6 3.7 7.3-2.4 4.5-10 9.1-10 9.1z" fill="currentColor" stroke="none"/>',
  chat: '<path d="M4 5.2h16v11.2H8.2L4 20V5.2z"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  user: '<circle cx="12" cy="8.2" r="3.6"/><path d="M4.4 20c1.4-4 4-6 7.6-6s6.2 2 7.6 6"/>',
  chevronDown: '<polyline points="6 9 12 15 18 9"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><line x1="20" y1="20" x2="15.8" y2="15.8"/>',
  sliders: '<line x1="4" y1="6" x2="20" y2="6"/><circle cx="9" cy="6" r="1.8"/><line x1="4" y1="12" x2="20" y2="12"/><circle cx="16" cy="12" r="1.8"/><line x1="4" y1="18" x2="20" y2="18"/><circle cx="11" cy="18" r="1.8"/>',
  list: '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>',
  map: '<path d="M9 4 4 6.2v13.6L9 17.6l6 2.2 5-2.2V4l-5 2.2-6-2.2z"/><line x1="9" y1="4" x2="9" y2="17.6"/><line x1="15" y1="6.2" x2="15" y2="20"/>',
  layers: '<path d="M12 3 3 8l9 5 9-5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  building: '<rect x="5" y="3" width="14" height="18" rx="1" /><line x1="8" y1="8" x2="10" y2="8"/><line x1="14" y1="8" x2="16" y2="8"/><line x1="8" y1="13" x2="10" y2="13"/><line x1="14" y1="13" x2="16" y2="13"/>',
  ruler: '<rect x="3.5" y="3.5" width="17" height="17" rx="1.5"/><path d="M3.5 8h4M3.5 13h2.5M3.5 17.5h6M8 3.5v4M13 3.5v2.5M17.5 3.5v6"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15" rx="1.5"/><line x1="3.5" y1="9.5" x2="20.5" y2="9.5"/><line x1="7.5" y1="3" x2="7.5" y2="6.5"/><line x1="16.5" y1="3" x2="16.5" y2="6.5"/>',
  pencil: '<path d="M15 4.5 19.2 8.7 8.3 19.6 4 20l.5-4.3L15 4.5z"/>',
  percent: '<line x1="5" y1="19" x2="19" y2="5"/><circle cx="7.5" cy="7.5" r="2"/><circle cx="16.5" cy="16.5" r="2"/>',
  shield: '<path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3z"/><polyline points="9 12 11.2 14.2 15 10"/>',
  balcony: '<line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="8" x2="4" y2="20"/><line x1="20" y1="8" x2="20" y2="20"/><line x1="7.5" y1="8" x2="7.5" y2="20"/><line x1="11" y1="8" x2="11" y2="20"/><line x1="14.5" y1="8" x2="14.5" y2="20"/><line x1="18" y1="8" x2="18" y2="20"/>',
  bath: '<path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2z"/><path d="M6 12V6.5A2.5 2.5 0 0 1 8.5 4c1 0 1.8.5 2.2 1.3"/><line x1="8" y1="21" x2="8" y2="22.5"/><line x1="16" y1="21" x2="16" y2="22.5"/>',
  window: '<rect x="4" y="4" width="16" height="16" rx="1.5"/><line x1="12" y1="4" x2="12" y2="20"/><line x1="4" y1="12" x2="20" y2="12"/>',
  elevator: '<rect x="6" y="3" width="12" height="18" rx="1.5"/><polyline points="10.5 9 12 7 13.5 9"/><polyline points="10.5 15 12 17 13.5 15"/>',
  parking: '<circle cx="12" cy="12" r="9"/><path d="M10 16V8h3a2.5 2.5 0 0 1 0 5h-3"/>',
  share: '<circle cx="6" cy="12" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="18" cy="18" r="2.2"/><line x1="7.9" y1="10.9" x2="16.1" y2="7.1"/><line x1="7.9" y1="13.1" x2="16.1" y2="16.9"/>',
  star: '<path d="M12 3.5l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.3l-5.4 3.1 1-6.1-4.4-4.3 6.1-.9L12 3.5z"/>',
  starFill: '<path d="M12 3.5l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.3l-5.4 3.1 1-6.1-4.4-4.3 6.1-.9L12 3.5z" fill="currentColor" stroke="none"/>',
  play: '<circle cx="12" cy="12" r="9"/><polygon points="10 8 16 12 10 16" fill="currentColor" stroke="none"/>',
  layout: '<rect x="3.5" y="3.5" width="17" height="17" rx="1.5"/><line x1="12" y1="3.5" x2="12" y2="13"/><line x1="3.5" y1="13" x2="20.5" y2="13"/><line x1="12" y1="13" x2="12" y2="20.5"/>',
  key: '<circle cx="8" cy="15.5" r="3.5"/><line x1="10.5" y1="13" x2="19.3" y2="4.2"/><line x1="15.2" y1="8.3" x2="17.6" y2="10.7"/><line x1="17.3" y1="6.2" x2="19.7" y2="8.6"/>',
  armchair: '<path d="M5.5 12V8.2A2.2 2.2 0 0 1 7.7 6h8.6a2.2 2.2 0 0 1 2.2 2.2V12"/><rect x="4" y="12" width="16" height="6" rx="1.5"/><line x1="5" y1="18" x2="5" y2="21"/><line x1="19" y1="18" x2="19" y2="21"/>',
  megaphone: '<path d="M3 10v4h3l7.5 4V6L6 10H3z"/><path d="M13.2 9.2a3.6 3.6 0 0 1 0 5.6"/>',
  roller: '<rect x="4" y="4" width="13" height="6" rx="1.5"/><line x1="8.5" y1="10" x2="8.5" y2="15"/><rect x="6" y="15" width="5" height="5.5" rx="1"/>',
  close: '<line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/>',
  arrowLeft: '<polyline points="15 5 8 12 15 19"/>',
  phone: '<path d="M6 3.5h3l1.5 4-2 1.3a12.5 12.5 0 0 0 5.7 5.7l1.3-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 4.5 5.1 1.5 1.5 0 0 1 6 3.5z"/>',
  photo: '<rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/><circle cx="9" cy="10" r="1.8"/><path d="M3.5 16.5l4.5-4.5 3 3 3.5-4 4.5 5"/>'
};
function icon(name, cls) { return `<svg class="icon${cls ? ' ' + cls : ''}" viewBox="0 0 24 24">${ICONS[name] || ''}</svg>`; }

/* ===================== Данные ===================== */
const images = {
  apartment: [
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=85',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=85',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85',
    'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=700&q=85'
  ],
  house: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85',
  home: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85',
  office: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
  renovation: 'https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=900&q=85',
  agent: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80'
};

const featureIcons = {
  'Балкон': 'balcony', 'Санузел раздельный': 'bath', 'Окна во двор': 'window',
  'Лифт пассажирский': 'elevator', 'Парковка': 'parking', 'Газ': 'shield',
  'Гараж': 'parking', 'Хозпостройки': 'building', 'Дом с участком': 'layout',
  'Отдельный вход': 'window', 'Центр города': 'pin', 'Витринные окна': 'window',
  'Готово к работе': 'shield', 'Под ремонт': 'pencil', 'ИЖС': 'layout',
  'Подъезд круглый год': 'shield', 'Электричество рядом': 'percent',
  'Тихий район': 'pin', 'Собственность': 'shield'
};

const listings = [
  { id: 1, kind: 'Квартира', dot: 'blue', area: 56, title: '2-комн. квартира, 56 м²', price: 2850000, location: 'мкр. 1-й, 15 · Снежное', meta: '8 этаж из 12 · Кирпичный дом', tag: 'Новое', tagColor: 'green', image: images.apartment[0],
    facts: [['layers', '8 этаж из 12', 'Этаж'], ['building', 'Кирпичный дом', 'Тип дома'], ['ruler', '56 м²', 'Общая площадь'], ['calendar', '2024 год', 'Год постройки'], ['pencil', 'С ремонтом', 'Состояние'], ['percent', 'Не в ипотеке', 'Финансирование']],
    features: ['Балкон', 'Санузел раздельный', 'Окна во двор', 'Лифт пассажирский', 'Парковка'] },
  { id: 2, kind: 'Дом', dot: 'orange', area: 120, title: 'Дом, 120 м² на участке 6 сот.', price: 6200000, location: 'ул. Лесная, 23 · Снежное', meta: '120 м² · 6 соток · Все коммуникации', tag: 'Дом', tagColor: 'blue', image: images.house,
    facts: [['layers', '1 этаж', 'Этаж'], ['building', 'Кирпичный дом', 'Тип дома'], ['ruler', '120 м²', 'Общая площадь'], ['calendar', '2019 год', 'Год постройки'], ['pencil', 'С ремонтом', 'Состояние'], ['percent', 'Возможна ипотека', 'Финансирование']],
    features: ['Газ', 'Гараж', 'Хозпостройки', 'Дом с участком'] },
  { id: 3, kind: 'Коммерция', dot: 'violet', area: 96, title: 'Торговое помещение, 96 м²', price: 4500000, location: 'ул. Центральная, 12 · Снежное', meta: '1 этаж · Отдельный вход', tag: 'Коммерция', tagColor: 'violet', image: images.office,
    facts: [['layers', '1 этаж', 'Этаж'], ['building', 'Отдельный вход', 'Тип дома'], ['ruler', '96 м²', 'Общая площадь'], ['calendar', '2021 год', 'Год постройки'], ['pencil', 'Готово к работе', 'Состояние'], ['percent', 'Не в ипотеке', 'Финансирование']],
    features: ['Отдельный вход', 'Центр города', 'Витринные окна', 'Готово к работе'] },
  { id: 4, kind: 'Квартира', dot: 'blue', area: 45, title: '2-комн. квартира, 45 м²', price: 1950000, location: 'мкр. 3-й, 8 · Снежное', meta: '2 этаж из 5 · Панельный дом', tag: 'Цена снижена', tagColor: 'orange', image: images.renovation,
    facts: [['layers', '2 этаж из 5', 'Этаж'], ['building', 'Панельный дом', 'Тип дома'], ['ruler', '45 м²', 'Общая площадь'], ['calendar', '1986 год', 'Год постройки'], ['pencil', 'Под ремонт', 'Состояние'], ['percent', 'Возможна ипотека', 'Финансирование']],
    features: ['Под ремонт', 'Балкон', 'Окна во двор'] },
  { id: 5, kind: 'Участок', dot: 'teal', area: 10, title: 'Участок, 10 соток', price: 650000, location: 'ул. Садовая, 45 · Снежное', meta: '10 соток · Под строительство', tag: 'Участок', tagColor: 'teal', image: images.home,
    facts: [['ruler', '10 соток', 'Площадь'], ['building', 'ИЖС', 'Назначение'], ['layers', 'Ровный', 'Рельеф'], ['calendar', 'Свободен', 'Статус'], ['pencil', 'Подъезд круглый год', 'Доступ'], ['percent', 'Собственность', 'Финансирование']],
    features: ['ИЖС', 'Подъезд круглый год', 'Электричество рядом', 'Тихий район', 'Собственность'] }
];

const PRICE_MIN = 0, PRICE_MAX = 15000000;
const state = { page: 'home', filter: 'Все', query: '', selected: null, gallery: 0, liked: new Set(), modal: null, priceFrom: PRICE_MIN, priceTo: PRICE_MAX, view: 'map' };
const money = value => new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
const app = document.querySelector('#app');

/* ===================== Компоненты ===================== */
function header() {
  return `<header class="topbar">
    <button class="brand" data-action="home"><span class="brand-mark">${icon('pin').replace('icon', 'icon brand-icon')}</span><span>Снежное</span></button>
    <nav class="nav" aria-label="Основная навигация">
      <button class="${state.filter === 'Все' ? 'is-active' : ''}" data-nav="Купить">Купить</button>
      <button data-nav="Снять">Снять</button>
      <button data-nav="Продать">Продать</button>
    </nav>
    <div class="top-actions">
      <button class="city-pill" data-action="city">${icon('pin')}Снежное${icon('chevronDown')}</button>
      <button class="icon-btn" data-action="favorites" aria-label="Избранное">${icon('heart')}${state.liked.size ? `<span class="badge">${state.liked.size}</span>` : ''}</button>
      <button class="icon-btn" data-action="messages" aria-label="Сообщения">${icon('chat')}</button>
      <button class="primary-btn" data-action="publish">${icon('plus')}<span>Разместить объявление</span></button>
      <button class="icon-btn avatar-btn" data-action="login" aria-label="Войти">${icon('user')}</button>
    </div>
  </header>`;
}

function hero() {
  return `<section class="hero">
    <div class="hero-collage">
      <img src="${images.apartment[0]}" alt="Интерьер квартиры"/><img src="${images.house}" alt="Дом"/><img src="${images.home}" alt="Дом с участком"/><img src="${images.office}" alt="Коммерческое помещение"/><img src="${images.renovation}" alt="Помещение под ремонт"/>
    </div>
    <div class="hero-fade"></div>
    <form class="search-panel" id="searchForm">
      <h1>Найдите свой идеальный объект в Снежном</h1>
      <div class="search-row">
        <div class="search-field">${icon('search')}<input class="search-input" id="searchInput" placeholder="Что ищете? Например, 2-комнатная квартира" value="${state.query}"/></div>
        <select class="select-box" id="searchKind"><option>Любой тип</option><option>Квартира</option><option>Дом</option><option>Коммерция</option><option>Участок</option></select>
        <button class="search-btn">Найти</button>
      </div>
    </form>
  </section>`;
}

function promoTiles() {
  const tiles = [
    { key: 'buy', color: 'blue', icon: 'key', title: 'Купить', sub: 'Квартиры и другая недвижимость' },
    { key: 'rent', color: 'teal', icon: 'armchair', title: 'Снять', sub: 'Аренда квартир и домов' },
    { key: 'sell', color: 'orange', icon: 'megaphone', title: 'Продать', sub: 'Разместите объявление и найдите покупателя' },
    { key: 'invest', color: 'violet', icon: 'roller', title: 'Инвестировать', sub: 'Флиппинг и готовые проекты' }
  ];
  return `<div class="promo-grid">${tiles.map(t => `<button class="promo-tile promo-${t.color}" data-promo="${t.key}"><span class="promo-icon">${icon(t.icon)}</span><span class="promo-title">${t.title}</span><span class="promo-sub">${t.sub}</span></button>`).join('')}</div>`;
}

function card(item) {
  const liked = state.liked.has(item.id);
  return `<article class="listing-card" data-open="${item.id}">
    <div class="card-image-wrap">
      <img class="card-image" src="${item.image}" alt="${item.title}" loading="lazy"/>
      <span class="tag tag-${item.tagColor}">${item.tag}</span>
      <button class="heart-btn ${liked ? 'is-liked' : ''}" data-like="${item.id}" aria-label="Добавить в избранное">${icon(liked ? 'heartFill' : 'heart')}</button>
    </div>
    <div class="card-body">
      <h3 class="card-title">${item.title}</h3>
      <div class="card-price">${money(item.price)}</div>
      <div class="card-meta">${icon('pin', 'meta-icon')}${item.location}<br/><span class="meta-indent">${item.meta}</span></div>
      <div class="card-footer"><span><i class="dot dot-${item.dot}"></i>${item.kind}</span><span class="save-link">${icon(liked ? 'heartFill' : 'heart')}${liked ? 'Сохранено' : 'Сохранить'}</span></div>
    </div>
  </article>`;
}

function filters() {
  const chip = (label, act, active) => `<button class="filter-chip ${active ? 'active' : ''}" data-action="${act}">${label}${icon('chevronDown')}</button>`;
  return `<div class="toolbar">
    ${chip('Тип недвижимости', 'type', false)}
    ${chip('Купить', 'buyMode', state.filter === 'Все')}
    ${chip('Цена', 'price', false)}
    ${chip('Комнаты', 'rooms', false)}
    ${chip('Площадь', 'area', false)}
    <button class="filter-chip" data-action="more">${icon('sliders')}Ещё фильтры</button>
    <span class="toolbar-spacer"></span>
    <div class="view-toggle">
      <button class="filter-chip ${state.view === 'list' ? 'active' : ''}" data-action="list">${icon('list')}Списком</button>
      <button class="filter-chip ${state.view === 'map' ? 'active' : ''}" data-action="map">${icon('map')}На карте</button>
    </div>
  </div>`;
}

function priceSlider() {
  const pct = v => Math.round(((v - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100);
  return `<div class="price-slider">
    <div class="slider-track"><div class="slider-range" style="left:${pct(state.priceFrom)}%;right:${100 - pct(state.priceTo)}%"></div></div>
    <input type="range" class="range-input range-from" min="${PRICE_MIN}" max="${PRICE_MAX}" step="50000" value="${state.priceFrom}" id="priceFromRange"/>
    <input type="range" class="range-input range-to" min="${PRICE_MIN}" max="${PRICE_MAX}" step="50000" value="${state.priceTo}" id="priceToRange"/>
  </div>`;
}

function sidebar() {
  const kinds = [['Квартира', 1246], ['Дом', 357], ['Коммерческая', 126], ['Участок', 98], ['Гараж', 42]];
  return `<aside class="sidebar">
    <h3 class="side-title">Фильтры <button class="reset-link" data-action="reset">Сбросить всё</button></h3>
    ${kinds.map((k, i) => `<label class="check"><input type="checkbox" ${i === 0 ? 'checked' : ''}/><span class="check-box"></span>${k[0]} <span class="check-count">${k[1]}</span></label>`).join('')}
    <hr/>
    <h3 class="side-title">Цена, ₽</h3>
    <div class="range-row">
      <input class="price-input" id="priceFromInput" value="${state.priceFrom.toLocaleString('ru-RU')}"/>
      <span class="range-sep">—</span>
      <input class="price-input" id="priceToInput" value="${state.priceTo.toLocaleString('ru-RU')}"/>
    </div>
    ${priceSlider()}
    <h3 class="side-title" style="margin-top:22px">Комнаты</h3>
    <label class="check"><input type="checkbox"/><span class="check-box"></span>1 комната</label>
    <label class="check"><input type="checkbox" checked/><span class="check-box"></span>2 комнаты</label>
    <label class="check"><input type="checkbox"/><span class="check-box"></span>3 комнаты</label>
  </aside>`;
}

function homePage() {
  const q = state.query.trim().toLowerCase();
  const visible = listings.filter(item =>
    (state.filter === 'Все' || state.filter === 'Купить' || item.kind === state.filter) &&
    item.price >= state.priceFrom && item.price <= state.priceTo &&
    (!q || `${item.title} ${item.location} ${item.kind}`.toLowerCase().includes(q))
  );
  return `${header()}${hero()}<main class="main-content">
    ${filters()}
    ${promoTiles()}
    <div class="layout">
      ${sidebar()}
      <section>
        <div class="results-head">
          <h2>Актуальные предложения <span class="results-count">${visible.length ? '· ' + visible.length + ' объявлений' : ''}</span></h2>
          <select class="sort-select"><option>Сначала новые</option><option>Сначала дешевле</option><option>Сначала дороже</option></select>
        </div>
        <div class="listing-grid">${visible.length ? visible.map(card).join('') : `<div class="empty">По вашему запросу ничего не найдено.<br/><button class="reset-link" data-action="reset">Сбросить фильтры</button></div>`}</div>
      </section>
    </div>
  </main>`;
}

function miniMap(label) {
  return `<div class="map-panel">
    <svg class="map-svg" viewBox="0 0 400 220" preserveAspectRatio="none">
      <rect width="400" height="220" fill="#eaf2e2"/>
      <path d="M0 60 L400 40" stroke="#fff" stroke-width="10"/>
      <path d="M0 140 L400 165" stroke="#fff" stroke-width="14"/>
      <path d="M90 0 L60 220" stroke="#fff" stroke-width="10"/>
      <path d="M300 0 L330 220" stroke="#fff" stroke-width="8"/>
      <rect x="120" y="80" width="46" height="34" rx="3" fill="#dbe6cd"/>
      <rect x="200" y="95" width="60" height="40" rx="3" fill="#dbe6cd"/>
      <rect x="150" y="150" width="40" height="30" rx="3" fill="#dbe6cd"/>
    </svg>
    <span class="map-pin">${icon('pin')}</span>
    <span class="map-label">${label}</span>
  </div>`;
}

function detailPage(item) {
  const photos = images.apartment;
  const activeIdx = state.gallery % photos.length;
  const maxThumbs = 4;
  const thumbs = photos.slice(0, maxThumbs);
  const extra = photos.length - maxThumbs;
  return `${header()}<main class="detail-page">
    <div class="breadcrumbs"><button class="back-link" data-action="home">${icon('arrowLeft')}Назад к списку</button><span class="crumb-sep">·</span><span>Купить</span><span class="crumb-sep">·</span><span>Квартиры</span><span class="crumb-sep">·</span><span>${item.title}</span></div>
    <div class="detail-layout">
      <section class="detail-left">
        <div class="gallery-row">
          <div class="main-photo">
            <img src="${photos[activeIdx]}" alt="${item.title}"/>
            <span class="counter">${activeIdx + 1} / ${photos.length}</span>
            <div class="photo-tools">
              <button class="tool-pill" data-action="video">${icon('play')}Видео</button>
              <button class="tool-pill" data-action="planLayout">${icon('layout')}Планировка</button>
            </div>
            <button class="photo-heart ${state.liked.has(item.id) ? 'is-liked' : ''}" data-like="${item.id}" aria-label="В избранное">${icon(state.liked.has(item.id) ? 'heartFill' : 'heart')}</button>
          </div>
          <div class="thumb-col">${thumbs.map((photo, i) => `<button class="thumb ${i === activeIdx ? 'active' : ''}" data-gallery="${i}"><img src="${photo}" alt="Фото ${i + 1}"/>${i === maxThumbs - 1 && extra > 0 ? `<span class="thumb-more">+${extra}</span>` : ''}</button>`).join('')}</div>
        </div>
        <section class="description-panel">
          <div class="tabs">
            <button class="tab active" data-tab="description">Описание</button>
            <button class="tab" data-tab="features">Характеристики</button>
            <button class="tab" data-tab="map">На карте</button>
          </div>
          <div id="detailTabContent">
            <p class="description">Светлая и уютная 2-комнатная квартира с современным ремонтом в новом доме. Удобная планировка: просторная кухня-гостиная, отдельная спальня, гардеробная. Окна выходят во двор, тихо и зелено. В шаговой доступности магазины, школы, детские сады и остановки общественного транспорта.</p>
            <div class="feature-row">${item.features.map(f => `<span class="feature">${icon(featureIcons[f] || 'shield')}${f}</span>`).join('')}</div>
          </div>
        </section>
      </section>
      <aside class="detail-right">
        <div class="price-card">
          <div class="price-card-top"><h1>${item.title}</h1><button class="icon-btn share-btn" data-action="share" aria-label="Поделиться">${icon('share')}</button></div>
          <div class="location">${icon('pin', 'meta-icon')}${item.location}</div>
          <div class="detail-price">${money(item.price)}<small>${Math.round(item.price / item.area).toLocaleString('ru-RU')} ₽ / ${item.kind === 'Участок' ? 'сотку' : 'м²'}</small></div>
          <div class="detail-actions">
            <button class="contact-btn" data-action="contact">Написать продавцу</button>
            <button class="phone-btn" data-action="phone">${icon('phone')}Показать телефон</button>
          </div>
          <div class="protect">${icon('shield')}Номер защищён от спама и мошенников</div>
          <div class="facts">${item.facts.map(([ic, value, label]) => `<div class="fact">${icon(ic, 'fact-icon')}<div><strong>${value}</strong><span>${label}</span></div></div>`).join('')}</div>
        </div>
        <div class="seller-panel">
          <img class="seller-avatar" src="${images.agent}" alt="Риелтор"/>
          <div><div class="seller-name">Ирина Петрова</div><div class="seller-sub">Риелтор · ${icon('starFill', 'star-icon')} 4,9 · 27 отзывов</div><div class="seller-since">На сайте с июля 2021</div></div>
        </div>
        <button class="seller-link" data-action="seller">Смотреть все объявления продавца</button>
        ${miniMap(item.location)}
      </aside>
    </div>
  </main>`;
}

function modal() {
  if (!state.modal) return '';
  const closeBtn = `<button class="modal-close" data-action="close" aria-label="Закрыть">${icon('close')}</button>`;
  if (state.modal === 'contact') return `<div class="modal-backdrop" data-close><div class="modal" role="dialog" aria-modal="true">${closeBtn}<h2>Написать продавцу</h2><p>Оставьте контакты — риелтор свяжется с вами и организует просмотр.</p><label>Имя</label><input id="contactName" placeholder="Как к вам обращаться?"/><label>Телефон</label><input id="contactPhone" placeholder="+7 (___) ___-__-__"/><label>Сообщение</label><textarea id="contactMessage">Здравствуйте! Хочу узнать подробнее об объекте.</textarea><div class="modal-actions"><button class="secondary-btn" data-action="close">Отмена</button><button class="primary-btn" data-action="send">Отправить заявку</button></div></div></div>`;
  if (state.modal === 'publish') return `<div class="modal-backdrop" data-close><div class="modal" role="dialog" aria-modal="true">${closeBtn}<h2>Разместить объявление</h2><p>В прототипе заявка сохраняется только демонстрационно.</p><label>Ваше имя</label><input placeholder="Имя"/><label>Телефон</label><input placeholder="+7 (___) ___-__-__"/><label>Что хотите разместить?</label><textarea placeholder="Например: 2-комнатную квартиру в Центральном районе"></textarea><div class="modal-actions"><button class="secondary-btn" data-action="close">Отмена</button><button class="primary-btn" data-action="sendPublish">Отправить</button></div></div></div>`;
  return `<div class="modal-backdrop" data-close><div class="modal">${closeBtn}<h2>${state.modal === 'phone' ? 'Телефон продавца' : 'Скоро будет доступно'}</h2><p>${state.modal === 'phone' ? 'В полноценной версии здесь появится защищённый номер продавца, +7 (938) ••• •• ••.' : 'Эта часть прототипа подготовлена для следующего этапа.'}</p><div class="modal-actions"><button class="primary-btn" data-action="close">Понятно</button></div></div></div>`;
}

function render() {
  const view = state.page === 'detail' ? detailPage(state.selected) : homePage();
  app.innerHTML = `<div class="app-shell">${view}</div>${modal()}`;
  bind();
}

function toast(message) { const el = document.querySelector('#toast'); el.textContent = message; el.classList.add('show'); clearTimeout(window.__toast); window.__toast = setTimeout(() => el.classList.remove('show'), 2300); }

function bind() {
  document.querySelectorAll('[data-nav]').forEach(btn => btn.addEventListener('click', () => { state.filter = btn.dataset.nav === 'Купить' ? 'Все' : btn.dataset.nav === 'Снять' ? 'Квартира' : 'Все'; render(); toast(`Раздел «${btn.dataset.nav}» открыт`); }));
  document.querySelectorAll('[data-open]').forEach(cardEl => cardEl.addEventListener('click', e => { if (e.target.closest('[data-like]')) return; state.selected = listings.find(item => item.id === Number(cardEl.dataset.open)); state.page = 'detail'; state.gallery = 0; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }));
  document.querySelectorAll('[data-like]').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); const id = Number(btn.dataset.like); state.liked.has(id) ? state.liked.delete(id) : state.liked.add(id); render(); toast(state.liked.has(id) ? 'Добавлено в избранное' : 'Удалено из избранного'); }));
  document.querySelectorAll('[data-gallery]').forEach(btn => btn.addEventListener('click', () => { state.gallery = Number(btn.dataset.gallery); render(); }));
  document.querySelectorAll('[data-action]').forEach(btn => btn.addEventListener('click', () => action(btn.dataset.action)));
  document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', e => { if (e.target === el) { state.modal = null; render(); } }));
  document.querySelectorAll('[data-tab]').forEach(tab => tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const content = document.querySelector('#detailTabContent');
    const item = state.selected;
    if (tab.dataset.tab === 'features') content.innerHTML = `<div class="feature-row">${item.features.map(f => `<span class="feature">${icon(featureIcons[f] || 'shield')}${f}</span>`).join('')}</div><div class="facts facts-inline">${item.facts.map(([ic, value, label]) => `<div class="fact">${icon(ic, 'fact-icon')}<div><strong>${value}</strong><span>${label}</span></div></div>`).join('')}</div>`;
    else if (tab.dataset.tab === 'map') content.innerHTML = `<p class="description">Объект расположен по адресу ${item.location}. Точный адрес открывается после обращения к продавцу.</p>${miniMap(item.location)}`;
    else content.innerHTML = `<p class="description">Светлая и уютная 2-комнатная квартира с современным ремонтом в новом доме. Удобная планировка: просторная кухня-гостиная, отдельная спальня, гардеробная. Окна выходят во двор, тихо и зелено. В шаговой доступности магазины, школы, детские сады и остановки общественного транспорта.</p><div class="feature-row">${item.features.map(f => `<span class="feature">${icon(featureIcons[f] || 'shield')}${f}</span>`).join('')}</div>`;
  }));
  const searchForm = document.querySelector('#searchForm');
  if (searchForm) searchForm.addEventListener('submit', e => { e.preventDefault(); state.query = document.querySelector('#searchInput').value; render(); toast(state.query ? `Поиск: ${state.query}` : 'Показываем все объекты'); });

  const fromRange = document.querySelector('#priceFromRange');
  const toRange = document.querySelector('#priceToRange');
  if (fromRange && toRange) {
    const commit = () => {
      let from = Number(fromRange.value), to = Number(toRange.value);
      if (from > to) [from, to] = [to, from];
      state.priceFrom = from; state.priceTo = to; render();
    };
    fromRange.addEventListener('change', commit);
    toRange.addEventListener('change', commit);
    fromRange.addEventListener('input', () => { if (Number(fromRange.value) > Number(toRange.value)) fromRange.value = toRange.value; syncSliderVisual(); });
    toRange.addEventListener('input', () => { if (Number(toRange.value) < Number(fromRange.value)) toRange.value = fromRange.value; syncSliderVisual(); });
  }
  const fromInput = document.querySelector('#priceFromInput');
  const toInput = document.querySelector('#priceToInput');
  if (fromInput && toInput) {
    const parse = v => Math.max(PRICE_MIN, Math.min(PRICE_MAX, Number(v.replace(/\D/g, '')) || 0));
    fromInput.addEventListener('change', () => { state.priceFrom = Math.min(parse(fromInput.value), state.priceTo); render(); });
    toInput.addEventListener('change', () => { state.priceTo = Math.max(parse(toInput.value), state.priceFrom); render(); });
  }
}

function syncSliderVisual() {
  const fromRange = document.querySelector('#priceFromRange');
  const toRange = document.querySelector('#priceToRange');
  const rangeEl = document.querySelector('.slider-range');
  if (!fromRange || !toRange || !rangeEl) return;
  const pct = v => ((v - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;
  rangeEl.style.left = pct(Number(fromRange.value)) + '%';
  rangeEl.style.right = (100 - pct(Number(toRange.value))) + '%';
}

function action(name) {
  if (name === 'home') { state.page = 'home'; state.selected = null; state.modal = null; render(); return; }
  if (name === 'publish') state.modal = 'publish';
  else if (name === 'contact') state.modal = 'contact';
  else if (name === 'phone') state.modal = 'phone';
  else if (name === 'close') state.modal = null;
  else if (name === 'send' || name === 'sendPublish') { state.modal = null; toast('Готово — заявка отправлена в демо-режиме'); }
  else if (name === 'reset') { state.filter = 'Все'; state.query = ''; state.priceFrom = PRICE_MIN; state.priceTo = PRICE_MAX; }
  else if (name === 'favorites') toast(state.liked.size ? `В избранном объектов: ${state.liked.size}` : 'В избранном пока пусто');
  else if (name === 'messages') toast('Сообщения появятся после подключения backend');
  else if (name === 'login') toast('Авторизация будет в следующей версии');
  else if (name === 'city') toast('В прототипе доступен город Снежное');
  else if (name === 'seller') toast('Открываем профиль продавца в полной версии');
  else if (name === 'share') toast('Ссылка на объект скопирована');
  else if (name === 'video' || name === 'planLayout') toast('Медиа появится в следующей версии прототипа');
  else if (name === 'buyMode') { state.filter = 'Все'; }
  else if (name === 'type' || name === 'price' || name === 'rooms' || name === 'area' || name === 'more') toast('Фильтр отмечен для следующего шага прототипа');
  else if (name === 'list' || name === 'map') { state.view = name; toast(name === 'map' ? 'Режим карты выбран' : 'Режим списка выбран'); }
  else if (name.startsWith('promo-')) { /* unreachable, promo uses data-promo */ }
  render();
}

document.addEventListener('click', e => {
  const promo = e.target.closest('[data-promo]');
  if (promo) toast('Раздел находится в разработке демо-версии');
});

render();
