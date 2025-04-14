import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import DownloadCV from "../DownloadCV/DownloadCV";

const AboutHeader = () => {
  return (
    <>
      <div className="about md:flex flex-wrap w-4/5 mx-auto m-6">
        <div className="w-full text-xl tracking-wider dark:text-white font-serif leading-10">
          <ul className="list-disc list-inside space-y-4">
            <li>
              I'm{" "}
              <span className="text-2xl font-semibold text-blue-700 dark:text-yellow-200">
                Osama Shehta Saqr
              </span>
              , a Frontend Developer from Egypt.
            </li>
            <li>
              I currently work at{" "}
              <span className="text-2xl font-semibold text-blue-700 dark:text-yellow-200">
                Almasader Alraqmia
              </span>
              , where I've built and maintained over 8 web applications using
              React.js, Next.js, and TypeScript.
            </li>
            <li>
              I focus on optimizing performance and user experience while
              implementing responsive, accessible UI with Tailwind CSS and
              ShadCN UI. I regularly collaborate with designers and backend
              developers to deliver high-quality, scalable solutions.
            </li>
            <li>
              Before that, I interned at{" "}
              <span className="text-2xl font-semibold text-blue-700 dark:text-yellow-200">
                Route Academy
              </span>
              , where I developed dynamic web apps using React, Next.js, and
              Vanilla JavaScript. I leveraged tools like Redux Toolkit, TanStack
              Query, and RESTful APIs to ensure smooth, efficient data handling.
            </li>
            <li>
              These experiences have shaped my development mindset, blending
              performance, accessibility, and clean architecture into every
              project I build.
            </li>
          </ul>
        </div>

        <div className="mt-2">
          <h3 className="dark:text-white text-2xl font-bold border-b-2 border-solid border-blue-700 dark:border-yellow-200 w-fit mb-4">
            Projects
          </h3>
          <div className="flex flex-col gap-4">
            <div>
              <a
                href="https://github.com/osamashehta/Dashboard-Trainer-Management"
                target="_blank"
              >
                <h3 className="dark:text-white text-2xl font-bold flex items-center gap-2 ">
                  Trainer Management Application Dashboard{" "}
                  <FaExternalLinkAlt className="text-blue-700 dark:text-yellow-200" />
                </h3>
              </a>
              <p className="text-[18px] italic">
                A modern web application designed for managing educational
                courses with full CRUD functionality. Built using React and
                React Router, the dashboard allows admins to create, view,
                update, and delete course details in a clean, responsive UI.
              </p>
            </div>

            <div>
              <a
                href="https://github.com/osamashehta/Cartify"
                target="_blank"
              >
                <h3 className="dark:text-white text-2xl font-bold flex items-center gap-2 ">
                  Cartify{" "}
                  <FaExternalLinkAlt className="text-blue-700 dark:text-yellow-200" />
                </h3>
              </a>
              <p className="text-[18px] italic">
                A fully functional e-commerce web application built with React,
                Tailwind CSS, React Router Dom, Axios, Tanstack query, Formik,
                Yup, and various libraries to provide a seamless shopping
                experience. The app includes user authentication, product
                browsing, filtering, cart management, order placement, and
                checkout functionality.
              </p>
            </div>
            <div>
              <Link to="/portfolio" className="flex items-center gap-2">
                <p className="font-bold border-b-2 border-solid border-blue-700 dark:border-yellow-200 text-xl">
                  All projects{" "}
                </p>
                <FaExternalLinkAlt className="text-blue-700 dark:text-yellow-200" />
              </Link>
            </div>
          </div>
        </div>

        <div className="cv w-full">
          <DownloadCV />
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
