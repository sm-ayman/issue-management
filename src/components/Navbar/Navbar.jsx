import React from "react";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar bg-indigo-100 shadow-sm">
      <div className="flex-1">
        <a className="text-xl flex gap-x-2">
          <img src={logo} alt="issueFix" className="h-7" />
          <span className="font-semibold">IssueFix</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
