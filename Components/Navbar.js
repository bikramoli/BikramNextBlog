import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { BiTerminal } from "react-icons/bi";
import { BiSun, BiMoon } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";


import { IoLogOutOutline } from "react-icons/io5";


function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true);
  }, []);
 
  const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
  };
 

  return (
    <>
      
      <header className="fixed w-full border-t-4 bg-white dark:bg-dark border-indigo-600 dark:border-indigo-900 shadow dark:shadow-2 z-50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <a className="flex items-center hover:text-indigo-600 text-gray-800 dark:text-gray-50">
                  <span className="text-xl font-semibold">
                    <BiTerminal className="text-xl" />
                  </span>
                  <span className="mx-3 font-semibold text-base md:text-base">
                    Web-Infosys
                  </span>
                </a>
              </Link>
            </div>

            <div className="flex items-center -mx-2">
              <button
                className="flex items-center mx-2 lg:mx-4 text-base text-gray-800 hover:text-indigo-600 dark:text-gray-50"
                onClick={toggleTheme}
              >
                <span className="text-lg">
                  { theme === "dark" ? (
                    <BiSun className="text-xl" />
                  ) : (
                    <BiMoon className="text-xl" />
                  )}
                </span>
              </button>

              <a
                className="flex items-center mx-2 lg:mx-4 text-gray-800 hover:text-indigo-600 dark:text-gray-50"
                href="https://github.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-lg">
                  <VscGithub className="text-lg" />
                </span>
              </a>

              <button className="flex items-center mx-2 lg:mx-4 text-base text-gray-800 hover:text-indigo-600 dark:text-gray-50">
                <span className="text-lg">
                  <IoLogOutOutline
                      className="text-xl"
                    />
                  
                </span>
              </button>

              <Link href="/about">
                <a className="flex items-center mx-2  lg:mx-4 text-base text-gray-800 hover:text-indigo-600 dark:text-gray-50">
                  <span className="text-xl ">
                    <VscGithub className="text-xl" />
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
