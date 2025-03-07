import Skills from "../../Components/Skills/Skills";
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
  SiAdobexd,
  SiAxios,
  SiFormik,
  SiGitlab,
  SiJquery,
  SiMui,
  SiPostman,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTypescript,
  SiZod,
} from "react-icons/si";

function SkillsContainer() {
  return (
    <>
      <Skills brand={<FaHtml5 />} brandName={"HTML"} />
      <Skills brand={<FaCss3 />} brandName={"CSS"} />
      <Skills brand={<FaBootstrap />} brandName={"Bootstrap"} />
      <Skills brand={<IoLogoJavascript />} brandName={"Javascript"} />
      <Skills brand={<SiAxios />} brandName={"Axios"} />
      <Skills brand={<SiJquery />} brandName={"jQuery"} />
      <Skills brand={<FaReact />} brandName={"React"} />
      <Skills brand={<SiReactrouter />} brandName={"React Router"} />
      <Skills brand={<RiTailwindCssFill />} brandName={"Tailwind"} />
      <Skills brand={<SiMui />} brandName={"MUI"} />
      <Skills brand={<SiReactquery />} brandName={"React-query"} />
      <Skills brand={<SiTypescript />} brandName={"Typescript"} />
      <Skills brand={<RiNextjsFill />} brandName={"Next.js"} />
      <Skills brand={<SiRedux />} brandName={"Redux"} />
      <Skills brand={<SiSass />} brandName={"Sass"} />
      <Skills brand={<SiReacthookform />} brandName={"React-hook-form"} />
      <Skills brand={<SiFormik />} brandName={"Formik"} />
      <Skills brand={<SiZod />} brandName={"Zod"} />
      <Skills brand={<FaGitAlt />} brandName={"Git"} />
      <Skills brand={<FaGithub />} brandName={"Github "} />
      <Skills brand={<SiGitlab />} brandName={"Gitlab "} />
      <Skills brand={<FaFigma />} brandName={"Figma"} />
      <Skills brand={<SiAdobexd />} brandName={"Adobe xd "} />
      <Skills brand={<SiPostman />} brandName={"Postman "} />
    </>
  );
}

export default SkillsContainer;
