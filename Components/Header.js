function Header() {
  return (
    <div className=" pt-20 px-12 mx-auto max-w-7xl">
      <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="mb-8 text-4xl font-bold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight dark:text-gray-50">
          <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-purple-600 to-blue-400  lg:inline">
            Become
          </span>{" "}
          <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-400 to-purple-500  lg:inline">
            Super
          </span>{" "}
          <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-purple-500 to-red-500  lg:inline">
            Learner
          </span>
        </h1>

        <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24 dark:text-gray-400">
          "A man who reads too much and uses his own brain too little falls into
          lazy habits of thinking." –Albert Einstein
        </p>
      </div>
    </div>
  );
}

export default Header;
