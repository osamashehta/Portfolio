import { createSlice } from "@reduxjs/toolkit";

import mealImg from "../../assets/meal.png";
import devfolioImg from "../../assets/devfolio.png";
import ninjaImg from "../../assets/ninja.png";
import geekImg from "../../assets/geek.png";
import loginImg from "../../assets/login.png";
import crudImg from "../../assets/crud.png";
import weatherImg from "../../assets/weather.png";
import gameImg from "../../assets/game.png";
import portfolioImg from "../../assets/portfolio.png";

export const projectSlice = createSlice({
  initialState: {
    projects: [
      {
        id: 0,
        title: "Meal",
        category: "html",
        description:
          "Website designed to showcase my skills, projects, and expertise in HTML and CSS.",
        demoURL: "https://osamashehta.github.io/Meal/",
        githubURL: "https://github.com/osamashehta/Meal",
        img: mealImg,
        tools: ["HTML", "CSS"],
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
        tools: ["HTML", "CSS", "Bootstrap"],
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
        tools: ["HTML", "CSS", "Bootstrap"],
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
        tools: ["HTML", "CSS", "Bootstrap"],
      },
      {
        id: 4,
        title: "Login System",
        category: "javascript",
        description:
          "Designed and implemented a user-friendly login system with a Login Page and Sign-Up Page, featuring robust email and password validation. The system ensured intuitive navigation and smooth functionality across all devices, validating user credentials and redirecting successfully logged-in users to the home page.",
        demoURL: "https://osamashehta.github.io/Login-System/",
        githubURL: "https://github.com/osamashehta/Login-System",
        img: loginImg,
        tools: ["HTML", "CSS", "Bootstrap", "Javascript"],
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
        title: "Portfolio",
        category: "react",
        description:
          "This portfolio, built using React, Tailwind CSS, and Redux Toolkit, serves as a professional showcase of my skills, experience, and projects. The application features a dynamic and responsive design.",
        demoURL: "https://osama-shehta.netlify.app/",
        githubURL: "https://github.com/osamashehta/Portfolio",
        img: portfolioImg,
        tools: ["React", "Tailwind CSS", "Redux Toolkit"],
      },
    ],
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
