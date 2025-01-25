import { FaPhone } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import SEO from "../SEO/SEO";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6e211b7a-8060-485b-a31d-11d56534ede1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });

      event.target.reset();
    }
  };
  return (
    <>
      <SEO title={"Contact"} description={"Get in Touch"} />
      <div className="w-full bg-white dark:bg-slate-800 pt-12 pb-6 ">
        <div className="w-full flex justify-center">
          <div className="w-fit  my-3 dark:text-white text-3xl font-bold border-b-4 border-dashed border-blue-700 dark:border-emerald-500 py-2 ">
            <span className="text-blue-700 dark:text-emerald-500 ">Get in</span>{" "}
            Touch
          </div>
        </div>

        <div className="about md:flex flex-wrap w-4/5 mx-auto m-6 gap-12 ">
          <div className="w-full md:w-6/12 space-y-8 mb-8">
            <div className="location flex flex-col md:flex-row items-start md:items-center  md:space-x-2 ">
              <div className="size-10 dark:bg-white bg-blue-800 rounded-full  flex justify-center items-center">
                <IoLocationOutline className="fa-regular fa-envelope text-xl text-white dark:text-emerald-700" />
              </div>

              <p className="text-blue-700 dark:text-emerald-500 md:text-xl font-semibold">
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
                <i className="fa-regular fa-envelope text-2xl text-white dark:text-emerald-700"></i>
              </a>
              <p className="text-blue-700 dark:text-emerald-500 md:text-xl font-semibold">
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

              <p className="text-blue-700 dark:text-emerald-500 md:text-xl font-semibold">
                Phone
              </p>
              <p className=" dark:text-white md:text-xl font-semibold">
                (+20)1068864393
              </p>
            </div>
          </div>
          <form
            onSubmit={onSubmit}
            className="w-full md:w-5/12 flex flex-wrap space-y-4 justify-center  "
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name..."
              className="w-full  bg-gray-300 rounded-lg "
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email@gmail.com"
              className="w-full bg-gray-300 rounded-lg "
              required
            />
            <textarea
              rows={4}
              name="message"
              placeholder="Send a message..."
              className="w-full bg-gray-300 rounded-lg  "
              required
            ></textarea>
            <div className="flex justify-center items-center my-6">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-700 dark:bg-emerald-700 hover:dark:bg-emerald-800 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
