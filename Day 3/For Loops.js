//--------------//For the given JSON iterate over all for loops (for, for in, for of, forEach)---------------

        //For Loop

        var obj = [
            { person: "Name 1", age: "2", company: "GUVI" },
            { person: "Name 2", age: "5", company: "GUVI geek" },
            { person: "Name 3", age: "8", company: "GUVI geek network" },
          ];
          for (let i = 0; i < obj.length; i++  ){
              console.log(obj[i]);
          }
          

          //For In
          var obj = [
            { person: "Name 1", age: "2", company: "GUVI" },
            { person: "Name 2", age: "5", company: "GUVI geek" },
            { person: "Name 3", age: "8", company: "GUVI geek network" },
          ];
          let b=""
          for (let x in obj){
              console.log(obj[x]);
          }


          //For Of
          var obj = [
            { person: "Name 1", age: "2", company: "GUVI" },
            { person: "Name 2", age: "5", company: "GUVI geek" },
            { person: "Name 3", age: "8", company: "GUVI geek network" },
          ];
          let i=0
        for(let x of obj){
            i += obj[x];
            console.log(x)
        }

        //For Each 

        var obj = obj = [
            { person: "Name 1", age: "2", company: "GUVI" },
            { person: "Name 2", age: "5", company: "GUVI geek" },
            { person: "Name 3", age: "8", company: "GUVI geek network" },
          ];
        obj.forEach(element => console.log(element));


