//scroll animation
   let scrolled;
   window.addEventListener('scroll',()=>{
           scrolled  = window.scrollY;
        //    console.log(scrolled);
        });
   
   const counter = document.querySelectorAll(".counter");
   counter.forEach(counter => {
       const updateCount = () => {
           const target = +counter.getAttribute('data-target');
           const count = +counter.innerText;
           const inc = 1;   
           if(count < target  && scrolled >=240){
              counter.innerText = count + inc;
              setTimeout(updateCount, 3);
           }
           else{
               count.innerText = target;
               setTimeout(updateCount, 3);
           }
       }
       updateCount();
   });

   // Scroll to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $("#scrollbtn").fadeIn();
    } else {
      $("#scrollbtn").fadeOut();
    }
  });
  
  $(document).ready(function () {
    $("#scrollbtn").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
    });
  });