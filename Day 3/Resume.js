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

// let i=0
//  for(let x of Resume){
//     //  i += Resume[x];
//     for(let y of x.Education){
//         console.log(              
//             `
//             Name:${x.Name},
//             Address:${x.Address},
//             Email:${x.EmailAddress},
//             Phone:${x.ContactDetails},
//             DOB:${x.DOB},
//             //Education1:${y.Course},
//             //Education2:${y.Institution},
//             //Education3:${y.Year},
//             //Education4:${y.Percentage},
//             Hobbies:${x.Hobbies},
//             //CoreCompetencies:${x.CoreCompetencies},
//             //ProfessionalExperience:${x.ProfessionalExperience},
//             Objectives:${x.Objectives},
//             AdditionalSkills:${x.AdditionalSkills},
//             Declaration:${x.Declaration},
//             Summary:${x.Summary}


// `)

//     }
//     };
//--------------------------------------------------------------------------------------------------------------------------------
// let i=0
//  for(let x of Resume){
//     //  i += Resume[x];
   
//         console.log(              
//             `
//             Name:${x.Name},
//             Address:${x.Address},
//             Email:${x.EmailAddress},
//             Phone:${x.ContactDetails},
//             DOB:${x.DOB})`);
//             for(let y of x.Education){
//                     console.log( `
//                             Education1:${y.Course},
//                             Education2:${y.Institution},
//                             Education3:${y.Year},
//                             Education4:${y.Percentage}`)};

//         console.log(`
//             Hobbies:${x.Hobbies}`);
//             for(let z in x.CoreCompetencies){
//                     console.log( `
//                         //CoreCompetencies:${x.CoreCompetencies[z]}`)}};
//             //             ProfessionalExperience:${x.ProfessionalExperience},
//             //             Objectives:${x.Objectives},
//             //             AdditionalSkills:${x.AdditionalSkills},
//             //             Declaration:${x.Declaration},
//             //             Summary:${x.Summary}


// // `)
// //     };
///----------------------------------------------------------------------
// for (let i in Resume) {
//     console.log(`${i}: ${Resume[i]}`)};

 ///----------------------------------------------------------------------   
// for (const key in Resume[i]) {

//     if (typeof(Resume[i][key]===Object )){
//         for (const id in Resume[i][key]){
//             console.log(`${id}: ${Resume[i][key][id]}`)};
//     }
//     console.log(`${key}: ${Resume[i][key]}`)}
// };
///----------------------------------------------------------------------


// const keys = Object.keys(Resume);
// console.log(keys);
// keys.forEach((key, index) => {
//     console.log(`${key}: ${Resume[key]}`);
// });

///----------------------------------------------------------------------

// const keys = Object.keys(Resume);
// const iterate = (Resume) => {
//     keys.forEach(key => {

//     console.log(`key: ${key}, value: ${Resume[key]}`)

//     if (typeof Resume[key] === 'object') {
//             iterate(Resume[key])
//         }
//     })
// }