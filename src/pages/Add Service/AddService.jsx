import axios from "axios";
import UseAuth from "../../hooks/useAuth/UseAuth";
import Swal from "sweetalert2";

const AddService = () => {
  const { user } = UseAuth();
  console.log("print from add a service", user);
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageUrl = form.imageUrl.value;
    const name = form.name.value;
    const price = form.price.value;
    const area = form.area.value;
    const Description = form.Description.value;

    const service = {
      imageUrl,
      name,
      price,
      area,
      Description,
      serviceProvider: {
        serviceProviderImg: user.photoURL,
        serviceProviderName: user.displayName,
        serviceProvideremail: user.email,
      },
    };

    axios
      .post("http://localhost:5000/services", service, {
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response);
        form.reset()
        Swal.fire({
          title: "Good job!",
          text: "Service added",
          icon: "success",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(service);
  };
  return (
    <div>
      <section className="p-6 bg-gray-100 text-gray-900">
        <form
          onSubmit={handleAddService}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <h1 className=" text-4xl font-serif">Add a Service</h1>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full">
                <label className="text-xl font-semibold ">
                  Image URL of the Service
                </label>
                <textarea
                  name="imageUrl"
                  id="bio"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                ></textarea>
              </div>
              <div className="col-span-full">
                <label className="text-xl font-semibold">Service Name</label>
                <textarea
                  name="name"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-xl font-semibold">Price</label>
                <input
                  name="price"
                  type="text"
                  placeholder="Price"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-xl font-semibold">Service Area</label>
                <input
                  name="area"
                  type="text"
                  placeholder="Service Area"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label className="text-xl font-semibold">Description</label>
                <textarea
                  name="Description"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-xl">Added By</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-xl font-semibold">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={user?.displayName}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-xl font-semibold">Email</label>
                <input
                  id="website"
                  type="text"
                  value={user?.email}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                />
              </div>

              <div className="col-span-full">
                <div className="flex items-center space-x-2">
                  <button
                    type="submit"
                    className="btn btn-block bg-blue-600 text-white hover:bg-blue-200 hover:text-black font-bold text-xl"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddService;
