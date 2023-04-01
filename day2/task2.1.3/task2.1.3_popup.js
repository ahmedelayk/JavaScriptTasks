
// scrollable page

setInterval(()=>{
  window.scrollBy({
    top: 300,
    behavior: 'smooth',
  });
},500)


// console.log(screen)
console.log(screen.height);
console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);

if(document.documentElement.scrollTop == document.documentElement.scrollHeight - document.documentElement.clientHeight ){
  console.log("end of page");
}

