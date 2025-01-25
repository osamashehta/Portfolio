function Skills({ brand, brandName }) {
  const IconComponent = brand;

  return (
    <>
      <div className="w-4/12 md:w-2/12 flex  flex-wrap justify-center text-center p-3 border-blue-700 dark:border-blue-500   border-2 transition-all duration-500 box-border hover:scale-105 shadow-sm shadow-blue-600">
        <p className="text-6xl dark:text-green-600 text-blue-600 ">
          {IconComponent}{" "}
        </p>
        <p className="dark:text-white text-lg font-semibold w-full ">
          {brandName}
        </p>
      </div>
    </>
  );
}

export default Skills;
