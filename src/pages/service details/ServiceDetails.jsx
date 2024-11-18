import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const sDetails = useLoaderData();
  console.log("from serivce details", sDetails);


  return (
    <div className="container flex flex-col w-full max-w-3xl p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={sDetails.serviceProvider.serviceProviderImg}
              alt=""
              className="object-cover w-12 h-12 rounded-full bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">Make Up by</h4>
            <span className="text-xs text-gray-600">{sDetails.serviceProvider.serviceProviderName}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-violet-600">
          <span className="text-xl font-bold">{sDetails.area}</span>
        </div>
      </div>
      <div className="max-w-3xl p-4 shadow-md bg-gray-50 text-gray-800">

        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={sDetails.imageUrl}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />

          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold text-violet-600">
              {sDetails.name}
              </h3>
            </a>
            <p className="leading-snug text-gray-600">
            {sDetails.Description}
            </p>
          </div>
        </div>
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize text-gray-800"
            >
              ৳ {sDetails.price}
            </a>
          </div>
          <a rel="noopener noreferrer" href="#">
          <button className="btn btn-primary">Learn now!</button>
          </a>
        </div>
      </div>

    </div>
  );
};

export default ServiceDetails;
