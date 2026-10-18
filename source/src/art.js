/* ---------- illustrations: Microsoft Fluent Emoji (MIT), composed into small scenes ---------- */
const IMG=n=>`img/${n}.svg`;
/* each scene: backdrop tint, then [image, left%, top%, width%, rotate] */
const ART={
 english:['#DCEBFF',[['open-book',22,18,56,0],['input-latin-letters',4,8,26,-10],['pencil',70,40,28,12]]],
 maths:['#FDE6D2',[['abacus',24,14,52,-4],['input-numbers',70,6,26,10],['triangular-ruler',2,48,28,-8]]],
 science:['#DDF3DF',[['microscope',26,10,50,0],['test-tube',4,30,26,-16],['seedling',70,44,26,6]]],
 social:['#FBE2EC',[['house',28,10,46,0],['girl',4,40,28,-6],['boy',70,40,28,6]]],
 history:['#F9E5DB',[['classical-building',24,10,52,0],['scroll',2,40,28,-12],['graduation-cap',70,8,26,10]]],
 geography:['#DCEFF8',[['globe-showing-asia-australia',26,10,48,0],['world-map',2,44,30,-8],['compass',70,44,26,10]]],
 gk:['#D7F3EF',[['light-bulb',28,8,44,0],['owl',2,40,28,-8],['rocket',70,10,28,14]]],
 urdu:['#ECE7FB',[['notebook',26,12,46,-4],['writing-hand',66,40,30,0],['books',2,44,28,-6]],'ا ب پ'],
 parents:['#FFF1C2',[['woman-teacher',24,8,50,0],['child',68,40,30,6],['open-book',2,52,28,-8]]],
 class:['#E6F7DC',[['spiral-calendar',24,10,50,0],['backpack',2,42,28,-8],['crayon',70,40,28,14]]],
 islamiat:['#DDF2EA',[['open-book',24,14,52,0],['star',4,10,24,-10],['house',70,42,26,6]]],
 computer:['#E5E9F0',[['light-bulb',28,8,42,0],['input-latin-letters',2,40,30,-8],['rocket',70,10,26,12]]],
 quiz:['#FFF1C2',[['trophy',28,10,44,0],['kite',2,20,28,-14],['glowing-star',70,40,26,10]]]
};
const art=(k,label='')=>{const a=ART[k]||ART.quiz;
 return `<div class="art art-${k}" ${label?`role="img" aria-label="${label}"`:'aria-hidden="true"'}><i class="art-bg" style="background:${a[0]}"></i>${a[1].map(([n,x,y,w,r],i)=>`<img src="${IMG(n)}" alt="" decoding="async" class="ai ai${i}" style="left:${x}%;top:${y}%;width:${w}%;--r:${r}deg">`).join('')}${a[2]?`<span class="art-ur" lang="ur" dir="rtl">${a[2]}</span>`:''}</div>`};
