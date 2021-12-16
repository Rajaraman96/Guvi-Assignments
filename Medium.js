//GUVI: Zen Class — Variables Arrays & Objects

Task 1: Simple Programs todo for variables

1. Declare four variables without assigning values and print them in console

        let man,thing,place,animal
            console.log(man);   //undefined
            console.log(thing); //undefined
            console.log(place); //undefined
            console.log(animal);//undefined

2. How to get value of the variable myvar as output

        var myvar= 1;
            console.log("myvar"); //1

3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
        var firstName ="Rajaraman"; 
        var lastName ="S";
        var martialStatus ="Unmarried";
        var country ="India";
        var age ="25";

4. Declare variables to store your first name, last name, marital status, country and age in a single line

        var firstName ="Rajaraman", lastName ="S" , martialStatus ="Unmarried" , country ="India", age ="25";

5. Declare variables and assign string, boolean, undefined and null data types

        var dataType= "abc"; //string
        var dataType= 123;   //integer
        var dataType= true;  //boolean
        var dataType;        //undefined
        var dataType= null;  //null


6. Convert the string to integer
        // Notes: a. If the first character cannot be converted, NaN is returned.
        //        b.Leading and trailing spaces are ignored.
        //        c.Only the first integer found is returned.
        parseInt("10");         //10
        parseInt("10.00");      //10
        parseInt("10.33");      //10
        parseInt("34 45 66");   //34
        parseInt(" 60 ");       //60
        parseInt("40 years");   //40
        parseInt("He was 40");  //NaN


7. Write 6 statement which provide truthy & falsey values.

    The following values are always falsy:
        a. false        //boolean(false)
        b. 0            //zero
        c. -0           //minus zero
        d. '', "", ``   //empty string
        e. null         //null
        f. undefined    //undefined
        g. NaN          //NaN

    The following values are always truthy:
        a. true         //boolean(true)
        b. {}           //object
        c. []           //Array
        d. 42           //integer   
        e. "0"          //Zero within a String.

