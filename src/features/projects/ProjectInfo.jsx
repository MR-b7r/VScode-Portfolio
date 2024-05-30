import pizza from "../../assets/images/pizza.jpeg";
import vscode from "../../assets/images/vscode.jpeg";
import oasis from "../../assets/images/wild-oasis.jpeg";
export const ProjectInfo = [
  {
    title: "Wild-Oasis",
    description:
      "Allows users to book rooms in various cabins with functionalities to Edit, Add, and Delete bookings. Utilizes Supabase for state management and efficient data handling. Includes user authentication features such as Login, Signup",

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
      "Utilizes Redux for state management, allowing users to customize orders with real-time updates to the cart and total price calculations. Designed with responsive design principles using TailwindCSS for a seamless experience across devices.",

    image: pizza,
    tags: ["react", "tailwind", "redux toolkit"],
    sourceCode: "https://github.com/MR-b7r/Fast-react-pizza",
    demo: "https://react-pizzas-application.netlify.app/",
  },
];
