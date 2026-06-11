/* ═══════════════════════════════════════════
   DEFAULT DATA
═══════════════════════════════════════════ */
const DEF_PRODUCTS=[
  {id:'hugo2xl',name:'JOYSTICK HUGO 2XL',sub:'Флагманская линейка',pw:1800,pr:2190,
    specs:['55 000 затяжек','26 мл','2% никотин','850 mAh','Double Mesh Coil','LED Display','Type-C'],
    flavors:[
      {en:'Apple Peach',ru:'Яблоко Персик',img:'',desc:''},
      {en:'Honey Mango Banana',ru:'Манго Банан Мёд',img:'',desc:''},
      {en:'Blueberry Sour Apple',ru:'Черника Кислое Яблоко',img:'',desc:''},
      {en:'Rainbow Candy',ru:'Радужный Леденец',img:'',desc:''},
      {en:'Tangerine Blackcurrant',ru:'Мандарин Черная Смородина',img:'',desc:''},
      {en:'Mango Blackcurrant',ru:'Черная Смородина Манго',img:'',desc:''},
      {en:'Mixed Berries',ru:'Ягодный Микс',img:'',desc:''},
      {en:'Mixed Fruits',ru:'Фруктовый Микс',img:'',desc:''},
      {en:'Orange Soda (Fanta)',ru:'Фанта',img:'',desc:''},
      {en:'Pineapple Grapefruit Ice',ru:'Ананас Грейпфрут',img:'',desc:''},
      {en:'Strawberry Kiwi',ru:'Клубника Киви',img:'',desc:''},
      {en:'Grape Lemonade',ru:'Виноградный Лимонад',img:'',desc:''},
      {en:'Cola Mojito',ru:'Кола Мохито',img:'',desc:''},
      {en:'Red Apple Anise',ru:'Красное Яблоко Анис',img:'',desc:''},
      {en:'Toffee',ru:'Карамельки Тоффи',img:'',desc:''}
    ]
  },
  {id:'turbomixo',name:'JOYSTICK TURBO MIXO',sub:'Крепкая серия',pw:1750,pr:2390,
    specs:['40 000 затяжек','26 мл','2% / +7.5% никотин','650 mAh','Регулировка затяжки','LED Display'],
    flavors:[
      {en:'Pineapple Peach Orange Kiwi',ru:'Ананас / Персик / Апельсин / Киви',img:'',desc:''},
      {en:'Strawberry Watermelon Bubblegum',ru:'Клубнично-Арбузная Жевачка',img:'',desc:''},
      {en:'Strawberry Kiwi Ice',ru:'Клубника / Киви со Льдом',img:'',desc:''},
      {en:'Peach Berry',ru:'Персик / Ягоды',img:'',desc:''},
      {en:'Blueberry Blackcurrant Lemon',ru:'Черника / Черная Смородина / Лимон',img:'',desc:''},
      {en:'Mixed Berries Ice',ru:'Ягодный Микс со Льдом',img:'',desc:''},
      {en:'Aloe Grape',ru:'Виноград / Алоэ Вера',img:'',desc:''},
      {en:'Black Raspberry Ice',ru:'Черная Малина со Льдом',img:'',desc:''},
      {en:'Mango Peach Watermelon',ru:'Манго / Персик / Арбуз',img:'',desc:''},
      {en:'Cherry Lemon',ru:'Вишня / Лимон',img:'',desc:''}
    ]
  },
  {id:'hugoice',name:'JOYSTICK HUGO ICE ICE, BABY!',sub:'Серия с холодком',pw:1650,pr:2290,
    specs:['32 000 затяжек','23 мл','2% никотин','800 mAh','3D LED Display','Triple Mesh Coil','Type-C'],
    flavors:[
      {en:'Blueberry Sour Apple',ru:'Черника Кислое Яблоко',img:'',desc:''},
      {en:'Pineapple Grapefruit Ice',ru:'Ананас Грейпфрут',img:'',desc:''},
      {en:'Grape Lemonade',ru:'Виноградный Лимонад',img:'',desc:''},
      {en:'Mixed Fruits',ru:'Фруктовый Микс',img:'',desc:''},
      {en:'Toffee',ru:'Карамельки Тоффи',img:'',desc:''},
      {en:'Mango Blackcurrant',ru:'Мандарин Черная Смородина',img:'',desc:''},
      {en:'Cola Mojito',ru:'Кола Мохито',img:'',desc:''},
      {en:'Fanta',ru:'Фанта',img:'',desc:''},
      {en:'Rainbow Candy',ru:'Радужный Леденец',img:'',desc:''},
      {en:'Mixed Berries',ru:'Ягодный Микс',img:'',desc:''},
      {en:'Red Apple Anise',ru:'Двойное Яблоко',img:'',desc:''},
      {en:'Strawberry Kiwi',ru:'Клубника Киви',img:'',desc:''},
      {en:'Apple Peach',ru:'Яблоко Персик',img:'',desc:''},
      {en:'Mango Blackcurrant (2)',ru:'Чёрная Смородина Манго',img:'',desc:''},
      {en:'Honey Mango Banana',ru:'Манго Банан Мёд',img:'',desc:''}
    ]
  }
];
const DEF_IMGS={
  hugo2xl:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  turbomixo:'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80',
  hugoice:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80'
};
const DEF_TXT={logo:'Joystick',sub:'Premium Disposable Series',
  desc:'Премиальные одноразовые устройства. Исключительный вкус, передовые технологии, продуманный дизайн.',
  cdesc:'Оптовые поставки · Индивидуальные условия · Быстрая доставка',flogo:'Joystick',ftext:'Оптовый поставщик · Россия'};
const DEF_COLORS={black:'#0a0a0a',deep:'#111111',panel:'#161616',border:'#2a2a2a',
  gold:'#c9a84c',goldDim:'#8a6f30',cream:'#f5f0e8',text:'#d4cfc6',muted:'#6e6860'};
const DEF_LOGIN='CPJw1r';
const DEF_PWD='joystick2024';

const THEMES={
  dark:{black:'#0a0a0a',deep:'#111111',panel:'#161616',border:'#2a2a2a',gold:'#c9a84c',goldDim:'#8a6f30',cream:'#f5f0e8',text:'#d4cfc6',muted:'#6e6860'},
  light:{black:'#f8f6f1',deep:'#ffffff',panel:'#f0ece3',border:'#d4cfc6',gold:'#8a6f30',goldDim:'#c9a84c',cream:'#1a1a1a',text:'#3a3530',muted:'#8a8680'},
  bordo:{black:'#0d0608',deep:'#160a0c',panel:'#1e0e12',border:'#3a1a20',gold:'#c94c6e',goldDim:'#8a3048',cream:'#f8e8ec',text:'#d4c0c4',muted:'#7a6068'},
  blue:{black:'#060810',deep:'#0a0e1a',panel:'#101626',border:'#1e2840',gold:'#4c84c9',goldDim:'#2a5a8a',cream:'#e8f0f8',text:'#c0ccd8',muted:'#607080'}
};

/* ═══════════════════════════════════════════════════════════
   FIREBASE REST API — без внешних скриптов, только fetch()
   Работает пока есть доступ к интернету.
   Fallback: localStorage если сеть недоступна.
═══════════════════════════════════════════════════════════ */
const _PROJECT = window.APP_CONFIG?.firebaseProjectId || 'dedets-9cc2b';
const _COLLECTION_PATH = window.APP_CONFIG?.firestoreCollectionPath || 'settings';
const _FB_BASE = `https://firestore.googleapis.com/v1/projects/${_PROJECT}/databases/(default)/documents/${_COLLECTION_PATH}`;
let _fbOk = false;

/* ── Конвертация JS ↔ Firestore field types ── */
function _toFV(val){
  if(val===null||val===undefined)return{nullValue:null};
  if(typeof val==='boolean')return{booleanValue:val};
  if(typeof val==='number')return Number.isInteger(val)?{integerValue:''+val}:{doubleValue:val};
  if(typeof val==='string')return{stringValue:val};
  if(Array.isArray(val))return{arrayValue:{values:val.length?val.map(_toFV):[]}};
  if(typeof val==='object')return{mapValue:{fields:Object.fromEntries(Object.entries(val).map(([k,v])=>[k,_toFV(v)]))}};
  return{stringValue:''+val};
}
function _fromFV(fv){
  if(!fv)return null;
  if('nullValue' in fv)return null;
  if('booleanValue' in fv)return fv.booleanValue;
  if('integerValue' in fv)return parseInt(fv.integerValue);
  if('doubleValue' in fv)return fv.doubleValue;
  if('stringValue' in fv)return fv.stringValue;
  if('arrayValue' in fv)return(fv.arrayValue.values||[]).map(_fromFV);
  if('mapValue' in fv)return Object.fromEntries(Object.entries(fv.mapValue.fields||{}).map(([k,v])=>[k,_fromFV(v)]));
  return null;
}

/* ── Запись одного ключа в Firestore ── */
async function _fbWrite(key,val){
  if(!_fbOk)return;
  try{
    await fetch(`${_FB_BASE}/${encodeURIComponent(key)}?updateMask.fieldPaths=v`,{
      method:'PATCH',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({fields:{v:_toFV(val)}})
    });
  }catch(e){console.warn('FB write failed:',key,e);}
}

/* ═══════ STORAGE ═══════ */
const _C = {};
const _LOCAL = ['pd1_pdf','pd2_pdf'];
function _isHuge(v){try{return JSON.stringify(v).length>450000}catch{return false}}

/* Читаем из кеша (или localStorage как запасной вариант) */
const LS=(k,d)=>{
  if(_C[k]!==undefined)return _C[k];
  try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch{return d}
};

/* Пишем в кеш + localStorage + Firestore */
const SS=(k,v)=>{
  _C[k]=v;
  try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}
  if(!_LOCAL.includes(k)&&!_isHuge(v)){
    _fbWrite(k,v); // async, не ждём
  }
};

/* Загрузка всех настроек при старте */
async function _loadFirestore(){
  // Сначала грузим localStorage как базовый слой
  const KEYS=['products','images','texts','contacts','colors','font','pd_config',
    'a_login','a_pwd','orders','stock','site_docs'];
  KEYS.forEach(k=>{
    try{const v=localStorage.getItem(k);if(v!==null)_C[k]=JSON.parse(v);}catch{}
  });

  // Пробуем загрузить из Firestore REST API
  try{
    let url=`${_FB_BASE}?pageSize=200`;
    let allDocs=[];
    // Обрабатываем пагинацию на случай большого числа ключей
    while(url){
      const res=await fetch(url);
      if(!res.ok)throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      const data=await res.json();
      if(data.documents)allDocs=allDocs.concat(data.documents);
      url=data.nextPageToken?`${_FB_BASE}?pageSize=200&pageToken=${data.nextPageToken}`:null;
    }
    allDocs.forEach(doc=>{
      const key=decodeURIComponent(doc.name.split('/').pop());
      if(doc.fields&&doc.fields.v!==undefined){
        const val=_fromFV(doc.fields.v);
        _C[key]=val;
        // Синхронизируем в localStorage
        try{localStorage.setItem(key,JSON.stringify(val));}catch{}
      }
    });
    _fbOk=true;
    console.log(`✅ Firebase REST: загружено ${allDocs.length} ключей`);
  }catch(e){
    console.warn('⚠️ Firebase REST недоступен, работаем с localStorage. Ошибка:',e.message);
    _fbOk=false;
  }
}

const gP=()=>LS('products',DEF_PRODUCTS);
const gI=()=>LS('images',DEF_IMGS);
const gT=()=>LS('texts',DEF_TXT);
const gC=()=>LS('contacts',{});
const gO=()=>LS('orders',[]);
const gColors=()=>LS('colors',DEF_COLORS);
const gPD=()=>LS('pd_config',{
  t1:'Я согласен на обработку моих персональных данных',lt1:'— ознакомиться с документом',url1:'',
  t2:'Я согласен с политикой обработки персональных данных',lt2:'— ознакомиться с политикой',url2:''
});
const gLogin=()=>LS('a_login',DEF_LOGIN);
const gPwd=()=>LS('a_pwd',DEF_PWD);

/* ═══════ INIT ═══════ */
document.addEventListener('DOMContentLoaded',async()=>{
  const loader=document.getElementById('fb-loader');
  if(loader)loader.style.display='flex';
  await _loadFirestore();
  if(loader)loader.style.display='none';
  applyColors();
  const savedFont=LS('font','classic');
  if(savedFont!=='classic')applyFont(savedFont,null);
  applyTexts();renderProducts();renderCalc();renderContacts();updatePDCheckboxes('');updateBadge();renderDocsPublic();
  // Auto-open admin login if ?admin=1 in URL
  if(location.search.includes('admin=1')||location.hash.includes('admin')){
    _showLoginModal();
  }
});

/* ═══════ COLORS ═══════ */
function applyColors(c){
  c=c||gColors();
  const r=document.documentElement;
  r.style.setProperty('--black',c.black);
  r.style.setProperty('--deep',c.deep);
  r.style.setProperty('--panel',c.panel);
  r.style.setProperty('--border',c.border);
  r.style.setProperty('--gold',c.gold);
  r.style.setProperty('--gold-dim',c.goldDim);
  r.style.setProperty('--cream',c.cream);
  r.style.setProperty('--text',c.text);
  r.style.setProperty('--muted',c.muted);
}

function applyTheme(name){
  const t=THEMES[name];if(!t)return;
  SS('colors',t);applyColors(t);
  renderColorGrid();
}

function applyFont(name,btn){
  const fonts={
    classic:{display:"'Cormorant Garamond',serif",body:"'Montserrat',sans-serif",link:"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap"},
    modern:{display:"'Oswald',sans-serif",body:"'Open Sans',sans-serif",link:"https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&family=Open+Sans:wght@300;400;600&display=swap"},
    editorial:{display:"'Playfair Display',serif",body:"'Lato',sans-serif",link:"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap"}
  };
  const f=fonts[name];if(!f)return;
  document.documentElement.style.setProperty('--ff-display',f.display);
  document.documentElement.style.setProperty('--ff-body',f.body);
  document.getElementById('gfont').href=f.link;
  SS('font',name);
  document.querySelectorAll('.font-opt').forEach(b=>b.classList.remove('act'));
  if(btn)btn.classList.add('act');
}

function renderColorGrid(){
  const c=gColors();
  const defs=[
    {key:'black',label:'Основной фон'},{key:'deep',label:'Фон секций'},
    {key:'panel',label:'Фон карточек'},{key:'border',label:'Цвет границ'},
    {key:'gold',label:'Акцентный цвет'},{key:'goldDim',label:'Акцент (тёмный)'},
    {key:'cream',label:'Цвет заголовков'},{key:'text',label:'Основной текст'},
    {key:'muted',label:'Вспомогательный текст'}
  ];
  document.getElementById('color-grid').innerHTML=defs.map(d=>`
    <div class="color-item">
      <label class="alabel">${d.label}</label>
      <div class="color-preview" style="background:${c[d.key]}">
        <input type="color" class="cpicker" id="cp-${d.key}" value="${c[d.key]}" oninput="liveColor('${d.key}',this.value)">
        <span>${c[d.key]}</span>
      </div>
    </div>`).join('');
}

function liveColor(key,val){
  // Read current state from ALL pickers (not from storage) to avoid losing unsaved changes
  const keys=['black','deep','panel','border','gold','goldDim','cream','text','muted'];
  const c=gColors();
  keys.forEach(k=>{const el=document.getElementById('cp-'+k);if(el)c[k]=el.value;});
  c[key]=val; // override with the just-changed value
  SS('colors',c); // save immediately so re-renders use correct colors
  applyColors(c);
  const cp=document.getElementById('cp-'+key);
  if(cp)cp.parentElement.querySelector('span').textContent=val;
}

function saveDesign(){
  const keys=['black','deep','panel','border','gold','goldDim','cream','text','muted'];
  const c={};
  keys.forEach(k=>{const el=document.getElementById('cp-'+k);if(el)c[k]=el.value;});
  SS('colors',c);applyColors(c);showMsg('am-design');
}

/* ═══════ TEXTS ═══════ */
function applyTexts(){
  const t=gT();
  document.getElementById('site-title-tag').textContent=(t.logo||'JOYSTICK')+' — Premium Disposable';
  document.getElementById('nav-logo-text').textContent=t.logo||'Joystick';
  document.getElementById('hero-sub').textContent=t.sub||DEF_TXT.sub;
  const w=(t.logo||'Joystick');
  const mid=Math.floor(w.length/2);
  document.getElementById('hero-ttl').innerHTML=w.slice(0,mid)+'<em>'+w.slice(mid)+'</em>';
  document.getElementById('hero-dsc').textContent=t.desc||DEF_TXT.desc;
  document.getElementById('contact-dsc').textContent=t.cdesc||DEF_TXT.cdesc;
  document.getElementById('ftr-logo').textContent=t.flogo||DEF_TXT.flogo;
  document.getElementById('ftr-text').textContent=t.ftext||DEF_TXT.ftext;
}

/* ═══════ PERSONAL DATA ═══════ */
function updatePDCheckboxes(prefix){
  prefix=prefix||'';
  const pd=gPD();
  const l1=document.getElementById(prefix+'pd1-label');
  const l2=document.getElementById(prefix+'pd2-label');
  if(l1){
    l1.innerHTML=pd.t1||'Я согласен на обработку моих персональных данных';
    if(pd.url1){
      l1.innerHTML+=` <a href="javascript:void(0)" onclick="openPDUrl('pd1')" style="color:var(--gold);text-decoration:underline">${pd.lt1||'— ознакомиться'}</a>`;
    }
  }
  if(l2){
    l2.innerHTML=pd.t2||'Я согласен с политикой обработки персональных данных';
    if(pd.url2){
      l2.innerHTML+=` <a href="javascript:void(0)" onclick="openPDUrl('pd2')" style="color:var(--gold);text-decoration:underline">${pd.lt2||'— ознакомиться'}</a>`;
    }
  }
}

// Open personal data PDF (handles both data: base64 and https: URLs)
function openPDUrl(key){
  const pd=gPD();
  const url=pd['url'+(key==='pd1'?'1':'2')];
  if(url)openDocURL(url);
}

function handlePDF(input,key){
  const file=input.files[0];if(!file)return;
  if(file.size>4*1024*1024){alert('PDF слишком большой (максимум 4MB). Лучше используйте URL.');return;}
  const r=new FileReader();
  r.onload=e=>{
    const url=e.target.result;
    SS(key+'_pdf',url);
    document.getElementById(key+'-url').value='data:application/pdf (загружен файл)';
    const pd=gPD();pd['url'+(key==='pd1'?'1':'2')]=url;SS('pd_config',pd);
    showPDFPreview(key,file.name);
  };
  r.readAsDataURL(file);
}

function showPDFPreview(key,name){
  const el=document.getElementById(key+'-preview');
  if(el)el.innerHTML=`<div class="pdf-preview"><span style="font-size:18px">📄</span>
    <a href="javascript:void(0)" onclick="openPDF('${key}')">${name||'Открыть документ'}</a></div>`;
}

// Open a base64 PDF via Blob URL (browsers block data: URLs in new tabs)
function openPDF(key){
  const dataUrl=LS(key+'_pdf','');
  if(!dataUrl){alert('Файл не найден');return;}
  try{
    // Convert base64 data URL → binary → Blob → object URL
    const base64=dataUrl.split(',')[1];
    const binary=atob(base64);
    const bytes=new Uint8Array(binary.length);
    for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);
    const blob=new Blob([bytes],{type:'application/pdf'});
    const blobUrl=URL.createObjectURL(blob);
    window.open(blobUrl,'_blank');
    // Revoke after short delay to free memory
    setTimeout(()=>URL.revokeObjectURL(blobUrl),10000);
  }catch(e){
    console.warn('Blob open failed, trying direct:',e);
    window.open(dataUrl,'_blank');
  }
}

function savePD(){
  const pd={
    t1:v('pd1-text'),lt1:v('pd1-link-text'),url1:v('pd1-url'),
    t2:v('pd2-text'),lt2:v('pd2-link-text'),url2:v('pd2-url')
  };
  SS('pd_config',pd);updatePDCheckboxes();showMsg('am-pd');
}

/* ═══════ PRODUCTS RENDER ═══════ */
function renderProducts(){
  const prods=gP(),imgs=gI();
  document.getElementById('products-render').innerHTML=prods.map(p=>`
    <div class="product-block">
      <div class="product-header">
        <div>
          <div class="product-brand">${p.name}</div>
          <div class="product-brand-sub">${p.sub}</div>
          <div class="product-specs">${p.specs.map(s=>`<span class="spec-tag">${s}</span>`).join('')}</div>
        </div>
        <div class="product-price-block">
          <div class="price-label">Закупочная цена</div>
          <div class="price-wholesale">${p.pw.toLocaleString('ru')} <span>₽</span></div>
          <div class="price-retail">Розница: ${p.pr.toLocaleString('ru')} ₽</div>
        </div>
      </div>
      <div class="product-image-section">
        <div class="product-image-wrap" style="cursor:default">
          <img id="img-${p.id}" src="${imgs[p.id]||DEF_IMGS[p.id]||''}" alt="${p.name}" onerror="this.style.opacity=.3">
        </div>
        <div class="flavors-section">
          <div class="flavors-title">Вкусы линейки · ${p.flavors.length} позиций</div>
          <div class="flavors-grid">${p.flavors.map((f,i)=>{
            const hasDetail=!!(f.img||f.desc);
            return `<div class="flavor-item${hasDetail?' has-detail':''}" ${hasDetail?`onclick="showFlavor(${JSON.stringify(f).replace(/"/g,'&quot;')})"`:''}>
              <div class="flavor-num">${String(i+1).padStart(2,'0')}</div>
              <div class="flavor-en">${f.en}</div>
              <div class="flavor-ru">${f.ru}</div>
            </div>`;
          }).join('')}
          </div>
        </div>
      </div>
    </div>`).join('');
}

function showFlavor(f){
  const img=document.getElementById('fm-img');
  const desc=document.getElementById('fm-desc');
  document.getElementById('fm-en').textContent=f.en;
  document.getElementById('fm-ru').textContent=f.ru;
  if(f.img){img.src=f.img;img.style.display='block';}else{img.style.display='none';}
  desc.textContent=f.desc||'';
  desc.style.display=f.desc?'block':'none';
  document.getElementById('flavor-modal').classList.add('open');
}

/* ═══════ CALCULATOR ═══════ */
function renderCalc(){
  const prods=gP(),b=document.getElementById('calc-body');
  b.innerHTML='';
  prods.forEach(p=>{
    const cr=document.createElement('tr');cr.className='cat-row';
    cr.innerHTML=`<td colspan="5">${p.name} — ${p.pw.toLocaleString('ru')} ₽ / шт</td>`;
    b.appendChild(cr);
    p.flavors.forEach((f,i)=>{
      const uid=`${p.id}_${i}`;
      const st=getStock(p.id,i);
      const stockHtml=stockBadgeHtml(st);
      const isOut=st!==null&&st===0;
      const tr=document.createElement('tr');
      tr.innerHTML=`
        <td><div class="td-en">${f.en}</div><div class="td-ru">${f.ru}</div></td>
        <td><div class="td-price">${p.pw.toLocaleString('ru')} <span class="td-sm">₽</span></div></td>
        <td class="stock-cell">${stockHtml}</td>
        <td><input class="qty" type="number" min="0" step="1" id="q-${uid}" value="0"
          ${isOut?'placeholder="0" title="Нет в наличии"':''}
          oninput="updCalc()" onchange="updCalc()"></td>
        <td><div class="td-total" id="t-${uid}">—</div><div class="preorder-note" id="po-note-${uid}" style="display:none">предзаказ</div></td>`;
      b.appendChild(tr);
    });
  });
}

function stockBadgeHtml(st){
  if(st===null)return `<span class="stock-badge stock-unlim">∞ без лимита</span>`;
  if(st===0)return `<span class="stock-badge stock-out">✕ нет в наличии</span>`;
  if(st<=5)return `<span class="stock-badge stock-low">⚡ ${st} шт</span>`;
  return `<span class="stock-badge stock-ok">✓ ${st} шт</span>`;
}

function updCalc(){
  const prods=gP();let s=0,u=0,it=0;let hasPreorder=false;
  prods.forEach(p=>p.flavors.forEach((f,i)=>{
    const uid=`${p.id}_${i}`;
    const qty=parseInt(document.getElementById('q-'+uid)?.value)||0;
    const st=getStock(p.id,i);
    const line=qty*p.pw;
    const el=document.getElementById('t-'+uid);
    const note=document.getElementById('po-note-'+uid);
    const inp=document.getElementById('q-'+uid);
    if(el)el.textContent=qty>0?line.toLocaleString('ru')+' ₽':'—';
    if(inp){inp.classList.remove('qty-over','qty-preorder');}
    if(note)note.style.display='none';
    if(qty>0){
      it++;u+=qty;s+=line;
      if(st!==null){
        const preorderQty=Math.max(0,qty-st);
        if(preorderQty>0){
          hasPreorder=true;
          if(inp)inp.classList.add('qty-preorder');
          if(note){
            note.style.display='block';
            note.textContent=st===0?'всё — предзаказ':`${preorderQty} шт — предзаказ`;
          }
        }
      }
    }
  }));
  document.getElementById('s-items').textContent=it;
  document.getElementById('s-units').textContent=u;
  document.getElementById('s-total').textContent=s>0?s.toLocaleString('ru')+' ₽':'0 ₽';
  // show/hide global preorder notice
  let notice=document.getElementById('stock-global-notice');
  if(!notice){
    notice=document.createElement('div');notice.id='stock-global-notice';
    notice.style.cssText='padding:10px 24px 4px;font-size:10px;color:#9b59b6;letter-spacing:1px;display:none';
    notice.textContent='🕐 Позиции с фиолетовой пометкой будут оформлены как предзаказ — мы свяжемся с вами для согласования сроков.';
    const wrap=document.getElementById('calc-body')?.parentElement?.parentElement;
    if(wrap)wrap.appendChild(notice);
  }
  if(notice)notice.style.display=hasPreorder?'block':'none';
}
function clearAll(){document.querySelectorAll('.qty').forEach(e=>e.value=0);updCalc();}

/* ═══════ CONTACTS ═══════ */
function renderContacts(){
  const c=gC(),el=document.getElementById('contact-links');el.innerHTML='';
  if(c.tg){const h=c.tg.startsWith('http')?c.tg:`https://t.me/${c.tg.replace('@','')}`;
    el.innerHTML+=`<a class="cbtn primary" href="${h}" target="_blank">✈ Telegram</a>`;}
  if(c.wa){const h=c.wa.startsWith('http')?c.wa:`https://wa.me/${c.wa.replace(/\D/g,'')}`;
    el.innerHTML+=`<a class="cbtn" href="${h}" target="_blank">📱 WhatsApp</a>`;}
  if(c.ph)el.innerHTML+=`<a class="cbtn" href="tel:${c.ph.replace(/\s/g,'')}">${c.ph}</a>`;
  if(c.em)el.innerHTML+=`<a class="cbtn" href="mailto:${c.em}">${c.em}</a>`;
  if(!c.tg&&!c.wa&&!c.ph&&!c.em)
    el.innerHTML='<p style="font-size:11px;color:var(--muted);letter-spacing:2px">Добавьте контакты в панели администратора</p>';
}

/* ═══════ STOCK ═══════ */
function gStock(){return LS('stock',{});}
function getStock(prodId,flIdx){
  const s=gStock();
  const key=`${prodId}_${flIdx}`;
  const val=s[key];
  return val===undefined||val===null||val===''?null:parseInt(val);
}
function setStock(prodId,flIdx,qty){
  const s=gStock();
  const key=`${prodId}_${flIdx}`;
  if(qty===null||qty===''||isNaN(qty)){delete s[key];}
  else{s[key]=Math.max(0,parseInt(qty));}
  SS('stock',s);
}

function renderStockAdmin(){
  const prods=gP(),el=document.getElementById('stock-admin-list');
  if(!el)return;
  el.innerHTML=prods.map((p,pi)=>`
    <div class="stock-group-title">${p.name}</div>
    ${p.flavors.map((f,fi)=>{
      const st=getStock(p.id,fi);
      return `<div class="stock-admin-row">
        <div class="stock-name">${f.en}<small>${f.ru}</small></div>
        <input class="stock-inp" type="number" min="0" step="1"
          id="si-${p.id}-${fi}"
          value="${st===null?'':st}"
          placeholder="∞ без лимита">
        <button class="stock-unlim-btn" onclick="clearStockField('${p.id}',${fi})">∞</button>
      </div>`;
    }).join('')}`).join('');
}

function clearStockField(prodId,fi){
  const inp=document.getElementById(`si-${prodId}-${fi}`);
  if(inp)inp.value='';
}

function saveStock(){
  const prods=gP();
  prods.forEach(p=>{
    p.flavors.forEach((f,fi)=>{
      const inp=document.getElementById(`si-${p.id}-${fi}`);
      if(inp){
        const val=inp.value.trim();
        setStock(p.id,fi,val===''?null:parseInt(val));
      }
    });
  });
  renderCalc();updCalc();
  showMsg('am-stock');
}

function resetAllStock(){
  if(!confirm('Сбросить все остатки? Весь склад станет неограниченным.'))return;
  SS('stock',{});renderStockAdmin();renderCalc();updCalc();showMsg('am-stock');
}

/* ═══════ VALIDATION ═══════ */
function validateFIO(val){
  const words=val.trim().split(/\s+/).filter(Boolean);
  if(words.length<2||words.length>3)return false;
  return words.every(w=>/^[а-яёА-ЯЁa-zA-Z-]{2,}$/.test(w));
}
function validatePhone(val){
  const clean=val.replace(/[\s\-\(\)]/g,'');
  return /^\+7\d{10}$/.test(clean);
}
function validateEmail(val){
  if(!val)return true; // optional
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

/* ═══════ ORDER MODAL ═══════ */
function openOrderModal(){
  const prods=gP();const items=[];let total=0;
  prods.forEach(p=>p.flavors.forEach((f,i)=>{
    const qty=parseInt(document.getElementById(`q-${p.id}_${i}`)?.value)||0;
    if(qty>0){
      const st=getStock(p.id,i);
      const inStockQty=st===null?qty:Math.min(qty,st);
      const preQty=st===null?0:Math.max(0,qty-st);
      const line=qty*p.pw;total+=line;
      items.push({name:`${f.en} / ${f.ru}`,qty,pw:p.pw,line,inStockQty,preQty,prodId:p.id,flIdx:i});
    }
  }));
  if(!items.length){alert('Добавьте товары в заказ');return;}

  const hasPreorder=items.some(it=>it.preQty>0);

  if(hasPreorder){
    // open pre-order modal
    openPreOrderModal(items,total);
  } else {
    // regular order modal
    document.getElementById('mlist').innerHTML=items.map(it=>`<li><span>${it.name} × ${it.qty}</span><span>${it.line.toLocaleString('ru')} ₽</span></li>`).join('');
    document.getElementById('mtotal').textContent=total.toLocaleString('ru')+' ₽';
    ['f-fio','f-phone','f-email','f-comment'].forEach(id=>document.getElementById(id).value='');
    document.querySelectorAll('.ferr').forEach(e=>e.style.display='none');
    document.querySelectorAll('.finput').forEach(e=>e.classList.remove('error'));
    document.getElementById('pd1').checked=false;document.getElementById('pd2').checked=false;
    document.getElementById('ostep1').style.display='block';
    document.getElementById('ostep2').style.display='none';
    document.getElementById('order-modal').classList.add('open');
  }
}

function submitOrder(){
  const fio=v('f-fio'),phone=v('f-phone'),email=v('f-email'),comment=v('f-comment');
  let ok=true;
  if(!validateFIO(fio)){setErr('f-fio','e-fio',true);ok=false;}else setErr('f-fio','e-fio',false);
  if(!validatePhone(phone)){setErr('f-phone','e-phone',true);ok=false;}else setErr('f-phone','e-phone',false);
  if(email&&!validateEmail(email)){setErr('f-email','e-email',true);ok=false;}else setErr('f-email','e-email',false);
  const pd1=document.getElementById('pd1')?.checked;
  const pd2=document.getElementById('pd2')?.checked;
  const epd=document.getElementById('e-pd');
  if(!pd1||!pd2){if(epd)epd.style.display='block';ok=false;}else{if(epd)epd.style.display='none';}
  if(!ok)return;

  const prods=gP();const items=[];let total=0;
  prods.forEach(p=>p.flavors.forEach((f,i)=>{
    const qty=parseInt(document.getElementById(`q-${p.id}_${i}`)?.value)||0;
    if(qty>0){const line=qty*p.pw;total+=line;items.push({name:f.en+' / '+f.ru,qty,line,pw:p.pw,prodName:p.name,prodId:p.id,flIdx:i});}
  }));

  finalizeOrder({fio,phone,email,comment},items,total,'order');
}

/* ─── Pre-order modal ─── */
let _poItems=[];
function openPreOrderModal(items,total){
  _poItems=items;
  const instockItems=items.filter(it=>it.inStockQty>0);
  const preItems=items.filter(it=>it.preQty>0);

  const instockWrap=document.getElementById('po-instock-wrap');
  const preWrap=document.getElementById('po-preorder-wrap');

  if(instockItems.length){
    instockWrap.style.display='block';
    document.getElementById('po-instock-list').innerHTML=instockItems.map(it=>`
      <li><span>${it.name} × ${it.inStockQty}</span><span>${(it.inStockQty*it.pw).toLocaleString('ru')} ₽</span></li>`).join('');
  } else instockWrap.style.display='none';

  if(preItems.length){
    preWrap.style.display='block';
    document.getElementById('po-preorder-list').innerHTML=preItems.map(it=>`
      <li><span>${it.name} × ${it.preQty} <span class="preorder-badge">предзаказ</span></span><span>${(it.preQty*it.pw).toLocaleString('ru')} ₽</span></li>`).join('');
  } else preWrap.style.display='none';

  document.getElementById('po-total').textContent=total.toLocaleString('ru')+' ₽';
  document.getElementById('po-sub').textContent=
    instockItems.length&&preItems.length?'Часть товара оформляется как предзаказ':
    preItems.length?'Весь заказ оформляется как предзаказ — свяжемся для согласования':'';

  ['po-fio','po-phone','po-email','po-comment'].forEach(id=>document.getElementById(id).value='');
  document.querySelectorAll('#preorder-modal .ferr').forEach(e=>e.style.display='none');
  document.getElementById('po-pd1').checked=false;document.getElementById('po-pd2').checked=false;
  document.getElementById('po-success').style.display='none';
  document.querySelector('#preorder-modal .mtitle').style.display='block';
  document.querySelectorAll('#preorder-modal > .mbox > :not(#po-success)').forEach(el=>{
    if(el.id!=='po-success')el.style.display='';
  });
  // sync pd labels
  updatePDCheckboxes('po-');
  document.getElementById('preorder-modal').classList.add('open');
}

function submitPreOrder(){
  const fio=v('po-fio'),phone=v('po-phone'),email=v('po-email'),comment=v('po-comment');
  let ok=true;
  if(!validateFIO(fio)){setErr('po-fio','poe-fio',true);ok=false;}else setErr('po-fio','poe-fio',false);
  if(!validatePhone(phone)){setErr('po-phone','poe-phone',true);ok=false;}else setErr('po-phone','poe-phone',false);
  if(email&&!validateEmail(email)){setErr('po-email','poe-email',true);ok=false;}else setErr('po-email','poe-email',false);
  const pd1=document.getElementById('po-pd1')?.checked;
  const pd2=document.getElementById('po-pd2')?.checked;
  const epd=document.getElementById('poe-pd');
  if(!pd1||!pd2){if(epd)epd.style.display='block';ok=false;}else{if(epd)epd.style.display='none';}
  if(!ok)return;

  const items=_poItems.map(it=>({name:it.name,qty:it.qty,line:it.line,pw:it.pw,
    inStockQty:it.inStockQty,preQty:it.preQty,prodId:it.prodId,flIdx:it.flIdx}));
  const total=items.reduce((s,it)=>s+it.line,0);
  const hasPreorder=items.some(it=>it.preQty>0);

  finalizeOrder({fio,phone,email,comment},items,total,hasPreorder?'preorder':'order');

  // hide form, show success
  document.querySelectorAll('#preorder-modal .mbox > *:not(#po-success)').forEach(el=>el.style.display='none');
  const suc=document.getElementById('po-success');
  suc.style.display='block';
  const subEl=document.getElementById('po-success-sub');
  if(subEl)subEl.textContent=hasPreorder?
    'Мы свяжемся с вами по предзаказу в ближайшее время':'Ваш заказ принят!';
}

function finalizeOrder(customer,items,total,type){
  const order={
    id:(type==='preorder'?'PRE-':'ORD-')+Date.now(),
    date:new Date().toLocaleString('ru'),
    status:'new',type,
    customer,items,total,history:[]
  };
  const orders=gO();orders.unshift(order);SS('orders',orders);updateBadge();

  // Decrement stock for in-stock items only
  items.forEach(it=>{
    const st=getStock(it.prodId,it.flIdx);
    if(st!==null){
      const toDeduct=it.inStockQty!==undefined?it.inStockQty:it.qty;
      setStock(it.prodId,it.flIdx,Math.max(0,st-toDeduct));
    }
  });
  renderCalc();updCalc(); // refresh badges

  const c=gC();
  const prefix=type==='preorder'?'🕐 ПРЕДЗАКАЗ':'📦 ЗАКАЗ';
  let msg=`${prefix} ${order.id}\n👤 ${customer.fio}\n📞 ${customer.phone}${customer.email?'\n✉ '+customer.email:''}\n\n`;
  items.forEach(it=>{
    const mark=it.preQty>0&&it.inStockQty===0?'[ПРЕДЗАКАЗ] ':it.preQty>0?`[${it.inStockQty} в наличии + ${it.preQty} предзаказ] `:'';
    msg+=`• ${mark}${it.name} ×${it.qty} = ${it.line.toLocaleString('ru')} ₽\n`;
  });
  msg+=`\nИТОГО: ${total.toLocaleString('ru')} ₽`;
  if(customer.comment)msg+=`\n💬 ${customer.comment}`;
  if(c.tg){const h=c.tg.startsWith('http')?c.tg:`https://t.me/${c.tg.replace('@','')}`;window.open(h,'_blank');}
  else if(c.wa){window.open(`https://wa.me/${c.wa.replace(/\D/g,'')}?text=${encodeURIComponent(msg)}`,'_blank');}

  if(type==='order'){
    document.getElementById('ostep1').style.display='none';
    document.getElementById('ostep2').style.display='block';
    clearAll();
  } else {
    clearAll();
  }
}

function setErr(inputId,errId,show){
  const inp=document.getElementById(inputId);
  const err=document.getElementById(errId);
  if(inp)inp.classList.toggle('error',show);
  if(err)err.style.display=show?'block':'none';
}

/* ═══════ ADMIN LOGIN ═══════ */
function openAdminLogin(){
  // Open admin in a new tab via ?admin param
  const url=location.href.split('?')[0].split('#')[0]+'?admin=1';
  window.open(url,'_blank');
}

function _showLoginModal(){
  document.getElementById('admin-login').classList.add('open');
  document.getElementById('lerr').style.display='none';
  document.getElementById('l-user').value='';
  document.getElementById('l-pwd').value='';
  setTimeout(()=>document.getElementById('l-user').focus(),200);
}

function doLogin(){
  const user=document.getElementById('l-user').value.trim();
  const pwd=document.getElementById('l-pwd').value;
  if(user===gLogin()&&pwd===gPwd()){
    closeModal('admin-login');openAdmin();
  }else{document.getElementById('lerr').style.display='block';}
}

/* ═══════ ADMIN ═══════ */
function openAdmin(){
  EP=null;
  // Show Firebase connection status
  const fbStatus=document.getElementById('fb-status');
  if(fbStatus){
    fbStatus.textContent=_fbOk?'🟢 Firebase: онлайн':'🔴 Только localStorage';
    fbStatus.style.color=_fbOk?'#27ae60':'#f39c12';
  }
  try{fillAdminForms();}catch(e){console.warn('fillAdminForms',e);}
  try{renderOrdersAdmin();}catch(e){console.warn('renderOrdersAdmin',e);}
  try{renderPED_tab();}catch(e){console.warn('renderPED_tab',e);}
  try{renderPhotosEd();}catch(e){console.warn('renderPhotosEd',e);}
  try{renderColorGrid();}catch(e){console.warn('renderColorGrid',e);}
  try{renderDocsAdmin();}catch(e){console.warn('renderDocsAdmin',e);}
  try{renderStockAdmin();}catch(e){console.warn('renderStockAdmin',e);}
  document.getElementById('admin-panel').classList.add('open');
}
function closeAdmin(){document.getElementById('admin-panel').classList.remove('open');}
function showTab(id,btn){
  document.querySelectorAll('.atab').forEach(t=>t.classList.remove('act'));
  document.querySelectorAll('.anav').forEach(b=>b.classList.remove('act'));
  document.getElementById(id).classList.add('act');btn.classList.add('act');
  if(id==='t-orders')renderOrdersAdmin();
}

function fillAdminForms(){
  const t=gT(),c=gC(),pd=gPD();
  setValue('tx-logo',t.logo||DEF_TXT.logo);setValue('tx-sub',t.sub||DEF_TXT.sub);
  setValue('tx-desc',t.desc||DEF_TXT.desc);setValue('tx-cdesc',t.cdesc||DEF_TXT.cdesc);
  setValue('tx-flogo',t.flogo||DEF_TXT.flogo);setValue('tx-ftext',t.ftext||DEF_TXT.ftext);
  setValue('cx-tg',c.tg||'');setValue('cx-wa',c.wa||'');setValue('cx-ph',c.ph||'');setValue('cx-em',c.em||'');
  setValue('pd1-text',pd.t1||'');setValue('pd1-link-text',pd.lt1||'');
  setValue('pd2-text',pd.t2||'');setValue('pd2-link-text',pd.lt2||'');
  setValue('sp-login',gLogin());
  // show PDF previews if loaded
  const pdf1=LS('pd1_pdf','');const pdf2=LS('pd2_pdf','');
  if(pdf1){document.getElementById('pd1-preview').innerHTML=`<div class="pdf-preview"><span style="font-size:18px">📄</span><a href="javascript:void(0)" onclick="openPDF('pd1')">Открыть документ 1</a></div>`;}
  if(pdf2){document.getElementById('pd2-preview').innerHTML=`<div class="pdf-preview"><span style="font-size:18px">📄</span><a href="javascript:void(0)" onclick="openPDF('pd2')">Открыть документ 2</a></div>`;}
  // font
  const fn=LS('font','classic');
  document.querySelectorAll('.font-opt').forEach(b=>b.classList.remove('act'));
  const fo=document.querySelectorAll('.font-opt');
  const fmap={classic:0,modern:1,editorial:2};
  if(fo[fmap[fn]])fo[fmap[fn]].classList.add('act');
}

/* ═══════ ORDERS ADMIN ═══════ */
let oFilter='all';
let editingOrderId=null;

function filterOrders(f,btn){oFilter=f;document.querySelectorAll('.ofbtn').forEach(b=>b.classList.remove('act'));btn.classList.add('act');renderOrdersAdmin();}

function renderOrdersAdmin(){
  const orders=gO();
  const list=oFilter==='all'?orders:orders.filter(o=>o.status===oFilter);
  const el=document.getElementById('orders-list');
  if(!list.length){el.innerHTML='<div class="oempty">Заказов пока нет</div>';return;}
  el.innerHTML=list.map(o=>`
    <div class="ocard">
      <div class="ocard-top">
        <div><div class="onum">${o.id}</div><div class="odate">${o.date}</div></div>
        <div style="display:flex;gap:8px;align-items:center">
          ${o.type==='preorder'?`<span class="preorder-badge">предзаказ</span>`:''}
          <div class="ostatus ${o.status}">${o.status==='done'?'Выполнен':'Новый'}</div>
        </div>
      </div>
      <div class="ocustomer"><strong>${o.customer.fio}</strong> · ${o.customer.phone}${o.customer.email?' · '+o.customer.email:''}</div>
      ${o.customer.comment?`<div class="ocomment">💬 ${o.customer.comment}</div>`:''}
      <div class="oitems">${o.items.map(it=>`${it.name} ×${it.qty}`).join(' | ')}</div>
      <div class="ototrow"><span class="ototlbl">Итого</span><span class="ototval">${o.total.toLocaleString('ru')} ₽</span></div>
      <div class="oacts">
        ${o.status!=='done'?`<button class="oact done" onclick="orderDone('${o.id}')">✓ Выполнен</button>`:''}
        <button class="oact edit" onclick="openEditOrder('${o.id}')">✎ Редактировать</button>
        <button class="oact del" onclick="orderDel('${o.id}')">✕ Удалить</button>
        ${(o.history&&o.history.length)?`<button class="oact" onclick="toggleHistory('hist-${o.id}',this)">История (${o.history.length})</button>`:''}
      </div>
      <div class="ohistory" id="hist-${o.id}">
        ${(o.history||[]).map((h,i)=>`<div class="ohist-entry">
          <strong>Версия ${i+1} — ${h.savedAt||'—'}</strong><br>
          ФИО: ${h.customer.fio} · Телефон: ${h.customer.phone}${h.customer.email?' · '+h.customer.email:''}<br>
          ${h.customer.comment?'Комментарий: '+h.customer.comment+'<br>':''}
          Позиции: ${h.items.map(it=>`${it.name} ×${it.qty}`).join(', ')}<br>
          Итого: ${h.total.toLocaleString('ru')} ₽
        </div>`).join('')}
      </div>
    </div>`).join('');
}

function toggleHistory(id,btn){
  const el=document.getElementById(id);if(!el)return;
  el.classList.toggle('open');if(btn)btn.textContent=el.classList.contains('open')?'Скрыть историю':'История';
}

function orderDone(id){const o=gO();const f=o.find(x=>x.id===id);if(f){f.status='done';SS('orders',o);renderOrdersAdmin();updateBadge();}}
function orderDel(id){if(!confirm('Удалить заказ?'))return;SS('orders',gO().filter(x=>x.id!==id));renderOrdersAdmin();updateBadge();}
function updateBadge(){const n=gO().filter(o=>o.status==='new').length;const b=document.getElementById('nbadge');if(b){b.textContent=n;b.style.display=n?'inline':'none';}}

/* ═══════ EDIT ORDER ═══════ */
function openEditOrder(id){
  editingOrderId=id;
  const orders=gO();const o=orders.find(x=>x.id===id);if(!o)return;
  document.getElementById('edit-order-id-label').textContent=o.id+' · '+o.date;
  setValue('edit-fio',o.customer.fio);setValue('edit-phone',o.customer.phone);
  setValue('edit-email',o.customer.email||'');setValue('edit-comment',o.customer.comment||'');
  // items with qty inputs and price stored on item
  document.getElementById('edit-order-items').innerHTML=o.items.map((it,i)=>`
    <div class="edit-item-row">
      <span>${it.name}</span>
      <input class="edit-item-qty" type="number" min="0" id="eiq-${i}" value="${it.qty}" oninput="updateEditTotal()">
      <span style="font-size:10px;color:var(--muted);white-space:nowrap">${(it.pw||0).toLocaleString('ru')} ₽/шт</span>
    </div>`).join('');
  // history
  const hist=(o.history||[]);
  document.getElementById('edit-history-list').innerHTML=hist.length?
    hist.map((h,i)=>`<div class="ohist-entry">
      <strong>Версия ${i+1} — ${h.savedAt||'—'}</strong><br>
      ${h.customer.fio} · ${h.customer.phone} · Итого: ${(h.total||0).toLocaleString('ru')} ₽
    </div>`).join('')
    :'<div style="font-size:10px;color:var(--muted);padding:8px">История изменений пуста</div>';
  document.getElementById('edit-history-list').style.display='none';
  document.getElementById('hist-toggle-icon').textContent='▼';
  updateEditTotal();
  document.getElementById('edit-order-modal').classList.add('open');
}

function toggleHistoryInEdit(){
  const el=document.getElementById('edit-history-list');
  const ic=document.getElementById('hist-toggle-icon');
  el.style.display=el.style.display==='none'?'block':'none';
  if(ic)ic.textContent=el.style.display==='none'?'▼':'▲';
}

function updateEditTotal(){
  const orders=gO();const o=orders.find(x=>x.id===editingOrderId);if(!o)return;
  let total=0;
  o.items.forEach((it,i)=>{
    const qty=parseInt(document.getElementById('eiq-'+i)?.value)||0;
    total+=qty*(it.pw||it.line/Math.max(it.qty,1)||0);
  });
  document.getElementById('edit-order-total').textContent=total.toLocaleString('ru')+' ₽';
}

function saveEditedOrder(){
  const orders=gO();const o=orders.find(x=>x.id===editingOrderId);if(!o)return;

  // Сохраняем снимок в историю ДО изменений
  if(!o.history)o.history=[];
  o.history.push({
    savedAt:new Date().toLocaleString('ru'),
    customer:{...o.customer},
    items:JSON.parse(JSON.stringify(o.items)),
    total:o.total
  });

  // Обновляем данные покупателя
  o.customer.fio=v('edit-fio')||o.customer.fio;
  o.customer.phone=v('edit-phone')||o.customer.phone;
  o.customer.email=v('edit-email')||'';
  o.customer.comment=v('edit-comment')||'';

  // Обновляем позиции И синхронизируем склад
  let newTotal=0;
  o.items.forEach((it,i)=>{
    const newQty=parseInt(document.getElementById('eiq-'+i)?.value)||0;
    const oldQty=it.qty||0;
    const unitPrice=it.pw||Math.round((it.line||0)/Math.max(oldQty,1));

    // Корректируем склад: возвращаем старое кол-во, списываем новое
    if(it.prodId!==undefined&&it.flIdx!==undefined){
      const st=getStock(it.prodId,it.flIdx);
      if(st!==null){
        // diff > 0 → заказ уменьшился → возвращаем на склад
        // diff < 0 → заказ увеличился → списываем со склада
        const diff=oldQty-newQty;
        setStock(it.prodId,it.flIdx,Math.max(0,st+diff));
      }
    }

    it.qty=newQty;
    it.pw=unitPrice;
    it.line=newQty*unitPrice;
    newTotal+=it.line;
  });

  o.items=o.items.filter(it=>it.qty>0);
  o.total=newTotal;

  SS('orders',orders);
  renderOrdersAdmin();

  // Обновляем таблицу калькулятора на сайте (бейджи остатков)
  renderCalc();
  updCalc();

  closeModal('edit-order-modal');
}

/* ═══════ PRODUCTS EDITOR ═══════ */
let EP=null;
function rEP(){if(!EP)EP=JSON.parse(JSON.stringify(gP()));return EP;}

function renderPED_tab(){
  const prods=rEP();
  document.getElementById('ped').innerHTML=prods.map((p,pi)=>`
    <div class="pecard">
      <div class="pecard-hdr" onclick="togPE(${pi})">
        <div class="pecard-name">${p.name||'Новая линейка'}</div>
        <button class="pecard-del" onclick="event.stopPropagation();delBlock(${pi})">✕ Удалить</button>
        <span id="pei-${pi}" style="color:var(--gold-dim);margin-left:8px">▼</span>
      </div>
      <div class="pecard-body" id="peb-${pi}">
        <div class="arow">
          <div><label class="alabel">Название</label><input class="ainput" id="pn-${pi}" value="${p.name}" oninput="rEP()[${pi}].name=this.value"></div>
          <div><label class="alabel">Подзаголовок</label><input class="ainput" id="ps-${pi}" value="${p.sub}" oninput="rEP()[${pi}].sub=this.value"></div>
        </div>
        <div class="arow">
          <div><label class="alabel">Цена закупки (₽)</label><input class="ainput" type="number" id="ppw-${pi}" value="${p.pw}" oninput="rEP()[${pi}].pw=+this.value"></div>
          <div><label class="alabel">Цена розница (₽)</label><input class="ainput" type="number" id="ppr-${pi}" value="${p.pr}" oninput="rEP()[${pi}].pr=+this.value"></div>
        </div>
        <div style="margin-bottom:14px"><label class="alabel">Характеристики (через запятую)</label>
          <input class="ainput" id="psp-${pi}" value="${p.specs.join(', ')}" oninput="rEP()[${pi}].specs=this.value.split(',').map(s=>s.trim()).filter(Boolean)"></div>
        <div class="ablk-title" style="margin-bottom:8px">Вкусы — нажмите ▸ для добавления фото/описания</div>
        <div class="fleditor-hdr"><span>Название EN</span><span>Название RU</span><span></span><span></span></div>
        <div id="fle-${pi}">
          ${p.flavors.map((f,fi)=>flavorRow(pi,fi,f)).join('')}
        </div>
        <button class="fladd" onclick="addFl(${pi})">+ Добавить вкус</button>
      </div>
    </div>`).join('');
}

function flavorRow(pi,fi,f){
  return `<div class="flrow" id="fr-${pi}-${fi}">
    <div class="flrow-main">
      <input value="${f.en}" placeholder="English" oninput="rEP()[${pi}].flavors[${fi}].en=this.value">
      <input value="${f.ru}" placeholder="Русское" oninput="rEP()[${pi}].flavors[${fi}].ru=this.value">
      <button class="flexp" onclick="togFlDetail(${pi},${fi})" title="Фото и описание">▸</button>
      <button class="fldel" onclick="delFl(${pi},${fi})">✕</button>
    </div>
    <div class="flrow-detail" id="fld-${pi}-${fi}">
      <div style="margin-bottom:8px"><label class="alabel">URL изображения вкуса</label>
        <input value="${f.img||''}" placeholder="https://..." oninput="rEP()[${pi}].flavors[${fi}].img=this.value">
      </div>
      <div><label class="alabel">Описание вкуса</label>
        <textarea placeholder="Описание, состав, особенности..." oninput="rEP()[${pi}].flavors[${fi}].desc=this.value">${f.desc||''}</textarea>
      </div>
    </div>
  </div>`;
}

function togFlDetail(pi,fi){
  const el=document.getElementById(`fld-${pi}-${fi}`);
  if(el)el.classList.toggle('open');
}

function togPE(pi){
  const b=document.getElementById('peb-'+pi),ic=document.getElementById('pei-'+pi);
  b.classList.toggle('open');if(ic)ic.textContent=b.classList.contains('open')?'▲':'▼';
}

function delFl(pi,fi){rEP()[pi].flavors.splice(fi,1);renderPED_tab();togPE(pi);}
function addFl(pi){rEP()[pi].flavors.push({en:'New Flavor',ru:'Новый Вкус',img:'',desc:''});renderPED_tab();togPE(pi);}
function delBlock(pi){if(!confirm('Удалить линейку «'+rEP()[pi].name+'»?'))return;rEP().splice(pi,1);renderPED_tab();}
function addNewBlock(){
  const newId='prod-'+Date.now();
  rEP().push({id:newId,name:'Новая линейка',sub:'Описание',pw:0,pr:0,specs:[],flavors:[]});
  renderPED_tab();
  const pi=rEP().length-1;
  setTimeout(()=>togPE(pi),50);
}

function saveProducts(){
  SS('products',rEP());EP=null;renderProducts();renderCalc();updCalc();showMsg('am-products');
}

/* ═══════ PHOTOS EDITOR ═══════ */
function renderPhotosEd(){
  const prods=gP(),imgs=gI();
  document.getElementById('photoed').innerHTML=prods.map(p=>`
    <div class="photoitem">
      <span class="ptitle">${p.name}</span>
      <img id="ap-${p.id}" src="${imgs[p.id]||DEF_IMGS[p.id]||''}" onerror="this.style.opacity=.3" alt="">
      <label class="alabel" style="margin-top:6px">URL изображения</label>
      <input class="ainput" id="au-${p.id}" value="${imgs[p.id]||''}" placeholder="https://..." oninput="prvPhoto('${p.id}',this.value)">
      <label class="file-lbl" for="af-${p.id}">⬆ Загрузить файл</label>
      <input type="file" id="af-${p.id}" accept="image/*" style="display:none" onchange="upPhoto(this,'${p.id}')">
    </div>`).join('');
}

function prvPhoto(id,url){const el=document.getElementById('ap-'+id);if(el){el.src=url;el.style.opacity=1;}}

// Compress image via canvas before saving — keeps it under Firestore 1MB limit
function compressImage(file, maxW, maxH, quality, callback){
  const img=new Image();
  const reader=new FileReader();
  reader.onload=e=>{
    img.onload=()=>{
      let w=img.width, h=img.height;
      if(w>maxW){h=Math.round(h*maxW/w);w=maxW;}
      if(h>maxH){w=Math.round(w*maxH/h);h=maxH;}
      const canvas=document.createElement('canvas');
      canvas.width=w; canvas.height=h;
      canvas.getContext('2d').drawImage(img,0,0,w,h);
      callback(canvas.toDataURL('image/jpeg',quality));
    };
    img.src=e.target.result;
  };
  reader.readAsDataURL(file);
}

function upPhoto(inp,id){
  const f=inp.files[0];if(!f)return;
  // Show loading state
  const prev=document.getElementById('ap-'+id);
  if(prev)prev.style.opacity=.4;
  const inp_field=document.getElementById('au-'+id);
  if(inp_field)inp_field.value='⏳ Сжимаю изображение...';
  // Compress: max 900px wide, 900px tall, JPEG 0.82 quality → typically 60–150KB
  compressImage(f, 900, 900, 0.82, (dataUrl)=>{
    setValue('au-'+id, dataUrl);
    prvPhoto(id, dataUrl);
    if(inp_field)inp_field.value='✓ Файл загружен (сохраните для применения)';
  });
}
function jumpToPhoto(id){
  openAdminLogin();
  setTimeout(()=>{
    showTab('t-photos',document.querySelectorAll('.anav')[2]);
    setTimeout(()=>{const el=document.getElementById('au-'+id);if(el){el.focus();el.scrollIntoView({behavior:'smooth',block:'center'});}},200);
  },100);
}

function savePhotos(){
  const prods=gP(),imgs=gI();
  prods.forEach(p=>{
    const raw=v('au-'+p.id);
    // Skip placeholder text written during compression
    if(raw===null||raw.startsWith('⏳')||raw.startsWith('✓ Файл'))return;
    imgs[p.id]=raw;
    const m=document.getElementById('img-'+p.id);
    if(m&&raw)m.src=raw;
  });
  SS('images',imgs);showMsg('am-photos');
}

/* ═══════ DOCUMENTS ═══════ */
function gDocs(){return LS('site_docs',[]);}

let _docFileData=null;
function handleDocFile(inp){
  const f=inp.files[0];if(!f)return;
  if(f.size>8*1024*1024){alert('Файл слишком большой (максимум 8MB). Используйте URL.');return;}
  const r=new FileReader();
  r.onload=e=>{
    _docFileData=e.target.result;
    document.getElementById('doc-file-name').textContent='✓ '+f.name;
  };
  r.readAsDataURL(f);
}

function addDoc(){
  const name=v('doc-name');
  if(!name){alert('Введите название документа');return;}
  const desc=v('doc-desc');
  const urlField=v('doc-url');
  const url=_docFileData||urlField;
  if(!url){alert('Загрузите PDF файл или укажите URL');return;}
  const docs=gDocs();
  docs.push({id:'doc-'+Date.now(),name,desc,url});
  SS('site_docs',docs);
  _docFileData=null;
  setValue('doc-name','');setValue('doc-desc','');setValue('doc-url','');
  document.getElementById('doc-file-name').textContent='';
  document.getElementById('doc-file-input').value='';
  renderDocsAdmin();renderDocsPublic();
  showMsg('am-doc-add');
}

function deleteDoc(id){
  if(!confirm('Удалить документ?'))return;
  SS('site_docs',gDocs().filter(d=>d.id!==id));
  renderDocsAdmin();renderDocsPublic();
}

// Open a document URL — handles both regular https:// and base64 data: URLs
function openDocURL(url){
  if(!url)return;
  if(url.startsWith('data:')){
    try{
      const mime=url.split(';')[0].split(':')[1]||'application/pdf';
      const base64=url.split(',')[1];
      const binary=atob(base64);
      const bytes=new Uint8Array(binary.length);
      for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);
      const blob=new Blob([bytes],{type:mime});
      const blobUrl=URL.createObjectURL(blob);
      window.open(blobUrl,'_blank');
      setTimeout(()=>URL.revokeObjectURL(blobUrl),10000);
    }catch(e){window.open(url,'_blank');}
  } else {
    window.open(url,'_blank');
  }
}

function renderDocsAdmin(){
  const docs=gDocs();
  const el=document.getElementById('docs-admin-list');
  if(!el)return;
  if(!docs.length){el.innerHTML='<p style="font-size:11px;color:var(--muted);letter-spacing:2px;text-transform:uppercase;padding:16px 0">Документов пока нет</p>';return;}
  el.innerHTML=docs.map((d,idx)=>`
    <div class="doc-card">
      <div class="doc-icon">📄</div>
      <div class="doc-info">
        <div class="doc-name">${d.name}</div>
        ${d.desc?`<div class="doc-desc">${d.desc}</div>`:''}
      </div>
      <div class="doc-actions">
        <button class="doc-open-btn" onclick="openDocURL(${JSON.stringify(d.url)})">↗ Открыть</button>
        <button class="doc-del-btn" onclick="deleteDoc('${d.id}')">✕</button>
      </div>
    </div>`).join('');
}

// Global cache for doc click access (avoids inline JSON/quote issues)
let _docsClickCache = [];

function renderDocsPublic(){
  const docs=gDocs();
  _docsClickCache=docs;
  const grid=document.getElementById('docs-render');
  const empty=document.getElementById('docs-empty');
  const section=document.getElementById('docs');
  if(!grid)return;
  if(!docs.length){
    grid.innerHTML='';
    if(empty)empty.style.display='none';
    if(section)section.style.display='none';
    return;
  }
  if(section)section.style.display='block';
  if(empty)empty.style.display='none';
  grid.innerHTML=docs.map((d,i)=>`
    <div class="doc-card" onclick="openDocByIdx(${i})" style="cursor:pointer">
      <div class="doc-icon">📄</div>
      <div class="doc-info">
        <div class="doc-name">${d.name}</div>
        ${d.desc?`<div class="doc-desc">${d.desc}</div>`:''}
        <div style="font-size:9px;color:var(--gold-dim);letter-spacing:2px;text-transform:uppercase;margin-top:6px">Открыть PDF ↗</div>
      </div>
    </div>`).join('');
}

function openDocByIdx(i){
  const d=_docsClickCache[i];
  if(d&&d.url)openDocURL(d.url);
}

/* ═══════ TEXTS/CONTACTS SAVE ═══════ */
function saveTexts(){
  SS('texts',{logo:v('tx-logo'),sub:v('tx-sub'),desc:v('tx-desc'),cdesc:v('tx-cdesc'),flogo:v('tx-flogo'),ftext:v('tx-ftext')});
  applyTexts();showMsg('am-texts');
}
function saveContacts(){
  SS('contacts',{tg:v('cx-tg'),wa:v('cx-wa'),ph:v('cx-ph'),em:v('cx-em')});
  renderContacts();showMsg('am-contacts');
}

/* ═══════ SETTINGS ═══════ */
function saveSettings(){
  const login=v('sp-login'),p1=v('sp1'),p2=v('sp2');
  if(login)SS('a_login',login);
  if(p1){if(p1!==p2){alert('Пароли не совпадают');return;}SS('a_pwd',p1);}
  setValue('sp1','');setValue('sp2','');showMsg('am-settings');
}
function resetAll(){
  if(!confirm('Удалить ВСЕ данные?'))return;
  if(!confirm('Действие нельзя отменить. Продолжить?'))return;
  // Удаляем все ключи из Firestore через REST (не критично если не получится)
  const KEYS=['products','images','texts','contacts','colors','font','pd_config',
    'a_login','a_pwd','orders','stock','site_docs'];
  if(_fbOk){
    KEYS.forEach(k=>{
      fetch(`${_FB_BASE}/${encodeURIComponent(k)}`,{method:'DELETE'}).catch(()=>{});
    });
  }
  localStorage.clear();
  location.reload();
}

/* ═══════ UTILS ═══════ */
function go(id){document.getElementById(id).scrollIntoView({behavior:'smooth'});}
function v(id){const el=document.getElementById(id);return el?el.value.trim():null;}
function setValue(id,val){const el=document.getElementById(id);if(el)el.value=val||'';}
function closeModal(id){document.getElementById(id).classList.remove('open');}
function showMsg(id){const el=document.getElementById(id);if(!el)return;el.style.display='inline';setTimeout(()=>el.style.display='none',3000);}
