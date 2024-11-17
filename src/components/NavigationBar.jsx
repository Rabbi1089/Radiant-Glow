import { Link } from "react-router-dom";
import logo from "../assets/images/radiant.jpg";
import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";

const NavigationBar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  //console.log("coming from navbar", user.displayName , user.photoURL);

  const signOut = () => {
    logout()
      .then(() => {
        console.log(" // Sign-out successful.");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100 border">
        <div className="navbar-start ">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link to="/allServices">Services</Link>
              </li>{
                user &&               <li>
                <a>Dashboard</a>
                <ul className="p-2">
                  <li>
                    <Link>Add Service</Link>
                  </li>
                  <li>
                    <Link to="/popularService">popularService</Link>
                  </li>
                  <li>
                    <Link>Booked-Services</Link>
                  </li>
                  <li>
                    <Link>Service-To-Do</Link>
                  </li>
                </ul>
              </li>
              }

              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 ml-4">
            <div className="flex gap-2 items-center md:ml-64">
              <Link to={"/"}>
                <img className="w-auto h-9" src={logo} alt="logo image" />
              </Link>
              <span className=" font-mono text-2xl rounded-full">
                Radiant Glow
              </span>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex relative z-50">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>Home</Link>
            </li>
            <li>
            <Link to="/allServices">Services</Link>
            </li>
            { user&&             <li>
              <details>
                <summary>&nbsp; &nbsp; Dashboard &nbsp; &nbsp;</summary>
                <ul className="p-2 space-y-2">
                  <li>
                    <Link to="addService">Add Service</Link>
                  </li>
                  <li>
                    <Link to="popularService">popular Service</Link>
                  </li>
                  <li>
                    <Link>Booked Service</Link>
                  </li>
                  <li>
                    <Link>Service-To-Do</Link>
                  </li>
                </ul>
              </details>
            </li>}

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:mr-64 relative z-50">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/88cC8TK/Profile-Photo.jpg"
                    }
                    alt={user?.displayName}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user?.displayName || "user name not found"}
                  </button>
                </li>
                <li>
                  <button onClick={signOut} className="btn btn-sm  btn-ghost">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm  btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
