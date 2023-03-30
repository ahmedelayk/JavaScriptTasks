

var text = 'welcome to our demo';
var i =0;

var timer = setInterval(()=>{
  count();
  i++;
},200);

function count(){
  setTimeout(()=>{
    console.log(text);
    document.write(text[i-1]);
    if(i == text.length) clearInterval(timer);
  },150);
}

setTimeout(()=>{
  window.close();
},200*text.length + 1000);