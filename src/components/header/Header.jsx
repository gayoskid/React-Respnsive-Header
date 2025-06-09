import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
const Header = () => {
  // code block for setting up the loggin status to display user profile image
  const [loggedIn, setLoggedIn] = useState(() => {
    const logginStatus = localStorage.getItem("logginStatus");
    return logginStatus === "true";
  });

  // setting loggin status
  const login = () => {
    setLoggedIn(true);
    localStorage.setItem("logginStatus", "true");
  };
  // setting logout status
  const login_out = () => {
    setLoggedIn(false);
    localStorage.setItem("logginStatus", "false");
  };

  // Dark theme code block
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });
  // function for toggling between Dark and light theme
  const toggleDarkTheme = () => {
    setDarkMode(!darkMode);
  };
  // useEffect hooks for the toggle theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  // Hamburger icon Menu switcher
  const [toggleMenu, setToggleMenu] = useState(false);
  // updated code for Hamburger icon menu switcher
  const handleMenuToggle = () => setToggleMenu((prev) => !prev);
  // previous code for Hamburger icon menu switcher
  // const toggle = () => {
  //   setToggleMenu(true);
  // };

  // const untoggle = () => {
  //   setToggleMenu(false);
  // };

  // code block
  return (
    <div className="bg-blue-50 w-full shadow sticky top-0 dark:bg-blue-950 transition-colors duration-500">
      <div className="mx-5 sm:mx-10 lg:mx-20 flex items-center justify-between h-16 sm:h-20 text-blue-600 dark:text-blue-200  ">
        <div>
          <h1 className="font-bold text-md sm:text-2xl cursor-pointer">
            TaskFlow
          </h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-3 md:gap-4 lg:gap-5 font-semibold cursor-pointer">
            <li className=" hover:text-blue-800 active:text-blue-800">Home</li>
            <li className=" hover:text-blue-800">About Us</li>
            <li className=" hover:text-blue-800">Contact Us</li>
            <li className=" hover:text-blue-800">Our Team</li>
          </ul>
        </div>
        {/* Mobile menu overlay */}
        <div
          className={`
      fixed top-0 left-0 h-full w-1/3 bg-blue-900 text-white z-50 transition-transform duration-300
      ${toggleMenu ? "translate-x-0" : "-translate-x-full"}
      lg:hidden
    `}
        >
          <div className="flex flex-col p-4 gap-4 sm:p-6 sm:gap-6 h-full">
            {/* <button
              className="self-end text-2xl"
              onClick={handleMenuToggle}
              aria-label="Close menu"
            >
              <RiCloseLargeLine />
            </button> */}
            <ul className="flex flex-col gap-6 font-semibold text-sm md:text-lg cursor-pointer">
              <li className="hover:text-blue-300">Home</li>
              <li className="hover:text-blue-300">About Us</li>
              <li className="hover:text-blue-300">Contact Us</li>
              <li className="hover:text-blue-300">Our Team</li>
              {!loggedIn ? (
                <button
                  onClick={login}
                  className=" bg-blue-600 p-2 rounded-sm text-blue-100 cursor-pointer hover:bg-blue-800 transition-colors duration-300 dark:bg-blue-800 dark:hover:bg-blue-600 text-md"
                >
                  Get started
                </button>
              ) : (
                // profile image
                <button
                  onClick={login_out}
                  className="block bg-red-500 p-2 rounded-md cursor-pointer"
                >
                  LogOut
                </button>
              )}
            </ul>
          </div>
        </div>
        {/* call to action button, and user profile image */}
        <div className="flex gap-5 justify-center items-center">
          {!loggedIn ? (
            <button
              onClick={login}
              className=" hidden md:block bg-blue-600 px-4 py-2 rounded-xl text-blue-100 cursor-pointer hover:bg-blue-800 transition-colors duration-300 dark:bg-blue-800 dark:hover:bg-blue-600 font-bold"
            >
              Get started
            </button>
          ) : (
            // profile image
            <button onClick={login_out} className="block">
              <img
                src="https://randomuser.me/api/portraits/thumb/men/7.jpg"
                alt="logged-in user profile"
                className="h-7 w-7 sm:h-10 sm:w-10 rounded-full cursor-pointer"
              />
            </button>
          )}
          {/* theme mode switcher button */}
          <span
            className="h-7 w-7 sm:h-10 sm:w-10 bg-gray-600 hover:bg-blue-600 rounded-full items-center flex justify-center cursor-pointer dark:bg-white "
            title="change theme"
            onClick={toggleDarkTheme}
          >
            {darkMode ? (
              <CiLight className="text-amber-400 text-lg sm:text-2xl font-extrabold hover:text-amber-50" />
            ) : (
              <MdOutlineDarkMode className="text-white text-lg sm:text-2xl" />
            )}
          </span>

          {/* Hamburger menu icon for tablet and mobile view */}
          <span className=" lg:hidden cursor-pointer">
            {!toggleMenu ? (
              <RxHamburgerMenu
                onClick={handleMenuToggle}
                className="text-2xl sm:text-4xl hover:bg-blue-700 rounded-lg p-1 sm:hover:p-2 text-blue-50 bg-blue-700 "
              />
            ) : (
              <RiCloseLargeLine
                onClick={handleMenuToggle}
                className="text-2xl sm:text-4xl  hover:bg-blue-700 rounded-lg p-1 sm:hover:p-2 text-blue-50 bg-blue-700"
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
