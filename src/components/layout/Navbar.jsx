import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import logo from "/assets/logo-rmbg.png";

const Navbar = () => {
  const [menu, setmenu] = useState(false);

  return (
    <nav className="flex justify-between items-center px-[5%] font-bold text-btblack py-4 lg:py-6">
      <Link
          to="/"
          className="uppercase text-lg md:text-2xl mt-1 flex items-center gap-y-2"
        >
          <img
            src={logo}
            alt=""
            className="w-[48px] lg:w-[62px] h-[42px] lg:h-[55px]"
          />
          <h1 className="font-black">
            {" "}
            health<span className="text-green">sync</span>
          </h1>
        </Link>
      <button
        type="button"
        className="md:hidden text-2xl pt-2.5"
        onClick={() => setmenu(!menu)}
      >
        {menu ? <FaTimes /> : <FaBars />}
      </button>
      <div
        className={`gap-x-20 capitalize px-2 pl-6  md:flex items-center absolute left-0 bg-white z-50  md:top-0 transition-all duration-500  w-full md:w-fit md:static pb-14 md:pb-0 ${
          menu ? 'top-20' : '-top-96'
        }`}
      >
        <ul className="md:flex gap-x-8 mt-1.5 space-y-5 md:space-y-0 pb-10 md:pb-0">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/#about">about</NavLink>
          </li>
          <li>
            <NavLink to="/#features">features</NavLink>
          </li>
          <li>
            <NavLink to="/auth/login">login</NavLink>
          </li>
        </ul>
        <NavLink
          to="/auth/signup"
          className="bg-btblack text-bgray px-6 py-2.5 rounded-3xl"
        >
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
