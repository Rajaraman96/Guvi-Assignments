// 1. -----How to compare two JSON have the same properties without order?...\\
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
var flag=true;

if(Object.keys(obj1).length == Object.keys(obj2).length){ //check's the length of both objects are equal and also 
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) { //check's the Key values of objects are equal
            continue; //if both objects have same key's also same length,then return's TRUE
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("Is objects equal ? "+flag);



//2.----Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console-----


        // This enables a Web page to update just part of a page without disrupting what the user is doing.
var xhr = new XMLHttpRequest(); 
xhr.open("GET", "https://restcountries.com/v2/regionalbloc/eu");
xhr.send();
xhr.onload = function () {
        // Request finished. Do processing here.
    if (xhr.status >= 200 && xhr.status <= 300) {
        let data = JSON.parse(this.response);

        //Iterating the data displaying output
        for(let i=0; i<data.length;i++)
                {console.log(`
      Flag:${data[i].flag},
     


      `)};

      } else 
     
      {
        console.log(this.response);
      }

      
    
    }; 



///-----------------------------\\\
//3. Use the same rest countries and print all countries name, region, sub region and population--------
var xhr = new XMLHttpRequest(); 
xhr.open("GET", "https://restcountries.com/v2/regionalbloc/eu");
xhr.send();
xhr.onload = function () {
        // Request finished. Do processing here.
    if (xhr.status >= 200 && xhr.status <= 300) {
        let data = JSON.parse(this.response);

        //Iterating the data displaying output
        for(let i=0; i<data.length;i++)
                {console.log(`
      Country:${data[i].name},
      Region:${data[i].region},
      Sub-Region:${data[i].subregion},
      Population:${data[i].population},


      `)};

      } else 
     
      {
        console.log(this.response);
      }

      
    
    }; 

