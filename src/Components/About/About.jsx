import about from "../../assets/about.png";
import Skills from "../Skills/Skills";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiJquery,
  SiPostman,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTypescript,
} from "react-icons/si";
import DownloadCV from "../DownloadCV/DownloadCV";
import SEO from "../SEO/SEO";

function About() {
  return (
    <>
      <SEO title={"About Me"} description={"About Me "} />
      <div className="w-full bg-white dark:bg-slate-800 py-12">
        <div className="w-full flex justify-center">
          <div className="w-fit  my-3 dark:text-white text-3xl font-bold border-b-4 border-dashed border-blue-700 dark:border-yellow-200 py-2 ">
            <span className="text-blue-700 dark:text-yellow-200 ">About</span>{" "}
            Me.
          </div>
        </div>
        <div className="about md:flex flex-wrap w-4/5 mx-auto m-6">
          <div className="w-full md:w-7/12 text-xl tracking-wider dark:text-white font-serif leading-10">
            <div>
              <p>
                Hello Everyone,{" "}
                <span className="text-2xl font-semibold text-blue-700 dark:text-yellow-200 ">
                  I am Osama Shehta Fathi
                </span>{" "}
                from Egypt.
              </p>
              <p>
                I graduated with a degree in Computer and Systems Engineering
                2024.
              </p>
              <p>
                I am a Frontend Developer, focusing on building responsive and
                user-friendly web applications.
              </p>
            </div>
          </div>
          <div className="w-full md:w-5/12 mt-6">
            <img src={about} alt="" />
          </div>
          <div className="cv w-full">
            <DownloadCV />
          </div>
          <div className="skills"></div>
        </div>
        <div className="about  md:w-4/5 md:mx-auto ">
          <div className="w-full flex justify-center">
            <div className="w-fit  mb-8 dark:text-white text-3xl font-bold border-b-4 border-dashed border-blue-700 dark:border-yellow-200 py-2 ">
              <span className="text-blue-700 dark:text-yellow-200 ">My</span>{" "}
              Skills
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:gap-4 gap-2">
            <Skills brand={<FaHtml5 />} brandName={"HTML"} />
            <Skills brand={<FaCss3 />} brandName={"CSS"} />
            <Skills brand={<FaBootstrap />} brandName={"Bootstrap"} />
            <Skills brand={<IoLogoJavascript />} brandName={"Javascript"} />
            <Skills brand={<SiJquery />} brandName={"jQuery"} />
            <Skills brand={<FaReact />} brandName={"React"} />
            <Skills brand={<SiReactrouter />} brandName={"React Router"} />
            <Skills brand={<RiTailwindCssFill />} brandName={"Tailwind"} />
            <Skills brand={<SiTypescript />} brandName={"Typescript"} />
            <Skills brand={<RiNextjsFill />} brandName={"Next.js"} />
            <Skills brand={<SiRedux />} brandName={"Redux"} />
            <Skills brand={<SiSass />} brandName={"Sass"} />
            <Skills brand={<FaGitAlt />} brandName={"Git"} />
            <Skills brand={<FaGithub />} brandName={"Github "} />
            <Skills brand={<FaFigma />} brandName={"Figma "} />
            <Skills brand={<SiPostman />} brandName={"Postman "} />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
