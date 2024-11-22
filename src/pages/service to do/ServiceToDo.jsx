import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../../hooks/useAuth/UseAuth";

const ServiceToDo = () => {
  const { user } = UseAuth();
  const [bookedService, setBookedService] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  console.log("search", search);

  useEffect(() => {
    getBookedData();
  }, [user, filter, search]);

  const getBookedData = () => {
    axios
      .get(
        `https://radiant-glow-server.vercel.app/
serviceToDo
?email=${user?.email}&filter=${filter}&search=${search}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => setBookedService(res.data));
  };

  // handleStatus
  const handleStatus = async (id, status) => {
    const { data } = await axios.patch(
      `https://radiant-glow-server.vercel.app/serviceToDo/${id}`,
      { status }
    );
    console.log(data);
    getBookedData();
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };
  console.log(search);

  const handleReset = () => {
    console.log("reset clicked");
    setSearch("");
    setFilter("");
    setSearchText("")
  };

  return (
    <div className=" max-w-7xl mx-auto my-5">
      {/* filter */}
      <div className="">
        <div className="flex flex-col md:flex-row justify-center items-center gap-7 ">
          <form onSubmit={handleSearch}>
            <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 placeholder-gray-500 outline-none focus:placeholder-transparent"
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                name="search"
                placeholder="Enter service Title"
                aria-label="Enter service Title"
              />

              <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                Search
              </button>
            </div>
          </form>
          <div>
            <select
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              defaultValue={filter}
              name="category"
              id="category"
              className="border p-4 rounded-lg"
            >
              <option value="">Filter By Status</option>
              <option value="Complete">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <button onClick={handleReset} className="btn btn-success">
            Reset
          </button>
        </div>
      </div>

      {/* filter */}
      <table className="table">
        {/* head */}
        <thead className="text-xl font-mono text-black">
          <tr>
            <th>
              <label></label>
            </th>
            <th>Service Name</th>
            <th>Location</th>
            <th>Price</th>
            <th>Action</th>
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

              <td>{service.sArea}</td>
              <td>{service.sPrice}</td>
              <td>
                {" "}
                <button
                  onClick={() => handleStatus(service._id, "Complete")}
                  className="btn btn-sm text-white uppercase bg-violet-700"
                >
                  {" "}
                  {service.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {bookedService.length === 0 && (
        <section className="py-6 bg-gray-100 text-gray-900">
          <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
            <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">
              You have no pending service
            </h1>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServiceToDo;
