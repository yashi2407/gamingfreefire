
var slider = document.getElementById("myRange");

var output = document.querySelector("span.output");

output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  
}
var slider1 = document.getElementById("myRange1");

var output1 = document.querySelector("span.output1");

output1.innerHTML = slider1.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function() {
  output1.innerHTML = this.value;
  
}
