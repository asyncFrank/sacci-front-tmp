import React from "react";
import { IoIosLeaf } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";

import { useStateContext } from "../contexts/ContextProvider";
// import { links } from "../data/dummy";
import { links } from "../data/mock";

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
console.log(activeMenu);
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md  text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="m-3 h-screen md:overflow-hidden md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-1 ml-1 justify-items-start mt-4 flex text-xl font-extrabold tracking-tight dark:text-white"
            >
              <IoIosLeaf />
              <span> APLICAÇÕES </span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={handleCloseSideBar}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div  key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title_Pt_br ? item.title_Pt_br : item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
