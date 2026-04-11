// Small UI interactions: mobile nav toggle and form handling
document.addEventListener('DOMContentLoaded', function(){
  // year
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();

  // mobile nav
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex'});
  }

  // form submit (demo) — replace with real endpoint
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      // simple validation
      if(!data.get('name') || !data.get('email') || !data.get('message')){
        msg.textContent = 'Please fill all fields.'; return;
      }
      // simulate submission
      msg.textContent = 'Sending…';
      setTimeout(()=>{
        msg.textContent = 'Thanks! We will contact you shortly.';
        form.reset();
      },900);
    });
  }
});
