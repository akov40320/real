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
  renovation: 'https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=900&q=85'
};

const listings = [
  { id: 1, kind: 'Квартира', title: '2-комн. квартира, 56 м²', price: 2850000, location: 'мкр. 1-й, 15 · Снежное', meta: '8 этаж из 12 · Кирпичный дом', tag: 'Новое', image: images.apartment[0], details: ['56 м²', '2 комнаты', '8 этаж из 12', 'Кирпичный дом', 'С ремонтом', 'Не в ипотеке'] },
  { id: 2, kind: 'Дом', title: 'Дом, 120 м² на участке 6 сот.', price: 6200000, location: 'ул. Лесная, 23 · Снежное', meta: '120 м² · 6 соток · Все коммуникации', tag: 'Дом', image: images.house, details: ['120 м²', '6 соток', 'Газ', 'Гараж', 'Хозпостройки', 'Дом с участком'] },
  { id: 3, kind: 'Коммерция', title: 'Торговое помещение, 96 м²', price: 4500000, location: 'ул. Центральная, 12 · Снежное', meta: '1 этаж · Отдельный вход', tag: 'Коммерция', image: images.office, details: ['96 м²', '1 этаж', 'Отдельный вход', 'Центр города', 'Витринные окна', 'Готово к работе'] },
  { id: 4, kind: 'Квартира', title: '2-комн. квартира, 45 м²', price: 1950000, location: 'мкр. 3-й, 8 · Снежное', meta: '2 этаж из 5 · Панельный дом', tag: 'Цена снижена', image: images.renovation, details: ['45 м²', '2 комнаты', '2 этаж из 5', 'Панельный дом', 'Под ремонт', 'Балкон'] },
  { id: 5, kind: 'Участок', title: 'Участок, 10 соток', price: 650000, location: 'ул. Садовая, 45 · Снежное', meta: '10 соток · Под строительство', tag: 'Участок', image: images.home, details: ['10 соток', 'ИЖС', 'Подъезд круглый год', 'Электричество рядом', 'Тихий район', 'Собственность'] }
];

const state = { page: 'home', filter: 'Все', query: '', selected: null, gallery: 0, liked: new Set(), modal: null };
const money = value => new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
const app = document.querySelector('#app');

function header() {
  return `<header class="topbar">
    <button class="brand" data-action="home"><span class="brand-mark"></span><span>Снежное</span></button>
    <nav class="nav" aria-label="Основная навигация">
      <button data-nav="Купить">Купить</button><button data-nav="Снять">Снять</button><button data-nav="Продать">Продать</button>
    </nav>
    <div class="top-actions"><button class="city-pill" data-action="city">⌖ Снежное⌄</button><button class="icon-btn" data-action="favorites" aria-label="Избранное">♡</button><button class="icon-btn" data-action="messages" aria-label="Сообщения">▢</button><button class="primary-btn" data-action="publish">＋ Разместить объявление</button><button class="icon-btn" data-action="login" aria-label="Войти">♙</button></div>
  </header>`;
}

function hero() {
  return `<section class="hero">
    <div class="hero-collage">
      <img src="${images.apartment[0]}" alt="Интерьер квартиры"/><img src="${images.house}" alt="Дом"/><img src="${images.home}" alt="Дом с участком"/><img src="${images.office}" alt="Коммерческое помещение"/><img src="${images.renovation}" alt="Помещение под ремонт"/>
    </div>
    <div class="hero-content"><h1>Найдите свой идеальный объект в Снежном</h1><p>Актуальные предложения от собственников и агентств. Проверенные объекты. Без скрытых комиссий.</p></div>
    <form class="search-panel" id="searchForm"><h2>Найдите свой идеальный объект в Снежном</h2><div class="search-row"><input class="search-input" id="searchInput" placeholder="Что ищете? Например, 2-комнатная квартира" value="${state.query}"/><select class="select-box" id="searchKind"><option>Любой тип</option><option>Квартира</option><option>Дом</option><option>Коммерция</option><option>Участок</option></select><button class="search-btn">Найти</button></div></form>
  </section>`;
}

function card(item) {
  const liked = state.liked.has(item.id);
  return `<article class="listing-card" data-open="${item.id}"><div class="card-image-wrap"><img class="card-image" src="${item.image}" alt="${item.title}" loading="lazy"/><span class="tag">${item.tag}</span><button class="heart ${liked ? 'is-liked' : ''}" data-like="${item.id}" aria-label="Добавить в избранное">${liked ? '♥' : '♡'}</button></div><div class="card-body"><h3 class="card-title">${item.title}</h3><div class="card-price">${money(item.price)}</div><div class="card-meta">${item.location}<br/>${item.meta}</div><div class="card-footer"><span>${item.kind}</span><span>♡ Сохранить</span></div></div></article>`;
}

function filters() {
  return `<div class="toolbar"><button class="filter-chip ${state.filter === 'Все' ? 'active' : ''}" data-filter="Все">Тип недвижимости⌄</button><button class="filter-chip ${state.filter === 'Купить' ? 'active' : ''}" data-filter="Купить">Купить⌄</button><button class="filter-chip" data-action="price">Цена⌄</button><button class="filter-chip" data-action="rooms">Комнаты⌄</button><button class="filter-chip" data-action="more">Ещё фильтры ⚙</button><span class="toolbar-spacer"></span><button class="filter-chip" data-action="list">☷ Список</button><button class="filter-chip active" data-action="map">⌖ На карте</button></div>`;
}

function homePage() {
  const q = state.query.trim().toLowerCase();
  const visible = listings.filter(item => (state.filter === 'Все' || state.filter === 'Купить' || item.kind === state.filter) && (!q || `${item.title} ${item.location} ${item.kind}`.toLowerCase().includes(q)));
  return `${header()}${hero()}<main class="main-content">${filters()}<div class="layout"><aside class="sidebar"><h3 class="side-title">Фильтры <button class="back-link" data-action="reset">Сбросить всё</button></h3><label class="check"><input type="checkbox" checked/> Квартира <span>1 246</span></label><label class="check"><input type="checkbox"/> Дом <span>357</span></label><label class="check"><input type="checkbox"/> Коммерческая <span>126</span></label><label class="check"><input type="checkbox"/> Участок <span>98</span></label><hr/><h3 class="side-title">Цена, ₽</h3><div class="range-row"><input placeholder="от"/><input placeholder="до"/></div><h3 class="side-title" style="margin-top:18px">Комнаты</h3><label class="check"><input type="checkbox"/> 1 комната</label><label class="check"><input type="checkbox" checked/> 2 комнаты</label><label class="check"><input type="checkbox"/> 3 комнаты</label></aside><section><div class="results-head"><h2>Актуальные предложения <span style="color:#758197;font-size:12px;font-weight:400">${visible.length ? '· ' + visible.length + ' объектов' : ''}</span></h2><select class="sort-select"><option>Сначала новые</option><option>Сначала дешевле</option><option>Сначала дороже</option></select></div><div class="listing-grid">${visible.length ? visible.map(card).join('') : '<div class="empty">По вашему запросу ничего не найдено.<br/><button class="back-link" data-action="reset">Сбросить фильтры</button></div>'}</div></section></div></main>`;
}

function detailPage(item) {
  const photos = images.apartment;
  const current = photos[state.gallery % photos.length];
  return `${header()}<main class="detail-page"><div class="breadcrumbs"><button class="back-link" data-action="home">← Назад к списку</button><span>›</span><span>Купить</span><span>›</span><span>Квартиры</span><span>›</span><span>${item.title}</span></div><div class="detail-layout"><section class="gallery"><div class="main-photo"><img src="${current}" alt="${item.title}"/><span class="counter">${(state.gallery % photos.length) + 1} / ${photos.length}</span></div><div class="gallery-thumbs">${photos.map((photo, i) => `<button class="thumb ${i === state.gallery % photos.length ? 'active' : ''}" data-gallery="${i}"><img src="${photo}" alt="Фото ${i + 1}"/></button>`).join('')}</div><div class="detail-lower"><section class="description-panel"><div class="tabs"><button class="tab active" data-tab="description">Описание</button><button class="tab" data-tab="features">Характеристики</button><button class="tab" data-tab="map">На карте</button></div><p class="description" id="detailTabContent">Светлая и уютная 2-комнатная квартира с современным ремонтом в новом доме. Удобная планировка: просторная кухня-гостиная, отдельная спальня, гардеробная. Окна выходят во двор, тихо и зелено. В шаговой доступности магазины, школы, детские сады и остановки общественного транспорта.</p><div class="feature-row"><span class="feature">▦ Балкон</span><span class="feature">♨ Санузел раздельный</span><span class="feature">▣ Окна во двор</span><span class="feature">▱ Лифт пассажирский</span><span class="feature">▤ Парковка</span></div></section><aside><div class="seller-panel"><img class="seller-avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80" alt="Риелтор"/><div><div class="seller-name">Ирина Петрова</div><div class="seller-sub">Риелтор · ★ 4,9 · 27 отзывов</div></div></div><button class="seller-link" data-action="seller">Смотреть все объявления продавца</button><div class="map-panel"><span class="map-label">мкр. 1-й, 15 · Снежное</span><span class="pin">●</span></div></aside></div></section><aside class="detail-card"><h1>${item.title}</h1><div class="location">⌖ мкр. 1-й, 15 · Снежное</div><div class="detail-price">${money(item.price)}<small>50 893 ₽ / м²</small></div><div class="detail-actions"><button class="contact-btn" data-action="contact">Написать продавцу</button><button class="phone-btn" data-action="phone">Показать телефон</button></div><div class="protect">♢ Номер защищён от спама и мошенников</div><div class="facts">${item.details.map((detail, i) => `<div class="fact"><strong>${detail}</strong><span>${['Общая площадь','Комнаты','Этаж','Тип дома','Состояние','Финансирование'][i]}</span></div>`).join('')}</div></aside></div></main>`;
}

function modal() {
  if (!state.modal) return '';
  if (state.modal === 'contact') return `<div class="modal-backdrop" data-close><div class="modal" role="dialog" aria-modal="true"><h2>Написать продавцу</h2><p>Оставьте контакты — риелтор свяжется с вами и организует просмотр.</p><label>Имя</label><input id="contactName" placeholder="Как к вам обращаться?"/><label>Телефон</label><input id="contactPhone" placeholder="+7 (___) ___-__-__"/><label>Сообщение</label><textarea id="contactMessage">Здравствуйте! Хочу узнать подробнее об объекте.</textarea><div class="modal-actions"><button class="secondary-btn" data-action="close">Отмена</button><button class="primary-btn" data-action="send">Отправить заявку</button></div></div></div>`;
  if (state.modal === 'publish') return `<div class="modal-backdrop" data-close><div class="modal" role="dialog" aria-modal="true"><h2>Разместить объявление</h2><p>В прототипе заявка сохраняется только демонстрационно.</p><label>Ваше имя</label><input placeholder="Имя"/><label>Телефон</label><input placeholder="+7 (___) ___-__-__"/><label>Что хотите разместить?</label><textarea placeholder="Например: 2-комнатную квартиру в Центральном районе"></textarea><div class="modal-actions"><button class="secondary-btn" data-action="close">Отмена</button><button class="primary-btn" data-action="sendPublish">Отправить</button></div></div></div>`;
  return `<div class="modal-backdrop" data-close><div class="modal"><h2>${state.modal === 'phone' ? 'Телефон продавца' : 'Скоро будет доступно'}</h2><p>${state.modal === 'phone' ? 'В полноценной версии здесь появится защищённый номер продавца.' : 'Эта часть прототипа подготовлена для следующего этапа.'}</p><div class="modal-actions"><button class="primary-btn" data-action="close">Понятно</button></div></div></div>`;
}

function render() {
  const view = state.page === 'detail' ? detailPage(state.selected) : homePage();
  app.innerHTML = `<div class="app-shell">${view}</div>${modal()}`;
  bind();
}

function toast(message) { const el = document.querySelector('#toast'); el.textContent = message; el.classList.add('show'); clearTimeout(window.__toast); window.__toast = setTimeout(() => el.classList.remove('show'), 2300); }

function bind() {
  document.querySelectorAll('[data-nav]').forEach(btn => btn.addEventListener('click', () => { state.filter = btn.dataset.nav === 'Купить' ? 'Все' : btn.dataset.nav === 'Снять' ? 'Квартира' : 'Все'; render(); toast(`Раздел «${btn.dataset.nav}» открыт`); }));
  document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => { state.filter = btn.dataset.filter; render(); }));
  document.querySelectorAll('[data-open]').forEach(cardEl => cardEl.addEventListener('click', e => { if (e.target.closest('[data-like]')) return; state.selected = listings.find(item => item.id === Number(cardEl.dataset.open)); state.page = 'detail'; state.gallery = 0; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }));
  document.querySelectorAll('[data-like]').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); const id = Number(btn.dataset.like); state.liked.has(id) ? state.liked.delete(id) : state.liked.add(id); render(); toast(state.liked.has(id) ? 'Добавлено в избранное' : 'Удалено из избранного'); }));
  document.querySelectorAll('[data-gallery]').forEach(btn => btn.addEventListener('click', () => { state.gallery = Number(btn.dataset.gallery); render(); }));
  document.querySelectorAll('[data-action]').forEach(btn => btn.addEventListener('click', () => action(btn.dataset.action)));
  document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', e => { if (e.target === el) { state.modal = null; render(); } }));
  document.querySelectorAll('[data-tab]').forEach(tab => tab.addEventListener('click', () => { document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); tab.classList.add('active'); const content = document.querySelector('#detailTabContent'); if (tab.dataset.tab === 'features') content.textContent = 'Кирпичный дом, 2024 год постройки, 8 этаж из 12, общая площадь 56 м², кухня-гостиная, балкон, раздельный санузел, лифт и парковка.'; else if (tab.dataset.tab === 'map') content.textContent = 'Объект расположен в мкр. 1-й. Точный адрес открывается после обращения к продавцу.'; else content.textContent = 'Светлая и уютная 2-комнатная квартира с современным ремонтом в новом доме. Удобная планировка: просторная кухня-гостиная, отдельная спальня, гардеробная. Окна выходят во двор, тихо и зелено. В шаговой доступности магазины, школы, детские сады и остановки общественного транспорта.'; }));
  const searchForm = document.querySelector('#searchForm'); if (searchForm) searchForm.addEventListener('submit', e => { e.preventDefault(); state.query = document.querySelector('#searchInput').value; render(); toast(state.query ? `Поиск: ${state.query}` : 'Показываем все объекты'); });
}

function action(name) {
  if (name === 'home') { state.page = 'home'; state.selected = null; state.modal = null; render(); return; }
  if (name === 'publish') state.modal = 'publish';
  else if (name === 'contact') state.modal = 'contact';
  else if (name === 'phone') state.modal = 'phone';
  else if (name === 'close') state.modal = null;
  else if (name === 'send' || name === 'sendPublish') { state.modal = null; toast('Готово — заявка отправлена в демо-режиме'); }
  else if (name === 'reset') { state.filter = 'Все'; state.query = ''; }
  else if (name === 'favorites') toast(state.liked.size ? `В избранном объектов: ${state.liked.size}` : 'В избранном пока пусто');
  else if (name === 'messages') toast('Сообщения появятся после подключения backend');
  else if (name === 'login') toast('Авторизация будет в следующей версии');
  else if (name === 'city') toast('В прототипе доступен город Снежное');
  else if (name === 'seller') toast('Открываем профиль продавца в полной версии');
  else if (name === 'price' || name === 'rooms' || name === 'more') toast('Фильтр отмечен для следующего шага прототипа');
  else if (name === 'map' || name === 'list') toast(name === 'map' ? 'Режим карты выбран' : 'Режим списка выбран');
  render();
}

render();
