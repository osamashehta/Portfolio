import { createSlice } from "@reduxjs/toolkit";

import mealImg from "../../assets/meal.png";
import devfolioImg from "../../assets/devfolio.png";
import ninjaImg from "../../assets/ninja.png";
import geekImg from "../../assets/geek.png";
import loginImg from "../../assets/login.png";
import crudImg from "../../assets/crud.png";
import weatherImg from "../../assets/weather.png";
import gameImg from "../../assets/game.png";
import quickImg from "../../assets/quick.jpg";
import portfolioImg from "../../assets/portfolio.png";
import cartifyImg from "../../assets/cartify.jpg";
import dashboardImg from "../../assets/dashboard.png";
import linkImg from "../../assets/link.png";

const projects = [
  {
    id: 0,
    title: "Meal",
    category: "html",
    description:
      "Website designed to showcase my skills, projects, and expertise in HTML and CSS.",
    demoURL: "https://osamashehta.github.io/Meal/",
    githubURL: "https://github.com/osamashehta/Meal",
    img: mealImg,
    tools: "",
  },

  {
    id: 1,
    title: "Devfolio",
    category: "bootstrap",
    description:
      "Fully responsive website that ensures a seamless user experience across all devices. Implemented interactive features to enhance user engagement and functionality on various screen sizes.",
    demoURL: "https://osamashehta.github.io/DevFolio/",
    githubURL: "https://github.com/osamashehta/DevFolio",
    img: devfolioImg,
    tools: "",
  },
  {
    id: 2,
    title: "Ninja",
    category: "bootstrap",
    description:
      "Fully responsive website that ensures a seamless user experience across all devices. Implemented interactive features to enhance user engagement and functionality on various screen sizes.",
    demoURL: "https://osamashehta.github.io/Ninja/",
    githubURL: "https://github.com/osamashehta/Ninja",
    img: ninjaImg,
    tools: "",
  },
  {
    id: 3,
    title: "Geek",
    category: "bootstrap",
    description:
      "Fully responsive website that ensures a seamless user experience across all devices. Implemented interactive features to enhance user engagement and functionality on various screen sizes.",
    demoURL: "https://osamashehta.github.io/Geek/",
    githubURL: "https://github.com/osamashehta/Geek",
    img: geekImg,
    tools: "",
  },
  {
    id: 4,
    title: "Login System",
    category: "react",
    description:
      "Designed and implemented a user-friendly login system with a Login Page and Sign-Up Page, featuring robust email and password validation. The system ensured intuitive navigation and smooth functionality across all devices, validating user credentials and redirecting successfully logged-in users to the home page.",
    demoURL: "https://react-hook-form-rho-six.vercel.app/",
    githubURL: "https://github.com/osamashehta/React-Hook-Form",
    img: loginImg,
    tools: ["React", "TypeScript", "Tailwind CSS", "React-Hook-Form", "Zod"],
  },
  {
    id: 5,
    title: "Bookmark (CRUD)",
    category: "javascript",
    description:
      "Designed and implemented a responsive Bookmark Manager web application with full CRUD (Create, Read, Update, Delete) functionality, including an Archive page for restoring or permanently deleting bookmarks",
    demoURL: "https://osamashehta.github.io/Bookmark-CRUD-Operation/",
    githubURL: "https://github.com/osamashehta/Bookmark-CRUD-Operation",
    img: crudImg,
    tools: ["HTML", "CSS", "Bootstrap", "Javascript"],
  },
  {
    id: 6,
    title: "Weather Forecast",
    category: "javascript",
    description:
      "An innovative and user-friendly Weather Forecast application built with HTML, CSS, and JavaScript. This project fetches real-time weather data using the WeatherAPI and displays current conditions and forecasts for any city or location.",
    demoURL: "https://osamashehta.github.io/Weather-Forecast/",
    githubURL: "https://github.com/osamashehta/Weather-Forecast",
    img: weatherImg,
    tools: ["HTML", "CSS", "Bootstrap", "Javascript", "API"],
  },
  {
    id: 7,
    title: "Game Over",
    category: "javascript",
    description:
      "An interactive and user-friendly Games-OOP application built with HTML, CSS, and JavaScript. This project uses the Free to Play Games Database API to fetch game details based on the user's selected genre and displays a collection of free-to-play games.",
    demoURL: "https://osamashehta.github.io/Games-OOP/",
    githubURL: "https://github.com/osamashehta/Games-OOP",
    img: gameImg,
    tools: ["HTML", "CSS", "Bootstrap", "Javascript", "OOP", "API"],
  },

  {
    id: 8,
    title: "SwiftBuy",
    category: "react",
    description:
      "SwiftBuy is a modern e-commerce web application that provides a seamless shopping experience. Built using React, Redux Toolkit, and Tailwind CSS, this application features a dynamic and responsive design. It enables users to browse products, manage their cart, and switch between light and dark modes effortlessly.",
    demoURL: "https://swift-buy-theta.vercel.app/",
    githubURL: "https://github.com/osamashehta/SwiftBuy",
    img: quickImg,
    tools: ["React", "Tailwind CSS", "Redux Toolkit", "Fake Store API"],
  },
  {
    id: 9,
    title: "Portfolio",
    category: "react",
    description:
      "This portfolio, built using React, Tailwind CSS, and Redux Toolkit, serves as a professional showcase of my skills, experience, and projects. The application features a dynamic and responsive design.",
    demoURL: "https://osama-shehta.netlify.app/",
    githubURL: "https://github.com/osamashehta/Portfolio",
    img: portfolioImg,
    tools: ["React", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    id: 10,
    title: "Cartify",
    category: "react",
    description:
      "A fully functional e-commerce web application built with React, Tailwind CSS, React Router Dom, Axios, Tanstack query, Formik, Yup, and various libraries to provide a seamless shopping experience. The app includes user authentication, product browsing, filtering, cart management, order placement, and checkout functionality.",
    demoURL: "https://cartify-delta.vercel.app/",
    githubURL: "https://github.com/osamashehta/Cartify",
    img: cartifyImg,
    tools: [
      "React",
      "Tailwind CSS",
      "Context Api",
      "React-Router-Dom",
      "Axios",
      "TanStack Query",
      "Formik",
      "Yup",
      "NextUi",
    ],
  },
  {
    id: 11,
    title: "Course and Trainer Management",
    category: "react",
    description:
      "Course and Trainer Management Application Dashboard A modern web application designed for managing educational courses with full CRUD functionality. Built using React and React Router, the dashboard allows admins to create, view, update, and delete course details in a clean, responsive UI.",
    demoURL: "https://dashboard-trainer-management.vercel.app/",
    githubURL: "https://github.com/osamashehta/Dashboard-Trainer-Management",
    img: dashboardImg,
    tools: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React-Router-Dom",
      "React-Hook-Form",
      "Zod",
    ],
  },
  {
    id: 12,
    title: "Linkedin Clone",
    category: "next",
    description:
      "A full-featured social networking web application built using Next.js 15, supporting user authentication, post creation, commenting, reporting, and dynamic content updates — designed for speed, responsiveness, and security.",
    demoURL: "https://link-up-fawn-pi.vercel.app/",
    githubURL: "https://github.com/osamashehta/Link",
    img: linkImg,
    tools: [
      "Next.js",
      "TypeScript",
      "Axios",
      "Tanstack Query",
      "Tailwind CSS",
      "shadcn/ui",
      "React-Hook-Form",
      "Zod",
    ],
  },
];

export const projectSlice = createSlice({
  initialState: {
    projects: projects.reverse(),
    filteredProjects: [],
    currentIndex: 0,
    fondedProject: [],
  },
  name: "projectSlice",
  reducers: {
    handleCategory: (state, action) => {
      const category = action.payload;
      if (category === "all") {
        state.filteredProjects = [...state.projects];
      } else {
        state.filteredProjects = state.projects.filter(
          (project) => project.category === category
        );
      }
    },
    handleCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;

      state.fondedProject = state.projects.find(
        (project) => project.id === state.currentIndex
      );
    },
  },
});

export const { handleCategory, handleCurrentIndex, fondedProject } =
  projectSlice.actions;
export default projectSlice.reducer;
