import { FaGithub, FaLink } from "react-icons/fa";
import Carousel from "../Carousel/Carousel";
import { useDispatch } from "react-redux";
import { handleOpen } from "../../rtk/Slices/LayerSlice";
import { handleCurrentIndex } from "../../rtk/Slices/ProjectSlice";

function Projects({ project }) {
 

  const dispatch = useDispatch();



  return (
    <>
      <div className="w-full md:w-2/5 border-blue-500 dark:border-emerald-500 border-2 p-2 rounded-xl space-y-2 flex flex-wrap justify-center hover:shadow-md hover:shadow-blue-400 dark:hover:shadow-emerald-400 hover:rotate-2 transition-all duration-500">
        <div className="img text-center ">
          <img src={project.img} alt="" className="w-full rounded-xl" />
        </div>
        <h3 className="dark:text-white text-2xl font-bold border-b-2 border-solid border-blue-700 dark:border-emerald-500 ">
          {project.title}
        </h3>
        <p className="line-clamp-2 text-left font-mono dark:text-white w-full">
          {project.description}
        </p>
        <button
          className="text-blue-700 dark:text-emerald-500 text-xl font-semibold"
          onClick={() => {
            dispatch(handleCurrentIndex(project.id));
            dispatch(handleOpen());
          }}
        >
          See More...
        </button>
        <div className="info flex justify-center w-full space-x-4 ">
          <a
            href={project.demoURL}
            target="_blank"
            className="text-blue-700 dark:text-emerald-500"
          >
            <FaLink />
          </a>
          <a
            href={project.githubURL}
            target="_blank"
            className="text-blue-700 dark:text-emerald-500"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <Carousel />
    </>
  );
}

export default Projects;
