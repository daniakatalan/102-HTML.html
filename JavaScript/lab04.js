var userName = prompt("what's you're name?")
alert("welcome to our website "+userName)

document.write("<P>"+userName+"</P>")


var userAnswer = prompt("Do you like traveling?");
if(userAnswer === "yes"){
  alert("Enjoy visiting our website")
}else{alert("Think about it again!")}  



//var userA = prompt("where do you live?")

//for (i = 0; i == ['jordan'], ['syria'], ['lebanon']; i++){
//alert("Great!")
//}
//break; 




let userA1 = prompt("what is your country?")
let userA2 = prompt("what is your city?")

function printFullA (userA1, userA2){
  alert("it's grate living in "+userA1 +" "+ userA2);
}

function sayhi(){
  document.write("<h1>Hello from function</h1>");
}

printFullA(userA1, userA2);

sayhi();






