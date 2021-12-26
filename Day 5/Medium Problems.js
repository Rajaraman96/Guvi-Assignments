// Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.
        let num = 0;
        function addFive(num){
            return num + 5
        }addFive(num);

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
        //Output: Converted value of hour to second: 7200 secs


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

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
// Two numbers are passed as parameters. 
// The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

        let remainder = (a,b) => {
            return a%b
        }
        console.log(`Remainder for the division of given number is: ${remainder(-9, 45)} ` )
        //Output : Remainder for the division of given number is: -9 


//------------------------------------------------------------------------------------------------------------------------------------------

//McDonald species and its legs
//turkey = a, horse = b,pigs = c


        let legsOfSpecies = (a,b,c) => {
            return  ((a*2)+(b*4)+(c*4))
        }
            
        console.log(`Total no: of legs for whole species are : ${legsOfSpecies(5,6,7)}`)
        //Output: Total no: of legs for whole species are : 62


//------------------------------------------------------------------------------------------------------------------------------------------

//Frames Per Second
//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS


    let numberOfFrames = (a,b) => {
        return a*b*60
    }
    console.log(`Number of frames in a given minute is ${numberOfFrames(6,5)}`)
    //Output: Number of frames in a given minute is 1800


//------------------------------------------------------------------------------------------------------------------------------------------

//Check if an Integer is Divisible By Five
//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
        let divisibleByFive = (num) =>{
            if((num%5)== 0){
                return true
            }else{
                return false
            }
        }
            console.log(divisibleByFive(55)); //True
            console.log(divisibleByFive(101)) //False

//------------------------------------------------------------------------------------------------------------------------------------------

//Write a function called “isEven”.
//Given a number, “isEven” returns whether it is even.
            let num = 0;        
            function isEven(num){
                if(num%2 === 0){
                    return true
                }
                if (Number.isInteger(num) && (num%2 !==0 )) { //checks, data  is an Integer or not and also checks the remainder is not 0
                    return false           //return's False
                }                
                else{
                    return -1
                }
            }isEven(num);
            console.log(isEven(5));     //False
            console.log(isEven("11h"))  //-1
            console.log(isEven(6))      //True

//------------------------------------------------------------------------------------------------------------------------------------------

//Write a function called “areBothOdd”.
//Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

            let a,b = 0;
            function areBothOdd(a,b){
                if (a%2 !== 0 && b%2 !== 0){
                    return true
                }else{
                    return false
                }
            }
            console.log(areBothOdd(5,6)); //False
            console.log(areBothOdd(1,7)); //True

//------------------------------------------------------------------------------------------------------------------------------------------

//Write a function called “getFullName”.
//Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
            let fname,lname;
            function getFullName(fname,lname){
                
                return console.log(" "+fname+ " " +lname+" ");
            }getFullName("Raja","Raman");
            // Output:  Raja Raman 

//------------------------------------------------------------------------------------------------------------------------------------------

//Write a function called “getLengthOfWord”.
//Given a word, “getLengthOfWord” returns the length of the given word.
            let inputString = "";
            function getLengthOfWord(inputString){
                if(typeof inputString === 'string') 
                {
                    return inputString.length
                } 
                    return -1
                }
                
            getLengthOfWord(inputString);

            console.log(getLengthOfWord("Maravaazha")) //10
            console.log(getLengthOfWord(8))            //-1
            console.log(getLengthOfWord())             //-1

//------------------------------------------------------------------------------------------------------------------------------------------

//Write a function called “isSameLength”.
//Given two words, “isSameLength” returns whether the given words have the same length.
            let word1= "";
            let word2="";
            function isSameLength(word1, word2){
                if(word1.length == word2.length){
                    return true
                }return "Words does not have same length"
            }isSameLength(word1, word2)

            console.log(isSameLength("malar","malar")) // true
            console.log(isSameLength("thenga","karikku"))// Words does not have same length



//------------------------------------------------------------------------------------------------------------------------------------------
// Create a function to calculate the distance between two points defined by their x, y coordinates
            let array =[];
            let n=0;

            function getNthElement(array,n){
                return  array[n]

            }getNthElement(array,n)

            console.log(getNthElement([1,3,5,7,9],3))  //7

//------------------------------------------------------------------------------------------------------------------------------------------

// Calculate the sum of numbers received in a comma delimited string
            console.log(isEven(6))      //True

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
//--------------------------------------------------END-------------------------------------------------------------------------------------