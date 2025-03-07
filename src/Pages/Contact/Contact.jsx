import { FaPhone } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import SEO from "../../Components/SEO/SEO";
import { MdOutlineMail } from "react-icons/md";

function Contact() {
  return (
    <>
      <SEO title={"Contact"} description={"Get in Touch"} />
      <div className="w-full bg-white dark:bg-slate-800 pt-12 pb-6 ">
        <div className="w-full flex justify-center">
          <div className="w-fit  my-3 dark:text-white text-3xl font-bold border-b-4 border-dashed border-blue-700 dark:border-yellow-200 py-2 ">
            <span className="text-blue-700 dark:text-yellow-200 ">Get in</span>{" "}
            Touch
          </div>
        </div>

        <div className="about flex justify-center m-6 gap-12 ">
          <div className="flex flex-col justify-center border border-blue-700 dark:border-yellow-200 p-4   space-y-8 mb-8">
            <div className="location flex flex-col md:flex-row items-start md:items-center  md:space-x-2 ">
              <div className="size-10 dark:bg-white bg-blue-800 rounded-full  flex justify-center items-center">
                <IoLocationOutline className="fa-regular fa-envelope text-xl text-white dark:text-emerald-700" />
              </div>

              <p className="text-blue-700 dark:text-yellow-200 md:text-xl font-semibold">
                Location
              </p>
              <p className=" dark:text-white md:text-xl font-semibold ">
                Egypt
              </p>
            </div>

            <div className="email flex flex-col md:flex-row items-start md:items-center  md:space-x-2">
              <a
                href="mailto:osama.shehtafathi@gmail.com"
                target="_blank"
                className="size-10 dark:bg-white bg-blue-800
                      
                      rounded-full  flex justify-center items-center"
              >
                <MdOutlineMail className="fa-regular fa-envelope text-xl text-white dark:text-emerald-700" />
              </a>
              <p className="text-blue-700 dark:text-yellow-200 md:text-xl font-semibold">
                Email
              </p>
              <p className=" dark:text-white md:text-xl font-semibold ">
                osama.shehtafathi@gmail.com
              </p>
            </div>

            <div className="phone flex flex-col md:flex-row items-start md:items-center  md:space-x-2">
              <div
                className="size-10 dark:bg-white bg-blue-800
                      
                      rounded-full  flex justify-center items-center"
              >
                <FaPhone className="fa-regular fa-envelope text-xl text-white dark:text-emerald-700" />
              </div>

              <p className="text-blue-700 dark:text-yellow-200 md:text-xl font-semibold">
                Phone
              </p>
              <p className=" dark:text-white md:text-xl font-semibold">
                (+20)1068864393
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
