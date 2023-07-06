window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    let text = document.getElementById('text');
    let leaf = document.getElementById('leaf');
    let plant = document.getElementById('plant');
    let tree = document.getElementById('tree');
    let hill1 = document.getElementById('hill1');
    let hill2 = document.getElementById('hill2');
    let hill3 = document.getElementById('hill3');
    let hill4 = document.getElementById('hill4');
    let hill5 = document.getElementById('hill5');
    
    if (text && leaf && hill1 && hill4 && hill5) {
      text.style.marginTop = value * 2.5 + 'px';
      leaf.style.top = value * -1.5 + 'px';
      leaf.style.left = value * 1.5 + 'px';
      hill5.style.left = value * 1.5 + 'px';
      hill4.style.left = value * -1.5 + 'px';
      hill1.style.top = value * 1 + 'px';
    }
    var elements = ["text", "leaf", "plant", "tree", "hill1", "hill2", "hill3", "hill4", "hill5"];

    if (value > 1000) {
      for (var i = 0; i < elements.length; i++) {
        var element = document.getElementById(elements[i]);
        element.style.visibility = "hidden";
      }
    } else {
      for (var i = 0; i < elements.length; i++) {
        var element = document.getElementById(elements[i]);
        element.style.visibility = "visible";
      }
    }
    
  });