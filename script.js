const track=document.getElementById('track');
const allPhotos=[];
for(let group of [{prefix:'elementary',label:'ELEMENTARY'},{prefix:'junior',label:'JUNIOR HIGH'},{prefix:'senior',label:'SENIOR HIGH'}]){
  for(let n=1;n<=10;n++){allPhotos.push({src:`images/achievements/${group.prefix}${n}.jpg`,caption:`${group.label} · PHOTO ${n}`});}
}
// Add 30 image cards, then a second copy for seamless loop
function cardFor(photo){const card=document.createElement('div');card.className='gallery-photo';card.innerHTML=`<img src="${photo.src}" alt="${photo.caption}"><div class="photo-fallback">${photo.caption}<br><small>ADD PHOTO FILE</small></div>`;const img=card.querySelector('img');const fallback=card.querySelector('.photo-fallback');img.addEventListener('load',()=>fallback.style.display='none');img.addEventListener('error',()=>img.style.display='none');card.addEventListener('click',()=>openLightbox(photo));return card;}
allPhotos.forEach(p=>track.appendChild(cardFor(p)));allPhotos.forEach(p=>track.appendChild(cardFor(p)));
let current=0;
const modal=document.getElementById('lightbox'),lbimg=document.getElementById('lightbox-img'),caption=document.getElementById('lightbox-caption');
function openLightbox(p){current=allPhotos.findIndex(x=>x.src===p.src);showPhoto();modal.classList.add('open')}
function showPhoto(){const p=allPhotos[current];lbimg.src=p.src;caption.textContent=p.caption}
function nextPhoto(d){current=(current+d+allPhotos.length)%allPhotos.length;showPhoto()}
document.getElementById('close').onclick=()=>modal.classList.remove('open');
document.getElementById('prev').onclick=()=>track.scrollBy({left:-400,behavior:'smooth'});
document.getElementById('next').onclick=()=>track.scrollBy({left:400,behavior:'smooth'});
document.getElementById('lbprev').onclick=()=>nextPhoto(-1);document.getElementById('lbnext').onclick=()=>nextPhoto(1);
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
document.addEventListener('keydown',e=>{if(!modal.classList.contains('open'))return;if(e.key==='Escape')modal.classList.remove('open');if(e.key==='ArrowRight')nextPhoto(1);if(e.key==='ArrowLeft')nextPhoto(-1)});
