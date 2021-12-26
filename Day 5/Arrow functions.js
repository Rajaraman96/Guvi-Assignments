
//1. Print odd numbers in an array

        let numberArray = [1, 2, 3, 4, 5, 6, 98, 101, 467]

        numberArray.filter((item) => {

            return item % 2 !== 0;
            console.log("Odd Numbers in Number Array are: " + numberArray)

        });
//-------Output:-------
// 0: 1
// 1: 3
// 2: 5
// 3: 101
// 4: 467

//------------------------------------------------------------------------------------------------------------------------------------------


//2.Convert all the strings to title caps in a string array

        let stringArray = ["hi","rajaraman","welcome","to","guvi."]
        stringArray = stringArray.map((item) => {
            return item.toUpperCase()
        })
        console.log(stringArray.join(" "))// .join will joins the data in an array //Output: HI RAJARAMAN WELCOME TO GUVI.


//------------------------------------------------------------------------------------------------------------------------------------------

//3.Sum of all numbers in an array


        let numberArray = [1, 2, 3, 4, 5, 6, 98, 101, 467]
        let sum = numberArray.reduce((currentTotal, item) => {

            return currentTotal + item

        }, 0)

        console.log("Sum of elements in Number Array: " + sum) //Output: Sum of elements in Number Array: 687

//------------------------------------------------------------------------------------------------------------------------------------------

//4.Return all the prime numbers in an array

        let numberArray = [1, 2, 3, 4, 5, 6, 98, 101, 467]
        console.log("Prime Number is Array are: " +
            numberArray.filter((item) => {

                for (let i = 2; i < item; i++) {
                    if (item % i === 0)
                        return false;
                }
                return item !== 1;

            })) //Output: Prime Number is Array are: 2,3,5,101,467

//------------------------------------------------------------------------------------------------------------------------------------------

//5.Return all the palindromes in an array 

        let arrayPallindrome = [111, 102, 505, 323, 612, 776, 707, 121]

        console.log("Pallindrome Numbers in array are: " +
            arrayPallindrome.filter((item) => {

                let temp = item + "";

                if (temp.split('').reverse().join('') === item + "")
                    return true

                return false

            })) //Output: Pallindrome Numbers in array are: 111,505,323,707,121
//------------------------------------------------------------------------------------------------------------------------------------------