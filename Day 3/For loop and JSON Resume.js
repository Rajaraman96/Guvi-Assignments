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


//---Create your own resume data in JSON format---

var Resume =
    {Name:'Rajaraman Sreenivasan',
    Address:"Temple Nagar 103 ,Vayalil Puthen Madom, Padinjattinkara Kottarakkara, Kollam,  Kerala, Pincode: 691506",
    EmailAddress : "rajaraman4@outlook.com",
    ContactDetails:" +91 9567298355",
    DOB: "27-Oct-1996",
    Summary:"I, RAJARAMAN SREENIVASAN, a graduate in the Batchelor Of Commerce (Taxation LAW & Accounts)from Kerala University.",
    Education : {Course1:"B.Com (Taxation Law and Accounts)", Institution1: "University of Kerala",Year1: "2016-2018",Percentage1 : "45",
      Course2:"Higher Secondary",Institution2:"Kerala State Board",Year2:"2012-2014",Percentage2:"90",
        Course3:"SSLC",Institution3:"Kerala State Board",Year3:"2012",Percentage3:"85"}
,
    Hobbies:"Dancing, Drawing, Travelling, Reading Novels, Communicating",
    CoreCompetencies:["A good communicator. ","A good team player. ","A good listener. ","A good Motivator. "],
    ProfessionalExperience1:{Organisation:"INFOSYS BPM Ltd.",Designation:"Seniour Process Executive",Duration :"Feb 2020 - Present",RolesandResponsibilities:"Handling aProjct- Mutual Fund,Updating data of all mutual funds in the wordinto the one of the Financial Giant - Bloomberg's Terminal by getting queries through JIRA platform"},
    ProfessionalExperience2:{Organisation:"ICA EDU Skills (Pvt). Ltd",Designation:"Faculty",Duration:"July, 2019 – December, 2019",RolesandResponsibilities:"Teaching Accountancy to 5 different batches consist of 20 students each"}
    ,
    Objectives:"•	To secure a challenging position in a reputable organization that provides me opportunities to expand my learnings, knowledge and skills while making a significant contribution to the success of the company. •	To achieve greater heights in life.",
    AdditionalSkills:[("	Certified in TALLY ERP 9"),("	Certified in SAP (FICO) END User Level"),("	Have intermediate level knowledge of Microsoft Office Package tools i.e. Excel, Word, PowerPoint etc")],
    Declaration:"I do hereby declare that the above particulars of facts and information stated are true, correct and complete to the best of my belief and knowledge."}


 ;


console.log(`Name :${Resume.Name}`);
console.log(`Address :${Resume.Address}`);
console.log(`EmailAddress :${Resume.EmailAddress}`);
console.log(`ContactDetails :${Resume.ContactDetails}`);
console.log(`DOB :${Resume.DOB}`);
console.log(`Summary :${Resume.Summary}`);
console.log(`Education1 :${Resume.Education.Course1} from ${Resume.Education.Institution1} on a period of ${Resume.Education.Year1} with a Percentage of ${Resume.Education.Percentage1}.`);
console.log(`Education2 :${Resume.Education.Course2} from ${Resume.Education.Institution2} on a period of ${Resume.Education.Year2} with a Percentage of ${Resume.Education.Percentage2}.`);
console.log(`Education3 :${Resume.Education.Course3} from ${Resume.Education.Institution3} on a period of ${Resume.Education.Year3} with a Percentage of ${Resume.Education.Percentage3}.`);
console.log(`Hobbies :${Resume.Hobbies}`);
console.log(`CoreCompetencies1 :${Resume.CoreCompetencies}`);
console.log(`ProfessionalExperience :Organisation -${Resume.ProfessionalExperience1.Organisation} Designation- ${Resume.ProfessionalExperience1.Designation} Duration-${Resume.ProfessionalExperience1.Duration} RolesandResponsibilities${Resume.ProfessionalExperience1.RolesandResponsibilities}.`);
console.log(`ProfessionalExperience :Organisation -${Resume.ProfessionalExperience2.Organisation} Designation- ${Resume.ProfessionalExperience2.Designation} Duration-${Resume.ProfessionalExperience2.Duration} RolesandResponsibilities${Resume.ProfessionalExperience2.RolesandResponsibilities}.`);
console.log(`Objectives :${Resume.Objectives}`);
console.log(`AdditionalSkills :${Resume.AdditionalSkills}`);
console.log(`Declaration :${Resume.Declaration}`);
