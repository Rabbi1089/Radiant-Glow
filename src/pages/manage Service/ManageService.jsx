import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../../hooks/useAuth/UseAuth";

const ManageService = () => {
  const { user } = UseAuth();
  const [myServices, setMyServices] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = () => {
    axios
      .get(`http://localhost:5000/myService?email=${user?.email}`)
      .then(res => setMyServices(res.data))
   
  };

  console.log('comes from myservice',myServices);
  return (
    <div className="overflow-x-auto lg:mx-40">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageService;
