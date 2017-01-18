
// replace .hide within the HTML
 document.getElementById("secondjoke").classList.add("hide");
 document.getElementById("more-button").classList.add("hide");
 document.getElementById("answer-block").classList.add("hide");
 document.getElementById("answer-block2").classList.add("hide");
 document.getElementById("button2").classList.add("hide");


// When user clicks first button, show answer
document.getElementById("button1").addEventListener("click", function() {
  document.getElementById("answer-block").classList.add("show");
  document.getElementById("more-button").classList.add("show");
});

// for second joke
document.getElementById("more-button").addEventListener("click", function() {
  document.getElementById("secondjoke").classList.add("show");
  document.getElementById("button2").classList.add("show");
});

document.getElementById("button2").addEventListener("click", function() {
  document.getElementById("answer-block2").classList.add("show");
});
