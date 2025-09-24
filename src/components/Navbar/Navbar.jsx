import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-indigo-100 shadow-sm py-0">
      <div className="flex-1">
        <a className="text-xl flex gap-x-2">
          <img src={logo} alt="issueFix" className="h-7" />
          <span className="font-semibold">IssueFix</span>
        </a>
      </div>

      <div className="flex-none">
        {/* Mobile dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Department</a>
            </li>
            <li>
              <a>Employees</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <button className="btn btn-error btn-sm">
                <span className="text-xl">+</span> Add Issue
              </button>
            </li>
          </ul>
        </div>

        {/* Desktop menu */}
        <ul className="menu menu-horizontal items-center font-semibold gap-x-3 px-0 hidden lg:flex">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Department</a>
          </li>
          <li>
            <a>Employees</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <button className="btn btn-error btn-sm">
              <span className="text-xl">+</span> Add Issue
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
