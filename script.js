
(function(){
  try{
    const consent = localStorage.getItem('cookieConsent');
    const el = document.getElementById('cookie');
    if(consent){ el && (el.style.display='none'); }
    document.getElementById('acceptCookies')?.addEventListener('click',()=>{
      localStorage.setItem('cookieConsent','yes'); el && (el.style.display='none');
    });
    document.getElementById('declineCookies')?.addEventListener('click',()=>{
      localStorage.setItem('cookieConsent','no'); el && (el.style.display='none');
    });
  }catch(e){}
})();
