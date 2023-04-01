var text = 'welcome to our demo';
var i =0;

var timer = setInterval(()=>{
  typing();
  i++;
},200);

function typing(){
  document.write(text[i]);
  if(i == text.length-1) clearInterval(timer);
}

setTimeout(()=>{
  window.close();
},200*text.length + 1000);