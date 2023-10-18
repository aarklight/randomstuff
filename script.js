document.addEventListener('DOMContentLoaded', function() {


    var bakingElement = document.querySelector('#baking');
  if (bakingElement) {
    bakingElement.addEventListener('click', function() {
      window.open("baking.html", "_self");
    });
  }
  var bakingElement = document.querySelector('#about');
  if (bakingElement) {
    bakingElement.addEventListener('click', function() {
      window.open("index.html", "_self");
    });
  }
  var bakingElement = document.querySelector('#roller');
  if (bakingElement) {
    bakingElement.addEventListener('click', function() {
      window.open("rollerskating.html", "_self");
    });
  }
  var bakingElement = document.querySelector('#writing');
  if (bakingElement) {
    bakingElement.addEventListener('click', function() {
      window.open("writing.html", "_self");
    });
  }
  var bakingElement = document.querySelector('#coding');
  if (bakingElement) {
    bakingElement.addEventListener('click', function() {
      window.open("coding.html", "_self");
    });
  }

});


