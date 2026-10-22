const q=document.getElementById('q'),cards=[...document.querySelectorAll('.card')],chips=[...document.querySelectorAll('.chip')],cnt=document.getElementById('count');let cat='';
function f(){const s=q.value.toLowerCase().trim();let n=0;cards.forEach(c=>{const v=(!cat||c.dataset.c===cat)&&(!s||c.dataset.s.includes(s));c.hidden=!v;n+=v});cnt.textContent=n+' agent'+(n==1?'':'s')}
q.oninput=f;chips.forEach(b=>b.onclick=()=>{chips.forEach(x=>x.classList.remove('on'));b.classList.add('on');cat=b.dataset.c;f()});f();
