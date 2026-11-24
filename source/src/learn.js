/* ---------- Learn: learning-song videos (Nov 2026) ----------
   VIDEOS comes from source/videos/videos.json (injected by build.py). Each video links to its topic (res):
   worksheets, quiz game, PowerUps, games and the parent guide, and the topic page shows the video. */
const VID=(VIDEOS||[]).filter(v=>RID[v.res]);
function vidFor(r){return r?VID.find(v=>v.res===r.id):null}
function vidRes(v){return RID[v.res]}
function vidSub(v){return SUB[vidRes(v).sub]}
function vidPlayer(v){
 if(v.yt)return `<div class="vplay"><iframe src="https://www.youtube-nocookie.com/embed/${v.yt}?rel=0&modestbranding=1" title="${esc(v.title)}" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe></div>`;
 return `<div class="vplay"><video controls playsinline preload="none" poster="${v.poster}" title="${esc(v.title)}"><source src="${v.mp4}" type="video/mp4"></video></div>`}
function vidLinks(v){const r=vidRes(v);
 return `<div class="vlinks">
  <a class="btn" href="#res-${r.id}">${ic.sheet}Worksheets</a>
  ${hasQuiz(r)?`<a class="btn sun" href="#play-${r.id}">${ic.play}Quiz game</a>`:''}
  <a class="btn" href="#powerups">${ic.spark}PowerUps</a>
  <a class="btn" href="#fun">${ic.star||ic.spark}Games</a>
  <a class="btn" href="#res-${r.id}" data-open-guide>${ic.heart}Parent guide</a></div>`}
function vidCard(v){const s=vidSub(v);
 return `<a class="vcard s-${s.id}" href="#learn-${v.id}"><span class="vth"><img src="${v.poster}" alt="" loading="lazy" width="640" height="360"><i class="vpl" aria-hidden="true">${ic.play}</i><em>${v.dur}</em></span>
  <b>${esc(v.title)}</b><small>${GR[s.grade].name} · ${s.name}</small></a>`}
function learnSub(){return `<p class="kick">Learning songs</p>`}
function learnPage(id){
 if(id){const v=VID.find(x=>x.id===id);if(!v)return learnPage();const r=vidRes(v),s=vidSub(v);
  const more=VID.filter(x=>x!==v&&vidSub(x).grade===s.grade).slice(0,6);
  app.innerHTML=`<div class="crumbs"><a href="#learn">Learn</a>/<span>${GR[s.grade].name}</span>/<span>${s.name}</span></div>
  <div class="vpage">${vidPlayer(v)}<div class="vinfo"><h1>${esc(v.title)}</h1>
   <div class="tags"><span class="tag">${GR[s.grade].name}</span><span class="tag">${s.name}</span><span class="tag">${T(r.topic)}</span><span class="tag">${v.dur}</span></div>
   <p>${esc(v.desc)}</p>${v.chapters&&v.chapters.length?`<h2>In this song</h2><ul class="vch">${v.chapters.map(c=>`<li><span>${c[0]}</span>${esc(c[1])}</li>`).join('')}</ul>`:''}
   <h2>Keep learning</h2><p class="muted">Practise ${T(r.topic)} with the worksheets, then play the quiz.</p>${vidLinks(v)}</div></div>
  ${more.length?`<section><div class="sec-h"><h2>More ${GR[s.grade].name} songs</h2><a class="lnk" href="#learn">All songs →</a></div><div class="vgrid">${more.map(vidCard).join('')}</div></section>`:''}`;return}
 const mine=VID.filter(v=>vidSub(v).grade===grade),other=VID.filter(v=>vidSub(v).grade!==grade);
 const bySub={};mine.forEach(v=>{const s=vidSub(v);(bySub[s.id]=bySub[s.id]||{s,l:[]}).l.push(v)});
 app.innerHTML=`<div class="khero lhero"><div><span class="kick">${GR[grade].name} · Learn</span><h1>Learning songs</h1>
  <p>Sing along with Takhti, then practise with the worksheets and quiz games for the same topic.</p>
  <p class="kstat"><a href="https://www.youtube.com/@LittleTakhti?sub_confirmation=1" target="_blank" rel="noopener">Watch on YouTube</a></p></div></div>
  ${gradeNote()}
  ${mine.length?Object.values(bySub).map(({s,l})=>`<section><div class="sec-h"><h2>${s.name}</h2><a class="lnk" href="#subject-${s.id}">${s.name} worksheets →</a></div><div class="vgrid">${l.map(vidCard).join('')}</div></section>`).join('')
   :`<p class="muted">New songs for ${GR[grade].name} are on the way. Here are songs from other classes.</p>`}
  ${other.length?`<section><div class="sec-h"><h2>${mine.length?'Songs for other classes':'All songs'}</h2></div><div class="vgrid">${other.map(vidCard).join('')}</div></section>`:''}`}
/* topic page: the song for this topic, above the worksheet extras */
function vidTopic(r){const v=vidFor(r);if(!v)return '';
 return `<section class="vtop"><div class="sec-h"><div><span class="kick">Learning song</span><h2>${esc(v.title)}</h2></div><a class="lnk" href="#learn">More songs →</a></div>
  <div class="vtop-g">${vidPlayer(v)}<div><p>${esc(v.desc)}</p><p class="muted">Watch together first, then try the worksheets and the quiz.</p></div></div></section>`}
/* home: newest songs for this grade (or any grade) */
function vidHome(){const l=VID.filter(v=>vidSub(v).grade===grade);const list=(l.length?l:VID).slice(-4).reverse();if(!list.length)return '';
 return `<section><div class="sec-h"><div><span class="kick">Sing and learn</span><h2>Learning songs</h2></div><a class="lnk" href="#learn">All songs →</a></div><div class="vgrid">${list.map(vidCard).join('')}</div></section>`}
