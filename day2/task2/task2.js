// Math object task

var radius, num, angel, area;

// // calculate area of the circle
radius = takeInput(radius, 'radius');
console.log(radius);
area = Math.PI * Math.pow(radius, 2);
alert(`the area of the circle is ${area}`);

/**************************/

// // calculate square root\
num = takeInput(num, 'number');
alert(`square root of ${num} is ${Math.sqrt(num)}`)

/**************************/

// calculate cos of angel
angel = takeInput(angel, 'angel');
var radians = angel * (Math.PI / 180);
document.write(`cos ${angel}° is ${(Math.cos(radians)).toFixed(3)}`);

/**************************/
// function for take input from user with validate
function takeInput(varName, text){
  do{
    varName = prompt(`enter ${text}`);
    if(text == 'angel'){
      if(varName !== null && !isNaN(varName) && varName != ''){
        break;
      }
    }else{
      if(varName !== null && !isNaN(varName) && varName != '' && varName >= 0){
        break;
      }
    }
    alert(`enter a valid"${text}"`);
  }while(1);
  return varName;
}