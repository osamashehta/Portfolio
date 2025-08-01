// import CV from "../../assets/Osama_Saqr_Frontend_Developer.pdf";
function DownloadCV() {
  return (
    <>
      <div className="flex justify-center items-center my-6">
        <a href='https://drive.google.com/file/d/1UF7l6MoAuvBOx2WIFuAF36fbdHqwbRgh/view?usp=sharing' download="MyExampleDoc" target="_blank">
          <button className="px-6 py-3 bg-slate-950 text-white dark:text-slate-950  dark:bg-white font-semibold rounded-lg hover:scale-110  transition-all duration-500">
            Download CV
          </button>
        </a>
      </div>
    </>
  );
}

export default DownloadCV;
