import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { AuthContext } from "../../provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import toast from "react-hot-toast";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const { user, setLoading } = useContext(AuthContext);

  const handleLogout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        toast.success("Logout Successful", {
          position: "top-right",
          duration: 2000,
          style: { width: "200px", height: "70px" },
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Logout Successful", {
          position: "top-right",
          duration: 2000,
          style: { width: "200px", height: "70px" },
        });
      });
  };

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  const links = (
    <>
      <li><NavLink
        onClick={hamburger}
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#fff",
          border: isActive ? '2px solid #FDDE55' : '',
          borderRadius: isActive ? '5px' : '',
          padding: isActive ? '5px 12px' : '',
          background: isActive ? "#1111111f" : "transparent",
        })}>Home</NavLink>
      </li>
      <li><NavLink
        onClick={hamburger}
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#fff",
          border: isActive ? '2px solid #FDDE55' : 'none',
          borderRadius: isActive ? '5px' : '',
          padding: isActive ? '5px 12px' : '',
          background: isActive ? "#1111111f" : "transparent",
        })}>Need Volunteer</NavLink>
      </li>

      <li>
        <details>
          <summary style={{ color: '#fff' }}>My Profile</summary>
          <ul className="p-2 w-60">
            <li><a>Add Volunteer Post</a></li>
            <li><a>Manage My Post</a></li>
            <li><a>My Volunteer Requested Post</a></li>
          </ul>
        </details>
      </li>

    </>
  );

  return (
    <div>
      <nav className=" bg-[#5BBCFF] ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Left side website name and logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="w-16" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              VOLUNNET
            </span>
          </Link>

          {/* Right side Buttons */}
          <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
            {
              !user && <div className={`md:block space-x-3 gap-4 hidden`}>
                <Link to="/login">
                  <button
                    type="button"
                    className="text-[#222] bg-[#FDDE55] hover:bg-[#ffd310] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Login
                  </button>
                </Link>
              </div>
            }

            {
              user && <div
                className={`flex items-center space-x-3 gap-4`}
              >
                {
                  user && <div className="tooltip tooltip-left avatar cursor-pointer" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}>
                    <div className="w-12 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                }
                <Link
                  className="hidden md:flex"
                  onClick={handleLogout}
                  to="/login"
                >
                  <button
                    type="button"
                    className="text-white bg-[#FF6D60] hover:bg-[#ff988f] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Logout
                  </button>
                </Link>
              </div>
            }


            {/* Hamburger button */}
            <button
              onClick={handleHamburger}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden text-white "
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Middle Part */}
          <div
            className="navbar items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="navbar-cta"
          >
            <ul className="menu menu-horizontal flex flex-col font-medium lg:p-0 border  rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 ">
              {links}
            </ul>
          </div>
        </div>

        {/* For Small device */}
        <div className={`lg:hidden fixed p-6 z-[99] duration-500 md:w-[50%] w-[70%] h-screen top-0 text-white bg-[#5BBCFF] ${hamburger ? "right-0" : "right-[-350px] md:right-[-700px]"}`}>
          <button onClick={handleHamburger} className="text-2xl">
            <IoMdClose />
          </button>
          <ul className="font-semibold space-y-3 mt-6 ">{links}</ul>

          {
            !user && <div className={`md:hidden flex gap-4 mt-6`}>
              <Link onClick={handleHamburger} to="/login">
                <button
                  type="button"
                  className="text-[#111] bg-[#FDDE55] hover:bg-[#FDDE55] px-2 py-1 rounded-lg font-semibold"
                >
                  Login
                </button>
              </Link>

            </div>
          }
          {
            user && <div className={`md:hidden flex gap-4 mt-6`}>
              <Link
                onClick={() => {
                  handleHamburger();
                  handleLogout()
                }}
                to="/login"
              >
                <button
                  type="button"
                  className="text-[#111] bg-[#FDDE55] hover:bg-[#FDDE55] px-2 py-1 rounded-lg font-semibold"
                >
                  Logout
                </button>
              </Link>
            </div>
          }
        </div>
      </nav>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Navbar;
