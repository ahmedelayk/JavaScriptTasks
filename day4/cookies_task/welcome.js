var span = document.getElementById('info')
var image = document.images[0]

window.onload = function(){
  setCookie('counter', Number(getCookie('counter'))+1)
}
if(getCookie('gender') == 'male'){
  image.src = './imgs/male.jpg'
}else{
  image.src = './imgs/female.jpg'
}
span.innerHTML = 'Welcome <b>'+getCookie('userName')+'</b> you have visited this site <b>'+getCookie('counter')+'</b> times :)'
document.querySelectorAll('b').forEach((ele)=>{
  ele.style.color = getCookie('favColor')
})