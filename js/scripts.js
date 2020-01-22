var a = parseInt(prompt("Enter a number: "));
var b = parseInt(prompt("Enter another number: "));
var c = a % b

for (var index = 0; ((index * b) + c) < a; index += 1);

  
  if (c === 0) {
  alert('the multiple of ' + a + 'times ' + b + 'is ' + index + " with no remainder");
  }
    else {
    alert('the multiple of ' + a + 'times ' + b + 'is ' + index + "with a remainder of" + c);
    }