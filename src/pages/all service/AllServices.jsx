import axios from "axios";
import { useEffect, useState } from "react";
import Services from "../../components/services/Services";


const AllServices = () => {
    const [services, setservices] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios("https://radiant-glow-server.vercel.app/services");
        setservices(data);
      };
      getData();
    }, []);
  
    console.log(services);
    return (
        <>
        <span className="block mt-9 mb-2 text-xs font-medium tracking-widest uppercase text-center lg:text-center text-violet-600">
          Walk in today for Radiant Glow Special Makeup.
        </span>
        <h2 className="text-5xl font-serif lg:text-center text-center text-gray-900">
          Our All Services
        </h2>
        <div className="grid justify-center grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:mt-10 ">
          {services.map((service, idx) => (
            <Services service={service} key={idx}></Services>
          ))}
        </div>
      </>
    );
};

export default AllServices;