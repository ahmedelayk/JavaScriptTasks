// BOM task
var win;
function openWindow(){
  win = window.open('./task2.1.1_child.html', '', 'width=300, height=200');
  moveWindow();
}
var timer
function moveWindow(){
  timer = setInterval(()=>{
    win.moveTo(Math.random() * 1060 + 10,Math.random() * 450);
    win.focus();
  },1000)
}
function stopMove(){
  clearInterval(timer);
  win.focus();
}