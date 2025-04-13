import SEO from "../../Components/SEO/SEO";
import SkillsContainer from "../../Components/SkillsContainer/SkillsContainer";
import AboutHeader from "../../Components/About/AboutHeader";

function About() {
  return (
    <>
      <SEO title={"About Me"} description={"About Me "} />
      <div className="w-full bg-white dark:bg-slate-950 text-slate-950  dark:text-white py-12">
        <div className="w-full flex justify-center">
          <div className="w-fit  my-3 text-slate-950  dark:text-white text-3xl font-bold border-b-4 border-dashed border-blue-700 dark:border-yellow-200 py-2 ">
            <span className="text-blue-700 dark:text-yellow-200 ">About</span>{" "}
            Me.
          </div>
        </div>


        

<AboutHeader/>


        <div className="about  md:w-4/5 md:mx-auto ">
          <div className="w-full flex justify-center">
            <div className="w-fit  mb-8 dark:text-white text-slate-950 text-3xl font-bold border-b-4 border-dashed border-blue-700 dark:border-yellow-200 py-2 ">
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
