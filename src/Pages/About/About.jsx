import about from "../../assets/about.png";
import DownloadCV from "../../Components/DownloadCV/DownloadCV";
import SEO from "../../Components/SEO/SEO";
import SkillsContainer from "../../Components/SkillsContainer/SkillsContainer";

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
                Hello everyone!I’m{" "}
                <span className="text-2xl font-semibold text-blue-700 dark:text-yellow-200 ">
                  Osama Shehta {""}
                </span>{" "}
                from Egypt.
              </p>
              <p>
                I am a Frontend Developer at{" "}
                <span className="text-2xl font-semibold text-blue-700 dark:text-yellow-200 ">
                  Almasader Alraqmia
                </span>
              </p>
              <p>
                I graduated in 2024 with a degree in Computer and Systems
                Engineering.
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
            <SkillsContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
