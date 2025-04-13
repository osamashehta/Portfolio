import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      inputRef.current.checked = true;
      inputRefMobile.current.checked = true;
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");

      localStorage.setItem("theme", "dark");
      inputRefMobile.current.checked = true;
    }
  };

  const inputRef = useRef();
  const inputRefMobile = useRef();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`w-full   fixed top-0 z-20 px-6 py-2  flex flex-wrap md:flex-nowrap  items-center  font-bold
            transition-all duration-[450ms]
            text-slate-950 bg-white dark:text-white dark:bg-slate-950
      

       `}
      >
        <div className="logo md:w-full w-1/3 py-1">
          <Link to={""} className="uppercase">
            portfolio
          </Link>
        </div>
        <div className="link w-2/3 justify-items-end ">
          <ul className=" space-x-10 hidden md:flex">
            <li className="flex  items-center hover:dark:bg-white hover:dark:text-slate-950  hover:bg-slate-950 hover:text-white px-2 py-1 rounded-lg transition-all duration-[400ms]">
              <NavLink to={"/"} className="uppercase">
                about
              </NavLink>
            </li>
            <li className="flex  items-center hover:dark:bg-white hover:dark:text-slate-950  hover:bg-slate-950 hover:text-white px-2 py-1 rounded-lg transition-all duration-[400ms]">
              <NavLink to={"portfolio"} className="uppercase">
                Projects
              </NavLink>
            </li>

            <li className="px-2 py-1 flex  items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  ref={inputRef}
                  value=""
                  className="sr-only peer"
                  onClick={() => toggleTheme()}
                />

                <span className="ms-3 text-lg font-medium text-gray-900 dark:text-gray-300">
                  <svg
                    className="w-6 h-6  text-black dark:text-white transition duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      className="dark:hidden"
                      d="M12 2C11.45 2 11 2.45 11 3V5C11 5.55 11.45 6 12 6C12.55 6 13 5.55 13 5V3C13 2.45 12.55 2 12 2ZM8.22 6.22C8.63 5.81 8.63 5.19 8.22 4.78L6.78 3.34C6.37 2.93 5.75 2.93 5.34 3.34C4.93 3.75 4.93 4.37 5.34 4.78L6.78 6.22C7.19 6.63 7.81 6.63 8.22 6.22ZM18.66 3.34C18.25 2.93 17.63 2.93 17.22 3.34L15.78 4.78C15.37 5.19 15.37 5.81 15.78 6.22C16.19 6.63 16.81 6.63 17.22 6.22L18.66 4.78C19.07 4.37 19.07 3.75 18.66 3.34ZM4 13C3.45 13 3 13.45 3 14C3 14.55 3.45 15 4 15H6C6.55 15 7 14.55 7 14C7 13.45 6.55 13 6 13H4ZM20 13H18C17.45 13 17 13.45 17 14C17 14.55 17.45 15 18 15H20C20.55 15 21 14.55 21 14C21 13.45 20.55 13 20 13ZM12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8Z"
                    />
                    <path
                      className="hidden dark:block"
                      d="M12 2C11.45 2 11 2.45 11 3V9C11 9.55 11.45 10 12 10C12.55 10 13 9.55 13 9V3C13 2.45 12.55 2 12 2ZM4.93 4.93C5.34 4.52 5.34 3.9 4.93 3.49C4.52 3.08 3.9 3.08 3.49 3.49C3.08 3.9 3.08 4.52 3.49 4.93C3.9 5.34 4.52 5.34 4.93 4.93ZM19.07 4.93C19.48 4.52 19.48 3.9 19.07 3.49C18.66 3.08 18.04 3.08 17.63 3.49C17.22 3.9 17.22 4.52 17.63 4.93C18.04 5.34 18.66 5.34 19.07 4.93ZM12 18C11.45 18 11 18.45 11 19V21C11 21.55 11.45 22 12 22C12.55 22 13 21.55 13 21V19C13 18.45 12.55 18 12 18ZM4.93 19.07C4.52 19.48 3.9 19.48 3.49 19.07C3.08 18.66 3.08 18.04 3.49 17.63C3.9 17.22 4.52 17.22 4.93 17.63C5.34 18.04 5.34 18.66 4.93 19.07ZM19.07 19.07C19.48 18.66 19.48 18.04 19.07 17.63C18.66 17.22 18.04 17.22 17.63 17.63C17.22 18.04 17.22 18.66 17.63 19.07C18.04 19.48 18.66 19.48 19.07 19.07ZM15 12C15 13.65 13.65 15 12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9C13.65 9 15 10.35 15 12Z"
                    />
                  </svg>
                </span>
              </label>
            </li>
          </ul>

          <div className="flex  items-center px-2 py-1">
            <label className="inline-flex items-center cursor-pointer  md:hidden me-4">
              <input
                type="checkbox"
                ref={inputRefMobile}
                value=""
                className="sr-only peer"
                onClick={() => toggleTheme()}
              />

              <span className="ms-3 text-lg font-medium text-gray-900 dark:text-gray-300">
                <svg
                  className="w-6 h-6  text-black dark:text-white transition duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    className="dark:hidden"
                    d="M12 2C11.45 2 11 2.45 11 3V5C11 5.55 11.45 6 12 6C12.55 6 13 5.55 13 5V3C13 2.45 12.55 2 12 2ZM8.22 6.22C8.63 5.81 8.63 5.19 8.22 4.78L6.78 3.34C6.37 2.93 5.75 2.93 5.34 3.34C4.93 3.75 4.93 4.37 5.34 4.78L6.78 6.22C7.19 6.63 7.81 6.63 8.22 6.22ZM18.66 3.34C18.25 2.93 17.63 2.93 17.22 3.34L15.78 4.78C15.37 5.19 15.37 5.81 15.78 6.22C16.19 6.63 16.81 6.63 17.22 6.22L18.66 4.78C19.07 4.37 19.07 3.75 18.66 3.34ZM4 13C3.45 13 3 13.45 3 14C3 14.55 3.45 15 4 15H6C6.55 15 7 14.55 7 14C7 13.45 6.55 13 6 13H4ZM20 13H18C17.45 13 17 13.45 17 14C17 14.55 17.45 15 18 15H20C20.55 15 21 14.55 21 14C21 13.45 20.55 13 20 13ZM12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8Z"
                  />
                  <path
                    className="hidden dark:block"
                    d="M12 2C11.45 2 11 2.45 11 3V9C11 9.55 11.45 10 12 10C12.55 10 13 9.55 13 9V3C13 2.45 12.55 2 12 2ZM4.93 4.93C5.34 4.52 5.34 3.9 4.93 3.49C4.52 3.08 3.9 3.08 3.49 3.49C3.08 3.9 3.08 4.52 3.49 4.93C3.9 5.34 4.52 5.34 4.93 4.93ZM19.07 4.93C19.48 4.52 19.48 3.9 19.07 3.49C18.66 3.08 18.04 3.08 17.63 3.49C17.22 3.9 17.22 4.52 17.63 4.93C18.04 5.34 18.66 5.34 19.07 4.93ZM12 18C11.45 18 11 18.45 11 19V21C11 21.55 11.45 22 12 22C12.55 22 13 21.55 13 21V19C13 18.45 12.55 18 12 18ZM4.93 19.07C4.52 19.48 3.9 19.48 3.49 19.07C3.08 18.66 3.08 18.04 3.49 17.63C3.9 17.22 4.52 17.22 4.93 17.63C5.34 18.04 5.34 18.66 4.93 19.07ZM19.07 19.07C19.48 18.66 19.48 18.04 19.07 17.63C18.66 17.22 18.04 17.22 17.63 17.63C17.22 18.04 17.22 18.66 17.63 19.07C18.04 19.48 18.66 19.48 19.07 19.07ZM15 12C15 13.65 13.65 15 12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9C13.65 9 15 10.35 15 12Z"
                  />
                </svg>
              </span>
            </label>

            <button
              className="flex md:hidden "
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen ? (
          <div className="link-mobile w-full text-center my-2  md:hidden ">
            <ul className="md:w-full">
              <li className="flex justify-center  items-center   ">
                <NavLink to={"/"} className="uppercase hover:dark:bg-white hover:dark:text-slate-950  hover:bg-slate-950 hover:text-white px-2 py-1 rounded-lg">
                  about
                </NavLink>
              </li>
              <li className="flex justify-center  items-center  ">
                <NavLink to={"portfolio"} className="uppercase hover:dark:bg-white hover:dark:text-slate-950  hover:bg-slate-950 hover:text-white px-2 py-1 rounded-lg">
                  Projects
                </NavLink>
              </li>
             
            </ul>
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
}

export default Nav;
