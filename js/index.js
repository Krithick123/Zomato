window.onload=function(){
    const menu_icon=document.querySelector('.menu-icon');
    const mobile_nav=document.querySelector('.mobile-nav');
    const nav=document.querySelector('.navbar');
    
   

    menu_icon.addEventListener('click',function(){
        menu_icon.classList.toggle('is-active');
        mobile_nav.classList.toggle('is-active');
        nav.classList.toggle('active');
       
        
        

    });


};