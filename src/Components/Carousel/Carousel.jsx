import { FaGithub, FaLink } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { handleClose } from "../../rtk/Slices/LayerSlice";

function Carousel() {
  let layer = useSelector((state) => state.layer);
  const dispatch = useDispatch();
  let { fondedProject } = useSelector((state) => state.project);

  return (
    <>
      <div
        id="close"
        className={`inset-0 bg-[#00000023] fixed z-20 flex justify-center items-center ${layer}`}
        onClick={(e) => dispatch(handleClose(e))}
      >
        <div
          className="w-[90%] max-w-4xl h-[90%] m-auto flex flex-col md:flex-row bg-slate-900 text-white border-2   border-white rounded-xl relative "
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center border-b-2 md:border-b-0 md:border-r-2 border-white ">
            <img
              src={fondedProject.img}
              alt=""
              className="w-full h-auto rounded-xl object-cover"
            />
            <div className="flex flex-wrap justify-center items-center w-full gap-2 mt-4">
              {fondedProject.length == 0
                ? ""
                : fondedProject.tools.map((e, index) => (
                    <span
                      key={index}
                      className="bg-blue-700 px-[6px] py-[2px] md:px-3 md:py-1 rounded-full text-sm hover:bg-blue-800"
                    >
                      {e}
                    </span>
                  ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
            <div>
            <h3 className="text-xl font-medium md:font-bold border-b-2 pb-2 mb-4 border-white ">
                {fondedProject.title}
              </h3>
              <p className="text-left font-mono text-sm md:text-base mb-4">
                {fondedProject.description}
              </p>
             
            </div>

            <div className="info flex justify-center space-x-8 text-sm md:text-base">
              <a
                href={fondedProject.demoURL}
                target="_blank"
                className="text-white  flex items-center "
              >
                <FaLink className="mr-2" />
                Live Demo
              </a>
              <a
                href={fondedProject.githubURL}
                target="_blank"
                className="text-white  flex items-center"
              >
                <FaGithub className="mr-2" />
                Code
              </a>
            </div>
          </div>

          <IoIosCloseCircle
            onClick={() => dispatch(handleClose())}
            className="absolute top-2 right-2 text-3xl  cursor-pointer text-red-500"
          />
        </div>
      </div>
    </>
  );
}

export default Carousel;
