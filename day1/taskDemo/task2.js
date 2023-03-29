// take some number and sum
var sum = 0
do{
  var num = prompt("enter a number")
  if(num !== null){
    if(isNaN(num)){
      alert("please enter a number.")
      continue
    }
    sum += parseInt(num)
    if(num == 0 || num == null){
      alert(`Sum = ${sum}`)
      break
    }
  }else{
    alert(`Sum = ${sum}`)
    break
  }
}while(num != 0)