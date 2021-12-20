import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { BiCode, BiToggleLeft, BiToggleRight, BiWifi, BiWifiOff} from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineGoogle } from "react-icons/ai";
import {signInWithPopup, signOut} from "firebase/auth";
import { auth, provider } from "firebase-admin";

function Navbar({scrollHeight}) {
  const { theme, setTheme } = useTheme();
  const [status, setStatus] = useState();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
   setStatus(window.ononline)
  }, []);
  
  //handle signIn
  const handelSignIn = (e) =>{
    e.preventDefault();
    signInWithPopup(auth, provider)
    .then((res)=>{
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: res.user.displayName,
          photo: res.user.photoURL,
          token: res.user.accessToken,
          uid: res.user.uid
        })
      );
      setIsLogin(true);
    })
    .catch((error)=>{
      console.log(error);
    });
  };

  //handle handelSignOut
  const handelSignOut = () =>{
    e.preventDefault();
    signOut(auth)
    .then((res)=>{
      localStorage.removeItem("user");
      setIsLogin(false);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
  };
  
  return (
    <>
      
      <header className= "fixed w-full border-t-4 bg-white dark:bg-gray-900 border-indigo-600 dark:border-indigo-900 shadow dark:shadow-2 z-50" style={{borderBottom: scrollHeight >= 50 ? theme==="dark"?'solid indigo':'':''}}>
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <a className="flex items-center hover:text-indigo-600 text-gray-800 dark:text-gray-50">
                  <span className="text-xl font-semibold">
                    <BiCode className="text-xl" />
                  </span>
                  <span className="mx-3 font-bold text-base text-red-600 md:text-base">
                    Digit-Infosys
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
                    <BiToggleLeft className="text-3xl" />
                  ) : (
                    <BiToggleRight className="text-3xl" />
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
                  {status ?
                  <BiWifi className="text-lg" />:
                  <BiWifiOff className="text-lg" />
                  }
                  
                </span>
              </a>

              <button className="flex items-center mx-2 lg:mx-4 text-base text-gray-800 hover:text-indigo-600 dark:text-gray-50">
              <span className="text-lg">
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

            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
