import { useEffect } from "react";
import Projects from "../../Components/Projects/Projects";
import { useDispatch, useSelector } from "react-redux";
import { handleCategory } from "../../rtk/Slices/ProjectSlice";

function Portfolio() {
  let { filteredProjects } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleCategory("all"));
  }, [dispatch]);

  return (
    <>
      <div className="w-full bg-white dark:bg-slate-950 py-12">
        <div className="w-full flex justify-center">
          <div className="w-fit mb-8 dark:text-white text-3xl font-bold border-b-4 border-dashed border-blue-700 dark:border-yellow-200 py-2">
            <span className="text-blue-700 dark:text-yellow-200">My</span>{" "}
            Projects
          </div>
        </div>
        <div className="w-4/5 mx-auto flex ">
          <div className="taps flex flex-wrap w-full justify-center items-center gap-4 my-4">
            <button
              className="py-2 px-4 bg-slate-950  text-white dark:bg-white dark:text-slate-950 text-[18px] font-medium rounded-lg hover:shadow-md hover:shadow-blue-400 "
              onClick={() => dispatch(handleCategory("all"))}
            >
              All Projects
            </button>
            {/* <button
              className="py-2 px-4 bg-blue-700  text-white dark:bg-white dark:text-slate-950 text-[18px] font-medium rounded-lg hover:shadow-md hover:shadow-blue-400 "
              onClick={() => dispatch(handleCategory("html"))}
            >
              HTML & CSS
            </button> */}
            {/* <button
              className="py-2 px-4 bg-blue-700  text-white dark:bg-white dark:text-slate-950 text-[18px] font-medium rounded-lg hover:shadow-md hover:shadow-blue-400 "
              onClick={() => dispatch(handleCategory("bootstrap"))}
            >
              Bootstrap
            </button> */}
            <button
              className="py-2 px-4 bg-slate-950  text-white dark:bg-white dark:text-slate-950 text-[18px] font-medium rounded-lg hover:shadow-md hover:shadow-blue-400 "
              onClick={() => dispatch(handleCategory("javascript"))}
            >
              JavaScript
            </button>
            <button
              className="py-2 px-4 bg-slate-950  text-white dark:bg-white dark:text-slate-950 text-[18px] font-medium rounded-lg hover:shadow-md hover:shadow-blue-400 "
              onClick={() => dispatch(handleCategory("react"))}
            >
              React
            </button>
          </div>
        </div>
        <div className="projects w-4/5 mx-auto flex flex-wrap justify-center my-2 gap-6">
          {filteredProjects.map((projects) => (
            <Projects key={projects.id} project={projects} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
