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
            <span className="text-xs text-gray-600">
              {sDetails.serviceProvider.serviceProviderName}
            </span>
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
            <p className="leading-snug text-gray-600">{sDetails.Description}</p>
          </div>
        </div>
        <div className="flex justify-between pb-4 m-5 border-bottom">
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
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Book Now
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <div className="card card-side bg-base-100 rounded-md">
                      <figure>
                        <img src={sDetails.imageUrl} alt="Movie" />
                      </figure>
                    </div>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Service Id</span>
                      </div>
                      <input
                        type="text"
                        value={sDetails._id}
                        className="input input-bordered input-xs w-full max-w-xs"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Service Name</span>
                      </div>
                      <input
                        type="text"
                        value={sDetails.name}
                        className="input input-bordered input-xs w-full max-w-xs"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Provider Name </span>
                      </div>
                      <input
                        type="text"
                        value={sDetails.serviceProvider.serviceProviderName}
                        className="input input-bordered input-xs w-full max-w-xs"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Provider email </span>
                      </div>
                      <input
                        type="text"
                        value={sDetails.serviceProvider.serviceProvideremail}
                        className="input input-bordered input-xs w-full max-w-xs"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Service Taking Date</span>
                      </div>
                      <input
                        type="date"
                   
                        className="input input-bordered input-xs w-full max-w-xs"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Special instruction</span>
                      </div>
                      <textarea
                        type="text"
                        className="input input-bordered input-xs w-full max-w-xs"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Price</span>
                      </div>
                      <input
                        type="text"
                        value={sDetails.price}
                        className="input input-bordered input-xs w-full max-w-xs"
                      />
                    </label>
                    <button className="btn btn-block btn-sm mt-4">Purchase</button>
                  </form>
                </div>
              </div>
            </dialog>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
