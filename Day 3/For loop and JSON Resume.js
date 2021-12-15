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

        var fruits = obj = [
            { person: "Name 1", age: "2", company: "GUVI" },
            { person: "Name 2", age: "5", company: "GUVI geek" },
            { person: "Name 3", age: "8", company: "GUVI geek network" },
          ];
        fruits.forEach(element => console.log(element));


//---Create your own resume data in JSON format---

var Resume =
    {Name:'Rajaraman Sreenivasan',
    Address:"Temple Nagar 103 ,Vayalil Puthen Madom, Padinjattinkara Kottarakkara, Kollam,  Kerala, Pincode: 691506",
    EmailAddress : "rajaraman4@outlook.com",
    ContactDetails:" +91 9567298355",
    DOB: "27-Oct-1996",
    Summary:"I, RAJARAMAN SREENIVASAN, a graduate in the Batchelor Of Commerce (Taxation LAW & Accounts)from Kerala University.",
    Education :[ {Course:"B.Com (Taxation Law and Accounts", Institution: "University of Kerala",Year: "2016-2018",Percentage : "45"},
        {Course:"Higher Secondary",Institution:"Kerala State Board",Year:"2012-2014",Percentage:"90"},
        {Course:"SSLC",Institution:"Kerala State Board",Year:"2012",Percentage:"85"}]
,
    Hobbies:"Dancing, Drawing, Travelling, Reading Novels, Communicating",
    CoreCompetencies:[{1:"A good communicator."},{2:"A good team player."},{3:"A good listener."},{4:"A good Motivator."}],
    ProfessionalExperience:[
        {Organisation:"INFOSYS BPM Ltd.",Designation:"Seniour Process Executive",Duration :"Feb 2020 - Present",RolesandResponsibilities:"Handling aProjct- Mutual Fund,Updating data of all mutual funds in the wordinto the one of the Financial Giant - Bloomberg's Terminal by getting queries through JIRA platform"},
        {Organisation:"ICA EDU Skills (Pvt). Ltd",Designation:"Faculty",Duration:"July, 2019 – December, 2019",RolesandResponsibilities:"Teaching Accountancy to 5 different batches consist of 20 students each"}
    ],
    Objectives:"•	To secure a challenging position in a reputable organization that provides me opportunities to expand my learnings, knowledge and skills while making a significant contribution to the success of the company. •	To achieve greater heights in life.",
    AdditionalSkills:[("	Certified in TALLY ERP 9"),("	Certified in SAP (FICO) END User Level"),("	Have intermediate level knowledge of Microsoft Office Package tools i.e. Excel, Word, PowerPoint etc")],
    Declaration:"I do hereby declare that the above particulars of facts and information stated are true, correct and complete to the best of my belief and knowledge."}


 ;

 for (let i in Resume) {
  console.log(`${i}: ${Resume[i]}`)};