'use strict';

const CFG = window.SITE_CONFIG || {};
const PROJECT_ID = CFG.firebaseProjectId || 'dedets-9cc2b';
const COLLECTION = CFG.firestoreCollection || 'settings';
const FB_BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${COLLECTION}`;

const DEFAULT_PRODUCTS = [
  {id:'hugo2xl',name:'JOYSTICK HUGO 2XL',sub:'Флагманская линейка',pw:1800,pr:2190,img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=82',desc:'Флагманская линейка с большим объёмом, LED-дисплеем и насыщенной вкусовой палитрой.',specs:['55 000 затяжек','26 мл','2% никотин','850 mAh','Double Mesh Coil','LED Display','Type-C'],flavors:[
    {en:'Apple Peach',ru:'Яблоко Персик',img:'',desc:''},{en:'Honey Mango Banana',ru:'Манго Банан Мёд',img:'',desc:''},{en:'Blueberry Sour Apple',ru:'Черника Кислое Яблоко',img:'',desc:''},{en:'Rainbow Candy',ru:'Радужный Леденец',img:'',desc:''},{en:'Tangerine Blackcurrant',ru:'Мандарин Черная Смородина',img:'',desc:''},{en:'Mango Blackcurrant',ru:'Черная Смородина Манго',img:'',desc:''},{en:'Mixed Berries',ru:'Ягодный Микс',img:'',desc:''},{en:'Mixed Fruits',ru:'Фруктовый Микс',img:'',desc:''},{en:'Orange Soda (Fanta)',ru:'Фанта',img:'',desc:''},{en:'Pineapple Grapefruit Ice',ru:'Ананас Грейпфрут',img:'',desc:''},{en:'Strawberry Kiwi',ru:'Клубника Киви',img:'',desc:''},{en:'Grape Lemonade',ru:'Виноградный Лимонад',img:'',desc:''},{en:'Cola Mojito',ru:'Кола Мохито',img:'',desc:''},{en:'Red Apple Anise',ru:'Красное Яблоко Анис',img:'',desc:''},{en:'Toffee',ru:'Карамельки Тоффи',img:'',desc:''}
  ]},
  {id:'turbomixo',name:'JOYSTICK TURBO MIXO',sub:'Крепкая серия',pw:1750,pr:2390,img:'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=900&q=82',desc:'Крепкая серия с регулировкой затяжки, дисплеем и насыщенными миксами вкусов.',specs:['40 000 затяжек','26 мл','2% / +7.5% никотин','650 mAh','Регулировка затяжки','LED Display'],flavors:[
    {en:'Pineapple Peach Orange Kiwi',ru:'Ананас / Персик / Апельсин / Киви',img:'',desc:''},{en:'Strawberry Watermelon Bubblegum',ru:'Клубнично-Арбузная Жевачка',img:'',desc:''},{en:'Strawberry Kiwi Ice',ru:'Клубника / Киви со Льдом',img:'',desc:''},{en:'Peach Berry',ru:'Персик / Ягоды',img:'',desc:''},{en:'Blueberry Blackcurrant Lemon',ru:'Черника / Черная Смородина / Лимон',img:'',desc:''},{en:'Mixed Berries Ice',ru:'Ягодный Микс со Льдом',img:'',desc:''},{en:'Aloe Grape',ru:'Виноград / Алоэ Вера',img:'',desc:''},{en:'Black Raspberry Ice',ru:'Черная Малина со Льдом',img:'',desc:''},{en:'Mango Peach Watermelon',ru:'Манго / Персик / Арбуз',img:'',desc:''},{en:'Cherry Lemon',ru:'Вишня / Лимон',img:'',desc:''}
  ]},
  {id:'hugoice',name:'JOYSTICK HUGO ICE ICE, BABY!',sub:'Серия с холодком',pw:1650,pr:2290,img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=82',desc:'Серия с холодком, тройной сеткой, 3D LED-дисплеем и яркими вкусами.',specs:['32 000 затяжек','23 мл','2% никотин','800 mAh','3D LED Display','Triple Mesh Coil','Type-C'],flavors:[
    {en:'Blueberry Sour Apple',ru:'Черника Кислое Яблоко',img:'',desc:''},{en:'Pineapple Grapefruit Ice',ru:'Ананас Грейпфрут',img:'',desc:''},{en:'Grape Lemonade',ru:'Виноградный Лимонад',img:'',desc:''},{en:'Mixed Fruits',ru:'Фруктовый Микс',img:'',desc:''},{en:'Toffee',ru:'Карамельки Тоффи',img:'',desc:''},{en:'Mango Blackcurrant',ru:'Мандарин Черная Смородина',img:'',desc:''},{en:'Cola Mojito',ru:'Кола Мохито',img:'',desc:''},{en:'Fanta',ru:'Фанта',img:'',desc:''},{en:'Rainbow Candy',ru:'Радужный Леденец',img:'',desc:''},{en:'Mixed Berries',ru:'Ягодный Микс',img:'',desc:''},{en:'Red Apple Anise',ru:'Двойное Яблоко',img:'',desc:''},{en:'Strawberry Kiwi',ru:'Клубника Киви',img:'',desc:''},{en:'Apple Peach',ru:'Яблоко Персик',img:'',desc:''},{en:'Mango Blackcurrant (2)',ru:'Чёрная Смородина Манго',img:'',desc:''},{en:'Honey Mango Banana',ru:'Манго Банан Мёд',img:'',desc:''}
  ]}
];

const DEFAULT_TEXTS = {
  logo:'JOYSTICK',
  heroSub:'Premium Disposable Series',
  heroTitle:'JOYSTICK',
  heroDesc:'Премиальные одноразовые устройства. Каталог, документы, корзина и быстрый заказ.',
  contactDesc:'Оптовые поставки · Индивидуальные условия · Быстрая доставка',
  footerLogo:'JOYSTICK',
  footerText:'Оптовый поставщик · Россия'
};
const DEFAULT_CONTACTS = {tg:'',wa:'',phone:'',email:''};
const DEFAULT_DOCS = [
  {id:'pd-policy',type:'Персональные данные',name:'Политика обработки персональных данных',desc:'Основной документ о порядке обработки и защиты персональных данных пользователей сайта.',url:''},
  {id:'pd-consent',type:'Согласие',name:'Согласие на обработку персональных данных',desc:'Документ, с которым пользователь соглашается при регистрации и оформлении заказа.',url:''},
  {id:'cookie-policy',type:'Cookie',name:'Политика обработки cookie-файлов',desc:'Описание использования cookie-файлов и аналогичных технологий на сайте.',url:''},
  {id:'ecig-docs',type:'Электронные сигареты',name:'Документы по электронным сигаретам',desc:'Сертификаты, декларации, предупреждения и иные документы по реализуемой продукции.',url:''}
];
const DEFAULT_DESIGN = {
  black:'#0b0b0c',deep:'#121214',panel:'#1a1a1d',panel2:'#202024',border:'#333238',gold:'#c9a84c',goldDim:'#8a6f30',cream:'#f6f0e8',text:'#ddd6cc',muted:'#a39a90',
  bodyFont:'Manrope',displayFont:'Lora',
  sizes:{body:17,small:13,nav:13,hero:92,section:48,cardTitle:24,price:28,button:13,input:15}
};
const FONT_OPTIONS = ['Inter','Manrope','Roboto','Noto Sans','PT Sans','Ubuntu','Rubik','Open Sans','Source Sans 3','Montserrat','Lora','Merriweather','Playfair Display','Cormorant Garamond'];
const FONT_LINK = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&family=Noto+Sans:wght@300;400;500;700&family=PT+Sans:wght@400;700&family=Ubuntu:wght@300;400;500;700&family=Rubik:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;700&family=Source+Sans+3:wght@300;400;500;700&family=Montserrat:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&family=Merriweather:wght@300;400;700&family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap&subset=cyrillic";
const CACHE = {};
let fbOk = false;
let adminLogged = false;
let adminTab = 'dashboard';
let adminProductDraft = null;
let adminDocsDraft = null;
let cloudSyncTimer = null;
let cloudSyncBusy = false;

function toFV(val){
  if(val===null||val===undefined)return{nullValue:null};
  if(typeof val==='boolean')return{booleanValue:val};
  if(typeof val==='number')return Number.isInteger(val)?{integerValue:String(val)}:{doubleValue:val};
  if(typeof val==='string')return{stringValue:val};
  if(Array.isArray(val))return{arrayValue:{values:val.map(toFV)}};
  if(typeof val==='object')return{mapValue:{fields:Object.fromEntries(Object.entries(val).map(([k,v])=>[k,toFV(v)]))}};
  return{stringValue:String(val)};
}
function fromFV(fv){
  if(!fv)return null;
  if('nullValue'in fv)return null;
  if('booleanValue'in fv)return fv.booleanValue;
  if('integerValue'in fv)return Number(fv.integerValue);
  if('doubleValue'in fv)return fv.doubleValue;
  if('stringValue'in fv)return fv.stringValue;
  if('arrayValue'in fv)return (fv.arrayValue.values||[]).map(fromFV);
  if('mapValue'in fv)return Object.fromEntries(Object.entries(fv.mapValue.fields||{}).map(([k,v])=>[k,fromFV(v)]));
  return null;
}
function clone(obj){return JSON.parse(JSON.stringify(obj));}
function getLS(key,def){
  if(CACHE[key]!==undefined)return CACHE[key];
  try{const raw=localStorage.getItem(key);return raw?JSON.parse(raw):clone(def);}catch{return clone(def);}
}
function setLS(key,val){
  CACHE[key]=val;
  try{localStorage.setItem(key,JSON.stringify(val));}catch(e){console.warn('localStorage save failed',key,e);}
}
async function fbWrite(key,val){
  if(!fbOk)return;
  try{
    await fetch(`${FB_BASE}/${encodeURIComponent(key)}?updateMask.fieldPaths=v`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({fields:{v:toFV(val)}})});
  }catch(e){console.warn('Firestore write failed',key,e);}
}
function saveKey(key,val){setLS(key,val);fbWrite(key,val);}
function defaultForKey(key){
  const map={products:DEFAULT_PRODUCTS,texts:DEFAULT_TEXTS,contacts:DEFAULT_CONTACTS,design:DEFAULT_DESIGN,users:[],orders:[],site_docs:DEFAULT_DOCS};
  if(key==='admin_login')return CFG.adminDefaultLogin||'CPJw1r';
  if(key==='admin_pwd')return CFG.adminDefaultPassword||'joystick2024';
  return clone(map[key]!==undefined?map[key]:null);
}
function requiredCloudKeys(){return ['products','texts','contacts','design','users','orders','site_docs','admin_login','admin_pwd'];}
async function repairMissingFirestore(remoteKeys){
  if(!fbOk)return;
  await Promise.all(requiredCloudKeys().filter(k=>!remoteKeys.has(k)).map(k=>{
    const val=getLS(k,defaultForKey(k));
    setLS(k,val);
    return fbWrite(k,val);
  }));
}
async function pullRemote({repair=false,refresh=false}={}){
  const res=await fetch(`${FB_BASE}?pageSize=200`);
  if(!res.ok)throw new Error(`HTTP ${res.status}`);
  const data=await res.json();
  const remoteKeys=new Set();
  (data.documents||[]).forEach(doc=>{
    const key=decodeURIComponent(doc.name.split('/').pop());
    if(doc.fields&&doc.fields.v!==undefined){
      const val=fromFV(doc.fields.v);
      remoteKeys.add(key);
      CACHE[key]=val;
      try{localStorage.setItem(key,JSON.stringify(val));}catch{}
    }
  });
  fbOk=true;
  if(repair)await repairMissingFirestore(remoteKeys);
  if(refresh)refreshVisibleUi();
  return remoteKeys;
}
async function loadRemote(){
  requiredCloudKeys().concat(['a_login','a_pwd']).forEach(k=>{try{const raw=localStorage.getItem(k);if(raw!==null)CACHE[k]=JSON.parse(raw);}catch{}});
  try{await pullRemote({repair:true,refresh:false});}
  catch(e){fbOk=false;console.warn('Firestore unavailable, using localStorage only',e.message);}
}
function refreshVisibleUi(){
  applyDesign();applyTexts();setActiveNav();updateCartCount();updateAuthButtons();renderPage();
  const st=document.getElementById('admin-status'); if(st)st.textContent=fbOk?'● Firestore онлайн':'● Только localStorage';
  const editableTabs=['products','docs','design','texts','contacts','settings'];
  if(document.getElementById('admin-panel')&&document.getElementById('admin-panel').classList.contains('open')&&!editableTabs.includes(adminTab))renderAdminContent(adminTab);
}
function startCloudAutoSync(){
  if(cloudSyncTimer)return;
  cloudSyncTimer=setInterval(async()=>{
    if(cloudSyncBusy)return;
    cloudSyncBusy=true;
    try{await pullRemote({repair:false,refresh:true});}
    catch(e){fbOk=false;const st=document.getElementById('admin-status'); if(st)st.textContent='● Только localStorage';}
    finally{cloudSyncBusy=false;}
  }, Number(CFG.cloudSyncIntervalMs||8000));
}
function restoreLocalDataToCloud(){
  if(!fbOk){alert('Firestore сейчас недоступен. Сначала проверьте проект Firebase и правила доступа.');return;}
  Promise.all(requiredCloudKeys().map(k=>fbWrite(k,getLS(k,defaultForKey(k))))).then(()=>alert('Данные из этого браузера отправлены в Firestore.')).catch(()=>alert('Не удалось отправить данные в Firestore.'));
}
function seedDefaultCloudData(){
  if(!fbOk){alert('Firestore сейчас недоступен. Сначала проверьте проект Firebase и правила доступа.');return;}
  const defaults={products:DEFAULT_PRODUCTS,texts:DEFAULT_TEXTS,contacts:DEFAULT_CONTACTS,design:DEFAULT_DESIGN,site_docs:DEFAULT_DOCS,users:[],orders:[],admin_login:CFG.adminDefaultLogin||'CPJw1r',admin_pwd:CFG.adminDefaultPassword||'joystick2024'};
  Promise.all(Object.entries(defaults).map(([k,v])=>{setLS(k,clone(v));return fbWrite(k,v);})).then(()=>{refreshVisibleUi();alert('База заполнена базовыми данными. Старые заказы и пользователи при этом заменены пустыми списками.');}).catch(()=>alert('Не удалось заполнить Firestore.'));
}
const products=()=>normalizeProducts(getLS('products',DEFAULT_PRODUCTS));
const texts=()=>Object.assign({},DEFAULT_TEXTS,getLS('texts',DEFAULT_TEXTS));
const contacts=()=>Object.assign({},DEFAULT_CONTACTS,getLS('contacts',DEFAULT_CONTACTS));
const design=()=>mergeDesign(getLS('design',DEFAULT_DESIGN));
const docs=()=>normalizeDocs(getLS('site_docs',DEFAULT_DOCS));
const users=()=>getLS('users',[]);
const orders=()=>getLS('orders',[]);
const adminLogin=()=>getLS('admin_login',getLS('a_login',CFG.adminDefaultLogin||'CPJw1r'));
const adminPwd=()=>getLS('admin_pwd',getLS('a_pwd',CFG.adminDefaultPassword||'joystick2024'));
function normalizeProducts(list){
  if(!Array.isArray(list))list=clone(DEFAULT_PRODUCTS);
  const legacyImages=getLS('images',{});
  return list.map((p,i)=>({id:p.id||`prod-${i}-${Date.now()}`,name:p.name||'Новый товар',sub:p.sub||'',pw:Number(p.pw||p.price||0),pr:Number(p.pr||p.retail||0),img:p.img||legacyImages[p.id]||'',desc:p.desc||'',specs:Array.isArray(p.specs)?p.specs:[],flavors:Array.isArray(p.flavors)?p.flavors:[]}));
}
function normalizeDocs(list){
  if(!Array.isArray(list))list=clone(DEFAULT_DOCS);
  const existingIds=new Set(list.map(d=>d.id));
  const merged=clone(list);
  DEFAULT_DOCS.forEach(d=>{if(!existingIds.has(d.id))merged.push(clone(d));});
  return merged.map((d,i)=>({id:d.id||`doc-${i}`,type:d.type||'Документ',name:d.name||'Документ',desc:d.desc||'',url:d.url||''}));
}
function mergeDesign(d){
  const m=Object.assign({},DEFAULT_DESIGN,d||{});
  m.sizes=Object.assign({},DEFAULT_DESIGN.sizes,(d&&d.sizes)||{});
  return m;
}

function esc(s){return String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function money(n){return `${Number(n||0).toLocaleString('ru-RU')} ₽`;}
function page(){return document.body.dataset.page||'home';}
function getCart(){return getLS('cart',[]);}
function setCart(cart){setLS('cart',cart);updateCartCount();}
function currentUserId(){try{return localStorage.getItem('currentUserId')||'';}catch{return '';}}
function setCurrentUserId(id){try{id?localStorage.setItem('currentUserId',id):localStorage.removeItem('currentUserId');}catch{} updateAuthButtons();}
function currentUser(){const id=currentUserId();return users().find(u=>u.id===id)||null;}
function findProduct(id){return products().find(p=>p.id===id)||null;}
function findCartProduct(item){const p=findProduct(item.productId);const f=p&&p.flavors[item.flavorIndex];return {p,f};}

function applyDesign(d){
  d=mergeDesign(d||design());
  const r=document.documentElement;
  ['black','deep','panel','border','gold','goldDim','cream','text','muted'].forEach(k=>r.style.setProperty(`--${k.replace(/[A-Z]/g,m=>'-'+m.toLowerCase())}`,d[k]));
  r.style.setProperty('--panel-2',d.panel2||DEFAULT_DESIGN.panel2);
  r.style.setProperty('--ff-body',`'${d.bodyFont}', sans-serif`);
  r.style.setProperty('--ff-display',`'${d.displayFont}', serif`);
  const s=d.sizes||DEFAULT_DESIGN.sizes;
  r.style.setProperty('--fs-body',`${s.body}px`);r.style.setProperty('--fs-small',`${s.small}px`);r.style.setProperty('--fs-nav',`${s.nav}px`);r.style.setProperty('--fs-hero',`${s.hero}px`);r.style.setProperty('--fs-section',`${s.section}px`);r.style.setProperty('--fs-card-title',`${s.cardTitle}px`);r.style.setProperty('--fs-price',`${s.price}px`);r.style.setProperty('--fs-button',`${s.button}px`);r.style.setProperty('--fs-input',`${s.input}px`);
  const gfont=document.getElementById('gfont'); if(gfont)gfont.href=FONT_LINK;
}
function applyTexts(){
  const t=texts();
  document.querySelectorAll('[data-site-logo]').forEach(el=>el.textContent=t.logo||'JOYSTICK');
  document.querySelectorAll('[data-footer-logo]').forEach(el=>el.textContent=t.footerLogo||t.logo||'JOYSTICK');
  document.querySelectorAll('[data-footer-text]').forEach(el=>el.textContent=t.footerText||'');
  const sub=document.querySelector('[data-hero-sub]'); if(sub)sub.textContent=t.heroSub||'';
  const title=document.querySelector('[data-hero-title]'); if(title)title.textContent=t.heroTitle||t.logo||'JOYSTICK';
  const desc=document.querySelector('[data-hero-desc]'); if(desc)desc.textContent=t.heroDesc||'';
  const contactDesc=document.querySelector('[data-contact-page-desc]'); if(contactDesc)contactDesc.textContent=t.contactDesc||'';
  document.title=`${t.logo||'JOYSTICK'} — ${page()==='home'?'главная':page()==='collection'?'коллекция':page()==='documents'?'документы':'контакты'}`;
}
function setActiveNav(){document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('active',a.dataset.nav===page()));}
function toggleMobileMenu(){const nav=document.getElementById('main-nav'); if(nav)nav.classList.toggle('open');}
function updateCartCount(){const count=getCart().reduce((s,i)=>s+Number(i.qty||0),0);document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=count);}
function updateAuthButtons(){
  const u=currentUser();
  const login=document.querySelector('[data-auth-login]'); const reg=document.querySelector('[data-auth-register]'); const myOrders=document.querySelector('[data-my-orders]');
  if(!login||!reg)return;
  if(u){
    login.outerHTML=`<span class="current-user-label" data-auth-login>${esc(u.name||u.email)}</span>`;
    reg.outerHTML=`<button class="ghost-btn" type="button" onclick="logoutUser()" data-auth-register>Выйти</button>`;
    if(myOrders)myOrders.hidden=false;
  }else{
    login.outerHTML=`<button class="ghost-btn" type="button" onclick="openUserAuth('login')" data-auth-login>Вход</button>`;
    reg.outerHTML=`<button class="ghost-btn" type="button" onclick="openUserAuth('register')" data-auth-register>Регистрация</button>`;
    if(myOrders)myOrders.hidden=true;
  }
}
function renderPage(){
  if(page()==='collection')renderProducts();
  if(page()==='documents')renderDocuments();
  if(page()==='contacts')renderContacts();
}
async function init(){
  await loadRemote();
  applyDesign();applyTexts();setActiveNav();updateCartCount();updateAuthButtons();renderPage();mountAdminPanel();startCloudAutoSync();
  const loader=document.getElementById('app-loader'); if(loader)loader.classList.add('hidden');
  if(location.search.includes('admin=1')||location.hash.includes('admin'))openAdminLogin();
}
document.addEventListener('DOMContentLoaded',init);

function renderProducts(){
  const root=document.getElementById('product-grid'); if(!root)return;
  const list=products();
  root.innerHTML=list.map(p=>{
    const img=p.img?`<img src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy">`:`<div>${esc((p.name||'J').slice(0,2))}</div>`;
    return `<article class="product-card">
      <div class="product-image ${p.img?'':'placeholder'}">${img}</div>
      <div><p class="product-sub">${esc(p.sub||'Линейка')}</p><h3>${esc(p.name)}</h3><p class="product-desc">${esc(p.desc||'Описание можно добавить в админ-панели.')}</p></div>
      <div class="spec-list">${(p.specs||[]).map(s=>`<span>${esc(s)}</span>`).join('')}</div>
      <select class="flavor-select" id="flavor-${esc(p.id)}" aria-label="Выберите вкус">
        ${(p.flavors||[]).map((f,i)=>`<option value="${i}">${esc(f.en)} — ${esc(f.ru)}</option>`).join('')||'<option value="0">Без вкуса</option>'}
      </select>
      <div class="price-row"><div><div class="price-main">${money(p.pw)}</div><div class="price-note">Цена для заказа · розница ${money(p.pr)}</div></div><button class="primary-btn" type="button" onclick="addProductToCart('${esc(p.id)}')">Добавить в корзину</button></div>
    </article>`;
  }).join('')||'<div class="empty-state">Товары пока не добавлены</div>';
}
function addProductToCart(productId){
  const p=findProduct(productId); if(!p)return;
  const sel=document.getElementById(`flavor-${productId}`); const flavorIndex=Number(sel?sel.value:0);
  const cart=getCart(); const found=cart.find(i=>i.productId===productId&&Number(i.flavorIndex)===flavorIndex);
  if(found)found.qty=Number(found.qty||0)+1; else cart.push({productId,flavorIndex,qty:1});
  setCart(cart);openCart();
}
function openCart(){
  const cart=getCart();
  const html=`<div class="modal-backdrop" onclick="backdropClose(event)"><div class="modal wide">
    <div class="modal-head"><div><div class="modal-title">Корзина</div><p class="muted-note">Количество и сумма пересчитываются автоматически.</p></div><button class="close-btn" onclick="closeModal()">×</button></div>
    <div id="cart-content">${cartHtml(cart)}</div>
  </div></div>`;
  setModal(html);
}
function cartHtml(cart){
  if(!cart.length)return `<div class="empty-state">Корзина пустая. Перейдите в коллекцию и добавьте товары.</div><div class="modal-actions"><a class="primary-link" href="collection.html">Перейти в коллекцию</a></div>`;
  const rows=cart.map((item,idx)=>{
    const {p,f}=findCartProduct(item); if(!p)return '';
    return `<div class="cart-item"><div><h4>${esc(p.name)}</h4><p>${esc(f?`${f.en} — ${f.ru}`:'Без вкуса')}</p><p>${money(p.pw)} за единицу</p></div><div class="qty-control"><button type="button" onclick="changeCartQty(${idx},-1)">−</button><strong>${item.qty}</strong><button type="button" onclick="changeCartQty(${idx},1)">+</button></div><div><strong>${money(p.pw*item.qty)}</strong><div class="mini-actions"><button class="secondary-btn" type="button" onclick="removeCartItem(${idx})">Удалить</button></div></div></div>`;
  }).join('');
  return `<div class="cart-list">${rows}</div><div class="cart-total"><span>Итого</span><strong>${money(cartTotal(cart))}</strong></div><div class="modal-actions"><button class="primary-btn" onclick="openCheckout()">Оформить заказ</button><button class="secondary-btn" onclick="closeModal()">Продолжить покупки</button><button class="danger-btn" onclick="clearCart()">Очистить</button></div>`;
}
function cartTotal(cart){return cart.reduce((sum,item)=>{const {p}=findCartProduct(item);return sum+(p?Number(p.pw||0)*Number(item.qty||0):0);},0);}
function changeCartQty(idx,delta){const cart=getCart();if(!cart[idx])return;cart[idx].qty=Math.max(1,Number(cart[idx].qty||1)+delta);setCart(cart);const c=document.getElementById('cart-content');if(c)c.innerHTML=cartHtml(cart);}
function removeCartItem(idx){const cart=getCart();cart.splice(idx,1);setCart(cart);const c=document.getElementById('cart-content');if(c)c.innerHTML=cartHtml(cart);}
function clearCart(){setCart([]);openCart();}
function openCheckout(){
  const cart=getCart(); if(!cart.length){openCart();return;}
  const u=currentUser();
  const html=`<div class="modal-backdrop" onclick="backdropClose(event)"><div class="modal">
    <div class="modal-head"><div><div class="modal-title">Оформление заказа</div><p class="muted-note">Итого: ${money(cartTotal(cart))}</p></div><button class="close-btn" onclick="closeModal()">×</button></div>
    <div id="checkout-error" class="error-box"></div><div id="checkout-success" class="success-box"></div>
    <div class="form-grid">
      <div class="form-field" id="cf-name"><label>ФИО *</label><input class="form-input" id="checkout-name" value="${esc(u&&u.name||'')}" placeholder="Иванов Иван"></div>
      <div class="form-field" id="cf-phone"><label>Телефон *</label><input class="form-input" id="checkout-phone" value="${esc(u&&u.phone||'')}" placeholder="+71234567890"></div>
      <div class="form-field full" id="cf-email"><label>Email</label><input class="form-input" id="checkout-email" value="${esc(u&&u.email||'')}" placeholder="mail@example.com"></div>
      <div class="form-field full"><label>Комментарий</label><textarea class="form-textarea" id="checkout-comment" placeholder="Адрес доставки, пожелания"></textarea></div>
    </div>
    <label class="check-line"><input type="checkbox" id="checkout-pd"><span>Я согласен с <a href="documents.html">политикой обработки ПДн и согласием на обработку ПДн</a>.</span></label>
    <div class="modal-actions"><button class="primary-btn" onclick="submitCheckout()">Отправить заказ</button><button class="secondary-btn" onclick="openCart()">Назад в корзину</button></div>
  </div></div>`;
  setModal(html);
}
function submitCheckout(){
  const cart=getCart(); if(!cart.length)return;
  const name=val('checkout-name'),phone=val('checkout-phone'),email=val('checkout-email'),comment=val('checkout-comment');
  let ok=true; ['cf-name','cf-phone','cf-email'].forEach(id=>clearFieldError(id));
  if(name.trim().split(/\s+/).length<2){setFieldError('cf-name');ok=false;}
  if(!/^\+7\d{10}$/.test(phone)){setFieldError('cf-phone');ok=false;}
  if(email&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){setFieldError('cf-email');ok=false;}
  if(!document.getElementById('checkout-pd').checked){showBox('checkout-error','Нужно подтвердить согласие с документами по персональным данным.');ok=false;}
  if(!ok)return;
  const orderItems=cart.map(item=>{const {p,f}=findCartProduct(item);return {productId:item.productId,flavorIndex:item.flavorIndex,name:p?p.name:'Товар',flavor:f?`${f.en} — ${f.ru}`:'',price:p?Number(p.pw||0):0,qty:Number(item.qty||0),line:p?Number(p.pw||0)*Number(item.qty||0):0};});
  const u=currentUser();
  const order={id:`ORD-${Date.now()}`,createdAt:new Date().toISOString(),createdText:new Date().toLocaleString('ru-RU'),status:'new',userId:u?u.id:'',customer:{name,phone,email,comment},items:orderItems,total:cartTotal(cart)};
  const list=orders(); list.unshift(order); saveKey('orders',list);
  setCart([]); updateCartCount();
  showBox('checkout-success','Заказ отправлен. Он появится в админ-панели во вкладке «Заказы».');
  setTimeout(()=>{closeModal();},900);
}

function renderDocuments(){
  const root=document.getElementById('docs-list'); if(!root)return;
  root.innerHTML=docs().map(d=>`<article class="doc-card ${d.url?'':'doc-disabled'}"><div class="doc-icon">📄</div><div><p class="doc-type">${esc(d.type)}</p><h3>${esc(d.name)}</h3><p>${esc(d.desc)}</p><div class="doc-actions">${d.url?`<a class="primary-link" href="${esc(d.url)}" target="_blank" rel="noopener">Открыть</a>`:`<button class="secondary-btn" type="button">Ссылка не добавлена</button>`}</div></div></article>`).join('');
}
function renderContacts(){
  const root=document.getElementById('contact-list'); if(!root)return;
  const c=contacts(); const cards=[];
  if(c.tg){const href=c.tg.startsWith('http')?c.tg:`https://t.me/${c.tg.replace('@','')}`;cards.push(contactCard('Telegram',c.tg,href));}
  if(c.wa){const raw=c.wa.replace(/\D/g,''); const href=c.wa.startsWith('http')?c.wa:`https://wa.me/${raw}`;cards.push(contactCard('WhatsApp',c.wa,href));}
  if(c.phone)cards.push(contactCard('Телефон',c.phone,`tel:${c.phone.replace(/[^+\d]/g,'')}`));
  if(c.email)cards.push(contactCard('Email',c.email,`mailto:${c.email}`));
  root.innerHTML=cards.join('')||'<div class="empty-state">Контакты пока не заполнены. Добавьте их в админ-панели.</div>';
}
function contactCard(type,value,href){return `<article class="contact-card"><p class="contact-type">${esc(type)}</p><h3>${esc(value)}</h3><p><a href="${esc(href)}" target="_blank" rel="noopener">Открыть</a></p></article>`;}

function setModal(html){document.getElementById('modal-root').innerHTML=html;}
function closeModal(){document.getElementById('modal-root').innerHTML='';}
function backdropClose(event){if(event.target.classList.contains('modal-backdrop'))closeModal();}
function val(id){const el=document.getElementById(id);return el?el.value.trim():'';}
function setFieldError(id){const el=document.getElementById(id);if(el)el.classList.add('error');}
function clearFieldError(id){const el=document.getElementById(id);if(el)el.classList.remove('error');}
function showBox(id,msg){const el=document.getElementById(id);if(el){el.textContent=msg;el.style.display='block';}}
function hideBox(id){const el=document.getElementById(id);if(el){el.textContent='';el.style.display='none';}}

function openUserAuth(mode='login'){
  const isReg=mode==='register';
  const html=`<div class="modal-backdrop" onclick="backdropClose(event)"><div class="modal">
    <div class="modal-head"><div><div class="modal-title">${isReg?'Регистрация':'Вход'}</div><p class="muted-note">${isReg?'После регистрации пользователь появится в админ-панели.':'Войдите в личный профиль покупателя.'}</p></div><button class="close-btn" onclick="closeModal()">×</button></div>
    <div id="auth-error" class="error-box"></div><div id="auth-success" class="success-box"></div>
    <div class="form-grid">
      ${isReg?`<div class="form-field" id="af-name"><label>ФИО *</label><input class="form-input" id="auth-name" placeholder="Иванов Иван"></div><div class="form-field" id="af-phone"><label>Телефон *</label><input class="form-input" id="auth-phone" placeholder="+71234567890"></div>`:''}
      <div class="form-field ${isReg?'':'full'}" id="af-email"><label>Email *</label><input class="form-input" id="auth-email" placeholder="mail@example.com"></div>
      <div class="form-field ${isReg?'':'full'}" id="af-pass"><label>Пароль *</label><input class="form-input" id="auth-pass" type="password" placeholder="Минимум 6 символов"></div>
    </div>
    ${isReg?`<label class="check-line"><input type="checkbox" id="auth-pd"><span>Я согласен с <a href="documents.html">политикой обработки ПДн и согласием на обработку ПДн</a>.</span></label>`:''}
    <div class="modal-actions"><button class="primary-btn" onclick="${isReg?'registerUser()':'loginUser()'}">${isReg?'Зарегистрироваться':'Войти'}</button><button class="secondary-btn" onclick="openUserAuth('${isReg?'login':'register'}')">${isReg?'Уже есть аккаунт':'Создать аккаунт'}</button></div>
    
  </div></div>`;
  setModal(html);
}
async function sha256(str){const data=new TextEncoder().encode(str);const hash=await crypto.subtle.digest('SHA-256',data);return Array.from(new Uint8Array(hash)).map(b=>b.toString(16).padStart(2,'0')).join('');}
async function registerUser(){
  hideBox('auth-error'); const name=val('auth-name'),phone=val('auth-phone'),email=val('auth-email').toLowerCase(),pass=val('auth-pass');
  let ok=true; ['af-name','af-phone','af-email','af-pass'].forEach(clearFieldError);
  if(name.trim().split(/\s+/).length<2){setFieldError('af-name');ok=false;} if(!/^\+7\d{10}$/.test(phone)){setFieldError('af-phone');ok=false;} if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){setFieldError('af-email');ok=false;} if(pass.length<6){setFieldError('af-pass');ok=false;}
  if(!document.getElementById('auth-pd').checked){showBox('auth-error','Регистрация доступна только после согласия с документами по персональным данным.');ok=false;}
  const list=users(); if(list.some(u=>(u.email||'').toLowerCase()===email)){showBox('auth-error','Пользователь с таким email уже зарегистрирован.');return;} if(!ok)return;
  const user={id:`USR-${Date.now()}`,createdAt:new Date().toISOString(),createdText:new Date().toLocaleString('ru-RU'),name,phone,email,passHash:await sha256(pass),pdAccepted:true,consentAccepted:true};
  list.unshift(user); saveKey('users',list); setCurrentUserId(user.id); showBox('auth-success','Регистрация выполнена. Пользователь добавлен в админ-панель.'); setTimeout(closeModal,700);
}
async function loginUser(){
  hideBox('auth-error'); const email=val('auth-email').toLowerCase(),pass=val('auth-pass'); const list=users(); const user=list.find(u=>(u.email||'').toLowerCase()===email);
  if(!user||user.passHash!==await sha256(pass)){showBox('auth-error','Неверный email или пароль.');return;} setCurrentUserId(user.id); closeModal();
}
function logoutUser(){setCurrentUserId('');}

function userOrders(userId){return orders().filter(o=>o.userId===userId).sort((a,b)=>String(b.createdAt||'').localeCompare(String(a.createdAt||'')));}
function openMyOrders(){
  const u=currentUser();
  if(!u){openUserAuth('login');return;}
  const list=userOrders(u.id);
  const rows=list.map(o=>`<article class="order-card user-order-card"><div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><div><h3>${esc(o.id)}</h3><p class="muted-note">${esc(o.createdText||o.createdAt||'')}</p></div><span class="status-pill status-${esc(o.status||'new')}">${orderStatusText(o.status)}</span></div><ul class="order-items">${(o.items||[]).map(i=>`<li>${esc(i.name)} · ${esc(i.flavor||'')} ×${Number(i.qty||0)} = ${money(i.line||0)}</li>`).join('')}</ul><div class="cart-total" style="font-size:24px"><span>Итого</span><strong>${money(o.total)}</strong></div></article>`).join('');
  const html=`<div class="modal-backdrop" onclick="backdropClose(event)"><div class="modal wide"><div class="modal-head"><div><div class="modal-title">Мои заказы</div><p class="muted-note">Показываются заказы, оформленные после входа в этот аккаунт.</p></div><button class="close-btn" onclick="closeModal()">×</button></div>${rows||'<div class="empty-state">У этого аккаунта пока нет заказов.</div><div class="modal-actions"><a class="primary-link" href="collection.html">Перейти в коллекцию</a></div>'}</div></div>`;
  setModal(html);
}
function orderStatusText(status){return status==='done'?'Выполнен':status==='cancelled'?'Отменён':'Новый';}

function mountAdminPanel(){
  if(document.getElementById('admin-panel'))return;
  const div=document.createElement('div'); div.id='admin-panel'; div.className='admin-layout';
  div.innerHTML=`<aside class="admin-sidebar"><div class="admin-logo">ADMIN</div><div id="admin-status" class="admin-status"></div><div class="admin-nav">
    ${adminNavButton('dashboard','Обзор')}${adminNavButton('orders','Заказы')}${adminNavButton('users','Пользователи')}${adminNavButton('products','Товары')}${adminNavButton('docs','Документы')}${adminNavButton('design','Дизайн')}${adminNavButton('texts','Тексты')}${adminNavButton('contacts','Контакты')}${adminNavButton('settings','Настройки')}
    <button onclick="closeAdmin()">Закрыть</button>
  </div></aside><main class="admin-content" id="admin-content"></main>`;
  document.body.appendChild(div);
}
function adminNavButton(tab,label){return `<button data-admin-tab="${tab}" onclick="showAdminTab('${tab}')">${label}</button>`;}
function openAdminLogin(){
  if(adminLogged){openAdmin();return;}
  const html=`<div class="modal-backdrop" onclick="backdropClose(event)"><div class="modal admin-login-box">
    <div class="modal-head"><div><div class="modal-title">Админ-панель</div><p class="muted-note">Вход для управления сайтом.</p></div><button class="close-btn" onclick="closeModal()">×</button></div>
    <div id="admin-login-error" class="error-box"></div>
    <div class="form-grid"><div class="form-field full"><label>Логин</label><input class="form-input" id="admin-login" autocomplete="username"></div><div class="form-field full"><label>Пароль</label><input class="form-input" id="admin-password" type="password" autocomplete="current-password" onkeydown="if(event.key==='Enter')doAdminLogin()"></div></div>
    <div class="modal-actions"><button class="primary-btn" onclick="doAdminLogin()">Войти</button></div>
  </div></div>`;
  setModal(html);
}
function doAdminLogin(){
  if(val('admin-login')===adminLogin()&&val('admin-password')===adminPwd()){adminLogged=true;closeModal();openAdmin();}else showBox('admin-login-error','Неверный логин или пароль.');
}
function openAdmin(){document.getElementById('admin-panel').classList.add('open');showAdminTab(adminTab||'dashboard');}
function closeAdmin(){document.getElementById('admin-panel').classList.remove('open');}
function showAdminTab(tab){adminTab=tab;document.querySelectorAll('[data-admin-tab]').forEach(b=>b.classList.toggle('active',b.dataset.adminTab===tab));renderAdminContent(tab);}
function adminHeader(title,sub=''){return `<div class="admin-top"><div><div class="admin-title">${esc(title)}</div><p class="admin-sub">${esc(sub)}</p></div><button class="secondary-btn" onclick="closeAdmin()">Закрыть</button></div>`;}
function renderAdminContent(tab){
  const root=document.getElementById('admin-content'); if(!root)return; const st=document.getElementById('admin-status'); if(st)st.textContent=fbOk?'● Firestore онлайн':'● Только localStorage';
  if(tab==='dashboard')root.innerHTML=adminHeader('Обзор','Сводка по сайту')+dashboardHtml();
  if(tab==='orders')root.innerHTML=adminHeader('Заказы','Все заказы из корзины')+ordersAdminHtml();
  if(tab==='users')root.innerHTML=adminHeader('Пользователи','Зарегистрированные пользователи и их заказы')+usersAdminHtml();
  if(tab==='products')root.innerHTML=adminHeader('Товары','Редактирование товаров, вкусов, цен и картинок')+productsAdminHtml();
  if(tab==='docs')root.innerHTML=adminHeader('Документы','Документы, которые отображаются на странице «Документы»')+docsAdminHtml();
  if(tab==='design')root.innerHTML=adminHeader('Дизайн','Цвета, фон главной, шрифты и размеры. Сохраняется только по кнопке «Сохранить дизайн».')+designAdminHtml();
  if(tab==='texts')root.innerHTML=adminHeader('Тексты','Главная страница, контакты и подвал')+textsAdminHtml();
  if(tab==='contacts')root.innerHTML=adminHeader('Контакты','Каналы связи на странице «Контакты»')+contactsAdminHtml();
  if(tab==='settings')root.innerHTML=adminHeader('Настройки','Логин и пароль админ-панели')+settingsAdminHtml();
}
function dashboardHtml(){return `<div class="admin-grid"><div class="admin-card"><h3>Товары</h3><p><strong>${products().length}</strong> линеек</p></div><div class="admin-card"><h3>Заказы</h3><p><strong>${orders().length}</strong> всего · <strong>${orders().filter(o=>o.status==='new').length}</strong> новых</p></div><div class="admin-card"><h3>Пользователи</h3><p><strong>${users().length}</strong> зарегистрировано</p></div><div class="admin-card"><h3>База</h3><p>${fbOk?'Firestore доступен':'Работает только локальное хранилище браузера'}</p></div></div>`;}
function ordersAdminHtml(){
  const list=orders(); if(!list.length)return '<div class="empty-state">Заказов пока нет.</div>';
  return `<div class="admin-list">${list.map(o=>`<article class="order-card"><div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><div><h3>${esc(o.id)}</h3><p class="muted-note">${esc(o.createdText||o.createdAt||'')}</p></div><select class="form-select" onchange="setOrderStatus('${esc(o.id)}',this.value)"><option value="new" ${o.status==='new'?'selected':''}>Новый</option><option value="done" ${o.status==='done'?'selected':''}>Выполнен</option><option value="cancelled" ${o.status==='cancelled'?'selected':''}>Отменён</option></select></div><p><strong>${esc(customerName(o))}</strong> · ${esc(o.customer&&o.customer.phone||'')} · ${esc(o.customer&&o.customer.email||'')}</p><p class="muted-note">Пользователь: ${esc(userNameById(o.userId)||'без регистрации')}</p><ul class="order-items">${(o.items||[]).map(i=>`<li>${esc(i.name)} · ${esc(i.flavor||i.ru||'')} ×${i.qty} = ${money(i.line||i.total||0)}</li>`).join('')}</ul><div class="cart-total" style="font-size:24px"><span>Итого</span><strong>${money(o.total)}</strong></div><div class="mini-actions"><button class="danger-btn" onclick="deleteOrder('${esc(o.id)}')">Удалить</button></div></article>`).join('')}</div>`;
}
function customerName(o){return (o.customer&&(o.customer.name||o.customer.fio))||'';}
function userNameById(id){const u=users().find(x=>x.id===id);return u?`${u.name} (${u.email})`:'';}
function setOrderStatus(id,status){const list=orders();const o=list.find(x=>x.id===id);if(o){o.status=status;saveKey('orders',list);}}
function deleteOrder(id){if(!confirm('Удалить заказ?'))return;saveKey('orders',orders().filter(o=>o.id!==id));renderAdminContent('orders');}
function usersAdminHtml(){
  const list=users(); if(!list.length)return '<div class="empty-state">Пользователей пока нет.</div>';
  return `<div class="admin-list">${list.map(u=>{const uOrders=orders().filter(o=>o.userId===u.id);return `<article class="user-card"><div class="admin-row three"><div class="form-field"><label>ФИО</label><input class="form-input" id="u-name-${u.id}" value="${esc(u.name)}"></div><div class="form-field"><label>Телефон</label><input class="form-input" id="u-phone-${u.id}" value="${esc(u.phone)}"></div><div class="form-field"><label>Email</label><input class="form-input" id="u-email-${u.id}" value="${esc(u.email)}"></div></div><p class="muted-note">Создан: ${esc(u.createdText||u.createdAt||'')} · согласие ПДн: ${u.pdAccepted?'да':'нет'}</p><div class="mini-actions"><button class="primary-btn" onclick="saveUserAdmin('${u.id}')">Сохранить пользователя</button><button class="danger-btn" onclick="deleteUserAdmin('${u.id}')">Удалить</button></div><details style="margin-top:14px"><summary>Заказы пользователя: ${uOrders.length}</summary><ul class="order-items">${uOrders.map(o=>`<li>${esc(o.id)} · ${money(o.total)} · ${esc(o.status)}</li>`).join('')||'<li>Заказов нет</li>'}</ul></details></article>`;}).join('')}</div>`;
}
function saveUserAdmin(id){const list=users();const u=list.find(x=>x.id===id);if(!u)return;u.name=val(`u-name-${id}`);u.phone=val(`u-phone-${id}`);u.email=val(`u-email-${id}`).toLowerCase();saveKey('users',list);renderAdminContent('users');}
function deleteUserAdmin(id){if(!confirm('Удалить пользователя? Заказы не удалятся.'))return;saveKey('users',users().filter(u=>u.id!==id));renderAdminContent('users');}

function productsAdminHtml(){adminProductDraft=clone(products());return `<div class="admin-save-line"><button class="primary-btn" onclick="addAdminProduct()">Добавить товар</button><button class="primary-btn" onclick="saveAdminProducts()">Сохранить товары</button><span class="save-msg" id="products-save-msg">Сохранено</span></div><div class="admin-list" id="admin-products-list">${adminProductDraft.map((p,i)=>productEditorHtml(p,i)).join('')}</div>`;}
function productEditorHtml(p,i){return `<details class="product-admin-card" open><summary>${esc(p.name)}</summary><div class="admin-form-block"><div class="admin-row"><div class="form-field"><label>Название</label><input class="form-input" data-pi="${i}" data-pf="name" value="${esc(p.name)}" oninput="draftProductField(this)"></div><div class="form-field"><label>Подзаголовок</label><input class="form-input" data-pi="${i}" data-pf="sub" value="${esc(p.sub)}" oninput="draftProductField(this)"></div></div><div class="admin-row"><div class="form-field"><label>Цена для заказа</label><input class="form-input" type="number" data-pi="${i}" data-pf="pw" value="${p.pw}" oninput="draftProductField(this)"></div><div class="form-field"><label>Розничная цена</label><input class="form-input" type="number" data-pi="${i}" data-pf="pr" value="${p.pr}" oninput="draftProductField(this)"></div></div><div class="form-field"><label>URL картинки</label><input class="form-input" data-pi="${i}" data-pf="img" value="${esc(p.img)}" oninput="draftProductField(this)"></div><div class="form-field"><label>Описание</label><textarea class="form-textarea" data-pi="${i}" data-pf="desc" oninput="draftProductField(this)">${esc(p.desc)}</textarea></div><div class="form-field"><label>Характеристики через запятую</label><textarea class="form-textarea" data-pi="${i}" data-pf="specs" oninput="draftProductField(this)">${esc((p.specs||[]).join(', '))}</textarea></div><div class="form-field"><label>Вкусы: EN | RU | URL картинки | описание. Каждый вкус с новой строки</label><textarea class="form-textarea flavors-textarea" data-pi="${i}" data-pf="flavors" oninput="draftProductField(this)">${esc((p.flavors||[]).map(f=>`${f.en||''} | ${f.ru||''} | ${f.img||''} | ${f.desc||''}`).join('\n'))}</textarea></div><div class="mini-actions"><button class="danger-btn" onclick="removeAdminProduct(${i})">Удалить товар</button></div></div></details>`;}
function draftProductField(el){const i=Number(el.dataset.pi),f=el.dataset.pf;if(!adminProductDraft||!adminProductDraft[i])return;let v=el.value;if(f==='pw'||f==='pr')v=Number(v||0);if(f==='specs')v=el.value.split(',').map(s=>s.trim()).filter(Boolean);if(f==='flavors')v=el.value.split('\n').map(line=>{const [en='',ru='',img='',desc='']=line.split('|').map(s=>s.trim());return {en,ru,img,desc};}).filter(x=>x.en||x.ru);adminProductDraft[i][f]=v;}
function addAdminProduct(){adminProductDraft.push({id:`prod-${Date.now()}`,name:'Новый товар',sub:'Новая линейка',pw:0,pr:0,img:'',desc:'',specs:[],flavors:[{en:'New flavor',ru:'Новый вкус',img:'',desc:''}]});document.getElementById('admin-products-list').innerHTML=adminProductDraft.map((p,i)=>productEditorHtml(p,i)).join('');}
function removeAdminProduct(i){adminProductDraft.splice(i,1);document.getElementById('admin-products-list').innerHTML=adminProductDraft.map((p,i)=>productEditorHtml(p,i)).join('');}
function saveAdminProducts(){saveKey('products',normalizeProducts(adminProductDraft));showSave('products-save-msg');}

function docsAdminHtml(){adminDocsDraft=clone(docs());return `<div class="admin-save-line"><button class="primary-btn" onclick="addAdminDoc()">Добавить документ</button><button class="primary-btn" onclick="saveAdminDocs()">Сохранить документы</button><span class="save-msg" id="docs-save-msg">Сохранено</span></div><div class="admin-list" id="admin-docs-list">${adminDocsDraft.map((d,i)=>docEditorHtml(d,i)).join('')}</div>`;}
function docEditorHtml(d,i){return `<div class="admin-form-block"><div class="admin-row"><div class="form-field"><label>Тип</label><input class="form-input" data-di="${i}" data-df="type" value="${esc(d.type)}" oninput="draftDocField(this)"></div><div class="form-field"><label>Название</label><input class="form-input" data-di="${i}" data-df="name" value="${esc(d.name)}" oninput="draftDocField(this)"></div></div><div class="form-field"><label>Описание</label><textarea class="form-textarea" data-di="${i}" data-df="desc" oninput="draftDocField(this)">${esc(d.desc)}</textarea></div><div class="form-field"><label>URL документа</label><input class="form-input" data-di="${i}" data-df="url" value="${esc(d.url)}" oninput="draftDocField(this)" placeholder="assets/docs/file.pdf или https://..."></div><div class="mini-actions"><button class="danger-btn" onclick="removeAdminDoc(${i})">Удалить</button></div></div>`;}
function draftDocField(el){const i=Number(el.dataset.di),f=el.dataset.df;if(adminDocsDraft&&adminDocsDraft[i])adminDocsDraft[i][f]=el.value;}
function addAdminDoc(){adminDocsDraft.push({id:`doc-${Date.now()}`,type:'Документ',name:'Новый документ',desc:'',url:''});document.getElementById('admin-docs-list').innerHTML=adminDocsDraft.map((d,i)=>docEditorHtml(d,i)).join('');}
function removeAdminDoc(i){adminDocsDraft.splice(i,1);document.getElementById('admin-docs-list').innerHTML=adminDocsDraft.map((d,i)=>docEditorHtml(d,i)).join('');}
function saveAdminDocs(){saveKey('site_docs',normalizeDocs(adminDocsDraft));showSave('docs-save-msg');}

function designAdminHtml(){
  const d=design(); const sizes=d.sizes;
  const bodyOptions=FONT_OPTIONS.map(f=>`<option value="${esc(f)}" ${f===d.bodyFont?'selected':''}>${esc(f)}</option>`).join('');
  const displayOptions=FONT_OPTIONS.map(f=>`<option value="${esc(f)}" ${f===d.displayFont?'selected':''}>${esc(f)}</option>`).join('');
  const sizeControls=[['body','Основной текст',12,24],['small','Мелкий текст',10,18],['nav','Меню',11,20],['hero','Главный заголовок',48,130],['section','Заголовки разделов',30,78],['cardTitle','Заголовки карточек',18,38],['price','Цена',22,46],['button','Кнопки',11,20],['input','Поля форм',12,22]];
  return `<div class="admin-form-block"><h3>Шрифты</h3><div class="admin-row"><div class="form-field"><label>Основной шрифт</label><select class="form-select" id="design-body-font" onchange="previewAdminDesign()">${bodyOptions}</select></div><div class="form-field"><label>Шрифт заголовков</label><select class="form-select" id="design-display-font" onchange="previewAdminDesign()">${displayOptions}</select></div></div><div class="font-preview"><h3>Пример заголовка</h3><p>Пример русского текста: карточка товара, описание, цена, документы и кнопки.</p></div></div><div class="admin-form-block"><h3>Размеры текста</h3>${sizeControls.map(([key,label,min,max])=>`<label class="range-row"><span>${label}</span><input type="range" min="${min}" max="${max}" value="${sizes[key]}" id="size-${key}" oninput="rangeOutput('${key}');previewAdminDesign()"><output id="out-${key}">${sizes[key]}px</output></label>`).join('')}</div><div class="admin-save-line"><button class="primary-btn" onclick="saveAdminDesign()">Сохранить дизайн</button><button class="secondary-btn" onclick="applyDesign();renderAdminContent('design')">Отменить несохранённое</button><span class="save-msg" id="design-save-msg">Сохранено</span></div>`;
}
function rangeOutput(key){const el=document.getElementById(`size-${key}`),out=document.getElementById(`out-${key}`);if(el&&out)out.textContent=`${el.value}px`;}
function designDraftFromAdmin(){const d=design();d.bodyFont=val('design-body-font')||d.bodyFont;d.displayFont=val('design-display-font')||d.displayFont;Object.keys(d.sizes).forEach(k=>{const el=document.getElementById(`size-${k}`);if(el)d.sizes[k]=Number(el.value);});return d;}
function previewAdminDesign(){applyDesign(designDraftFromAdmin());}
function saveAdminDesign(){const d=designDraftFromAdmin();saveKey('design',d);applyDesign(d);showSave('design-save-msg');}

function textsAdminHtml(){const t=texts();return `<div class="admin-form-block"><h3>Тексты сайта</h3><div class="admin-row"><div class="form-field"><label>Логотип</label><input class="form-input" id="tx-logo" value="${esc(t.logo)}"></div><div class="form-field"><label>Надпись над заголовком</label><input class="form-input" id="tx-hero-sub" value="${esc(t.heroSub)}"></div></div><div class="form-field"><label>Главный заголовок</label><input class="form-input" id="tx-hero-title" value="${esc(t.heroTitle)}"></div><div class="form-field"><label>Описание на главной</label><textarea class="form-textarea" id="tx-hero-desc">${esc(t.heroDesc)}</textarea></div><div class="form-field"><label>Описание контактов</label><input class="form-input" id="tx-contact-desc" value="${esc(t.contactDesc)}"></div><div class="admin-row"><div class="form-field"><label>Логотип в подвале</label><input class="form-input" id="tx-footer-logo" value="${esc(t.footerLogo)}"></div><div class="form-field"><label>Текст в подвале</label><input class="form-input" id="tx-footer-text" value="${esc(t.footerText)}"></div></div><div class="admin-save-line"><button class="primary-btn" onclick="saveAdminTexts()">Сохранить тексты</button><span class="save-msg" id="texts-save-msg">Сохранено</span></div></div>`;}
function saveAdminTexts(){const t={logo:val('tx-logo'),heroSub:val('tx-hero-sub'),heroTitle:val('tx-hero-title'),heroDesc:val('tx-hero-desc'),contactDesc:val('tx-contact-desc'),footerLogo:val('tx-footer-logo'),footerText:val('tx-footer-text')};saveKey('texts',t);applyTexts();showSave('texts-save-msg');}
function contactsAdminHtml(){const c=contacts();return `<div class="admin-form-block"><h3>Контакты</h3><div class="admin-row"><div class="form-field"><label>Telegram</label><input class="form-input" id="ct-tg" value="${esc(c.tg)}" placeholder="@username или https://t.me/..."></div><div class="form-field"><label>WhatsApp</label><input class="form-input" id="ct-wa" value="${esc(c.wa)}" placeholder="+7... или https://wa.me/..."></div></div><div class="admin-row"><div class="form-field"><label>Телефон</label><input class="form-input" id="ct-phone" value="${esc(c.phone)}"></div><div class="form-field"><label>Email</label><input class="form-input" id="ct-email" value="${esc(c.email)}"></div></div><div class="admin-save-line"><button class="primary-btn" onclick="saveAdminContacts()">Сохранить контакты</button><span class="save-msg" id="contacts-save-msg">Сохранено</span></div></div>`;}
function saveAdminContacts(){saveKey('contacts',{tg:val('ct-tg'),wa:val('ct-wa'),phone:val('ct-phone'),email:val('ct-email')});showSave('contacts-save-msg');}
function settingsAdminHtml(){return `<div class="admin-form-block"><h3>Смена логина и пароля</h3><div class="admin-row"><div class="form-field"><label>Новый логин</label><input class="form-input" id="set-login" value="${esc(adminLogin())}"></div><div class="form-field"><label>Новый пароль</label><input class="form-input" id="set-pwd" type="password" placeholder="Оставьте пустым, если не менять"></div></div><div class="admin-save-line"><button class="primary-btn" onclick="saveAdminSettings()">Сохранить настройки</button><span class="save-msg" id="settings-save-msg">Сохранено</span></div></div><div class="admin-form-block"><h3>Облачная база Firestore</h3><p class="muted-note">Если база в Google пустая, можно отправить в неё данные из этого браузера. Если в этом браузере старых заказов нет, восстановить их без backup/export невозможно.</p><div class="admin-save-line"><button class="primary-btn" onclick="restoreLocalDataToCloud()">Восстановить Firestore из этого браузера</button><button class="secondary-btn" onclick="repairMissingFirestore(new Set()).then(()=>alert('Недостающие ключи базы проверены и заполнены.'))">Заполнить недостающие ключи</button><button class="danger-btn" onclick="if(confirm('Заменить товары, документы, пользователей и заказы базовыми значениями?'))seedDefaultCloudData()">Сбросить Firestore к базовым данным</button></div></div><div class="admin-form-block"><h3>Сброс локальной корзины</h3><p class="muted-note">Удаляет только корзину в текущем браузере.</p><button class="danger-btn" onclick="clearCart()">Очистить корзину</button></div>`;}
function saveAdminSettings(){const login=val('set-login');const pwd=val('set-pwd');if(login)saveKey('admin_login',login);if(pwd)saveKey('admin_pwd',pwd);showSave('settings-save-msg');}
function showSave(id){const el=document.getElementById(id);if(!el)return;el.style.display='inline';setTimeout(()=>{el.style.display='none';},1600);}

window.toggleMobileMenu=toggleMobileMenu;
window.openUserAuth=openUserAuth;window.registerUser=registerUser;window.loginUser=loginUser;window.logoutUser=logoutUser;
window.openMyOrders=openMyOrders;window.openCart=openCart;window.addProductToCart=addProductToCart;window.changeCartQty=changeCartQty;window.removeCartItem=removeCartItem;window.clearCart=clearCart;window.openCheckout=openCheckout;window.submitCheckout=submitCheckout;
window.closeModal=closeModal;window.backdropClose=backdropClose;
window.openAdminLogin=openAdminLogin;window.doAdminLogin=doAdminLogin;window.openAdmin=openAdmin;window.closeAdmin=closeAdmin;window.showAdminTab=showAdminTab;
window.setOrderStatus=setOrderStatus;window.deleteOrder=deleteOrder;window.saveUserAdmin=saveUserAdmin;window.deleteUserAdmin=deleteUserAdmin;
window.draftProductField=draftProductField;window.addAdminProduct=addAdminProduct;window.removeAdminProduct=removeAdminProduct;window.saveAdminProducts=saveAdminProducts;
window.draftDocField=draftDocField;window.addAdminDoc=addAdminDoc;window.removeAdminDoc=removeAdminDoc;window.saveAdminDocs=saveAdminDocs;
window.rangeOutput=rangeOutput;window.previewAdminDesign=previewAdminDesign;window.saveAdminDesign=saveAdminDesign;
window.saveAdminTexts=saveAdminTexts;window.saveAdminContacts=saveAdminContacts;window.saveAdminSettings=saveAdminSettings;window.restoreLocalDataToCloud=restoreLocalDataToCloud;window.seedDefaultCloudData=seedDefaultCloudData;window.repairMissingFirestore=repairMissingFirestore;

/* ===== V4 PATCH: hero image, files, stock, separate PD checkboxes ===== */
function v4DesignDefaults(){
  return Object.assign({}, DEFAULT_DESIGN, {
    heroImage:'./assets/images/hero-background.png',
    dropdownBg:'#0f0f10', dropdownText:'#f6f0e8', dropdownBorder:'#c9a84c', dropdownFocus:'#f1cf72'
  });
}
function mergeDesign(d){
  const base=v4DesignDefaults();
  const m=Object.assign({},base,d||{});
  m.sizes=Object.assign({},base.sizes,(d&&d.sizes)||{});
  return m;
}
function cssSafeUrl(url){return String(url||'').replace(/\\/g,'/').replace(/"/g,'%22').replace(/\n/g,'');}
function applyDesign(d){
  d=mergeDesign(d||design());
  const r=document.documentElement;
  ['black','deep','panel','border','gold','goldDim','cream','text','muted'].forEach(k=>r.style.setProperty(`--${k.replace(/[A-Z]/g,m=>'-'+m.toLowerCase())}`,d[k]));
  r.style.setProperty('--panel-2',d.panel2||v4DesignDefaults().panel2);
  r.style.setProperty('--ff-body',`'${d.bodyFont}', sans-serif`);
  r.style.setProperty('--ff-display',`'${d.displayFont}', serif`);
  r.style.setProperty('--hero-image',`url("${cssSafeUrl(d.heroImage||'./assets/images/hero-background.png')}")`);
  r.style.setProperty('--dropdown-bg',d.dropdownBg||d.black);
  r.style.setProperty('--dropdown-text',d.dropdownText||d.cream);
  r.style.setProperty('--dropdown-border',d.dropdownBorder||d.goldDim);
  r.style.setProperty('--dropdown-focus',d.dropdownFocus||d.gold);
  const s=d.sizes||v4DesignDefaults().sizes;
  r.style.setProperty('--fs-body',`${s.body}px`);r.style.setProperty('--fs-small',`${s.small}px`);r.style.setProperty('--fs-nav',`${s.nav}px`);r.style.setProperty('--fs-hero',`${s.hero}px`);r.style.setProperty('--fs-section',`${s.section}px`);r.style.setProperty('--fs-card-title',`${s.cardTitle}px`);r.style.setProperty('--fs-price',`${s.price}px`);r.style.setProperty('--fs-button',`${s.button}px`);r.style.setProperty('--fs-input',`${s.input}px`);
  const gfont=document.getElementById('gfont'); if(gfont)gfont.href=FONT_LINK;
}
function normalizeProducts(list){
  if(!Array.isArray(list))list=clone(DEFAULT_PRODUCTS);
  const legacyImages=getLS('images',{});
  return list.map((p,i)=>({
    id:p.id||`prod-${i}-${Date.now()}`,
    name:p.name||'Новый товар',sub:p.sub||'',pw:Number(p.pw||p.price||0),pr:Number(p.pr||p.retail||0),
    img:p.img||legacyImages[p.id]||'',desc:p.desc||'',specs:Array.isArray(p.specs)?p.specs:[],
    flavors:(Array.isArray(p.flavors)?p.flavors:[]).map((f,j)=>({
      en:f.en||'',ru:f.ru||'',img:f.img||'',desc:f.desc||'',stock:Number.isFinite(Number(f.stock))?Math.max(0,Math.floor(Number(f.stock))):20
    }))
  }));
}
function normalizeDocs(list){
  if(!Array.isArray(list))list=clone(DEFAULT_DOCS);
  const existingIds=new Set(list.map(d=>d.id));
  const merged=clone(list);
  DEFAULT_DOCS.forEach(d=>{if(!existingIds.has(d.id))merged.push(clone(d));});
  return merged.map((d,i)=>({id:d.id||`doc-${i}`,type:d.type||'Документ',name:d.name||'Документ',desc:d.desc||'',url:d.url||'',fileName:d.fileName||''}));
}
function flavorStock(f){return Math.max(0,Math.floor(Number(f&&f.stock||0)));}
function productTotalStock(p){return (p.flavors||[]).reduce((s,f)=>s+flavorStock(f),0);}
function stockLabel(n){return n>0?`${n} шт. в наличии`:'Нет в наличии';}
function firstAvailableFlavorIndex(p){const idx=(p.flavors||[]).findIndex(f=>flavorStock(f)>0);return idx>=0?idx:0;}
function jsArg(s){return JSON.stringify(String(s??''));}
function docUrlById(id){const d=docs().find(x=>x.id===id);return d&&d.url?d.url:'';}
function docInlineButton(id,label){return `<button class="doc-inline-link" type="button" onclick="openDocById('${esc(id)}')">${esc(label)}</button>`;}
function openDocById(id){const url=docUrlById(id); if(url)openDocUrl(url); else location.href='documents.html';}
function openDocUrl(url){
  if(!url)return;
  if(url.startsWith('data:')){
    try{
      const [meta,b64]=url.split(','); const mime=(meta.match(/data:([^;]+)/)||[])[1]||'application/octet-stream';
      const bin=atob(b64||''); const bytes=new Uint8Array(bin.length);
      for(let i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);
      const blobUrl=URL.createObjectURL(new Blob([bytes],{type:mime}));
      window.open(blobUrl,'_blank'); setTimeout(()=>URL.revokeObjectURL(blobUrl),15000);
    }catch(e){window.open(url,'_blank');}
  }else window.open(url,'_blank','noopener');
}
function normalizePhoneDigits(input){let d=String(input.value||'').replace(/\D/g,''); if(d.length>10&&(d[0]==='7'||d[0]==='8'))d=d.slice(1); input.value=d.slice(0,10);}
function phoneLocalFrom(full){let d=String(full||'').replace(/\D/g,''); if(d[0]==='7'||d[0]==='8')d=d.slice(1); return d.slice(0,10);}
function phoneFromLocal(id){const el=document.getElementById(id); const d=el?String(el.value||'').replace(/\D/g,'').slice(0,10):''; return d.length===10?`+7${d}`:'';}
function phoneFieldHtml(id,value=''){return `<div class="phone-field"><span>+7</span><input class="form-input" id="${esc(id)}" value="${esc(phoneLocalFrom(value))}" maxlength="10" inputmode="numeric" placeholder="9990000000" oninput="normalizePhoneDigits(this)"></div>`;}

function renderProducts(){
  const root=document.getElementById('product-grid'); if(!root)return;
  const list=products();
  root.innerHTML=list.map(p=>{
    const img=p.img?`<img src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy">`:`<div>${esc((p.name||'J').slice(0,2))}</div>`;
    const first=firstAvailableFlavorIndex(p); const total=productTotalStock(p);
    const options=(p.flavors||[]).map((f,i)=>{const st=flavorStock(f);return `<option value="${i}" data-stock="${st}" ${i===first?'selected':''} ${st<=0?'disabled':''}>${esc(f.en||'Вкус')} — ${esc(f.ru||'')} · ${st} шт.</option>`;}).join('')||'<option value="0">Без вкуса</option>';
    return `<article class="product-card">
      <div class="product-image ${p.img?'':'placeholder'}">${img}</div>
      <div><p class="product-sub">${esc(p.sub||'Линейка')}</p><h3>${esc(p.name)}</h3><p class="product-desc">${esc(p.desc||'Описание можно добавить в админ-панели.')}</p></div>
      <div class="stock-summary ${total>0?'stock-ok':'stock-empty'}">Всего на складе: ${total} шт.</div>
      <div class="spec-list">${(p.specs||[]).map(s=>`<span>${esc(s)}</span>`).join('')}</div>
      <div class="flavor-block"><label for="flavor-${esc(p.id)}">Выберите вкус</label><select class="flavor-select" id="flavor-${esc(p.id)}" aria-label="Выберите вкус" onchange="updateProductStockLabel('${esc(p.id)}')">${options}</select><div class="flavor-hint" id="stock-${esc(p.id)}">${stockLabel(flavorStock((p.flavors||[])[first]))}</div></div>
      <div class="price-row"><div><div class="price-main">${money(p.pw)}</div><div class="price-note">Цена для заказа · розница ${money(p.pr)}</div></div><button class="primary-btn" type="button" ${total<=0?'disabled':''} onclick="addProductToCart('${esc(p.id)}')">Добавить в корзину</button></div>
    </article>`;
  }).join('')||'<div class="empty-state">Товары пока не добавлены</div>';
}
function updateProductStockLabel(productId){const sel=document.getElementById(`flavor-${productId}`),out=document.getElementById(`stock-${productId}`);if(sel&&out){const opt=sel.options[sel.selectedIndex];out.textContent=stockLabel(Number(opt&&opt.dataset.stock||0));}}
function cartQtyFor(productId,flavorIndex){return getCart().filter(i=>i.productId===productId&&Number(i.flavorIndex)===Number(flavorIndex)).reduce((s,i)=>s+Number(i.qty||0),0);}
function addProductToCart(productId){
  const p=findProduct(productId); if(!p)return;
  const sel=document.getElementById(`flavor-${productId}`); const flavorIndex=Number(sel?sel.value:firstAvailableFlavorIndex(p));
  const f=p.flavors[flavorIndex]; const st=flavorStock(f);
  if(st<=0){alert('Этого вкуса сейчас нет на складе.');return;}
  if(cartQtyFor(productId,flavorIndex)>=st){alert('В корзине уже указано всё доступное количество этого вкуса.');return;}
  const cart=getCart(); const found=cart.find(i=>i.productId===productId&&Number(i.flavorIndex)===flavorIndex);
  if(found)found.qty=Number(found.qty||0)+1; else cart.push({productId,flavorIndex,qty:1});
  setCart(cart);openCart();
}
function cartHtml(cart){
  if(!cart.length)return `<div class="empty-state">Корзина пустая. Перейдите в коллекцию и добавьте товары.</div><div class="modal-actions"><a class="primary-link" href="collection.html">Перейти в коллекцию</a></div>`;
  const rows=cart.map((item,idx)=>{const {p,f}=findCartProduct(item); if(!p)return ''; const st=flavorStock(f);return `<div class="cart-item"><div><h4>${esc(p.name)}</h4><p>${esc(f?`${f.en} — ${f.ru}`:'Без вкуса')}</p><p>${money(p.pw)} за единицу · доступно ${st} шт.</p></div><div class="qty-control"><button type="button" onclick="changeCartQty(${idx},-1)">−</button><strong>${item.qty}</strong><button type="button" onclick="changeCartQty(${idx},1)">+</button></div><div><strong>${money(p.pw*item.qty)}</strong><div class="mini-actions"><button class="secondary-btn" type="button" onclick="removeCartItem(${idx})">Удалить</button></div></div></div>`;}).join('');
  return `<div class="cart-list">${rows}</div><div class="cart-total"><span>Итого</span><strong>${money(cartTotal(cart))}</strong></div><div class="modal-actions"><button class="primary-btn" onclick="openCheckout()">Оформить заказ</button><button class="secondary-btn" onclick="closeModal()">Продолжить покупки</button><button class="danger-btn" onclick="clearCart()">Очистить</button></div>`;
}
function changeCartQty(idx,delta){
  const cart=getCart(); if(!cart[idx])return; const {f}=findCartProduct(cart[idx]); const st=flavorStock(f); const next=Number(cart[idx].qty||1)+delta;
  cart[idx].qty=Math.max(1,Math.min(st||1,next)); setCart(cart); const c=document.getElementById('cart-content');if(c)c.innerHTML=cartHtml(cart);
}
function cartStockProblem(cart){
  for(const item of cart){const {p,f}=findCartProduct(item); if(!p||!f)return 'Один из товаров больше недоступен.'; if(Number(item.qty||0)>flavorStock(f))return `${p.name}: доступно ${flavorStock(f)} шт., в корзине ${item.qty} шт.`;}
  return '';
}
function subtractStockForCart(cart){
  const list=products();
  cart.forEach(item=>{const p=list.find(x=>x.id===item.productId); if(!p)return; const f=p.flavors[Number(item.flavorIndex)]; if(f)f.stock=Math.max(0,flavorStock(f)-Number(item.qty||0));});
  saveKey('products',list);
}
function openCheckout(){
  const cart=getCart(); if(!cart.length){openCart();return;} const problem=cartStockProblem(cart); if(problem){alert(problem);openCart();return;}
  const u=currentUser();
  const html=`<div class="modal-backdrop" onclick="backdropClose(event)"><div class="modal">
    <div class="modal-head"><div><div class="modal-title">Оформление заказа</div><p class="muted-note">Итого: ${money(cartTotal(cart))}</p></div><button class="close-btn" onclick="closeModal()">×</button></div>
    <div id="checkout-error" class="error-box"></div><div id="checkout-success" class="success-box"></div>
    <div class="form-grid">
      <div class="form-field" id="cf-name"><label>ФИО *</label><input class="form-input" id="checkout-name" value="${esc(u&&u.name||'')}" placeholder="Иванов Иван"></div>
      <div class="form-field" id="cf-phone"><label>Телефон *</label>${phoneFieldHtml('checkout-phone-local',u&&u.phone||'')}</div>
      <div class="form-field full" id="cf-email"><label>Email</label><input class="form-input" id="checkout-email" value="${esc(u&&u.email||'')}" placeholder="mail@example.com"></div>
      <div class="form-field full"><label>Комментарий</label><textarea class="form-textarea" id="checkout-comment" placeholder="Адрес доставки, пожелания"></textarea></div>
    </div>
    <label class="check-line"><input type="checkbox" id="checkout-pd-consent"><span>Я согласен на обработку персональных данных. ${docInlineButton('pd-consent','Открыть согласие')}</span></label>
    <label class="check-line"><input type="checkbox" id="checkout-pd-policy"><span>Я согласен с политикой обработки персональных данных. ${docInlineButton('pd-policy','Открыть политику')}</span></label>
    <div class="modal-actions"><button class="primary-btn" onclick="submitCheckout()">Отправить заказ</button><button class="secondary-btn" onclick="openCart()">Назад в корзину</button></div>
  </div></div>`;
  setModal(html);
}
async function submitCheckout(){
  let cart=getCart(); if(!cart.length)return; if(fbOk){try{await pullRemote({repair:false,refresh:false});}catch(e){}}
  cart=getCart(); const name=val('checkout-name'),phone=phoneFromLocal('checkout-phone-local'),email=val('checkout-email'),comment=val('checkout-comment');
  let ok=true; ['cf-name','cf-phone','cf-email'].forEach(id=>clearFieldError(id)); hideBox('checkout-error');
  if(name.trim().split(/\s+/).length<2){setFieldError('cf-name');ok=false;} if(!/^\+7\d{10}$/.test(phone)){setFieldError('cf-phone');ok=false;} if(email&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){setFieldError('cf-email');ok=false;}
  if(!document.getElementById('checkout-pd-consent').checked||!document.getElementById('checkout-pd-policy').checked){showBox('checkout-error','Нужно отметить оба чекбокса согласия.');ok=false;}
  const problem=cartStockProblem(cart); if(problem){showBox('checkout-error',problem);ok=false;} if(!ok)return;
  const orderItems=cart.map(item=>{const {p,f}=findCartProduct(item);return {productId:item.productId,flavorIndex:item.flavorIndex,name:p?p.name:'Товар',flavor:f?`${f.en} — ${f.ru}`:'',price:p?Number(p.pw||0):0,qty:Number(item.qty||0),line:p?Number(p.pw||0)*Number(item.qty||0):0};});
  const u=currentUser(); const order={id:`ORD-${Date.now()}`,createdAt:new Date().toISOString(),createdText:new Date().toLocaleString('ru-RU'),status:'new',userId:u?u.id:'',customer:{name,phone,email,comment},items:orderItems,total:cartTotal(cart),pdConsentAccepted:true,pdPolicyAccepted:true};
  const list=orders(); list.unshift(order); saveKey('orders',list); subtractStockForCart(cart);
  setCart([]); updateCartCount(); if(page()==='collection')renderProducts(); showBox('checkout-success','Заказ отправлен.'); setTimeout(()=>{closeModal();},900);
}

function openUserAuth(mode='login'){
  const isReg=mode==='register';
  const html=`<div class="modal-backdrop" onclick="backdropClose(event)"><div class="modal">
    <div class="modal-head"><div><div class="modal-title">${isReg?'Регистрация':'Вход'}</div><p class="muted-note">${isReg?'Заполните данные для создания профиля покупателя.':'Войдите в личный профиль покупателя.'}</p></div><button class="close-btn" onclick="closeModal()">×</button></div>
    <div id="auth-error" class="error-box"></div><div id="auth-success" class="success-box"></div>
    <div class="form-grid">
      ${isReg?`<div class="form-field" id="af-name"><label>ФИО *</label><input class="form-input" id="auth-name" placeholder="Иванов Иван"></div><div class="form-field" id="af-phone"><label>Телефон *</label>${phoneFieldHtml('auth-phone-local','')}</div>`:''}
      <div class="form-field ${isReg?'':'full'}" id="af-email"><label>Email *</label><input class="form-input" id="auth-email" placeholder="mail@example.com"></div>
      <div class="form-field ${isReg?'':'full'}" id="af-pass"><label>Пароль *</label><input class="form-input" id="auth-pass" type="password" placeholder="Минимум 6 символов"></div>
    </div>
    ${isReg?`<label class="check-line"><input type="checkbox" id="auth-pd-consent"><span>Я согласен на обработку персональных данных. ${docInlineButton('pd-consent','Открыть согласие')}</span></label><label class="check-line"><input type="checkbox" id="auth-pd-policy"><span>Я согласен с политикой обработки персональных данных. ${docInlineButton('pd-policy','Открыть политику')}</span></label>`:''}
    <div class="modal-actions"><button class="primary-btn" onclick="${isReg?'registerUser()':'loginUser()'}">${isReg?'Зарегистрироваться':'Войти'}</button><button class="secondary-btn" onclick="openUserAuth('${isReg?'login':'register'}')">${isReg?'Уже есть аккаунт':'Создать аккаунт'}</button></div>
  </div></div>`;
  setModal(html);
}
async function registerUser(){
  hideBox('auth-error'); const name=val('auth-name'),phone=phoneFromLocal('auth-phone-local'),email=val('auth-email').toLowerCase(),pass=val('auth-pass');
  let ok=true; ['af-name','af-phone','af-email','af-pass'].forEach(clearFieldError);
  if(name.trim().split(/\s+/).length<2){setFieldError('af-name');ok=false;} if(!/^\+7\d{10}$/.test(phone)){setFieldError('af-phone');ok=false;} if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){setFieldError('af-email');ok=false;} if(pass.length<6){setFieldError('af-pass');ok=false;}
  const c1=document.getElementById('auth-pd-consent'),c2=document.getElementById('auth-pd-policy'); if(!c1.checked||!c2.checked){showBox('auth-error','Для регистрации нужно отметить оба чекбокса согласия.');ok=false;}
  const list=users(); if(list.some(u=>(u.email||'').toLowerCase()===email)){showBox('auth-error','Пользователь с таким email уже зарегистрирован.');return;} if(!ok)return;
  const user={id:`USR-${Date.now()}`,createdAt:new Date().toISOString(),createdText:new Date().toLocaleString('ru-RU'),name,phone,email,passHash:await sha256(pass),pdConsentAccepted:true,pdPolicyAccepted:true,pdAccepted:true,consentAccepted:true};
  list.unshift(user); saveKey('users',list); setCurrentUserId(user.id); showBox('auth-success','Регистрация выполнена.'); setTimeout(closeModal,700);
}

function renderDocuments(){
  const root=document.getElementById('docs-list'); if(!root)return;
  root.innerHTML=docs().map(d=>`<article class="doc-card ${d.url?'':'doc-disabled'}"><div class="doc-icon">📄</div><div><p class="doc-type">${esc(d.type)}</p><h3>${esc(d.name)}</h3><p>${esc(d.desc)}</p>${d.fileName?`<p class="doc-file-name">Файл: ${esc(d.fileName)}</p>`:''}<div class="doc-actions">${d.url?`<button class="primary-link" type="button" onclick="openDocUrl(${jsArg(d.url)})">Открыть</button>`:`<button class="secondary-btn" type="button">Файл не добавлен</button>`}</div></div></article>`).join('');
}

async function fileToDataUrl(file,maxBytes){
  if(!file)return ''; if(maxBytes&&file.size>maxBytes){alert('Файл слишком большой для сохранения в базе. Уменьшите размер файла.');return '';}
  return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});
}
async function imageFileToDataUrl(file){
  if(!file)return ''; if(!/^image\//.test(file.type)){alert('Выберите изображение JPG или PNG.');return '';}
  return new Promise((resolve,reject)=>{const img=new Image();const r=new FileReader();r.onload=()=>{img.onload=()=>{const max=1600;let w=img.width,h=img.height;if(Math.max(w,h)>max){const k=max/Math.max(w,h);w=Math.round(w*k);h=Math.round(h*k);}const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;const ctx=canvas.getContext('2d');ctx.drawImage(img,0,0,w,h);let data=canvas.toDataURL('image/jpeg',0.84);if(data.length>900000)data=canvas.toDataURL('image/jpeg',0.72);resolve(data);};img.onerror=reject;img.src=r.result;};r.onerror=reject;r.readAsDataURL(file);});
}
async function handleHeroImageFile(input){const file=input.files&&input.files[0];const data=await imageFileToDataUrl(file);if(!data)return;const hidden=document.getElementById('design-hero-image');if(hidden)hidden.value=data;const prev=document.getElementById('hero-image-preview');if(prev)prev.innerHTML=`<img src="${esc(data)}" alt="Фон главной">`;}
async function handleProductImageFile(input,i){const file=input.files&&input.files[0];const data=await imageFileToDataUrl(file);if(!data||!adminProductDraft||!adminProductDraft[i])return;adminProductDraft[i].img=data;const prev=document.getElementById(`prod-img-prev-${i}`);if(prev)prev.innerHTML=`<img src="${esc(data)}" alt="Картинка товара">`;}
async function handleDocPdfFile(input,i){const file=input.files&&input.files[0];if(!file)return;if(file.type!=='application/pdf'&&!/\.pdf$/i.test(file.name)){alert('Выберите PDF-файл.');return;}const data=await fileToDataUrl(file,850000);if(!data||!adminDocsDraft||!adminDocsDraft[i])return;adminDocsDraft[i].url=data;adminDocsDraft[i].fileName=file.name;const label=document.getElementById(`doc-file-name-${i}`);if(label)label.textContent=file.name;}
function colorInputHtml(id,label,value){return `<div class="form-field"><label>${esc(label)}</label><input class="form-input color-field" type="color" id="${esc(id)}" value="${esc(value)}"></div>`;}
function designAdminHtml(){
  const d=design(); const sizes=d.sizes; const bodyOptions=FONT_OPTIONS.map(f=>`<option value="${esc(f)}" ${f===d.bodyFont?'selected':''}>${esc(f)}</option>`).join(''); const displayOptions=FONT_OPTIONS.map(f=>`<option value="${esc(f)}" ${f===d.displayFont?'selected':''}>${esc(f)}</option>`).join('');
  const sizeControls=[['body','Основной текст',12,24],['small','Мелкий текст',10,18],['nav','Меню',11,20],['hero','Главный заголовок',48,130],['section','Заголовки разделов',30,78],['cardTitle','Заголовки карточек',18,38],['price','Цена',22,46],['button','Кнопки',11,20],['input','Поля форм',12,22]];
  const colors=[['black','Основной фон'],['deep','Фон секций'],['panel','Фон карточек'],['panel2','Дополнительный фон'],['border','Границы'],['gold','Акцент'],['goldDim','Тёмный акцент'],['cream','Заголовки'],['text','Основной текст'],['muted','Вторичный текст'],['dropdownBg','Фон выпадающих списков'],['dropdownText','Текст выпадающих списков'],['dropdownBorder','Граница выпадающих списков'],['dropdownFocus','Акцент выпадающих списков']];
  return `<div class="admin-form-block"><h3>Фон главной страницы</h3><div class="form-field"><label>Загрузить картинку JPG/PNG</label><input class="form-input" type="file" accept="image/png,image/jpeg,image/webp" onchange="handleHeroImageFile(this)"><input type="hidden" id="design-hero-image" value="${esc(d.heroImage||'')}"><div class="file-preview" id="hero-image-preview">${d.heroImage?`<img src="${esc(d.heroImage)}" alt="Фон главной">`:''}</div></div></div><div class="admin-form-block"><h3>Цвета сайта</h3><div class="admin-row three">${colors.map(([k,label])=>colorInputHtml(`design-color-${k}`,label,d[k]||'#000000')).join('')}</div></div><div class="admin-form-block"><h3>Шрифты</h3><div class="admin-row"><div class="form-field"><label>Основной шрифт</label><select class="form-select" id="design-body-font">${bodyOptions}</select></div><div class="form-field"><label>Шрифт заголовков</label><select class="form-select" id="design-display-font">${displayOptions}</select></div></div><div class="font-preview"><h3>Пример заголовка</h3><p>Пример русского текста: карточка товара, описание, цена, документы и кнопки.</p></div></div><div class="admin-form-block"><h3>Размеры текста</h3>${sizeControls.map(([key,label,min,max])=>`<label class="range-row"><span>${label}</span><input type="range" min="${min}" max="${max}" value="${sizes[key]}" id="size-${key}" oninput="rangeOutput('${key}')"><output id="out-${key}">${sizes[key]}px</output></label>`).join('')}</div><div class="admin-save-line"><button class="primary-btn" onclick="saveAdminDesign()">Сохранить дизайн</button><button class="secondary-btn" onclick="applyDesign();renderAdminContent('design')">Отменить несохранённое</button><span class="save-msg" id="design-save-msg">Сохранено</span></div>`;
}
function designDraftFromAdmin(){const d=design();d.bodyFont=val('design-body-font')||d.bodyFont;d.displayFont=val('design-display-font')||d.displayFont;['black','deep','panel','panel2','border','gold','goldDim','cream','text','muted','dropdownBg','dropdownText','dropdownBorder','dropdownFocus'].forEach(k=>{const el=document.getElementById(`design-color-${k}`);if(el)d[k]=el.value;});const hero=document.getElementById('design-hero-image');if(hero)d.heroImage=hero.value||d.heroImage;Object.keys(d.sizes).forEach(k=>{const el=document.getElementById(`size-${k}`);if(el)d.sizes[k]=Number(el.value);});return d;}
function previewAdminDesign(){/* intentionally disabled: design changes are applied only after saving */}
function saveAdminDesign(){const d=designDraftFromAdmin();saveKey('design',d);applyDesign(d);showSave('design-save-msg');}

function productEditorHtml(p,i){return `<details class="product-admin-card" open><summary>${esc(p.name)}</summary><div class="admin-form-block"><div class="admin-row"><div class="form-field"><label>Название</label><input class="form-input" data-pi="${i}" data-pf="name" value="${esc(p.name)}" oninput="draftProductField(this)"></div><div class="form-field"><label>Подзаголовок</label><input class="form-input" data-pi="${i}" data-pf="sub" value="${esc(p.sub)}" oninput="draftProductField(this)"></div></div><div class="admin-row"><div class="form-field"><label>Цена для заказа</label><input class="form-input" type="number" data-pi="${i}" data-pf="pw" value="${p.pw}" oninput="draftProductField(this)"></div><div class="form-field"><label>Розничная цена</label><input class="form-input" type="number" data-pi="${i}" data-pf="pr" value="${p.pr}" oninput="draftProductField(this)"></div></div><div class="admin-row"><div class="form-field"><label>Картинка товара JPG/PNG</label><input class="form-input" type="file" accept="image/png,image/jpeg,image/webp" onchange="handleProductImageFile(this,${i})"><div class="file-preview" id="prod-img-prev-${i}">${p.img?`<img src="${esc(p.img)}" alt="Картинка товара">`:''}</div></div><div class="form-field"><label>URL/путь картинки (необязательно)</label><input class="form-input" data-pi="${i}" data-pf="img" value="${esc(p.img)}" oninput="draftProductField(this)"></div></div><div class="form-field"><label>Описание</label><textarea class="form-textarea" data-pi="${i}" data-pf="desc" oninput="draftProductField(this)">${esc(p.desc)}</textarea></div><div class="form-field"><label>Характеристики через запятую</label><textarea class="form-textarea" data-pi="${i}" data-pf="specs" oninput="draftProductField(this)">${esc((p.specs||[]).join(', '))}</textarea></div><div class="form-field"><label>Вкусы: EN | RU | остаток | URL картинки | описание. Каждый вкус с новой строки</label><textarea class="form-textarea flavors-textarea" data-pi="${i}" data-pf="flavors" oninput="draftProductField(this)">${esc((p.flavors||[]).map(f=>`${f.en||''} | ${f.ru||''} | ${flavorStock(f)} | ${f.img||''} | ${f.desc||''}`).join('\n'))}</textarea></div><div class="mini-actions"><button class="danger-btn" onclick="removeAdminProduct(${i})">Удалить товар</button></div></div></details>`;}
function draftProductField(el){const i=Number(el.dataset.pi),f=el.dataset.pf;if(!adminProductDraft||!adminProductDraft[i])return;let v=el.value;if(f==='pw'||f==='pr')v=Number(v||0);if(f==='specs')v=el.value.split(',').map(s=>s.trim()).filter(Boolean);if(f==='flavors')v=el.value.split('\n').map(line=>{const parts=line.split('|').map(s=>s.trim());const [en='',ru='',stock='0',img='',desc='']=parts;return {en,ru,stock:Math.max(0,Math.floor(Number(stock||0))),img,desc};}).filter(x=>x.en||x.ru);adminProductDraft[i][f]=v;}
function addAdminProduct(){adminProductDraft.push({id:`prod-${Date.now()}`,name:'Новый товар',sub:'Новая линейка',pw:0,pr:0,img:'',desc:'',specs:[],flavors:[{en:'New flavor',ru:'Новый вкус',stock:0,img:'',desc:''}]});document.getElementById('admin-products-list').innerHTML=adminProductDraft.map((p,i)=>productEditorHtml(p,i)).join('');}
function saveAdminProducts(){saveKey('products',normalizeProducts(adminProductDraft));if(page()==='collection')renderProducts();showSave('products-save-msg');}
function docEditorHtml(d,i){return `<div class="admin-form-block"><div class="admin-row"><div class="form-field"><label>Тип</label><input class="form-input" data-di="${i}" data-df="type" value="${esc(d.type)}" oninput="draftDocField(this)"></div><div class="form-field"><label>Название</label><input class="form-input" data-di="${i}" data-df="name" value="${esc(d.name)}" oninput="draftDocField(this)"></div></div><div class="form-field"><label>Описание</label><textarea class="form-textarea" data-di="${i}" data-df="desc" oninput="draftDocField(this)">${esc(d.desc)}</textarea></div><div class="admin-row"><div class="form-field"><label>PDF-файл</label><input class="form-input" type="file" accept="application/pdf,.pdf" onchange="handleDocPdfFile(this,${i})"><p class="muted-note" id="doc-file-name-${i}">${esc(d.fileName||'Файл не выбран')}</p></div><div class="form-field"><label>URL документа (необязательно)</label><input class="form-input" data-di="${i}" data-df="url" value="${esc(d.url)}" oninput="draftDocField(this)" placeholder="assets/docs/file.pdf или https://..."></div></div><div class="mini-actions"><button class="danger-btn" onclick="removeAdminDoc(${i})">Удалить</button></div></div>`;}
function draftDocField(el){const i=Number(el.dataset.di),f=el.dataset.df;if(adminDocsDraft&&adminDocsDraft[i])adminDocsDraft[i][f]=el.value;}
function saveAdminDocs(){saveKey('site_docs',normalizeDocs(adminDocsDraft));if(page()==='documents')renderDocuments();showSave('docs-save-msg');}

window.updateProductStockLabel=updateProductStockLabel;window.normalizePhoneDigits=normalizePhoneDigits;window.openDocById=openDocById;window.openDocUrl=openDocUrl;
window.handleHeroImageFile=handleHeroImageFile;window.handleProductImageFile=handleProductImageFile;window.handleDocPdfFile=handleDocPdfFile;
window.previewAdminDesign=previewAdminDesign;window.saveAdminDesign=saveAdminDesign;window.designDraftFromAdmin=designDraftFromAdmin;

function settingsAdminHtml(){return `<div class="admin-form-block"><h3>Смена логина и пароля</h3><div class="admin-row"><div class="form-field"><label>Новый логин</label><input class="form-input" id="set-login" value="${esc(adminLogin())}"></div><div class="form-field"><label>Новый пароль</label><input class="form-input" id="set-pwd" type="password" placeholder="Оставьте пустым, если не менять"></div></div><div class="admin-save-line"><button class="primary-btn" onclick="saveAdminSettings()">Сохранить настройки</button><span class="save-msg" id="settings-save-msg">Сохранено</span></div></div><div class="admin-form-block"><h3>Облачная база Firestore</h3><div class="admin-save-line"><button class="primary-btn" onclick="restoreLocalDataToCloud()">Отправить данные сайта в базу</button><button class="secondary-btn" onclick="repairMissingFirestore(new Set()).then(()=>alert('База проверена и заполнена.'))">Заполнить недостающие данные</button><button class="danger-btn" onclick="if(confirm('Заменить товары, документы, пользователей и заказы базовыми значениями?'))seedDefaultCloudData()">Сбросить базу к базовым данным</button></div></div><div class="admin-form-block"><h3>Корзина</h3><button class="danger-btn" onclick="clearCart()">Очистить корзину в этом браузере</button></div>`;}
window.settingsAdminHtml=settingsAdminHtml;

function renderDocuments(){
  const root=document.getElementById('docs-list'); if(!root)return;
  root.innerHTML=docs().map(d=>`<article class="doc-card ${d.url?'':'doc-disabled'}"><div class="doc-icon">📄</div><div><p class="doc-type">${esc(d.type)}</p><h3>${esc(d.name)}</h3><p>${esc(d.desc)}</p>${d.fileName?`<p class="doc-file-name">Файл: ${esc(d.fileName)}</p>`:''}<div class="doc-actions">${d.url?`<button class="primary-link" type="button" onclick='openDocUrl(${esc(jsArg(d.url))})'>Открыть</button>`:`<button class="secondary-btn" type="button">Файл не добавлен</button>`}</div></div></article>`).join('');
}
window.renderDocuments=renderDocuments;
