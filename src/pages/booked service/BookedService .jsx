import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../../hooks/useAuth/UseAuth";
import { Link } from "react-router-dom";

const BookedService = () => {
  const [bookedService, setBookedService] = useState([]);
  console.log(bookedService);
  console.log(bookedService.length);

  const { user } = UseAuth();
  useEffect(() => {
    getData();
  }, [user]);
  const getData = () => {
    axios
      .get(`https://radiant-glow-server.vercel.app/bookedService?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => setBookedService(res.data));
  };

  return (
    <div className="overflow-x-auto max-w-7xl mx-auto">
      <table className="table">
        {/* head */}
        <thead className="text-xl font-mono text-black">
          <tr>
            <th>
              <label></label>
            </th>
            <th>Service Name</th>
            <th>Provider Name</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookedService.map((service, idx) => (
            <tr key={idx}>
              <th>
                <label>{idx + 1}</label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={service.sImageUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{service.sName}</div>
                  </div>
                </div>
              </td>
              <td>{service.serviceProviderName}</td>
              <td>{service.ServiceDate}</td>
    
              <td>{service.sPrice}</td>
              <th>
                <span className=" rounded-lg p-3 text-white btn-sm bg-violet-600 uppercase">
                  {service.status}
                </span>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      {bookedService.length === 0 && (
        <section className="py-6 bg-gray-100 text-gray-900">
          <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
            <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">
              You have not booked any service
            </h1>
            <Link to="/">
              {" "}
              <button className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50">
                Book Now
              </button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default BookedService;
