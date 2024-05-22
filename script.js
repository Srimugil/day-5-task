let myResume={
    "basics": {
      "name": "Sri Mugil T",
      "email": "srimugil2001@gamil.com",
      "phone": 6381966868,
      "degree": "B.Sc",
      "location": {
        "address": "2/281, Karanniha illam,kamaraj nagar,taluk policestation backside",
        "pinCode": 635001,
        "city": "Krishnagiri",
        "state": "Tamilnadu",
        
      },
      
    },
    "education": [
      {
        "college": "Gonzaga college of arts and science for women,Krishnagiri",
        "department": "B.Sc",
        "batch": 2021-2024,
      }
    ],
    
    "languages": [
      {
        "language": "Tamil,English",
      }
    ],
    "interests": [
      {
        "name": "reading, writing",
      }
    ]
  }
  console.log(myResume);


  
  console.log("Using for loop:");
  for (let key in resumeData) {
  console.log(`${key}: ${resumeData[key]}`);
}


  console.log("\nUsing for...in loop:");
  for (let key in resumeData) {
  if (resumeData.hasOwnProperty(key)) {
    console.log(`${key}: ${resumeData[key]}`);
  }
}


  console.log("\nUsing for...of loop:");
  for (let value of Object.values(resumeData)) {
  console.log(value);
}

  console.log("\nUsing forEach loop for education:");
  resumeData.education.forEach((education) => {
  console.log(education);
});

  console.log("\nUsing forEach loop for experience:");
  resumeData.experience.forEach((experience) => {
  console.log(experience);
});

  console.log("\nUsing forEach loop for skills:");
  resumeData.skills.forEach((skill) => {
  console.log(skill);
});
        