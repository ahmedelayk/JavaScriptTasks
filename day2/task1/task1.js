// take 3 numbers and apply + - * /

var n, numArr = [], sum=0,subtraction = 0, multiplication=1,division,zeroFlag = false;

// take size of array from user
do{
  n = prompt("enter size of array");
  console.log(n);
  if(n !== null && !isNaN(n) && n != ''&& parseInt(n) != 0 && parseInt(n) != 1){
    break;
  }
  alert("enter a valid size of array")
}while(1);

// take numbers from user
var i=0;
do{
  var num = prompt("enter number");
  if(isNaN(num) || num === null || num === undefined || num == ''){
    alert("please enter a number");
    continue;
  }
  numArr.push(parseInt(num));
  i++;
}while(i<n);

// calculate four operation on array
division = numArr[0];
for(var i=0;i<n;i++){
  sum += numArr[i];
  subtraction -= numArr[i];
  multiplication *= numArr[i];
  if(numArr[i] === 0){
    zeroFlag = true;
    continue;
  }
  if(i == 0)
    continue;
  division /= numArr[i];
}

document.write(`<h2>Add - subtraction - multiplication - division of ${n} values</h2><hr>`);
display('sum');
display('subtraction');
display('multiplication');
display('division');

// function of display result to page
function display(opName){
  var opSign, operation;
  if(opName === 'sum'){
    operation = sum;
    opSign='+';
  }else if(opName === 'subtraction'){
    operation = subtraction;
    opSign='-';
  }else if(opName === 'multiplication'){
    operation = multiplication;
    opSign='*';
  }else if(opName === 'division'){
    operation = division;
    opSign='/';
  }
  document.write(`<h3><span>${opName} of the ${n} values </span> `);
  if(zeroFlag && opName === 'division'){
    document.write(`${numArr.join(`${opSign}`)} = ${operation} (ignoring value zero)</h3>`);
  }else{
    document.write(`${numArr.join(`${opSign}`)} = ${operation}</h3>`);
  }
}
