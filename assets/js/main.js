
(function(){
  // Highlight active nav link based on data-page on body
  var slug = document.body.getAttribute("data-page");
  var links = document.querySelectorAll(".nav-link");
  links.forEach(function(a){
    if(a.dataset.slug === slug){ a.classList.add("active"); }
  });

  // Current year in footer
  var y = document.getElementById("year");
  if(y){ y.textContent = new Date().getFullYear(); }

  // Optional: Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
