// take info about user and validate it
var userName, phoneNumber, mobileNumber, email
// take name from user
var userNameReg = /^[a-zA-Z]{2,}$/ig
takeInput(userName, userNameReg, "user name")
// take phone number from user
var phoneNumberReg = /^[0-9]{8}$/ig
takeInput(phoneNumber, phoneNumberReg, "phone number")
// take mobile number from user
var mobileNumberReg = /(010|011|012)[0-9]{8}$/ig
takeInput(mobileNumber, mobileNumberReg, "mobile number")
// mobileNumberReg.test(mobileNumber)
// take email from user
var emailReg = /\w+@[a-zA-Z]+\.[a-zA-Z]+/ig
takeInput(email, emailReg, "email")

function takeInput(input, inputReg, strName){
  do{
    input = prompt (`Enter your ${strName}`)
    if(input !== null){
      if(inputReg.test(input)){
        document.write(`<h3><span>your ${strName} is</span> ${input}</h3>`)
        break
      }else{
        alert(`enter a valid ${strName}`)
        continue
      }
    }else{
      alert(`please enter your ${strName}`)
    }
  }while(1)
}

do{
  var color = prompt("choose a color: red | green | blue")
  var spans = document.getElementsByTagName("span")
  if(color !== null && color ==="red" ||color ==="green" ||color ==="blue"){
    Array.from(spans).forEach(element => {
      console.log(element)
      element.style.color = color
    });
    break
  }else{
    alert("enter a valid color [red or green or blue]")
    continue
  }
}while(1)
