/* ---------------- grades, subjects, resources ---------------- */
const GRADES=[
 {id:'nursery',name:'Nursery',short:'N',age:'Ages 4 to 5'},
 {id:'kg',name:'KG',short:'KG',age:'Ages 5 to 6'},
 {id:'g1',name:'Grade 1',short:'1',age:'Ages 6 to 7'},
 {id:'g2',name:'Grade 2',short:'2',age:'Ages 7 to 8'},
 {id:'g3',name:'Grade 3',short:'3',age:'Ages 8 to 9'},
 {id:'g4',name:'Grade 4',short:'4',age:'Ages 9 to 10',soon:1},
 {id:'g5',name:'Grade 5',short:'5',age:'Ages 10 to 11',soon:1}];
const GR=Object.fromEntries(GRADES.map(g=>[g.id,g]));
const LIVE=GRADES.filter(g=>!g.soon);
const KIND={
 english:{name:'English',sheet:['#2A74DD','#E2EDFD']},
 maths:{name:'Maths',sheet:['#E2711A','#FDEAD9']},
 science:{name:'Science',sheet:['#2E9E4F','#DDF3DF']},
 social:{name:'Social Studies',sheet:['#CC3672','#FBE1EB']},
 history:{name:'History',sheet:['#B5502C','#F9E5DB']},
 geography:{name:'Geography',sheet:['#0E7FB0','#DCEFF8']},
 gk:{name:'General Knowledge',sheet:['#0D9488','#D7F3EF']},
 urdu:{name:'Urdu',ur:'اردو',sheet:['#6447CC','#EBE6FB']},
 islamiat:{name:'Islamiat',sheet:['#0F7A5A','#DDF2EA']},
 computer:{name:'Computer',sheet:['#475569','#E5E9F0']}};
const REFS={
 english:'Logic of English, Beowulf Grammar, IEW Structure and Style, Oxford',
 maths:'Singapore Maths, Dimensions Math, Beast Academy',
 science:'Real Science Odyssey, Evan-Moor Science, Pearson',
 history:'History Quest, BookShark History',
 geography:"Let's Go Geography, Evan-Moor Daily Geography",
 gk:'Evan-Moor and Real Science Odyssey early years',
 social:'Pakistan Single National Curriculum',
 urdu:'Nardban Urdu, Kashf Urdu',
 islamiat:'National Curriculum of Pakistan Islamiat, Grades 1 to 3',
 computer:'National Curriculum of Pakistan Computing'};
const ICON={
 english:'<path d="M3 5.5c3-1.3 6-1.3 9 .8 3-2.1 6-2.1 9-.8v13.5c-3-1.3-6-1.3-9 .8-3-2.1-6-2.1-9-.8z"/><path d="M12 6.3v13.4"/>',
 maths:'<path d="M7 4v6M4 7h6M14 7h6M5 15l4 4M9 15l-4 4M14 15.5h6M14 18.5h6"/>',
 science:'<path d="M9 3h6M10 3v6l-5.2 9.2A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-2.8L14 9V3"/><path d="M7.6 15h8.8"/>',
 social:'<circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3 2.4-5 5-5s5 2 5 5M13.5 20c0-2.4 1.6-4 3.5-4s3.5 1.6 3.5 4"/>',
 history:'<path d="M3 9l9-5 9 5M5 9v9M9.5 9v9M14.5 9v9M19 9v9M3 21h18"/>',
 geography:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
 gk:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.9.7 1.5 1.6 1.5 2.6V17h4v-.5c0-1 .6-1.9 1.5-2.6A6 6 0 0 0 12 3z"/>',
 islamiat:'<path d="M15.5 3.5a8.5 8.5 0 1 0 5 13.6A7 7 0 1 1 15.5 3.5z"/><path d="M17.5 8l.9 1.9 2.1.3-1.5 1.5.4 2.1-1.9-1-1.9 1 .4-2.1-1.5-1.5 2.1-.3z"/>',
 computer:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'};
const subIcon=(s)=>s.kind==='urdu'?'<span class="ur-t">ب</span>':`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${ICON[s.kind]}</svg>`;

const SUBJECTS=[
 {id:'english',kind:'english',grade:'g1',topics:['Alphabet','Vocabulary','-ing verbs']},
 {id:'maths',kind:'maths',grade:'g1',topics:['Numbers to 20','Number bonds','Addition','Subtraction','2 times table']},
 {id:'science',kind:'science',grade:'g1',topics:['Energy','Heat','Light','Sound']},
 {id:'social',kind:'social',grade:'g1',topics:['Family','Feelings','House rules']},
 {id:'urdu',kind:'urdu',grade:'g1',rtl:true,topics:['چھوٹی اشکال','شرارتی نو','مصوّتے','بصری الفاظ']}];
const ORDER=['english','maths','science','history','geography','social','gk','urdu','islamiat','computer'];
/* extra topics (PLUS): other grades join GRADE_DATA; Grade 1 extends its original subjects */
Object.entries(PLUS).forEach(([g,kinds])=>{if(g==='g1')return;GRADE_DATA[g]=GRADE_DATA[g]||{};Object.entries(kinds).forEach(([k,tps])=>{(GRADE_DATA[g][k]=GRADE_DATA[g][k]||[]).push(...tps)})});
Object.entries(GRADE_DATA).forEach(([g,subs])=>{
 Object.keys(subs).sort((a,b)=>ORDER.indexOf(a)-ORDER.indexOf(b)).forEach(kind=>{
  const id=g+'-'+kind,tps=subs[kind];
  SUBJECTS.push({id,kind,grade:g,rtl:kind==='urdu',topics:tps.map(t=>t.t)});
  PAGES[id]=tps.flatMap(t=>t.pages.map(p=>({...p,topic:t.t})));
  tps.forEach(t=>{if(t.en)UR_EN[t.t]=t.en});
  GUIDE[id]=tps.map(t=>t.g);
  PLAN[id]=tps.map((t,k)=>[t.t,['t'+(k+1)],t.g[0],t.g[2],t.story]);
 });
});
Object.entries(PLUS.g1||{}).forEach(([kind,tps])=>{const s=SUBJECTS.find(x=>x.grade==='g1'&&x.kind===kind);
 if(!s){const id='g1-'+kind;SUBJECTS.push({id,kind,grade:'g1',rtl:kind==='urdu',topics:tps.map(t=>t.t)});PAGES[id]=tps.flatMap(t=>t.pages.map(p=>({...p,topic:t.t})));GUIDE[id]=tps.map(t=>t.g);PLAN[id]=tps.map((t,k)=>[t.t,['t'+(k+1)],t.g[0],t.g[2],t.story]);tps.forEach(t=>{if(t.en)UR_EN[t.t]=t.en});return}
 tps.forEach(t=>{const k=s.topics.length;s.topics.push(t.t);if(PACK_T[s.id])PACK_T[s.id][k]=t.t;if(t.en)UR_EN[t.t]=t.en;
  PAGES[s.id].push(...t.pages.map(p=>({...p,topic:t.t})));(GUIDE[s.id]=GUIDE[s.id]||[]).push(t.g);PLAN[s.id].push([t.t,['t'+(k+1)],t.g[0],t.g[2],t.story])})});
SUBJECTS.forEach(s=>{s.name=KIND[s.kind].name;s.ur=KIND[s.kind].ur});
const SUB=Object.fromEntries(SUBJECTS.map(s=>[s.id,s]));
const subjectsOf=g=>SUBJECTS.filter(s=>s.grade===g&&!s.community);

const RES=[];
SUBJECTS.forEach(s=>{
  const pages=PAGES[s.id],G=GR[s.grade].name;
  if(s.grade==='g1'&&SET_DESC[s.id])RES.push({id:s.id+'-set',sub:s.id,set:true,title:(s.rtl?'اردو دہرائی سیٹ':s.name+' Revision Set'),en:s.rtl?'Urdu Revision Set':'',topic:'Revision',pages:[0,1,2,3,4,5,6,7,8,9],desc:SET_DESC[s.id],obj:SET_OBJ[s.id],isNew:true});
  s.topics.forEach((t,k)=>{
    const idx=pages.map((p,i)=>p.topic===t?i:-1).filter(i=>i>=0);
    const name=s.rtl?t:(PACK_T[s.id]?PACK_T[s.id][k]:t);
    const first=pages[idx[0]],last=pages[idx[idx.length-1]];
    RES.push({id:s.id+'-t'+(k+1),sub:s.id,title:s.rtl?t+' کی مشق':name+' Practice',en:s.rtl?UR_EN[t]+' practice':'',topic:t,pages:idx,isNew:s.grade!=='g1',
      desc:s.rtl?`${idx.length} pages of ${G} Urdu practice on ${UR_EN[t].toLowerCase()} (${t}), with an answer key for every page.`
        :`${idx.length} pages of ${G} ${s.name} practice on ${t.toLowerCase()}, from "${first.title}" to "${last.title}". An answer key for every page is at the back.`,
      obj:[...new Set(idx.map(i=>pages[i].obj))]});
  });
});
const RID=Object.fromEntries(RES.map(r=>[r.id,r]));

/* subject colour classes for every subject id */
(function(){let css='';SUBJECTS.forEach(s=>{const k=KIND[s.kind].sheet;css+=`.s-${s.id}{--sc:var(--k-${s.kind});--st:var(--k-${s.kind}-t)}.sheet.s-${s.id}{--pc:${k[0]};--pt:${k[1]}}`});
 const st=document.createElement('style');st.textContent=css;document.head.appendChild(st)})();
