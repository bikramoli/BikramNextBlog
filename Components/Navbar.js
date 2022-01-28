import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  BiCode,
  BiToggleLeft,
  BiToggleRight,
  BiWifi,
  BiWifiOff,
} from "react-icons/bi";
import { AiFillDownSquare, AiOutlineGoogle } from "react-icons/ai";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../Firebase/Firebase";
import { Offline, Online } from "react-detect-offline";

function Navbar({ scrollHeight }) {
  const { theme, setTheme } = useTheme();
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLogin(true);
      setName(user.name);
      setPhoto(user.photo);
    }
  }, [isLogin]);

  //handle signIn
  const handelSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: res.user.displayName,
            photo: res.user.photoURL,
            token: res.user.accessToken,
            uid: res.user.uid,
          })
        );
        setIsLogin(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //handle handelSignOut
  const handelSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then((res) => {
        localStorage.removeItem("user");
        setIsLogin(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <header
        className="fixed w-full border-t-4 bg-white dark:bg-gray-900 border-indigo-600 dark:border-indigo-900 shadow dark:shadow-2 z-50"
        style={{
          borderBottom:
            scrollHeight >= 50 ? (theme === "dark" ? "solid indigo" : "") : "",
        }}
      >
        <div className="container mx-auto px-6 py-3">
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
                  {theme === "dark" ? (
                    <BiToggleLeft className="text-3xl" />
                  ) : (
                    <BiToggleRight className="text-3xl" />
                  )}
                </span>
              </button>
              <a className="flex items-center mx-2 lg:mx-4 text-gray-800 hover:text-indigo-600 dark:text-gray-50">
                {/* show wifi if online else nowifi */}
                <span className="text-lg">
                  <Online>
                    <BiWifi className="text-lg" />
                  </Online>
                  <Offline>
                    <BiWifiOff className="text-lg" />
                  </Offline>
                </span>
              </a>

              <button className="flex items-center mx-2 lg:mx-4 text-base text-gray-800 hover:text-indigo-600 dark:text-gray-50">
                <span className="text-lg">
                  {isLogin ? (
                    <div className="flex-shrink-0 mr-1.5 md:mr-3 im">
                      <div className="dropdown inline-block relative">
                        <button className="bg-gray-100 text-gray-700 font-semibold py-1 px-2 rounded inline-flex items-center">
                          <span className="mr-1">
                            <img
                              className="mt-0 rounded-full w-8 h-8 sm:w-8 sm:h-8"
                              src={photo}
                              alt={name}
                            />
                          </span>
                          <AiFillDownSquare />
                        </button>
                        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                          <li>
                            <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                              setting
                            </a>
                          </li>
                          <li>
                            <a
                              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                              onClick={handelSignOut}
                            >
                              Logout
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
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
