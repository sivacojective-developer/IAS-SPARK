
// Header menu toggle + close on click

document.addEventListener("click", function (e) {

  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");

  if (!toggle || !menu) return;

  // TOGGLE MENU
  if (e.target.closest("#menuToggle")) {
    menu.classList.toggle("open");
    toggle.classList.toggle("active");
  }

  // CLOSE MENU WHEN NAV LINK CLICKED
  if (e.target.closest("#navMenu a")) {
    menu.classList.remove("open");
    toggle.classList.remove("active");
  }

  // CLOSE MENU WHEN CTA CLICKED
  if (e.target.closest(".hdr-ct a")) {
    menu.classList.remove("open");
    toggle.classList.remove("active");
  }

});

// counter js

document.addEventListener("DOMContentLoaded", function () {

  const counters = document.querySelectorAll('.counter');

  const runCounter = (counter)=>{
    const target = +counter.getAttribute('data-count');
    const suffix = counter.getAttribute('data-suffix') || ""; 
    let count = 0;

    const update = ()=>{
      const increment = target / 60;

      if(count < target){
        count += increment;
        counter.innerText = Math.ceil(count) + suffix;
        requestAnimationFrame(update);
      }else{
        counter.innerText = target + suffix;
      }
    };

    update();
  };

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        runCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.6});

  counters.forEach(counter=>{
    observer.observe(counter);
  });

});


