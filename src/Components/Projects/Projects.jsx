import { FaGithub, FaLink } from "react-icons/fa";
import Carousel from "../Carousel/Carousel";
import SEO from "../SEO/SEO";
import { Link } from "react-router-dom";

function Projects({ project }) {
  return (
    <>
      <SEO title={"Projects"} description={"Projects"} />
      <div className="w-full md:w-2/5 border-slate-950 dark:border-white border-2 p-2 rounded-xl space-y-2 flex flex-wrap justify-center   hover:rotate-2 transition-all duration-500">
        <div className="img text-center ">
          <img src={project.img} alt="" className="w-full rounded-xl" />
        </div>
        <h3 className="dark:text-white  text-[18px] font-bold border-b-2 border-solid border-slate-950 dark:border-white ">
          {project.title}
        </h3>
        <p className={` ${project.img? "line-clamp-3":"line-clamp-5"}  text-left  dark:text-white w-full`}>
          {project.description}
        </p>
        <Link
          to={`/portfolio/${project.id}`}
          aria-label="See More"
          className="text-slate-950 dark:text-white text-xl font-semibold"
          // onClick={() => {
          //   dispatch(handleCurrentIndex(project.id));
          //   dispatch(handleOpen());
          // }}
        >
          See More...
        </Link>
        {/* <button
          className="text-slate-950 dark:text-white text-xl font-semibold"
          onClick={() => {
            dispatch(handleCurrentIndex(project.id));
            dispatch(handleOpen());
          }}
        >
          See More...
        </button> */}
        {project.demoURL && project.githubURL && (
          <div className="info flex justify-center w-full space-x-4 ">
            <a
              href={project.demoURL}
              target="_blank"
              className="text-slate-950 dark:text-white"
            >
              <FaLink />
            </a>
            <a
              href={project.githubURL}
              target="_blank"
              className="text-slate-950 dark:text-white"
            >
              <FaGithub />
            </a>
          </div>
        )}
      </div>
      <Carousel />
    </>
  );
}

export default Projects;
