import axios from 'axios';
import { useEffect, useState } from 'react';
import Services from '../services/Services';

const TrendingService = () => {
    const [services, setservices] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios("https://radiant-glow-server.vercel.app/trendServices");
        setservices(data);
      };
      getData();
    }, []);
  
    console.log('come from trending',services);
    return (

        <>
        <span className="block mt-9 mb-2 text-xs font-medium tracking-widest uppercase text-center lg:text-center text-violet-600">
          Walk in today for Radiant Glow Special Makeup.
        </span>
        <h2 className="text-5xl font-bold lg:text-center text-center text-gray-900">
          Popular Services
        </h2>
        <div className="grid justify-center grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:mt-10 my-6" >
          {services.map((service, idx) => (
            <Services service={service} key={idx}></Services>
          ))}
        </div>
      </>

    );
};

export default TrendingService;