// check if a word is a Palindrome or not
var word = prompt ("enter a word")
var isPalindrome = false
if(word !== null){
  var c = confirm("want to consider a case")
  word = word.trim().split(" ")[0]
  for(var i=0;i<(word.length)/2;i++){
    if(c === true)
      if(word[i] === word[word.length-i-1])
        isPalindrome = true
      else{
        isPalindrome = false
        break
      }
        else if(c === false)
      if(word[i].toLowerCase() === word[word.length-i-1].toLowerCase())
        isPalindrome = true
      else{
        isPalindrome = false
        break
      }
  }
  if(isPalindrome == true)
    alert("the word is a palindrome")
  else
    alert("the word is not a palindrome")
}