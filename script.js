
const scrollHandler = () => {
  let value = window.scrollY;

  let maxValue = document.documentElement.scrollHeight - window.innerHeight;
  let text = document.getElementById('text');
  let leaf = document.getElementById('leaf');
  let hill1 = document.getElementById('hill1');
  let hill4 = document.getElementById('hill4');
  let hill5 = document.getElementById('hill5');

  if (value < 800) {
    text.style.marginTop = value * 1.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 0.4 + 'px';
  }

  if (value > (maxValue+1)) {
    window.removeEventListener('scroll', scrollHandler);
  }
};

window.addEventListener('scroll', scrollHandler);

document.addEventListener("DOMContentLoaded", function() {
  var mybutton = document.getElementById("myBtn");

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  mybutton.addEventListener("click", scrollToTop);
  window.addEventListener("scroll", scrollFunction);
});


