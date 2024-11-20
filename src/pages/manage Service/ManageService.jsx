import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../../hooks/useAuth/UseAuth";
import { Link } from "react-router-dom";

const ManageService = () => {
  const { user } = UseAuth();
  const [myServices, setMyServices] = useState([]);
  console.log("fro manage service", user.email);
  console.log("fro manage service", myServices);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = () => {
    axios
      .get(`http://localhost:5000/myService?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => setMyServices(res.data));
  };


  console.log("comes from myservice", myServices);
  return (
    <div className="overflow-x-auto lg:mx-40">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Area</th>
            <th>&nbsp; &nbsp; Action</th>
          </tr>
        </thead>
        <tbody>
          {myServices.map((service, idx) => (
            <tr key={idx}>
              {" "}
              <th>{idx + 1}</th>
              <td>{service.name}</td>
              <td>{service.price}</td>
              <td>{service.area}</td>
              <td>
                <div className=" flex gap-2">
                <Link to={`/updateService/${service._id}`}>
                <button className="btn btn-sm">update</button>
                </Link>
                 
                  <button className="btn btn-sm text-red-700 hover:bg-red-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageService;
