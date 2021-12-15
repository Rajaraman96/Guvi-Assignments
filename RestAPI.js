//----Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console-----


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
//Use the same rest countries and print all countries name, region, sub region and population--------
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

