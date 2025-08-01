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
  SiFirebase,
  SiFormik,
  SiGitlab,
  SiI18Next,
  SiJquery,
  SiPostman,
  SiPusher,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

function SkillsContainer() {
  const skills = [
    {
      id: 1,
      brand: <FaHtml5 />,
      brandName: "HTML",
    },
    {
      id: 2,
      brand: <FaCss3 />,
      brandName: "CSS",
    },
    {
      id: 3,
      brand: <FaBootstrap />,
      brandName: "Bootstrap",
    },
    {
      id: 4,
      brand: <IoLogoJavascript />,
      brandName: "Javascript",
    },
    {
      id: 5,
      brand: <SiAxios />,
      brandName: "Axios",
    },
    {
      id: 6,
      brand: <SiJquery />,
      brandName: "jQuery",
    },
    {
      id: 7,
      brand: <FaReact />,
      brandName: "React",
    },
    {
      id: 8,
      brand: <SiReactrouter />,
      brandName: "React Router",
    },
    {
      id: 9,
      brand: <RiTailwindCssFill />,
      brandName: "Tailwind",
    },
    {
      id: 11,
      brand: <SiReactquery />,
      brandName: "TanStack Query",
    },
    {
      id: 12,
      brand: <SiTypescript />,
      brandName: "Typescript",
    },
    {
      id: 13,
      brand: <RiNextjsFill />,
      brandName: "Next.js",
    },
    {
      id: 14,
      brand: <SiRedux />,
      brandName: "Redux",
    },
    {
      id: 15,
      brand: <SiFormik />,
      brandName: "Formik",
    },
    {
      id: 16,
      brand: <SiZod />,
      brandName: "Zod",
    },
    {
      id: 17,
      brand: <SiGitlab />,
      brandName: "Gitlab",
    },
    {
      id: 18,
      brand: <SiPostman />,
      brandName: "Postman",
    },
    {
      id: 19,
      brand: <SiSass />,
      brandName: "Sass",
    },
    {
      id: 20,
      brand: <SiReacthookform />,
      brandName: "React Hook Form",
    },
    {
      id: 21,
      brand: <SiAdobexd />,
      brandName: "Adobe XD",
    },
    {
      id: 22,
      brand: <FaFigma />,
      brandName: "Figma",
    },
    {
      id: 23,
      brand: <FaGitAlt />,
      brandName: "Git",
    },
    {
      id: 24,
      brand: <FaGithub />,
      brandName: "Github",
    },
    {
      id: 25,
      brand: <SiFirebase />,
      brandName: "Firebase",
    },
    {
      id: 26,
      brand: <TbBrandFramerMotion />,
      brandName: "Framer Motion",
    },
    {
      id: 27,
      brand: <SiPusher />,
      brandName: "Pusher",
    },
    {
      id: 28,
      brand: <SiShadcnui />,
      brandName: "Shadcn UI",
    },
    {
      id: 29,
      brand: <SiI18Next />,
      brandName: "i18next",
    },
  ];
  return (
    <>
      {skills.map((skill) => (
        <Skills
          key={skill.id}
          brand={skill.brand}
          brandName={skill.brandName}
        />
      ))}
    </>
  );
}

export default SkillsContainer;
