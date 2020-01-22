$(document).ready(function() {
  $("form#loop").submit(function(event){
    event.preventDefault();
    var a = parseInt($("input#number").val());
    var b = parseInt($("input#multiple").val());
    var c = a % b
    var array = [];
    
    for (var i = 1; ((i * b) + c) <= a; i += 1) {
    var d = i * b;
    array.push(d);
    }
          
    $(".output").append('the multiple of ' + a + ' times ' + b + ' is ' + array.length + " with a remainder of " + c + ". <br> Your multiples are " + array + ".");
   
    
  });
});

