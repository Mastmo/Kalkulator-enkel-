//Enkel kalkulator

var plussKnapp = document.getElementById("plussKnapp");
var minusKnapp = document.getElementById("minusKnapp");
var gangeKnapp = document.getElementById("gangeKnapp");
var deleKnapp = document.getElementById("deleKnapp");
var resultat = document.getElementById('resultat');

// Event list pluss

plussKnapp.addEventListener("click", function(){
  var tall1 = document.getElementById("tall1").value;
  var tall2 = document.getElementById("tall2").value;
  sum = parseInt(tall1) + parseInt(tall2);
  resultat.textContent = "Det ble: " + sum;
});

// Event list minus

minusKnapp.addEventListener("click", function(){
  var tall1 = document.getElementById("tall1").value;
  var tall2 = document.getElementById("tall2").value;
  sum = tall1 - tall2;
  resultat.textContent = "Det ble: " + sum;
});

//event list gange

gangeKnapp.addEventListener("click", function(){
  var tall1 = document.getElementById("tall1").value;
  var tall2 = document.getElementById("tall2").value;
  sum = tall1 * tall2;
  resultat.textContent = "Det ble: " + sum;
});

// Event list dele

deleKnapp.addEventListener("click", function(){
  var tall1 = document.getElementById("tall1").value;
  var tall2 = document.getElementById("tall2").value;
  sum = tall1 / tall2;
  resultat.textContent = "Det ble: " + sum;
});
