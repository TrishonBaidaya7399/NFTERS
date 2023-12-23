// import PropTypes from 'prop-types';
import { IoIosSearch } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";

const Navbar = () => {
  const navItems = (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 ml-12 font-semibold text-white">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-gray-600 border-b-[3px] pb-1 border-[transparent] "
            : "text-white border-b-[3px] pb-1 border-[transparent] duration-300 hover:border-b-[3px] hover:border-gray-600 duration-300"
        }
        to="#"
      >
        <li>Marketplace</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-gray-600 border-b-[3px] pb-1 border-[transparent] "
            : "text-white border-b-[3px] pb-1 border-[transparent] duration-300 hover:border-b-[3px] hover:border-gray-600 duration-300"
        }
        to="#"
      >
        <li>Resource</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-gray-600 border-b-[3px] pb-1 border-[transparent] "
            : "text-white border-b-[3px] pb-1 border-[transparent] duration-300 hover:border-b-[3px] hover:border-gray-600 duration-300"
        }
        to="#"
      >
        <li>About</li>
      </NavLink>
    </div>
  );

  return (
    <div>
      <div className="navbar bg-base-100 px-4 lg:px-[130px] border-b-2 border-gray-200">
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <CgMenuGridR className="text-[#3a0ca3] text-3xl"/>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-300 mt-5 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className="text-[#3a0ca3] font-bold text-2xl">NFTERS</Link>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
        </div>
        <div className="navbar-end hidden md:flex md:gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-gray-300 h-10 rounded-full px-4 text-gray-300 w-24 md:w-auto"
            />
            <IoIosSearch className="absolute top-[30%] right-4 text-gray-400" />
          </div>
          <div>
            <button className="text-white text-sm lg:text-md font-semibold px-6 py-2 rounded-full bg-[#3a0ca3]">
              <Link>Upload</Link>
            </button>
          </div>
          <div>
            <button className="text-[#3a0ca3] text-sm lg:text-md font-semibold px-6 lg:py-2 rounded-full bg-[transparent] border-2 border-[#3a0ca3]">
              <Link>Connect Wallet</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
