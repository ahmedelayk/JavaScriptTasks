// Display data of user

var h3 = document.getElementById("info")
var queryStr = location.search
console.log(queryStr)
var data = location.search.substring(1,queryStr.length).split('&');
var userInfo = []
console.log(data)
for(var i=0;i<data.length;i++){
  userInfo[data[i].split('=')[0]] = data[i].split('=')[1]
}
console.log(userInfo)
h3.innerHTML = 'Welcome '+userInfo.userName+' your Age is '+userInfo.userAge+' your Gender is '+userInfo.gender+' and your favourite Color is '+userInfo.favColor;
