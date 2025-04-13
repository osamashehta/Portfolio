import { FaArrowUp } from "react-icons/fa";

function ArrowUp() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-[5%] right-[5%] bg-slate-950 w-8 h-8 text-white dark:bg-white dark:text-slate-950  rounded-full flex justify-center items-center"
    >
      <FaArrowUp />
    </button>
  );
}

export default ArrowUp;
