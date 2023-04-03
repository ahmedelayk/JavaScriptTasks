
var form = document.forms[0]
var userNameReg = /^[a-zA-Z\s]{2,}$/ig
var phoneNumberReg = /^[0-9]{8}$/ig
var mobileNumberReg = /(010|011|012)[0-9]{8}$/ig
var emailReg = /\w+@[a-zA-Z]+\.[a-zA-Z]+/ig

form.onsubmit = function(event){
  if(!(userNameReg.test(form["userName"].value) &&
  phoneNumberReg.test(form["phoneNumber"].value) &&
  mobileNumberReg.test(form["mobileNumber"].value) &&
  emailReg.test(form["userEmail"].value))
  ){
    event.preventDefault()
  }
}