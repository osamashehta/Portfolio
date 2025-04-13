function Footer() {
  return (
    <div className="w-full bg-white dark:bg-slate-950 overflow-auto pt-4">
      <div className="footerUp text-start w-4/5 mx-auto m-2 py-4   border-b-[1px] border-slate-950 dark:border-white">
        <p className="uppercase  text-3xl font-semibold dark:text-white flex items-center gap-2">
          <span className="text-blue-600">*</span>
          Contact
        </p>
        <p className="dark:text-white text-slate-950 text-[18px] my-2">
          Reach me at{" "}
          <a
            href="mailto:osama.shehtafathi@gmail.com"
            className="font-bold hover:underline"
          >
            osama.shehtafathi@gmail.com
          </a>
        </p>

        <ul className="my-2 flex justify-start space-x-6">
          <li>
            <a
              href="https://www.linkedin.com/in/osama-shehta/"
              target="_blank"
              className="size-10 dark:bg-white 
                bg-slate-950
                rounded-full  flex justify-center items-center"
            >
              <i className="fa-brands fa-linkedin text-2xl text-white dark:text-slate-950"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/osamashehta"
              target="_blank"
              className="size-10 dark:bg-white  bg-slate-950
                
                rounded-full  flex justify-center items-center"
            >
              <i className="fa-brands fa-github text-2xl text-white dark:text-slate-950"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="   overflow-auto py-2">
        <p className="text-center font-light text-2xl my-6 dark:text-white w-4/5 mx-auto">
          Designed and Developed by{" "}
          <a
            href="https://www.linkedin.com/in/osama-shehta/"
            target="_blank"
            className="dark:text-white text-slate-950 font-bold"
          >
            Osama Saqr
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
