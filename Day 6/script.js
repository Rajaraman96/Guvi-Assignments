// //Q2.
// //The Alert were not invoked because of using invalid double quotes were used in the script before.
// alert("I’m invoked!");
// //----------------------------------------------------------------------------------------------------------------------------


// //Q3.
// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`Wor
//  ld`)
// alert(3 +
// 1
// + 2); // this is multiple line code and its working


// //----------------------------------------------------------------------------------------------------------------------------


// //Q4.
// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = '"'+fname+" "+lname+'"';
// alert( admin ); // "Guvi geek"

// //----------------------------------------------------------------------------------------------------------------------------

// //Q5.
// // let fname=10.5; 
// // fname = "Guvi";
// // lname = "geek"
// // let name = fname+lname;
// // alert('hello ',name  );



// //----------------------------------------------------------------------------------------------------------------------------
// //Q6.
// let a = prompt("First number?");
// let b = prompt("Second number?");
// result = parseInt(a)+ parseInt(b);
// alert(result);

// //----------------------------------------------------------------------------------------------------------------------------
// //Q7.
// let c = parseInt(prompt("First number?"));
// let d = parseInt(prompt("Second number?"));
// alert(c+d);


//----------------------------------------------------------------------------------------------------------------------------


// //Q8.
// var a = 2 > 12;
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// };


// //----------------------------------------------------------------------------------------------------------------------------


// //Q9.
// let a = !parseInt(prompt("Enter a number?"));
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

//----------------------------------------------------------------------------------------------------------------------------


// //Q10.
// let value = parseInt(prompt('How many runs you scored in this ball'));
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

//----------------------------------------------------------------------------------------------------------------------------

//Q11.
// let login = 'Employee';
// let message = (login == 'Employee') ? 
//   (login == 'Director') ? 'Greetings' 
//   (login == '') ? 'No login' : '';
// console.log(message);


//----------------------------------------------------------------------------------------------------------------------------

// //Q12.
// // You cant change the value of the msg
// let message;
// if (message === null || message === 2 || message === undefined )
// {
//      message = "welcome boss";
// }
// else
// {
//     message = "Go away";
// }
//   console.log(message);

//----------------------------------------------------------------------------------------------------------------------------

//Q13.
// let message;
// let lock = message;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);

//----------------------------------------------------------------------------------------------------------------------------

//Q14.
// let message;
// let lock;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);


//----------------------------------------------------------------------------------------------------------------------------

// Q15.
// You can change only 2 characters
// let i =4;
// while (i) {
//   console.log( --i );
// }

//----------------------------------------------------------------------------------------------------------------------------

//Q.16
//Change the code to print 1 to 10 in 4 lines

// for(let num = 1;  num<=10; num++){
// console.log(num)
// }

//----------------------------------------------------------------------------------------------------------------------------


//Q.17
//Change the code to print even numbers
//You are allowed to modify only one character

// for (let num = 2; num <= 20; num += 2) {
//   console.log(num)
// }

//----------------------------------------------------------------------------------------------------------------------------

//Q18.
//Change the code to print all the gifts

// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`)
// }

//----------------------------------------------------------------------------------------------------------------------------


//Q.19
//Fix the code to disarm the bomb.
// let  countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if(countdown >= 0)
//   {
//    console.log("bomb disrmed");
//   }
// }

//----------------------------------------------------------------------------------------------------------------------------


//Q.20
//Whats the msg printed and why?
var lemein ="0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);