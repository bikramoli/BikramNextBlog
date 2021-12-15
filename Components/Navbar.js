import { useState, useEffect } from "react";
import Link from "next/link";
import { BiCode, BiTerminal } from "react-icons/bi";
import { SiAboutDotMe } from "react-icons/si";
import { BiSun, BiMoon } from "react-icons/bi";
import { VscGithub, VscPerson } from "react-icons/vsc";
import { AiOutlineGoogle } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { FaGithub, FaHome, FaSearch, FaUser ,FaCode } from "react-icons/fa";


function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [viewAlert, setViewAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    
  }, []);

  const toggleTheme = () => {
    if (isMounted) {  
      setTheme(theme === "light" ? "dark" : "light");
    }
  };
  const handelSignOut = () => {
   
  };

  const handelSignIn = () => {
   
      
  };

  return (
    <>
      
<nav  className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-50">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <Link href="/"> 
    <a  className="flex hover:text-indigo-500">
                  <span className="text-xl font-semibold">
                    <FaCode className="text-xl" />
                  </span>
                  <span className="mx-3 font-semibold text-base md:text-base">
                    Web-Infosys
                  </span>
    </a>
    </Link>
 
  <div className="flex md:order-2">
      <div className="relative hidden mr-3 md:mr-0 md:block">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          
        </div>
      <input type="text" id="email-adress-icon" className="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div>
      <button data-collapse-toggle="mobile-menu-3" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-3" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
              <button className="flex items-center mx-2 lg:mx-4 text-base text-gray-800 hover:text-indigo-600 dark:text-gray-500">
                <span className="text-xl">
                  {isLogin ? (
                    <IoLogOutOutline
                      className="text-xl"
                      onClick={handelSignOut}
                    />
                  ) : (
                    <AiOutlineGoogle
                      className="text-xl"
                      onClick={handelSignIn}
                    />
                  )}
                </span>
              </button>
      </li>
      <li>
              <Link href="/about">
                <a className="flex items-center mx-2  lg:mx-4 text-base text-gray-800 hover:text-indigo-600 dark:text-gray-500">
                  <span className="text-xl ">
                    <FaUser className="text-xl" />
                  </span>
                </a>
              </Link>
      </li>
      <li>
              <a
                className="flex items-center mx-2 lg:mx-4 text-black-800 hover:text-indigo-600 dark:text-gray-500"
                href="https://github.com/soumyajit4419"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-lg">
                  <VscGithub className="text-xl" />
                </span>
              </a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;
