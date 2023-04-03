// library of cookies
// setCookie
// getAllcookies
// getcookie
// hasCookie
// deleteCookie

function setCookie(cookieKey,cookieValue,expires){
  if(expires == undefined){
    document.cookie = cookieKey+"="+cookieValue
  }
  else{
    var date = expires
    date.setMonth(date.getMonth()+1)
    document.cookie = cookieKey+"="+cookieValue+";expires="+date.toUTCString()
  }
}

function getAllcookies(){
  var arr=document.cookie.split('; ')
  var data = []
  for(var i=0;i<arr.length;i++){
    data[arr[i].split('=')[0]]=arr[i].split('=')[1]
  }
  return data
}

function getCookie(cookieKey){
  var data = getAllcookies()
  if(data[cookieKey] !== undefined){
    return data[cookieKey]
  }else{
    return 'not found'
  }
}

function hasCookie(cookieKey){
  var data = getAllcookies()
  if(data[cookieKey] !== undefined)
    return true
  else
    return false
}

function deleteCookie(cookieKey){
  if(hasCookie(cookieKey)){
    var date = new Date()
    date.setMonth(date.getMonth()-1)
    document.cookie=cookieKey+"=;expires="+date.toUTCString()
  }else
    return 'there is no '+cookieKey+' in cookies'
}


// console.log(getAllcookies())
// setCookie("usradd","123")