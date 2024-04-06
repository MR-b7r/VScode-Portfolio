import pizza from "../../assets/images/pizza.jpeg";
import vscode from "../../assets/images/vscode.jpeg";
import oasis from "../../assets/images/wild-oasis.jpeg";
export const ProjectInfo = [
  {
    title: "Wild-Oasis",
    description:
      "World Wise is an interactive web application (NOT responsive). User could book room of variance Cabins that user can Edit, Add, Delete. Login, Signup with verification message would be sent via provided email.Forgot Password that will send a message to provided email to make a new password",

    image: oasis,
    tags: [
      "react",
      "Styled Componenets",
      "Context API",
      "React Rotuer",
      "supabase",
      "Context API",
    ],
    sourceCode: "https://github.com/MR-b7r/Wild-Oasis",
    demo: "https://wildl-oasis.netlify.app",
  },
  {
    title: "VS Code Portfolio",
    description:
      "A Portfolio built like VS Code Themes with react.js & TailwindCSS and some other cool stuff",

    image: vscode,
    tags: ["react", "tailwind", "Context API"],
    sourceCode: "",
    demo: "",
  },
  {
    title: "Fast React Pizza",
    description:
      "a simulate to real Pizza store, where you can order and view the available Pizzas",

    image: pizza,
    tags: ["react", "tailwind", "redux toolkit"],
    sourceCode: "https://github.com/MR-b7r/Fast-react-pizza",
    demo: "https://react-pizzas-application.netlify.app/",
  },
];
