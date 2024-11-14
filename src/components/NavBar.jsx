import { Link } from "react-router-dom";
import logo from "../assets/images/radiant.jpg";
const NavBar = () => {
  const listItems = 
    <>
   
   

      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/login">FAQ</Link>
      </li>
      <li>
      <Link to="/SignUp">About</Link>
      </li>
    </>
  
  return (
    <div className="mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                {listItems}
            </ul>
          </div>
          <div className=" flex-1 ml-2">
            <div className="flex gap-2 items-center">
              <Link to={"/"}>
                <img className="w-auto h-9" src={logo} alt="logo image" />
              </Link>
              <span className=" font-mono text-2xl rounded-full">
                Radiant Glow
              </span>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
    {listItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
