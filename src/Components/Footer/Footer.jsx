function Footer() {
  return (
    <div className="w-full bg-slate-200 dark:bg-slate-900 overflow-auto">
      <div className="footerUp text-center w-4/5 mx-auto m-2 py-4   border-b-[1px] border-slate-500">
        <p className="uppercase  text-3xl font-semibold dark:text-white ">
          FIND ME ON
        </p>
        <p className="my-4 dark:text-white ">
          Feel free to{" "}
          <span className="text-blue-700 dark:text-emerald-500 font-semibold">
            connect
          </span>{" "}
          with me
        </p>
        <ul className="my-2 flex justify-center space-x-6">
          <li>
            <a
              href="https://www.linkedin.com/in/osama-shehta/"
              target="_blank"
              className="size-10 dark:bg-white 
                bg-blue-800
                rounded-full  flex justify-center items-center"
            >
              <i className="fa-brands fa-linkedin text-2xl text-white dark:text-emerald-700"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/osamashehta"
              target="_blank"
              className="size-10 dark:bg-white  bg-blue-800
                
                rounded-full  flex justify-center items-center"
            >
              <i className="fa-brands fa-github text-2xl text-white dark:text-emerald-700"></i>
            </a>
          </li>
          <li>
            <a
              href="mailto:osama.shehtafathi@gmail.com"
              target="_blank"
              className="size-10 dark:bg-white bg-blue-800
                
                rounded-full  flex justify-center items-center"
            >
              <i className="fa-regular fa-envelope text-2xl text-white dark:text-emerald-700"></i>
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
            className="text-blue-700 dark:text-emerald-500 font-bold"
          >
            Osama Shehta
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
