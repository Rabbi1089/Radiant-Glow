import React from "react";

const Services = ({ service }) => {
  const text = service.Description;
  const result = text.substring(0,100);



  return (
    <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800 mx-auto hover:">
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={service.imageUrl}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
        </div>
        <div className="space-y-2 max-h-8">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-2xl font-semibold text-violet-600">
              {service.name}
            </h3>
          </a>
          <div className=" my-8 border">
          <p className="leading-snug text-xl text-gray-600">
          <span className=""> {result}</span>
         
          </p>
          </div>
 
        </div>
      </div>

      <div className="flex  justify-between p-2 mt-24 space-x-4 ">
        <div className="justify-start flex items-center text-2xl font-serif">৳ {service.price}</div>

        <div>
          {" "}
          <span>
            <a
              rel="noopener noreferrer"
              href="#"
              className="font-bold hover:underline text-gray-600"
            >
              Make Up by :
            </a>
          </span>
          <img
            src={service.serviceProvider.serviceProviderImg}
            alt=""
            className="w-12 h-12 rounded-lg bg-gray-500"
          />
          <h2 className="text-xl font-semibold">{service.serviceProvider.serviceProviderName}</h2>
        </div>
      </div>
      <button
        type="button"
        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-gray-50"
      >
        Read more
      </button>
    </div>
  );
};

export default Services;
