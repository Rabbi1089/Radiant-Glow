import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateService = () => {
    const service = useLoaderData();
    console.log("i am from update ser" ,service);
    return (
        <div>
        <section className="p-6 bg-gray-100 text-gray-900">
          <form
            onSubmit=""
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <h1 className=" text-4xl font-serif">Update a Service</h1>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full">
                  <label className="text-xl font-semibold ">
                    Image URL of the Service
                  </label>
                  <textarea
                    name="imageUrl"
                    id="bio"
                    defaultValue={service.imageUrl}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                  ></textarea>
                </div>
                <div className="col-span-full">
                  <label className="text-xl font-semibold">Service Name</label>
                  <textarea
                    name="name"
                    type="text"
                    defaultValue={service.name}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-xl font-semibold">Price</label>
                  <input
                    name="price"
                    type="text"
                    defaultValue={service.price}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-xl font-semibold">Service Area</label>
                  <input
                    name="area"
                    type="text"
                    defaultValue={service.area}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                  />
                </div>
                <div className="col-span-full">
                  <label className="text-xl font-semibold">Description</label>
                  <textarea
                    name="Description"
                    type="text"
                    defaultValue={service.Description}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    );
};

export default UpdateService;