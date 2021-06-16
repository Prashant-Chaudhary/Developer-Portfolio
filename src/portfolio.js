/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Prashant Chaudhary",
  title: "Hi all, I'm Prashant",
  subTitle: emoji(
    "Full Stack Developer 👨‍💻 | Oracle Certified Professional 🤖 | Avid Traveller 🏔 "
  ),
  resumeLink:
    "https://paytm.slack.com/files/U018FAJTJNN/F024C77QNF6/prashantchaudhary_resume_07jun2021.pdf",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/Prashant-Chaudhary",
  linkedin: "https://www.linkedin.com/in/prashantchaudhary9692/",
  outlook: "prashantchaudhary@live.com",
  facebook: "#",
  twitter: "https://twitter.com/PC_9692",
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle:
    "HANDLING ALL DEVELOPMENT ACTIVITIES AND EXPLORING CLOUD",
  skills: [
    emoji(
      "⚡ HLD & LLD Solution Designing for 10000 TPS System"
    ),
    emoji("⚡ Developing Backend Applications with Java , Spring."),
    emoji(
      "⚡ UI/UX Designing , Wireframing, Prototyping"
    ),
    emoji(
      "⚡ Building awesome frontend of the web applications"
    ),
  ],

  softwareSkills: [
    {
      skillName: "java",
      classname: "logos:java",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Spring",
      classname: "logos:spring-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "hibernate",
      classname: "logos:hibernate",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "maven",
      classname: "vscode-icons:file-type-maven",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "jenkins",
      classname: "vscode-icons:file-type-jenkins",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "html",
      classname: "vscode-icons:file-type-html",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "css",
      classname: "vscode-icons:file-type-css",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "javascript",
      classname: "logos:javascript",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "bootstrap",
      classname: "logos:bootstrap",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "jquery",
      classname: "simple-icons:jquery",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "mysql",
      classname: "simple-icons:mysql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "redis",
      classname: "logos:redis",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "oracle",
      classname: "grommet-icons:oracle",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "jira",
      classname: "logos:jira",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "postman",
      classname: "logos:postman-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "aws",
      classname: "logos:aws",
      style: {
        backgroundColor: "transparent",
      },
    }
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Paytm",
      companylogo: require("./assets/images/Paytm-Logo-rec.png"),
      date: "July 2020 – Present",
      desc:
        "Tech Architect / Owner for Multiple Products in Acquiring Domain.",
      descBullets: [
        "Designed Solution for Repayment Deduction for Online Merchants",
        "Being a Tech Owner, discussed the challenges and issues with the Payment Gateway's 10+ domains",
      ],
    },
    {
      role: "Java Developer",
      company: "OxforCaps",
      companylogo: require("./assets/images/oc-rec.png"),
      date: "JULY 2019 - JULY 2020",
      desc:
        "Lead the team to develop the Multiple APIs for internal Web & Mobile Applications like OC Acquisition App , OC Contract Management System which helps in streamlining the entire process from the onboarding of the Landlord to the management of the Contracts and the Student Journey and thus increasing productivity.",
      
    },
    {
      role: "Senior Engineer",
      company: "Honeywell",
      companylogo: require("./assets/images/honeywell-rec.png"),
      date: "MARCH 2016- JULY 2019",
      desc:
        "Youngest Person to Lead the team for the full stack development and design of Honeywell's PDF conversion solution which resulted in Productivity savings of $40000 and enhanced functionalities to reduce the report creation time by 65%, enabling ~ $65000.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
};

// Your certifications

const certifications = {
  certifications: [
    {
      title: "OCJP6",
      subtitle: "- Oracle Certified Professional, Java SE 6 Programmer",
      logo_path: "ocjp6.jpeg",
      certificate_link:
        "https://www.vskills.in/certification/40215-certified-selenium-professional-bharat-babu-kammakatla",
      alt_name: "OCJP",
      color_code: "#F6EAEA",
    },
    {
      title: "Six Sigma",
      subtitle: "- Six Sigma Green Belt, DFSS Core",
      logo_path: "sixsigma.png",
      certificate_link:
        "https://drive.google.com/file/d/1qhh1ZUBB2VPrOaT6bNgiJ5Y2sHmCjvMg/view?usp=drivesdk",
      alt_name: "SixSigma",
      color_code: "#F0FFDD",
    },
    {
      title: "Scrum Fundamental Certified",
      subtitle: "- Scrum Fundamental Certified, ScrumStudy",
      logo_path: "scrum.jpeg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-a80d6e7c-e753-421d-bcee-5a7bc1769f28/",
      alt_name: "ScrumCertified",
      color_code: "#FEF6E6",
    },
    {
      title: "Mean Stack Certification",
      subtitle: "- The Hong Kong University of Science and Technology",
      logo_path: "hkust.jpeg",
      certificate_link:
        "https://coursera.org/share/893f2210f39f5a60d0463b19b469b808",
      alt_name: "Mean",
      color_code: "#E3F1FA",
    }
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.bharatkammakatla.com/selenium-python-automation-framework-how-to-build-cke5vij9p012h9ds1fsaocyax",
      title: "How to build a Selenium Python Automation Framework",
      description:
        "Interested in building a test automation framework with selenium and python? If so, check out here !",
    },
    {
      url:
        "https://blog.bharatkammakatla.com/steps-to-build-a-selenium-java-framework-ckdsi73xg005ga9s1defhemfz",
      title: "Steps to build a Selenium Java Automation Framework",
      description:
        "Interested in building a test automation framework with selenium and java? If so, check out here !",
    },
    {
      url:
        "https://blog.bharatkammakatla.com/face-expression-recognition-using-keras-and-cnns-ckbevmufo0195dis1dfs10kt1",
      title: "Building a Machine Learning model to detect human emotions",
      description:
        "Are you interested to know how machines detect human emotions? If so, check out here !",
    },
    {
      url:
        "https://medium.com/@bharatkammakatla/basic-end-to-end-scikit-learn-workflow-cd9e9a50491b?source=friends_link&sk=b828ac262c172abd7508efcbd00e5bd3",
      title: "Basic End-to-End Scikit-Learn workflow",
      description:
        "Do you want to know how a basic end-to-end scikit-learn workflow is implemented ? If so, check out here !",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9916630039",
  email_address: "prashantchaudhary@live.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  blogSection,
  contactInfo,
  certifications,
};
