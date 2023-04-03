
var h3 = document.getElementById("info")

var data = location.search.substring(1,location.search.length).split('&')
var userInfo = []
for(var i =0 ;i<data.length;i++){
  userInfo[data[i].split('=')[0]] = data[i].split('=')[1]
}

h3.innerHTML = 'Welcome <b>'+userInfo.userName+'</b>, phone number is <b>'+userInfo.phoneNumber+'</b>, mobile number is <b>'+userInfo.mobileNumber+'</b>, your Email is <b>'+userInfo.userEmail.replace('%40','@')+'</b>'