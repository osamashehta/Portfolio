import CV from '../../assets/Osama_Shehta_Frontend_Developer.pdf'
function DownloadCV() {
 

  return (
   
    <>
    <div className="flex justify-center items-center my-6">
        <a href={CV} download="MyExampleDoc" target='_blank'>
            <button className="px-6 py-3 bg-blue-700 dark:bg-emerald-700 hover:dark:bg-emerald-800 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all">Download CV</button>
         </a>
    </div>
    </>
  );
}

export default DownloadCV;