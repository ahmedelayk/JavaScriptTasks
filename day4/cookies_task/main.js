function register(){
  var flag = false
  var form = document.forms[0]
  setCookie('counter', '0')
  for(var i=0;i<form.elements.length-1;i++){
    if(form.elements[i].type == 'radio' && !(form.elements[i].checked)){
      continue
    }
    if(form.elements[i].required && form.elements[i].value == ''){
      form.elements[i].placeholder = 'u should fill this'
      break
    }
    setCookie(form.elements[i].name, form.elements[i].value, new Date())
  }
  for(var i=0;i<form.elements.length-1;i++){
    if(form.elements[i].value !='')
      flag = true
    else{
      flag = false
      break
    }
  }
  if(flag)
    location.assign('./welcome.html')
}