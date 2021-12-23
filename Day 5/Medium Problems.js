// Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.
        let addFive = (num) => {
            return num + 5
        }

        console.log(addFive(5))  //10
        console.log(addFive(0))  //5
        console.log(addFive(-5)) //0

//------------------------------------------------------------------------------------------------------------------------------------------
// Write a function called “getOpposite”.
// Given a number, return its opposite

        let getOppposite = (num) => {

            if (data === 0) //checks data type is a Integer and value is "0"
                return 0    // return 0, if the above condition satisfies

            if (Number.isInteger(num)) { //checks, data  is an Integer or not
                return (-num)            //return's Opposite of that integer
            } else {
                return -1                 //IF the Input data is not an Integer(decimal,string) then, returns "-1".
            }

        }


        console.log(getOppposite(5))     //-5
        console.log(getOppposite(0))     //0
        console.log(getOppposite(-5))    //5
        console.log(getOppposite("5a"))  //-1  //returing -1 for  string
        console.log(getOppposite(5.5))   //-1  //returing -1 for decimal 

//------------------------------------------------------------------------------------------------------------------------------------------

// Fill in your code that takes an number minutes and converts it to seconds.

let toSeconds = (min) => {
    return min * 60
}

console.log(`Converted value of minute to seconds: ${toSeconds(5)}sec `);   //Converted value of minute to seconds: 300 secs
console.log(`Converted value of minute to seconds: ${toSeconds(3)}sec `);   //Converted value of minute to seconds: 180 secs
console.log(`Converted value of minute to seconds: ${toSeconds(2)}sec `);   //Converted value of minute to seconds: 120 secs

//------------------------------------------------------------------------------------------------------------------------------------------        

//Create a function that takes a string and returns it as an integer.

        let toInteger = (str) => {

            return parseInt(str)

        }

        console.log(toInteger('6'));        //6
        console.log(toInteger('1000'));     //1000
        console.log(toInteger('12'));       //12


//------------------------------------------------------------------------------------------------------------------------------------------        

// Create a function that takes a number as an argument, 
// increments the number by + 1 and returns the result.

        let addOne = (num) => {
            return num + 1  //return the value after adding 1 to the input.
        }

        console.log(`Calling Add One Function:${addOne(10)}`)   //Calling Add One Function: 11

//------------------------------------------------------------------------------------------------------------------------------------------

// Create a function that takes an array and returns the first element.
        let arr = [1, 2, 3, 4]
        let firstArrayElement = (arr) => {
            return arr[0]   //return's 1st value in the 0th index of the above array
        }
        console.log(`First Element for array is: ${firstArrayElement(arr)}`) //First Element for array is: 1



//------------------------------------------------------------------------------------------------------------------------------------------

// Convert Hours into Seconds
// Write a function that converts hours into seconds.

let hourToSeconds = (hour) => {
    return hour * 60 *60
}

console.log(`Converted value of hour to second: ${hourToSeconds(2)} secs`)

//-------------------------------------------------------------------------------------------------------------------------------------------


// Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.
        let perimeterRect = (h,w) => {
            return 2 * (h+w) // calclation of perimeter of a rectangle
        }

        console.log(`Perimeter of rectangle is ${perimeterRect(10, 10)}`) //Perimeter of rectangle is 40


//------------------------------------------------------------------------------------------------------------------------------------------

//Less Than 100?
//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

        let sum = (a,b) => {
            if ((a+b)<= 100){
                return true
            }else{
            return false}
            }
            sum(99,2); //False
            sum(99,1); //True





//------------------------------------------------------------------------------------------------------------------------------------------
// Calculate the sum of numbers received in a comma delimited string

        let str = '1.2,2.3,3.4,4.5,5.6,6.7,7.8,8.9'



        let sumOfStringArray = (str) => {

            let stringArray = str.split(',').map(Number)

            console.log(stringArray) //[1.2, 2.3, 3.4, 4.5, 5.6, 6.7, 7.8, 8.9]

            let sum = stringArray.reduce((currentTotal, item) => {
                return currentTotal + item
            }, 0)
            return sum
        }

        console.log("Sum of string array: " + sumOfStringArray(str)) //Sum of string array: 40.4

//------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------