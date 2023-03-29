// letter count
var str = prompt("Enter a string")
if(str !== null){
  var reg = /e/ig
  document.write("the number of letter e is ",str.match(reg)===null?-1:str.match(reg).length)
}
