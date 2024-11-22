import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../../hooks/useAuth/UseAuth";


const ServiceToDo = () => {
  const { user } = UseAuth();
  const [bookedService, setBookedService] = useState([]);
  const [filter, setFilter] = useState('')
  console.log('std',filter);

  useEffect(() => {
    getBookedData();
  }, [user, filter]);

  const getBookedData = () => {
    axios
      .get(
        `http://localhost:5000/
serviceToDo
?email=${user?.email}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => setBookedService(res.data));
  };

  // handleStatus
  const handleStatus =  async( id, status) => {
    const {data} = await axios.patch (
       `http://localhost:5000/serviceToDo/${id}`,
       {status}
    )
    console.log(data)
    getBookedData();
  }

  return (
    <div className=" max-w-7xl mx-auto ">
  {/* filter */}
  <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
          <div>
            <select
              onChange={e => {
                setFilter(e.target.value)
                
              }}
              value={filter}
              name='category'
              id='category'
              className='border p-4 rounded-lg'
            >
              <option value=''>Filter By Status</option>
              <option value='Complete'>Complete</option>
              <option value='pending'>Pending</option>
              
            </select>
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
               <button onClick={() => handleStatus(service._id, "Complete")} className="btn btn-sm text-white uppercase bg-violet-700" > {service.status}</button>
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
