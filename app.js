/* ===================== Иконки (line-icons, наследуют currentColor) ===================== */
const ICONS = {
  home: '<path d="M3.5 10.5 12 3l8.5 7.5v9.2a1.3 1.3 0 0 1-1.3 1.3H4.8a1.3 1.3 0 0 1-1.3-1.3v-9.2z"/><path d="M9 21v-6.2h6V21"/>',
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
    'assets/apartment-1.jpg',
    'assets/apartment-2.jpg',
    'assets/apartment-3.jpg',
    'assets/apartment-4.jpg',
    'assets/apartment-5.jpg'
  ],
  house: 'assets/house.jpg',
  home: 'assets/home.jpg',
  office: 'assets/office.jpg',
  renovation: 'assets/renovation.jpg',
  agent: 'assets/agent.jpg'
  ,promoBuy: 'assets/promo-buy.jpg'
  ,promoRent: 'assets/promo-rent.jpg'
  ,promoSell: 'assets/promo-sell.jpg'
  ,promoInvest: 'assets/promo-invest.jpg'
};

const featureIcons = {
  'Балкон': 'balcony', 'Санузел раздельный': 'bath', 'Окна во двор': 'window',
  'Лифт пассажирский': 'elevator', 'Парковка': 'parking', 'Газ': 'shield',
  'Гараж': 'parking', 'Хозпостройки': 'building', 'Дом с участком': 'layout',
  'Отдельный вход': 'window', 'Центр города': 'pin', 'Витринные окна': 'window',
  'Готово к работе': 'shield', 'Под ремонт': 'pencil', 'ИЖС': 'layout',
  'Подъезд круглый год': 'shield', 'Электричество рядом': 'percent',
  'Тихий район': 'pin', 'Собственность': 'shield', 'С мебелью': 'armchair',
  'Автономное отопление': 'shield'
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

const listingDetails = {
  1: { deal: 'sale', rooms: 2, description: 'Светлая 2-комнатная квартира с современным ремонтом в новом доме. Просторная кухня-гостиная, отдельная спальня и гардеробная. Окна выходят в тихий двор; рядом магазины, школа и остановка.', photos: images.apartment },
  2: { deal: 'sale', rooms: 4, description: 'Кирпичный дом для семьи в спокойной части Снежного. На участке расположены гараж и хозяйственные постройки, подключены газ, вода и электричество. Дом готов к проживанию.', photos: [images.house, images.home, images.apartment[1], images.apartment[3]] },
  3: { deal: 'sale', rooms: 0, description: 'Коммерческое помещение на первом этаже с отдельным входом и витринными окнами. Подойдёт для магазина, офиса услуг или небольшого салона. Удобный подъезд со стороны Центральной улицы.', photos: [images.office, images.apartment[4], images.renovation, images.home] },
  4: { deal: 'sale', rooms: 2, description: 'Практичная квартира в обжитом микрорайоне. Состояние позволяет обновить интерьер под свой сценарий. Окна выходят во двор, рядом школа, рынок и остановка.', photos: [images.renovation, images.apartment[3], images.apartment[1], images.apartment[4]] },
  5: { deal: 'sale', rooms: 0, description: 'Ровный участок под индивидуальное строительство. Круглогодичный подъезд, электричество проходит рядом. Спокойная улица и удобная прямоугольная форма участка.', photos: [images.home, images.house, images.apartment[2], images.renovation] }
};
listings.forEach(item => Object.assign(item, listingDetails[item.id]));
listings.push(
  { id: 6, deal: 'rent', rooms: 1, kind: 'Квартира', dot: 'teal', area: 34, title: '1-комн. квартира, 34 м²', price: 22000, location: 'мкр. Черёмушки, 4 · Снежное', meta: '3 этаж из 5 · На длительный срок', tag: 'Без комиссии', tagColor: 'green', image: images.apartment[2], description: 'Уютная квартира для длительной аренды. Есть мебель, бытовая техника и всё необходимое для переезда. Коммунальные платежи оплачиваются отдельно.', photos: [images.apartment[2], images.apartment[1], images.apartment[4]], facts: [['layers', '3 этаж из 5', 'Этаж'], ['building', 'Панельный дом', 'Тип дома'], ['ruler', '34 м²', 'Общая площадь'], ['calendar', 'От 11 месяцев', 'Срок аренды'], ['pencil', 'С мебелью', 'Состояние'], ['shield', 'Без залога', 'Условия']], features: ['Балкон', 'Санузел раздельный', 'С мебелью', 'Тихий район'] },
  { id: 7, deal: 'rent', rooms: 2, kind: 'Квартира', dot: 'blue', area: 48, title: '2-комн. квартира, 48 м²', price: 28000, location: 'мкр. 2-й, 17 · Снежное', meta: '4 этаж из 5 · Комнаты раздельные', tag: 'Можно с детьми', tagColor: 'blue', image: images.apartment[3], description: 'Тёплая двухкомнатная квартира с раздельными комнатами. Укомплектована мебелью и техникой, рядом школа и продуктовые магазины.', photos: [images.apartment[3], images.apartment[0], images.apartment[1]], facts: [['layers', '4 этаж из 5', 'Этаж'], ['building', 'Кирпичный дом', 'Тип дома'], ['ruler', '48 м²', 'Общая площадь'], ['calendar', 'От 6 месяцев', 'Срок аренды'], ['pencil', 'Хорошее', 'Состояние'], ['shield', 'Залог 50%', 'Условия']], features: ['Балкон', 'Окна во двор', 'С мебелью', 'Парковка'] },
  { id: 8, deal: 'sale', rooms: 3, kind: 'Квартира', dot: 'orange', area: 68, title: '3-комн. квартира, 68 м²', price: 3450000, location: 'ул. Советская, 31 · Снежное', meta: '5 этаж из 5 · Автономное отопление', tag: 'Проверено', tagColor: 'green', image: images.apartment[4], description: 'Просторная квартира с тремя изолированными комнатами и автономным отоплением. Чистый подъезд, документы готовы к сделке.', photos: [images.apartment[4], images.apartment[0], images.apartment[2]], facts: [['layers', '5 этаж из 5', 'Этаж'], ['building', 'Кирпичный дом', 'Тип дома'], ['ruler', '68 м²', 'Общая площадь'], ['calendar', '1996 год', 'Год постройки'], ['pencil', 'Жилое', 'Состояние'], ['shield', 'Документы готовы', 'Сделка']], features: ['Балкон', 'Санузел раздельный', 'Автономное отопление', 'Парковка'] },
  { id: 9, deal: 'rent', rooms: 3, kind: 'Дом', dot: 'violet', area: 86, title: 'Дом, 86 м²', price: 42000, location: 'ул. Молодёжная, 9 · Снежное', meta: 'Участок 5 соток · Все коммуникации', tag: 'На длительный срок', tagColor: 'violet', image: images.house, description: 'Отдельный дом для длительной аренды. Три комнаты, оборудованная кухня, закрытый двор и место для автомобиля.', photos: [images.house, images.home, images.apartment[1]], facts: [['layers', '1 этаж', 'Этаж'], ['building', 'Отдельный дом', 'Тип'], ['ruler', '86 м²', 'Общая площадь'], ['calendar', 'От 6 месяцев', 'Срок аренды'], ['pencil', 'С мебелью', 'Состояние'], ['shield', 'Залог 1 месяц', 'Условия']], features: ['Газ', 'Гараж', 'Дом с участком', 'С мебелью'] }
);

/* The original mock data was saved through a Windows-1251 editor once.
   Repair those legacy strings at runtime, while keeping the source portable. */
function normaliseMojibake(value) {
  if (typeof value !== 'string' || !/[\u00a0-\u00ff\u0452-\u045f\u2018-\u2026\u2030\u2039\u20ac]/i.test(value)) return value;
  const special = { 0x0402: 0x80, 0x0403: 0x81, 0x201a: 0x82, 0x0453: 0x83, 0x201e: 0x84, 0x2026: 0x85, 0x2020: 0x86, 0x2021: 0x87, 0x20ac: 0x88, 0x2030: 0x89, 0x0409: 0x8a, 0x2039: 0x8b, 0x040a: 0x8c, 0x040c: 0x8d, 0x040b: 0x8e, 0x040f: 0x8f, 0x0452: 0x90, 0x2018: 0x91, 0x2019: 0x92, 0x201c: 0x93, 0x201d: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97, 0x2122: 0x99, 0x0459: 0x9a, 0x203a: 0x9b, 0x045a: 0x9c, 0x045c: 0x9d, 0x045b: 0x9e, 0x045f: 0x9f };
  special[0x0405] = 0xa5;
  const bytes = Uint8Array.from([...value], char => {
    const code = char.codePointAt(0);
    if (code >= 0x0410 && code <= 0x042f) return code - 0x0410 + 0xc0;
    if (code >= 0x0430 && code <= 0x044f) return code - 0x0430 + 0xe0;
    return special[code] ?? (code <= 0xff ? code : 0x3f);
  });
  try { return new TextDecoder('utf-8', { fatal: true }).decode(bytes); } catch { return value; }
}
function normaliseDeep(value) {
  if (typeof value === 'string') return normaliseMojibake(value);
  if (Array.isArray(value)) return value.map(normaliseDeep);
  if (value && typeof value === 'object') { Object.keys(value).forEach(key => { value[key] = normaliseDeep(value[key]); }); }
  return value;
}
normaliseDeep(listings);

const PRICE_MIN = 0, PRICE_MAX = 15000000;
const savedLikes = (() => { try { return JSON.parse(localStorage.getItem('snezhnoe-liked') || '[]'); } catch { return []; } })();
const state = { page: 'home', deal: 'sale', kind: 'Все', rooms: 'Все', query: '', favoritesOnly: false, selected: null, gallery: 0, liked: new Set(savedLikes), modal: null, quickFilter: null, mediaMode: 'video', publishStep: 1, priceFrom: PRICE_MIN, priceTo: PRICE_MAX, areaFrom: 0, areaTo: 1000, view: 'list', sort: 'new' };
const money = value => new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
const escapeAttr = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const app = document.querySelector('#app');

/* ===================== Компоненты ===================== */
function header() {
  return `<header class="topbar">
    <button class="brand" data-action="home" aria-label="На главную"><span class="brand-mark">${icon('home')}</span></button>
    <nav class="nav" aria-label="Основная навигация">
      <button class="${state.deal === 'sale' ? 'is-active' : ''}" data-nav="Купить">Купить</button>
      <button class="${state.deal === 'rent' ? 'is-active' : ''}" data-nav="Снять">Снять</button>
      <button data-nav="Продать">Продать</button>
    </nav>
    <div class="top-actions">
      <button class="city-pill" data-action="city">${icon('pin')}Снежное${icon('chevronDown')}</button>
      <button class="icon-btn ${state.favoritesOnly ? 'is-active' : ''}" data-action="favorites" aria-label="Избранное">${icon('heart')}${state.liked.size ? `<span class="badge">${state.liked.size}</span>` : ''}</button>
      <button class="icon-btn" data-action="messages" aria-label="Сообщения">${icon('chat')}</button>
      <button class="primary-btn" data-action="publish">${icon('plus')}<span>Разместить объявление</span></button>
      <span class="account-wrap"><button class="icon-btn avatar-btn" data-action="login" aria-label="Войти">${icon('user')}</button>${icon('chevronDown', 'account-chevron')}</span>
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
        <div class="search-field">${icon('search')}<input class="search-input" id="searchInput" placeholder="Что ищете? Например, 2-комнатная квартира" value="${escapeAttr(state.query)}"/></div>
        <button class="hero-city" type="button" data-action="city">${icon('pin')}<span>Снежное</span>${icon('chevronDown')}</button>
        <button class="search-btn">Найти</button>
      </div>
    </form>
  </section>`;
}

function promoTiles() {
  const tiles = [
    { key: 'buy', color: 'blue', image: images.promoBuy, title: 'Купить', sub: 'Квартиры, дома\nи другая недвижимость' },
    { key: 'rent', color: 'teal', image: images.promoRent, title: 'Снять', sub: 'Аренда квартир\nи домов' },
    { key: 'sell', color: 'orange', image: images.promoSell, title: 'Продать', sub: 'Разместите объявление\nи найдите покупателя' },
    { key: 'invest', color: 'violet', image: images.promoInvest, title: 'Инвестировать', sub: 'Флиппинг и готовые\nпроекты' }
  ];
  return `<div class="promo-grid">${tiles.map(t => `<button class="promo-tile promo-${t.color}" data-promo="${t.key}" aria-label="${t.title}"><img class="promo-art" src="${t.image}" alt=""/><span class="promo-copy"><span class="promo-title">${t.title}</span><span class="promo-sub">${t.sub.replace('\n', '<br/>')}</span></span></button>`).join('')}</div>`;
}

function itemPhotos(item) {
  if (item.photos) return item.photos;
  const sets = {
    1: images.apartment,
    2: [images.house, images.home, images.apartment[1], images.apartment[3]],
    3: [images.office, images.apartment[4], images.renovation, images.home],
    4: [images.renovation, images.apartment[3], images.apartment[1], images.apartment[4]],
    5: [images.home, images.house, images.apartment[2], images.renovation]
  };
  return sets[item.id] || [item.image];
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
      <div class="card-price">${money(item.price)}${item.deal === 'rent' ? '<small> / мес.</small>' : ''}</div>
      <div class="card-meta">${icon('pin', 'meta-icon')}${item.location}<br/><span class="meta-indent">${item.meta}</span></div>
      <div class="card-footer"><span><i class="dot dot-${item.dot}"></i>${item.kind}</span><span class="save-link">${icon(liked ? 'heartFill' : 'heart')}${liked ? 'Сохранено' : 'Сохранить'}</span></div>
    </div>
  </article>`;
}

function quickFilterMenu(type) {
  const choice = (label, attr, value, active) => `<button type="button" class="quick-option ${active ? 'is-selected' : ''}" ${attr}="${value}"><span>${label}</span>${active ? '<b>✓</b>' : ''}</button>`;
  const title = { type: 'Тип недвижимости', deal: 'Тип сделки', price: 'Цена, ₽', rooms: 'Количество комнат', area: 'Площадь, м²' }[type];
  let content = '';
  if (type === 'type') content = ['Все', 'Квартира', 'Дом', 'Коммерция', 'Участок'].map(value => choice(value, 'data-quick-kind', value, state.kind === value)).join('');
  if (type === 'deal') content = [choice('Купить', 'data-quick-deal', 'sale', state.deal === 'sale'), choice('Снять', 'data-quick-deal', 'rent', state.deal === 'rent')].join('');
  if (type === 'rooms') content = ['Все', 1, 2, 3, 4].map(value => choice(value === 'Все' ? 'Любое количество' : value === 4 ? '4 и больше' : `${value} ${value === 1 ? 'комната' : 'комнаты'}`, 'data-quick-rooms', value, String(state.rooms) === String(value))).join('');
  if (type === 'price') content = `<div class="quick-range"><label>От<input id="quickPriceFrom" inputmode="numeric" value="${state.priceFrom.toLocaleString('ru-RU')}"/></label><label>До<input id="quickPriceTo" inputmode="numeric" value="${Math.min(state.priceTo, state.deal === 'rent' ? 100000 : PRICE_MAX).toLocaleString('ru-RU')}"/></label></div><div class="quick-actions"><button type="button" class="quick-reset" data-action="resetPrice">Сбросить</button><button type="button" class="quick-apply" data-action="applyQuickPrice">Применить</button></div>`;
  if (type === 'area') content = `<div class="quick-range"><label>От<input id="quickAreaFrom" inputmode="numeric" value="${state.areaFrom || ''}" placeholder="0"/></label><label>До<input id="quickAreaTo" inputmode="numeric" value="${state.areaTo === 1000 ? '' : state.areaTo}" placeholder="Любая"/></label></div><div class="quick-actions"><button type="button" class="quick-reset" data-action="resetArea">Сбросить</button><button type="button" class="quick-apply" data-action="applyQuickArea">Применить</button></div>`;
  return `<div class="quick-filter-scrim" data-action="closeQuick"></div><div class="quick-filter-popover quick-${type}" role="dialog" aria-label="${title}"><div class="quick-filter-title">${title}<button type="button" data-action="closeQuick" aria-label="Закрыть">${icon('close')}</button></div>${content}</div>`;
}

function filters() {
  const priceMax = state.deal === 'rent' ? 100000 : PRICE_MAX;
  const shortMoney = value => value >= 1000000 ? `${(value / 1000000).toLocaleString('ru-RU', { maximumFractionDigits: 1 })} млн ₽` : `${Math.round(value / 1000)} тыс. ₽`;
  const priceLabel = state.priceFrom > 0 && state.priceTo < priceMax ? `${shortMoney(state.priceFrom)}–${shortMoney(state.priceTo)}` : state.priceFrom > 0 ? `от ${shortMoney(state.priceFrom)}` : state.priceTo < priceMax ? `до ${shortMoney(state.priceTo)}` : 'Цена';
  const areaLabel = state.areaFrom > 0 && state.areaTo < 1000 ? `${state.areaFrom}–${state.areaTo} м²` : state.areaFrom > 0 ? `от ${state.areaFrom} м²` : state.areaTo < 1000 ? `до ${state.areaTo} м²` : 'Площадь';
  const chip = (label, act, active) => `<span class="filter-anchor"><button type="button" class="filter-chip ${active || state.quickFilter === act ? 'active' : ''}" data-action="${act}" aria-expanded="${state.quickFilter === act}">${label}${icon('chevronDown')}</button>${state.quickFilter === act ? quickFilterMenu(act) : ''}</span>`;
  return `<div class="toolbar">
    ${chip(state.kind === 'Все' ? 'Тип недвижимости' : state.kind, 'type', state.kind !== 'Все')}
    ${chip(state.deal === 'sale' ? 'Купить' : 'Снять', 'deal', true)}
    ${chip(priceLabel, 'price', priceLabel !== 'Цена')}
    ${chip(state.rooms === 'Все' ? 'Комнаты' : `${state.rooms} комн.`, 'rooms', state.rooms !== 'Все')}
    ${chip(areaLabel, 'area', areaLabel !== 'Площадь')}
    <button class="filter-chip" data-action="more">${icon('sliders')}Ещё фильтры</button>
    <span class="toolbar-spacer"></span>
    <div class="view-toggle">
      <button class="filter-chip ${state.view === 'list' ? 'active' : ''}" data-action="list">${icon('list')}Списком</button>
      <button class="filter-chip ${state.view === 'map' ? 'active' : ''}" data-action="map">${icon('map')}На карте</button>
    </div>
  </div>`;
}

function priceSlider() {
  const max = state.deal === 'rent' ? 100000 : PRICE_MAX;
  const to = Math.min(state.priceTo, max);
  const pct = v => Math.round(((v - PRICE_MIN) / (max - PRICE_MIN)) * 100);
  return `<div class="price-slider">
    <div class="slider-track"><div class="slider-range" style="left:${pct(state.priceFrom)}%;right:${100 - pct(to)}%"></div></div>
    <input type="range" class="range-input range-from" min="${PRICE_MIN}" max="${max}" step="${state.deal === 'rent' ? 1000 : 50000}" value="${Math.min(state.priceFrom, max)}" id="priceFromRange"/>
    <input type="range" class="range-input range-to" min="${PRICE_MIN}" max="${max}" step="${state.deal === 'rent' ? 1000 : 50000}" value="${to}" id="priceToRange"/>
  </div>`;
}

function sidebar() {
  const kinds = ['Квартира', 'Дом', 'Коммерция', 'Участок'];
  const maxPrice = state.deal === 'rent' ? 100000 : PRICE_MAX;
  return `<aside class="sidebar">
    <h3 class="side-title">Фильтры <button class="reset-link" data-action="reset">Сбросить всё</button></h3>
    ${kinds.map(k => `<label class="check"><input type="radio" name="kind" data-kind="${k}" ${state.kind === k ? 'checked' : ''}/><span class="check-box"></span>${k} <span class="check-count">${listings.filter(item => item.deal === state.deal && item.kind === k).length}</span></label>`).join('')}
    <hr/>
    <h3 class="side-title">Цена, ₽</h3>
    <div class="range-row">
      <input class="price-input" id="priceFromInput" value="${state.priceFrom.toLocaleString('ru-RU')}"/>
      <span class="range-sep">—</span>
      <input class="price-input" id="priceToInput" value="${Math.min(state.priceTo, maxPrice).toLocaleString('ru-RU')}"/>
    </div>
    ${priceSlider()}
    <h3 class="side-title" style="margin-top:22px">Комнаты</h3>
    ${[1,2,3,4].map(room => `<label class="check"><input type="radio" name="rooms" data-rooms="${room}" ${Number(state.rooms) === room ? 'checked' : ''}/><span class="check-box"></span>${room === 4 ? '4+ комнаты' : room + (room === 1 ? ' комната' : ' комнаты')}</label>`).join('')}
  </aside>`;
}

function homePage() {
  const q = state.query.trim().toLowerCase();
  const priceCeiling = state.deal === 'rent' ? Math.min(state.priceTo, 100000) : state.priceTo;
  const filtered = listings.filter(item =>
    item.deal === state.deal &&
    (state.kind === 'Все' || item.kind === state.kind) &&
    (state.rooms === 'Все' || item.rooms >= Number(state.rooms)) &&
    item.area >= state.areaFrom && item.area <= state.areaTo &&
    (!state.favoritesOnly || state.liked.has(item.id)) &&
    item.price >= state.priceFrom && item.price <= priceCeiling &&
    (!q || `${item.title} ${item.location} ${item.kind}`.toLowerCase().includes(q))
  );
  const visible = [...filtered].sort((a, b) => state.sort === 'cheap' ? a.price - b.price : state.sort === 'expensive' ? b.price - a.price : b.id - a.id);
  return `${header()}${hero()}<main class="main-content">
    ${filters()}
    <div class="layout">
      ${sidebar()}
      <section class="results-column">
        ${promoTiles()}
        <div class="results-head">
          <h2>${state.deal === 'rent' ? 'Недвижимость в аренду' : 'Актуальные предложения'} <span class="results-count">${visible.length ? '· ' + visible.length + ' объявлений' : ''}</span></h2>
          <select class="sort-select" id="sortSelect"><option value="new" ${state.sort === 'new' ? 'selected' : ''}>Сначала новые</option><option value="cheap" ${state.sort === 'cheap' ? 'selected' : ''}>Сначала дешевле</option><option value="expensive" ${state.sort === 'expensive' ? 'selected' : ''}>Сначала дороже</option></select>
        </div>
        ${state.view === 'map' ? catalogMap(visible) : `<div class="listing-grid">${visible.length ? visible.map(card).join('') : `<div class="empty">По вашему запросу ничего не найдено.<br/><button class="reset-link" data-action="reset">Сбросить фильтры</button></div>`}</div>`}
      </section>
    </div>
  </main>`;
}

function catalogMap(items) {
  return `<div class="catalog-map"><div class="catalog-map-canvas">${miniMap('Снежное')}<span class="map-price pin-one">${items[0] ? money(items[0].price) : ''}</span><span class="map-price pin-two">${items[1] ? money(items[1].price) : ''}</span><span class="map-price pin-three">${items[2] ? money(items[2].price) : ''}</span></div><div class="map-list">${items.slice(0, 3).map(card).join('') || '<div class="empty">Нет объектов</div>'}</div></div>`;
}

function investmentsPage() {
  return `${header()}<main class="invest-page">
    <div class="breadcrumbs"><span>Главная</span><span class="crumb-sep">·</span><span>Инвестиции</span></div>
    <section class="invest-hero">
      <div><span class="invest-kicker">Инвестиционные объекты</span><h1>Недвижимость с понятным планом обновления</h1><p>Подбор объектов в Снежном для ремонта и последующей реализации. Показываем исходное состояние, объём работ и сценарий проекта — без обещаний доходности.</p><button class="primary-btn" data-action="investContact">Обсудить подбор ${icon('arrowLeft', 'arrow-turn')}</button></div>
      <img src="${images.renovation}" alt="Объект до ремонта"/>
    </section>
    <section class="invest-section"><div class="section-heading"><div><h2>Проекты в работе</h2><p>Примеры демонстрационной витрины для инвестора.</p></div><span class="invest-note">Данные — ориентиры для презентации</span></div>
      <div class="invest-grid">
        <article class="project-card"><div class="before-after"><div><span>До</span><img src="${images.renovation}" alt="Квартира до обновления"/></div><div><span>После</span><img src="${images.apartment[0]}" alt="Квартира после обновления"/></div></div><div class="project-body"><span class="project-label">Квартира · 45 м²</span><h3>мкр. 3-й, 8</h3><p>Обновление отделки, кухни и инженерных узлов. Работа с объектом ведётся после проверки документов.</p><div class="project-economics"><span><small>Покупка</small><b>1,95 млн ₽</b></span><span><small>Ремонт</small><b>от 650 тыс. ₽</b></span><span><small>Срок</small><b>3–4 месяца</b></span></div><div class="project-stages"><span>01 Осмотр</span><span>02 Смета</span><span>03 Ремонт</span></div></div></article>
        <article class="project-card"><div class="before-after"><div><span>До</span><img src="${images.home}" alt="Дом до обновления"/></div><div><span>После</span><img src="${images.house}" alt="Дом после обновления"/></div></div><div class="project-body"><span class="project-label">Дом · 120 м²</span><h3>ул. Лесная, 23</h3><p>Оценка состояния дома и коммуникаций, поэтапное обновление фасада и внутренних помещений.</p><div class="project-economics"><span><small>Покупка</small><b>6,2 млн ₽</b></span><span><small>Работы</small><b>от 1,4 млн ₽</b></span><span><small>Срок</small><b>5–6 месяцев</b></span></div><div class="project-stages"><span>01 Анализ</span><span>02 План работ</span><span>03 Реализация</span></div></div></article>
      </div>
    </section>
    <section class="invest-process"><h2>Как устроен процесс</h2><div><article><b>1</b><h3>Находим объект</h3><p>Сверяем локацию, документы и реальное состояние.</p></article><article><b>2</b><h3>Собираем план</h3><p>Фиксируем гипотезы, бюджет работ и риски.</p></article><article><b>3</b><h3>Показываем ход</h3><p>В презентации доступны этапы «до / после».</p></article></div></section>
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
  const photos = itemPhotos(item);
  const activeIdx = state.gallery % photos.length;
  const maxThumbs = 3;
  const thumbs = photos.slice(0, maxThumbs);
  const extra = photos.length - maxThumbs;
  return `${header()}<main class="detail-page">
    <div class="breadcrumbs"><button data-action="home">Главная</button><span class="crumb-sep">·</span><button data-nav="${item.deal === 'rent' ? 'Снять' : 'Купить'}">${item.deal === 'rent' ? 'Снять' : 'Купить'}</button><span class="crumb-sep">·</span><span>${item.kind}</span><span class="crumb-sep">·</span><span>${item.title}</span></div>
    <button class="back-link" data-action="home">${icon('arrowLeft')}Назад к списку</button>
    <div class="detail-layout">
      <section class="detail-left">
        <div class="gallery-row">
          <div class="main-photo">
            <img src="${photos[activeIdx]}" alt="${item.title}"/>
            <span class="counter">${activeIdx + 1} / ${photos.length}</span>
            <button class="gallery-arrow gallery-prev" data-action="galleryPrev" aria-label="Предыдущее фото">${icon('arrowLeft')}</button>
            <button class="gallery-arrow gallery-next" data-action="galleryNext" aria-label="Следующее фото">${icon('arrowLeft')}</button>
            <div class="photo-tools">
              <button class="tool-pill" data-action="video">${icon('play')}Видео</button>
              <button class="tool-pill" data-action="planLayout">${icon('layout')}Планировка</button>
            </div>
            <button class="photo-heart ${state.liked.has(item.id) ? 'is-liked' : ''}" data-like="${item.id}" aria-label="В избранное">${icon(state.liked.has(item.id) ? 'heartFill' : 'heart')}</button>
          </div>
          <div class="thumb-col">${thumbs.map((photo, i) => `<button class="thumb ${i === activeIdx ? 'active' : ''}" data-gallery="${i}"><img src="${photo}" alt="Фото ${i + 1}"/>${i === maxThumbs - 1 && extra > 0 ? `<span class="thumb-more">+${extra}</span>` : ''}</button>`).join('')}</div>
        </div>
        <section class="mobile-summary">
          <span>${item.kind} · ${item.location}</span><h1>${item.title}</h1><strong>${money(item.price)}${item.deal === 'rent' ? ' / мес.' : ''}</strong>
          <button class="contact-btn" data-action="contact">Записаться на просмотр</button>
          <button class="phone-btn" data-action="phone">${icon('phone')}Показать телефон</button>
        </section>
        <div class="detail-lower">
          <section class="description-panel">
            <div class="tabs">
              <button class="tab active" data-tab="description">Описание</button>
              <button class="tab" data-tab="features">Характеристики</button>
              <button class="tab" data-tab="map">На карте</button>
            </div>
            <div id="detailTabContent">
              <p class="description">${item.description}</p>
              <div class="feature-row">${item.features.map(f => `<span class="feature">${icon(featureIcons[f] || 'shield')}${f}</span>`).join('')}</div>
            </div>
          </section>
          <div class="seller-panel">
            <img class="seller-avatar" src="${images.agent}" alt="Риелтор"/>
            <div class="seller-details"><div class="seller-name">Ирина Петрова</div><div class="seller-sub">Риелтор · ${icon('starFill', 'star-icon')} 4,9 · 27 отзывов</div></div>
            <div class="seller-since">На сайте с июля 2021</div>
            <button class="seller-link" data-action="seller">Смотреть все объявления</button>
          </div>
        </div>
      </section>
      <aside class="detail-right">
        <div class="price-card">
          <div class="price-card-top"><h1>${item.title}</h1><button class="icon-btn share-btn" data-action="share" aria-label="Поделиться">${icon('share')}</button></div>
          <div class="location">${icon('pin', 'meta-icon')}${item.location}</div>
          <div class="detail-price">${money(item.price)}${item.deal === 'rent' ? '<small>в месяц · коммунальные платежи по условиям объявления</small>' : `<small>${Math.round(item.price / item.area).toLocaleString('ru-RU')} ₽ / ${item.kind === 'Участок' ? 'сотку' : 'м²'}</small>`}</div>
          <div class="detail-actions">
            <button class="contact-btn" data-action="contact">Записаться на просмотр</button>
            <button class="message-btn" data-action="contact">${icon('chat')}Написать</button>
            <button class="phone-btn" data-action="phone">${icon('phone')}Показать телефон</button>
          </div>
          <div class="protect">${icon('shield')}Номер защищён от спама и мошенников</div>
          <div class="facts">${item.facts.map(([ic, value, label]) => `<div class="fact">${icon(ic, 'fact-icon')}<div><strong>${value}</strong><span>${label}</span></div></div>`).join('')}</div>
        </div>
        ${miniMap(item.location)}
      </aside>
    </div>
  </main>`;
}

function modal() {
  if (!state.modal) return '';
  const closeBtn = `<button class="modal-close" data-action="close" aria-label="Закрыть">${icon('close')}</button>`;
  if (state.modal === 'contact') { const investment = state.page === 'invest'; return `<div class="modal-backdrop" data-close><div class="modal" role="dialog" aria-modal="true" aria-labelledby="contactTitle">${closeBtn}<span class="modal-kicker">${investment ? 'Инвестиционный проект' : 'Просмотр объекта'}</span><h2 id="contactTitle">${investment ? 'Получить расчёт проекта' : 'Записаться на удобное время'}</h2><p>${investment ? 'Оставьте контакты — подготовим демонстрационную структуру расчёта и рисков.' : 'Оставьте контакты — Ирина уточнит детали и подтвердит просмотр.'}</p><label for="contactName">Имя</label><input id="contactName" autocomplete="name" placeholder="Как к вам обращаться?"/><label for="contactPhone">Телефон</label><input id="contactPhone" inputmode="tel" autocomplete="tel" placeholder="+7 (___) ___-__-__"/><label for="contactMessage">Сообщение</label><textarea id="contactMessage">${investment ? 'Здравствуйте! Хочу получить расчёт инвестиционного проекта.' : 'Здравствуйте! Хочу посмотреть объект.'}</textarea><div class="form-error" id="contactError"></div><div class="modal-actions"><button class="secondary-btn" data-action="close">Отмена</button><button class="primary-btn" data-action="send">Отправить заявку</button></div></div></div>`; }
  if (state.modal === 'filters') return `<div class="modal-backdrop" data-close><div class="modal filters-modal" role="dialog" aria-modal="true">${closeBtn}<span class="modal-kicker">Каталог</span><h2>Расширенные фильтры</h2><p>Все основные параметры поиска в одном месте.</p><div class="filter-form"><label>Сделка<select id="modalDeal"><option value="sale" ${state.deal === 'sale' ? 'selected' : ''}>Купить</option><option value="rent" ${state.deal === 'rent' ? 'selected' : ''}>Снять</option></select></label><label>Тип<select id="modalKind"><option>Все</option>${['Квартира','Дом','Коммерция','Участок'].map(k => `<option ${state.kind === k ? 'selected' : ''}>${k}</option>`).join('')}</select></label><label>Комнаты<select id="modalRooms"><option>Все</option>${[1,2,3,4].map(r => `<option value="${r}" ${Number(state.rooms) === r ? 'selected' : ''}>${r === 4 ? '4+' : r}</option>`).join('')}</select></label><label>Цена до<input id="modalPrice" inputmode="numeric" value="${Math.min(state.priceTo, state.deal === 'rent' ? 100000 : PRICE_MAX).toLocaleString('ru-RU')}"/></label><label>Площадь от, м²<input id="modalAreaFrom" inputmode="numeric" value="${state.areaFrom || ''}" placeholder="0"/></label><label>Площадь до, м²<input id="modalAreaTo" inputmode="numeric" value="${state.areaTo === 1000 ? '' : state.areaTo}" placeholder="Любая"/></label></div><div class="modal-actions"><button class="secondary-btn" data-action="reset">Сбросить</button><button class="primary-btn" data-action="applyFilters">Показать объекты</button></div></div></div>`;
  if (state.modal === 'publish') {
    const step = state.publishStep;
    const content = step === 1 ? `<label>Тип сделки</label><div class="choice-grid"><button class="choice-card is-active" data-choice>Продать</button><button class="choice-card" data-choice>Сдать</button></div><label>Тип недвижимости</label><select id="publishKind"><option>Квартира</option><option>Дом</option><option>Участок</option><option>Коммерция</option></select>` : step === 2 ? `<label>Адрес объекта</label><input placeholder="Снежное, улица и номер дома"/><div class="form-two"><label>Цена, ₽<input inputmode="numeric" placeholder="2 850 000"/></label><label>Площадь, м²<input inputmode="numeric" placeholder="56"/></label></div><label>Короткое описание</label><textarea placeholder="Состояние, отопление, коммуникации"></textarea>` : `<label>Фотографии</label><button class="upload-demo" data-action="noop">${icon('photo')}<span>Добавить фотографии<small>В демо будет показан предпросмотр</small></span></button><div class="form-two"><label>Ваше имя<input placeholder="Имя"/></label><label>Телефон<input inputmode="tel" placeholder="+7 (___) ___-__-__"/></label></div>`;
    return `<div class="modal-backdrop" data-close><div class="modal publish-modal" role="dialog" aria-modal="true">${closeBtn}<span class="modal-kicker">Шаг ${step} из 3</span><h2>Разместить объявление</h2><div class="stepper"><i class="active"></i><i class="${step > 1 ? 'active' : ''}"></i><i class="${step > 2 ? 'active' : ''}"></i></div>${content}<div class="modal-actions">${step > 1 ? '<button class="secondary-btn" data-action="publishBack">Назад</button>' : '<button class="secondary-btn" data-action="close">Отмена</button>'}<button class="primary-btn" data-action="${step < 3 ? 'publishNext' : 'sendPublish'}">${step < 3 ? 'Продолжить' : 'Разместить'}</button></div></div></div>`;
  }
  if (state.modal === 'success') return `<div class="modal-backdrop"><div class="modal success-modal" role="dialog" aria-modal="true"><span class="success-icon">${icon('shield')}</span><h2>Заявка принята</h2><p>Это демонстрационный сценарий: данные никуда не отправлялись. В реальном продукте здесь появится номер заявки.</p><div class="modal-actions"><button class="primary-btn" data-action="close">Вернуться к каталогу</button></div></div></div>`;
  if (state.modal === 'messages') return `<div class="modal-backdrop" data-close><div class="modal inbox-modal">${closeBtn}<span class="modal-kicker">Сообщения</span><h2>Диалоги по объектам</h2><div class="demo-dialog"><img src="${images.agent}" alt="Ирина Петрова"/><div><b>Ирина Петрова</b><p>Подтверждаю просмотр завтра в 15:00</p></div><time>12:40</time></div><div class="demo-dialog"><span class="dialog-house">${icon('home')}</span><div><b>Дом на Лесной</b><p>Владелец добавил документы объекта</p></div><time>вчера</time></div><div class="modal-actions"><button class="primary-btn" data-action="close">Готово</button></div></div></div>`;
  if (state.modal === 'profile') return `<div class="modal-backdrop" data-close><div class="modal profile-modal">${closeBtn}<span class="modal-kicker">Демо-профиль</span><div class="profile-head"><span>${icon('user')}</span><div><h2>Алексей</h2><p>Покупатель · Снежное</p></div></div><div class="profile-links"><button data-action="favorites">${icon('heart')}Избранные объекты<b>${state.liked.size}</b></button><button data-action="messages">${icon('chat')}Сообщения<b>2</b></button><button data-action="publish">${icon('plus')}Мои объявления</button></div></div></div>`;
  if (state.modal === 'media') return `<div class="modal-backdrop" data-close><div class="modal media-modal">${closeBtn}<span class="modal-kicker">${state.mediaMode === 'video' ? 'Видеообзор' : 'Планировка'}</span><h2>${state.selected?.title || 'Объект'}</h2><div class="media-preview"><img src="${itemPhotos(state.selected)[state.mediaMode === 'video' ? 0 : Math.min(2, itemPhotos(state.selected).length - 1)]}" alt="${state.mediaMode === 'video' ? 'Видеообзор объекта' : 'Планировка объекта'}"/>${state.mediaMode === 'video' ? `<span>${icon('play')}</span>` : ''}</div><p>${state.mediaMode === 'video' ? 'Демонстрационный превью-блок видеообзора объекта.' : 'Демонстрационное изображение планировки и зонирования.'}</p><div class="modal-actions"><button class="primary-btn" data-action="close">Закрыть</button></div></div></div>`;
  if (state.modal === 'phone') return `<div class="modal-backdrop" data-close><div class="modal phone-modal">${closeBtn}<span class="modal-kicker">Риелтор</span><h2>Ирина Петрова</h2><a href="tel:+79381234567" class="demo-phone">+7 (938) 123-45-67</a><p>Демонстрационный номер для презентации сервиса.</p><div class="modal-actions"><button class="secondary-btn" data-action="copyPhone">Скопировать</button><button class="primary-btn" data-action="close">Готово</button></div></div></div>`;
  return '';
}

function render() {
  const view = state.page === 'detail' ? detailPage(state.selected) : state.page === 'invest' ? investmentsPage() : homePage();
  app.innerHTML = `<div class="app-shell">${view}</div>${modal()}`;
  document.body.classList.toggle('modal-open', Boolean(state.modal));
  repairVisibleCopy();
  bind();
}

function repairVisibleCopy() {
  const root = document.body;
  document.title = normaliseMojibake(document.title);
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = normaliseMojibake(description.content);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(node => { node.nodeValue = normaliseMojibake(node.nodeValue); });
  root.querySelectorAll('[placeholder], [aria-label], [alt]').forEach(el => {
    ['placeholder', 'aria-label', 'alt'].forEach(attr => {
      if (el.hasAttribute(attr)) el.setAttribute(attr, normaliseMojibake(el.getAttribute(attr)));
    });
  });
}

function toast(message) { const el = document.querySelector('#toast'); el.textContent = message; el.classList.add('show'); clearTimeout(window.__toast); window.__toast = setTimeout(() => el.classList.remove('show'), 2300); }

function bind() {
  document.querySelectorAll('[data-nav]').forEach(btn => btn.addEventListener('click', () => {
    if (btn.dataset.nav === 'Продать') { state.modal = 'publish'; state.publishStep = 1; render(); return; }
    setDeal(btn.dataset.nav === 'Снять' ? 'rent' : 'sale'); navigate('catalog');
  }));
  document.querySelectorAll('[data-open]').forEach(cardEl => cardEl.addEventListener('click', e => { if (e.target.closest('[data-like]')) return; openListing(Number(cardEl.dataset.open)); }));
  document.querySelectorAll('[data-like]').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); const id = Number(btn.dataset.like); state.liked.has(id) ? state.liked.delete(id) : state.liked.add(id); localStorage.setItem('snezhnoe-liked', JSON.stringify([...state.liked])); render(); toast(state.liked.has(id) ? 'Добавлено в избранное' : 'Удалено из избранного'); }));
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
    else content.innerHTML = `<p class="description">${item.description}</p><div class="feature-row">${item.features.map(f => `<span class="feature">${icon(featureIcons[f] || 'shield')}${f}</span>`).join('')}</div>`;
  }));
  const searchForm = document.querySelector('#searchForm');
  if (searchForm) searchForm.addEventListener('submit', e => { e.preventDefault(); state.query = document.querySelector('#searchInput').value; render(); toast(state.query ? `Поиск: ${state.query}` : 'Показываем все объекты'); });
  document.querySelectorAll('[data-kind]').forEach(input => input.addEventListener('change', () => { state.kind = input.dataset.kind; render(); }));
  document.querySelectorAll('[data-rooms]').forEach(input => input.addEventListener('change', () => { state.rooms = input.dataset.rooms; render(); }));
  document.querySelectorAll('[data-quick-kind]').forEach(btn => btn.addEventListener('click', () => { state.kind = btn.dataset.quickKind; state.quickFilter = null; render(); }));
  document.querySelectorAll('[data-quick-deal]').forEach(btn => btn.addEventListener('click', () => { setDeal(btn.dataset.quickDeal); state.quickFilter = null; render(); }));
  document.querySelectorAll('[data-quick-rooms]').forEach(btn => btn.addEventListener('click', () => { state.rooms = btn.dataset.quickRooms; state.quickFilter = null; render(); }));
  const sortSelect = document.querySelector('#sortSelect');
  if (sortSelect) sortSelect.addEventListener('change', () => { state.sort = sortSelect.value; render(); });
  const phoneInput = document.querySelector('#contactPhone');
  if (phoneInput) phoneInput.addEventListener('input', () => { const digits = phoneInput.value.replace(/\D/g, '').replace(/^8/, '7').slice(0, 11); const body = digits.slice(1); phoneInput.value = '+7' + (body.length ? ' (' + body.slice(0,3) : '') + (body.length >= 3 ? ') ' + body.slice(3,6) : '') + (body.length >= 6 ? '-' + body.slice(6,8) : '') + (body.length >= 8 ? '-' + body.slice(8,10) : ''); });
  document.querySelectorAll('[data-choice]').forEach(choice => choice.addEventListener('click', () => { document.querySelectorAll('[data-choice]').forEach(el => el.classList.remove('is-active')); choice.classList.add('is-active'); }));

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
    const parse = v => Math.max(PRICE_MIN, Math.min(state.deal === 'rent' ? 100000 : PRICE_MAX, Number(v.replace(/\D/g, '')) || 0));
    fromInput.addEventListener('change', () => { state.priceFrom = Math.min(parse(fromInput.value), state.priceTo); render(); });
    toInput.addEventListener('change', () => { state.priceTo = Math.max(parse(toInput.value), state.priceFrom); render(); });
  }
}

function syncSliderVisual() {
  const fromRange = document.querySelector('#priceFromRange');
  const toRange = document.querySelector('#priceToRange');
  const rangeEl = document.querySelector('.slider-range');
  if (!fromRange || !toRange || !rangeEl) return;
  const max = Number(toRange.max);
  const pct = v => ((v - PRICE_MIN) / (max - PRICE_MIN)) * 100;
  rangeEl.style.left = pct(Number(fromRange.value)) + '%';
  rangeEl.style.right = (100 - pct(Number(toRange.value))) + '%';
}

function action(name) {
  if (name === 'home') { navigate('home'); return; }
  if (name === 'publish') { state.modal = 'publish'; state.publishStep = 1; }
  else if (name === 'contact') state.modal = 'contact';
  else if (name === 'phone') state.modal = 'phone';
  else if (name === 'close') state.modal = null;
  else if (name === 'send') { const n = document.querySelector('#contactName'); const p = document.querySelector('#contactPhone'); if (!n?.value.trim() || (p?.value.replace(/\D/g, '').length || 0) < 11) { const err = document.querySelector('#contactError'); if (err) err.textContent = 'Введите имя и полный номер телефона'; return; } state.modal = 'success'; }
  else if (name === 'sendPublish') state.modal = 'success';
  else if (name === 'publishNext') state.publishStep = Math.min(3, state.publishStep + 1);
  else if (name === 'publishBack') state.publishStep = Math.max(1, state.publishStep - 1);
  else if (name === 'reset') { state.kind = 'Все'; state.rooms = 'Все'; state.query = ''; state.favoritesOnly = false; state.priceFrom = PRICE_MIN; state.priceTo = state.deal === 'rent' ? 100000 : PRICE_MAX; state.areaFrom = 0; state.areaTo = 1000; state.quickFilter = null; }
  else if (name === 'closeQuick') state.quickFilter = null;
  else if (name === 'resetPrice') { state.priceFrom = PRICE_MIN; state.priceTo = state.deal === 'rent' ? 100000 : PRICE_MAX; state.quickFilter = null; }
  else if (name === 'resetArea') { state.areaFrom = 0; state.areaTo = 1000; state.quickFilter = null; }
  else if (name === 'applyQuickPrice') { const max = state.deal === 'rent' ? 100000 : PRICE_MAX; const parse = (id, fallback) => Math.max(0, Math.min(max, Number((document.querySelector(id)?.value || '').replace(/\D/g, '')) || fallback)); let from = parse('#quickPriceFrom', 0), to = parse('#quickPriceTo', max); if (from > to) [from, to] = [to, from]; state.priceFrom = from; state.priceTo = to; state.quickFilter = null; }
  else if (name === 'applyQuickArea') { let from = Math.max(0, Number((document.querySelector('#quickAreaFrom')?.value || '').replace(/\D/g, '')) || 0), to = Math.max(1, Number((document.querySelector('#quickAreaTo')?.value || '').replace(/\D/g, '')) || 1000); if (from > to) [from, to] = [to, from]; state.areaFrom = from; state.areaTo = to; state.quickFilter = null; }
  else if (name === 'favorites') { state.favoritesOnly = !state.favoritesOnly; navigate('catalog'); toast(state.favoritesOnly ? `Избранное: ${state.liked.size}` : 'Показаны все объекты'); return; }
  else if (name === 'messages') state.modal = 'messages';
  else if (name === 'login') state.modal = 'profile';
  else if (name === 'city') toast('В прототипе доступен город Снежное');
  else if (name === 'seller') { state.kind = 'Все'; navigate('catalog'); toast('Показаны объявления Ирины Петровой'); return; }
  else if (name === 'share') { navigator.clipboard?.writeText(location.href); toast('Ссылка на объект скопирована'); }
  else if (name === 'video' || name === 'planLayout') { state.mediaMode = name === 'video' ? 'video' : 'plan'; state.modal = 'media'; }
  else if (name === 'investContact') state.modal = 'contact';
  else if (name === 'galleryPrev' || name === 'galleryNext') { const photos = itemPhotos(state.selected); state.gallery = (state.gallery + (name === 'galleryNext' ? 1 : photos.length - 1)) % photos.length; }
  else if (name === 'applyFilters') { const deal = document.querySelector('#modalDeal')?.value || state.deal; const selectedKind = document.querySelector('#modalKind')?.value || 'Все'; const selectedRooms = document.querySelector('#modalRooms')?.value || 'Все'; const selectedPrice = Number((document.querySelector('#modalPrice')?.value || '').replace(/\D/g, '')) || (deal === 'rent' ? 100000 : PRICE_MAX); const selectedAreaFrom = Number((document.querySelector('#modalAreaFrom')?.value || '').replace(/\D/g, '')) || 0; const selectedAreaTo = Number((document.querySelector('#modalAreaTo')?.value || '').replace(/\D/g, '')) || 1000; setDeal(deal); state.kind = selectedKind; state.rooms = selectedRooms; state.priceTo = selectedPrice; state.areaFrom = Math.min(selectedAreaFrom, selectedAreaTo); state.areaTo = Math.max(selectedAreaFrom, selectedAreaTo); state.modal = null; }
  else if (name === 'copyPhone') { navigator.clipboard?.writeText('+7 938 123-45-67'); toast('Телефон скопирован'); }
  else if (name === 'more') { state.quickFilter = null; state.modal = 'filters'; }
  else if (name === 'deal' || name === 'type' || name === 'price' || name === 'rooms' || name === 'area') { state.modal = null; state.quickFilter = state.quickFilter === name ? null : name; }
  else if (name === 'list' || name === 'map') { state.view = name; toast(name === 'map' ? 'Режим карты выбран' : 'Режим списка выбран'); }
  else if (name === 'noop') { toast('Фотографии добавлены в демо-режиме'); return; }
  render();
}

document.addEventListener('click', e => {
  const promo = e.target.closest('[data-promo]');
  if (!promo) return;
  const key = promo.dataset.promo;
  if (key === 'invest') navigate('invest');
  else if (key === 'sell') { state.modal = 'publish'; state.publishStep = 1; render(); }
  else { setDeal(key === 'rent' ? 'rent' : 'sale'); navigate('catalog'); }
});

function setDeal(deal) {
  state.deal = deal;
  state.kind = 'Все';
  state.rooms = 'Все';
  state.priceFrom = PRICE_MIN;
  state.priceTo = deal === 'rent' ? 100000 : PRICE_MAX;
  state.areaFrom = 0;
  state.areaTo = 1000;
  state.favoritesOnly = false;
}

function openListing(id) {
  state.selected = listings.find(item => item.id === id);
  state.page = 'detail'; state.gallery = 0; state.modal = null;
  if (location.hash !== `#object-${id}`) location.hash = `object-${id}`;
  else { render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
}

function navigate(target) {
  const hash = target === 'home' ? '' : target === 'catalog' ? 'catalog' : target;
  if (location.hash.replace('#', '') !== hash) location.hash = hash;
  else applyRoute();
}

function applyRoute() {
  const route = location.hash.replace('#', '');
  const id = Number(route.replace('object-', ''));
  state.modal = null;
  state.quickFilter = null;
  if (route.startsWith('object-') && listings.some(item => item.id === id)) { state.page = 'detail'; state.selected = listings.find(item => item.id === id); state.gallery = 0; }
  else if (route === 'invest') { state.page = 'invest'; state.selected = null; }
  else { state.page = 'home'; state.selected = null; }
  render(); window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('hashchange', applyRoute);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && (state.modal || state.quickFilter)) { state.modal = null; state.quickFilter = null; render(); } });
applyRoute();
