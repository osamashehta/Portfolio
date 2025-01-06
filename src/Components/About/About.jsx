import about from "../../assets/about.png";
import Skills from "../Skills/Skills";
import { RiTailwindCssFill } from "react-icons/ri";
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
import { SiPostman, SiReactrouter, SiRedux, SiSass } from "react-icons/si";
import DownloadCV from "../DownloadCV/DownloadCV";

function About() {
  return (
    <>
      <div className="w-full bg-white dark:bg-slate-800 pt-12 pb-6">
        <div className="w-full flex justify-center">
          <div className="w-fit  my-3 dark:text-white text-3xl font-bold border-b-4 border-dashed border-blue-700 dark:border-emerald-500 py-2 ">
            <span className="text-blue-700 dark:text-emerald-500 ">About</span>{" "}
            Me.
          </div>
        </div>
        <div className="about md:flex flex-wrap w-4/5 mx-auto m-6">
          <div className="w-full md:w-7/12 text-xl tracking-wider dark:text-white font-serif leading-10">
            <div>
              <p>
                Hello Everyone,{" "}
                <span className="text-2xl font-semibold text-blue-700 dark:text-emerald-500 ">
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
            <div className="w-fit  mb-8 dark:text-white text-3xl font-bold border-b-4 border-dashed border-blue-700 dark:border-emerald-500 py-2 ">
              <span className="text-blue-700 dark:text-emerald-500 ">My</span>{" "}
              Skills
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:gap-4 gap-2">
            <Skills brand={<FaHtml5 />} brandName={"HTML"} />
            <Skills brand={<FaCss3 />} brandName={"CSS"} />
            <Skills brand={<FaBootstrap />} brandName={"Bootstrap"} />
            <Skills brand={<IoLogoJavascript />} brandName={"Javascript"} />
            <Skills brand={<FaReact />} brandName={"React"} />
            <Skills brand={<SiReactrouter />} brandName={"React Router"} />
            <Skills brand={<RiTailwindCssFill />} brandName={"Tailwind"} />
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
