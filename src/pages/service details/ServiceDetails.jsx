import { useLoaderData, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/useAuth/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const sDetails = useLoaderData();
  const navigate = useNavigate();

  const { user } = UseAuth();
  console.log("from service details", user);

  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const ServiceDate = form.ServiceDate.value;
    const serviceInstruction = form.serviceInstruction.value;

    // Extract "details"
    const bookedService = {
      ...sDetails.serviceProvider,
      serviceId: sDetails._id,
      sImageUrl: sDetails.imageUrl,
      sName: sDetails.name,
      sPrice: sDetails.price,
      sArea: sDetails.area,
      Description: sDetails.Description,
      status: "pending",
      client: {
        cPhoto: user.photoURL,
        cName: user.displayName,
        cEmail: user.email,
      },
      ServiceDate,
      serviceInstruction,
    }; // Merge into a new object

    console.log("testing", bookedService);

    axios
      .post("http://localhost:5000/booking", bookedService, {
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response);
        navigate("/");
        Swal.fire({
          title: "Good job!",
          text: "Service added",
          icon: "success",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
          {/* modal started */}
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
                  <form onSubmit={handlePurchase}>
                    {/* if there is a button in form, it will close the modal */}
                    <div className="card card-side bg-base-100 rounded-md">
                      <figure>
                        <img src={sDetails.imageUrl} alt="Movie" />
                      </figure>
                      <input
                        name="imageUrl"
                        value={sDetails.imageUrl}
                        hidden
                      ></input>
                    </div>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Service Id</span>
                      </div>
                      <input
                        type="text"
                        value={sDetails._id}
                        name="sevieceId"
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
                        name="ServiceDate"
                        className="input input-bordered input-xs w-full max-w-xs"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Special instruction</span>
                      </div>
                      <textarea
                        type="text"
                        name="serviceInstruction"
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

                    <button type="submit" className="btn btn-block btn-sm mt-4">
                      Purchase
                    </button>
                  </form>
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </a>
          {/* modal end */}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
