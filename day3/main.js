// slider
var imgArr = ['airpods', 'headphone', 'headset', 'watch'];
var img = window.document.querySelector(".image-container img");
var nextBtn = document.querySelector("[value = 'Next']");
var prevBtn = document.querySelector("[value = 'Previous']");
var slideShowBtn = document.querySelector("[value = 'SlideShow']");
var stopBtn = document.querySelector("[value = 'Stop']");
var timer, idx;
var reg = new RegExp('./imgs/' + "(.*)" + '.jpg');
nextBtn.onclick = function(){
  clearInterval(timer);
  var imgName = img.src.match(reg);
  idx = imgArr.indexOf(imgName[1]);
  if(!(idx == imgArr.length -1)){
    img.src = `./imgs/${imgArr[idx+1]}.jpg`;
  }
}
prevBtn.onclick = function(){
  clearInterval(timer);
  var imgName = img.src.match(reg);
  idx = imgArr.indexOf(imgName[1]);
  if(!(idx == 0)){
    img.src = `./imgs/${imgArr[idx-1]}.jpg`;
  }
}
slideShowBtn.onclick = function(){
  clearInterval(timer);
  timer = setInterval(()=>{
    var imgName = img.src.match(reg);
    idx = imgArr.indexOf(imgName[1]);
    if(idx == imgArr.length -1){
      img.src = `./imgs/${imgArr[0]}.jpg`;
    }else{
      img.src = `./imgs/${imgArr[idx+1]}.jpg`;
    }
  },1000);
}
stopBtn.onclick = function(){
  clearInterval(timer);
}