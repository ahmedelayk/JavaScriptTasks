//[1]take an input message from user and
//   display it using heading from h1 to h6

// var message = prompt("Enter a message")
// if(message !== null){
//   for(var i=0;i<6;i++)
//     document.write(`<h${i+1}>${message}</h${i+1}>`)
// }

//[2]take some numbers from users and return the sum

// var sum = 0
// do{
//   var num = prompt("enter a number")
//   if(num !== null){
//     if(isNaN(num)){
//       alert("please enter a number.")
//       continue
//     }
//     sum += parseInt(num)
//     if(num == 0 || num == null){
//       alert(`Sum = ${sum}`)
//       break
//     }
//   }else{
//     alert(`Sum = ${sum}`)
//     break
//   }
// }while(num != 0)

//[3.1]Palindrome check

// var word = prompt ("enter a word")
// var isPalindrome = false
// if(word !== null){
//   var c = confirm("want to consider a case")
//   word = word.trim().split(" ")[0]
//   for(var i=0;i<(word.length)/2;i++){
//     if(c === true)
//       if(word[i] === word[word.length-i-1])
//         isPalindrome = true
//       else{
//         isPalindrome = false
//         break
//       }
//         else if(c === false)
//       if(word[i].toLowerCase() === word[word.length-i-1].toLowerCase())
//         isPalindrome = true
//       else{
//         isPalindrome = false
//         break
//       }
//   }
//   if(isPalindrome == true)
//     alert("the word is a palindrome")
//   else
//     alert("the word is not a palindrome")
// }

//[3.2]

// var userName, phoneNumber, mobileNumber, email
// // take name from user
// do{
//   userName = prompt("Enter your name")
//   var userNameReg = /^[a-zA-Z]{2,}$/ig
//   if(userName !== null){
//     if(userNameReg.test(userName)){
//       document.write(`<h3><span style="color:${color}">welcome dear guest</span> ${userName}</h3>`)
//       break;
//     }else{
//       alert("enter a valid name")
//       continue
//     }
//   }else{
//     alert("please enter your name")
//   }
// }while(1)
// // take phone number from user
// do{
//   phoneNumber = prompt ("Enter your phone number [8 digits only]")
//   var phoneNumberReg = /^[0-9]{8}$/ig
//   if(phoneNumber !== null){
//     if(phoneNumberReg.test(phoneNumber)){
//       document.write(`<h3><span>your telephone number is</span> phoneNumber</h3>`)
//       break
//     }else{
//       alert("enter a valid phone number")
//       continue
//     }
//   }else{
//     alert("please enter your phone number")
//   }
// }while(1)
// // take mobile number from user
// do{
//   mobileNumber = prompt ("Enter your mobile number [starts with 010|011|012]")
//   var mobileNumberReg = /(010|011|012)[0-9]{8}$/ig
//   if(mobileNumber !== null){
//     if(mobileNumberReg.test(mobileNumber)){
//       document.write(`<h3><span>your mobile number is</span> mobileNumber</h3>`)
//       break
//     }else{
//       alert("enter a valid mobile number")
//       continue
//     }
//   }else{
//     alert("please enter your mobile number")
//   }
// }while(1)

// // take email from user
// do{
//   email = prompt ("Enter your email")
//   var emailReg = /\w+@[a-zA-Z]+\.[a-zA-Z]+/ig
//   if(email !== null){
//     if(emailReg.test(email)){
//       document.write(`<h3><span>your email is</span> email</h3>`)
//       break
//     }else{
//       alert("enter a valid email")
//       continue
//     }
//   }else{
//     alert("please enter your email")
//   }
// }while(1)
// do{
//   var color = prompt("choose a color: red | green | blue")
//   var spans = document.getElementsByTagName("span")
//   if(color !== null && color ==="red" ||color ==="green" ||color ==="blue"){
//     Array.from(spans).forEach(element => {
//       console.log(element)
//       element.style.color = color
//     });
//     break
//   }else{
//     alert("enter a valid color [red or green or blue]")
//     continue
//   }
// }while(1)

//[3.3]

// var str = prompt("Enter a string")
// if(str !== null){
//   var reg = /e/ig
//   document.write("the number of letter e is ",str.match(reg)===null?-1:str.match(reg))
// }