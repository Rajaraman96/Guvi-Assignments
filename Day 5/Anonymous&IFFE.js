  
//1.Print odd numbers in an array
//2.Convert all the strings to title caps in a string array
//3.Sum of all numbers in an array
//4.Return all the prime numbers in an array
//5.Return all the palindromes in an array
//6.Return median of two sorted arrays of same size
//7.Remove duplicates from an array
//8.Rotate an array by k times and return the rotated array

//-------------------------------------------------------------------------------------------------------------------
//1.Print odd numbers in an array 
let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]

let arrOutput = (function (arr) {
    return (arr.filter((item) => {
        return item % 2 !== 0
    }))
})(arr);

console.log("Odd numbers in the array: " + arrOutput) // Output:Odd numbers in the array: 1,3,5,7,9,11,13
//-------------------------------------------------------------------------------------------------------------------


//2.Convert all the strings to title caps in a string array
let inputString = ["hi","rajaraman","welcome","to","guvi."]
let outputString = (function (inputString) {
    return (inputString.map((item) => {
        return item.toUpperCase()
    }))
})(inputString);

console.log(outputString.join(" ")) // Output: HI RAJARAMAN WELCOME TO GUVI.

//-------------------------------------------------------------------------------------------------------------------


//3.Sum of all numbers in an array
let arr2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
let sumOfInput = (function (arr2) {
    return (arr2.reduce((currentTotal, item) => {
        return currentTotal + item
    }))
})(arr2);

console.log("Sum of numbers in the array: " + sumOfInput) // Output: Sum of numbers in the array: 105
//-------------------------------------------------------------------------------------------------------------------


//4.Return all the prime numbers in an array

let arr3 = [10, 12, 14, 15, 16,29,4, 6, 31,8, 9,  37, 41, 43, 47, 53, 59]
let findPrimeNum = (function (arr3) {
    return (arr3.filter((item) => {
        //the data got filtered by below logic
        for (i = 2; i < item; i++) {
            if (item % i === 0)
                return false 
        }
                return true
         }))
    })(arr3);

console.log("Prime numbers in the array: " + findPrimeNum)  //Output: Prime numbers in the array: 29,31,37,41,43,47,53,59

//-------------------------------------------------------------------------------------------------------------------


//5.Return all the palindromes in an array

let arr4 = [10, 12, 14, 15, 16,29,4, 6,11, 22, 33, 44, 55, 66, 77, 88, 59]
let pallindromeArray = (function (arr4) {
    return (arr4.filter((item) => {
        let tempo = item + ""  ; //converting Array elements into String and storing in a variable.

        if ((tempo.split('').reverse().join('')) === tempo) //data will be spilted and reversed and joins, then checking with the data which stored in "tempo" var.
            return true //if the data matches as t with "tempo" var.

        return false

    }))
})(arr4);
console.log("Pallindrome numbers in an array: " + pallindromeArray) 
//Output : Pallindrome numbers in an array: 4,6,11,22,33,44,55,66,77,88

//-------------------------------------------------------------------------------------------------------------------------------------------------


//6.Return median of two sorted arrays of same size
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [8, 9, 10, 12, 16]

let medianOutput = function (arr1, arr2) {

    let lenArr1 = arr1.length
    let lenArr2 = arr2.length

    if (lenArr1 % 2 === 0) {
        console.log("Median of array 1: " + arr1[lenArr1 / 2]) //if the length of an array is a even number.
    } else {
        console.log("Median of array 1: " + arr1[(lenArr1 + 1) / 2]) //if the length of an array is a odd number.
    }

    if (lenArr2 % 2 === 0) {
        console.log("Median of array 2: " + arr2[lenArr2 / 2])//if the length of an array is a even number.
    } else {
        console.log("Median of array 2: " + arr2[(lenArr2 + 1) / 2])//if the length of an array is a odd number.
    }}(arr1, arr2)
//-------------------------------------------------------------------------------------------------------------------



//7.Remove duplicates from an array
//The Set object lets you store unique values of any type, whether primitive values or object references.//
let arr5 = [22, 22, 11, 10, 11, 56, 10, 1, 2, 6, 7, 56, 3, 9]
let newOutput = ((arr5, index) => {

    return [...new Set(arr5)] //creating a new array with unique numbers,storing in newOutput.

})(arr5)

console.log("Array without Duplicates " + newOutput)
//-------------------------------------------------------------------------------------------------------------------



//8.Rotate an array by k times and return the rotated array

let inputArrayforRotation = [0, 1, 5, 6, 7, 9]
let resultArrayShifted = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array

})(inputArrayforRotation, 3) //have to provide the value after arrayname, for no: of times the array have to rotate.

console.log("Array roatated k times: " + resultArrayShifted)
//-------------------------------------------------------------------------------------------------------------------
