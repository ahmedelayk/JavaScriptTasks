moveBtn = document.getElementById('moveBtn')
resetBtn = document.querySelector('[value="reset"]')

var timer, timer2, timer3
var direction=1

function movePic(index, pos){
  if(parseInt(getComputedStyle(document.images[index])[pos])>=452){
    direction = -1;
  }else if(parseInt(getComputedStyle(document.images[index])[pos])<=0){
    direction = 1;
  }
  document.images[index].style[pos] = (parseInt(getComputedStyle(document.images[index])[pos]) + direction)+'px'
}
moveBtn.onclick = function(){
  if(moveBtn.value === 'go'){
    // move of first pic
    // timer = setInterval(function(){movePic(0, 'left')}  , 5)
    timer = setInterval(movePic , 5, 0, 'left')
    // move of second pic
    // timer2 = setInterval(function(){movePic(1, 'right')}  , 5)
    timer2 = setInterval(movePic , 5, 1, 'right')
    // move of third pic
    // timer3 = setInterval(function(){movePic(2, 'bottom')}  , 5)
    timer3 = setInterval(movePic , 5, 2, 'bottom')
    moveBtn.value = 'stop'
  }else if(moveBtn.value === 'stop'){
    clearInterval(timer)
    clearInterval(timer2)
    clearInterval(timer3)
    moveBtn.value = 'go'
  }
}
resetBtn.onclick = reset
function reset(){
  document.images[0].style.left = 0 +'px'
  document.images[1].style.right = 0 +'px'
  document.images[2].style.bottom = 0 +'px'
}

// document.getElementsByTagName('script')[0].before(document.images[0])