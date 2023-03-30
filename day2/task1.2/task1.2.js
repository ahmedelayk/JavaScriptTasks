// Sorting
var arr = [];
var i=0;
do{
  var num = prompt("enter number");
  if(isNaN(num) || num === null || num === undefined || num == ''){
    alert("please enter a number");
    continue;
  }
  arr.push(parseInt(num));
  i++;
}while(i<5);

document.write(`<h2>Sorting</h2><hr>`);
document.write(`<h3><span>u've entered the values of </span>${arr.join(' , ')} </h3>`);
document.write(`<h3><span>ascending sorting : </span>${arr.sort((a,b)=>a-b).join(' , ')} </h3> `);
document.write(`<h3><span>descending sorting : </span>${arr.sort((a,b)=>a-b).reverse().join(' , ')} </h3> `);
