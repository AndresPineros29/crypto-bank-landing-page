import { useState } from "react";
import logo from "../assets/BANCO.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navlinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[50px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navlinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poopins font-normal cursor-pointer text-[16px] ${
              index === navlinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <AiOutlineClose color="#fff" size={30} />
          ) : (
            <AiOutlineMenu color="#fff" size={30} />
          )}
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navlinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poopins font-normal cursor-pointer text-[16px] ${
                  index === navlinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
