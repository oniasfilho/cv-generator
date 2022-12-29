const personalInfo = {
    firstName: "Onias",
    lastName: "da Rocha",
    currentJob: "Software Engineer",
    hardSkills: ["Object Oriented Programming","Java","Javascript", "SQL", "Spring Framework", "React", "Node", "TDD", "JUnit", "Docker"],
    softSkills: ["Communicative", "Detail Oriented", "Creative","Motivated", "Dynamic", "Collaborative","Team Player"],
    socialLinks: [
        {
            "website": "github",
            "handle": "/oniasfilho",
            "url": "http://www.github.com/oniasfilho"
        },
        {
            "website": "linkedin",
            "handle": "/oniasfilho",
            "url": "http://www.linkedin.com/in/oniasfilho"
        },
    ],
    contactInfo: {
        phoneNumbers: ["+55 65 98152 2040", "+55 65 3631 1010"],
        email: "onias.filho@gmail.com"
    }
}

const experiences = [
    {
        "timeFrame": "2021",
        "companyName": "Mercado Livre",
        "jobTitle": "Back-end Engineer (Junior)",
        "jobDescription": "API development and maintenance using Spring Boot/ Spring Framework. Multi-source applications, working with Data Lake (Alation) and SQLServer. Assist with architectural design on event driven models",
    },
    {
        "timeFrame": "2020",
        "companyName": "Softplan",
        "jobTitle": "Full Stack Developer",
        "jobDescription": "API development and maintenance using Spring Boot/ Spring Framework. Front-end development with AngularJS, React and JSP. Development of applications with multi-database usage (SQL Server, Oracle, PostgreSQL).",
    },
    {
        "timeFrame": "2020",
        "companyName": "State Secretariat of Finance",
        "jobTitle": "Front-end Developer (Internship)",
        "jobDescription": "Front-end development with React. Back-end development with Spring Boot doing API design and database administration, using Oracle 11g",
    },
]

const certificates = [
    {
        "timeFrame": "2019",
        "name": "TOELF ITP",
        "info": "Score 613/677"
    },
    {
        "timeFrame": "2015",
        "name": "Java Web Development with JavaServer Faces",
        "info": "TDS Technologies"
    },
    {
        "timeFrame": "2012",
        "name": "Web Design",
        "info": "Microlins"
    },
]

export {experiences, certificates, personalInfo};