// import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-16 bg-violet-500 flex items-center justify-around">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "logo text-2xl text-purple-600 bg-white rounded-md p-1 font-bold"
            : "logo text-2xl text-white font-bold"
        }
      >
        Jokes
      </NavLink>
      <ul className="flex  gap-4 items-center justify-between">
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "logo text-2xl text-purple-600 bg-white rounded-md p-1 font-bold"
              : "logo text-2xl text-white font-bold"
          }
        >
          About
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
