const modal=document.getElementById('message-modal'),text=document.getElementById('modal-text');
document.querySelectorAll('.reveal').forEach(btn=>btn.addEventListener('click',()=>{text.textContent=btn.dataset.message;modal.classList.add('open')}));
document.getElementById('modal-close').onclick=()=>modal.classList.remove('open');
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')});
