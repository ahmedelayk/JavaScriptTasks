// display message with different headings
var message = prompt("Enter a message")
if(message !== null){
  for(var i=0;i<6;i++)
    document.write(`<h${i+1}>${message}</h${i+1}>`)
}