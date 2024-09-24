import admin from "../assets/admin.jpg";
import dgital from "../assets/DGital.png";
import Crud from "../assets/crud.jpg";
import Calc from "../assets/Calc.png";
import groco from "../assets/groco.png";
import ai from "../assets/ai.png";

const data = [
  {
    // subtitle: "AI Chat App",
    title: "AI Chat App",
    pimg: ai,
    link: "https://main--ai-chatapp-vib.netlify.app/",
    description:
      "Developed a fully functional AI-based chat application using modern web technologies (React, JavaScript, etc). Integrated Google Gemini 2.0 API for enhanced AI-driven features,enabling real-time, responses within the chat application.",
  },
  {
    subtitle: "DGital",
    title: "Human Resource App",
    pimg: dgital,
    link: "https://github.com/Vibudh08/DGital",
    description:
      "Created a Human Resource website on ReactJs during internship. Used API for data integration.",
  },
  {
    // subtitle: "Admin Panel",
    title: "Admin Panel",
    pimg: admin,
    link: "https://github.com/Vibudh08/Admin_Panel_with_PHP",
    description: [
      "Created using PHP and MySQL. ",
      "User registration with validation for fields like email, password. ",
      "User login with authentication by using session. ",
      "User roles and permissions for authorization. ",
      "CRUD operations for user data",
    ],
  },

  {
    subtitle: "Groco",
    title: "Grocery Web Application",
    pimg: groco,
    link: "https://groco-store-vib.netlify.app/",
    description:
      "E-commerce Grocery Management Store created as college project.",
  },

  {
    // subtitle: "CRUD with User Auth",
    title: "CRUD Operations",
    pimg: Crud,
    link: "https://github.com/Vibudh08/CRUD-with-User-Authentiation-in-PHP",
    description:
      "Create, Retrieve, Update and Delete operations. Created by using PHP and MySQL.",
  },

  {
    // subtitle: "Calculator",
    title: "Calculator",
    pimg: Calc,
    link: "https://calculator-vib.netlify.app/",
    description:
      "Calculator as a mini project created by using html, css and javascript.",
  },
];

export default data;
