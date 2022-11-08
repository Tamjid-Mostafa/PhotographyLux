import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { _id, service_name, photo, description, price } = useLoaderData();
  return (
    <div className=" bg-gray-100 dark:bg-gray-900 h-[80vh]">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl-grid-cols-2 gap-5 md:justify-items-center">
        <div className=" rounded-lg my-24 md:my-16">
          <img className="" src={photo} alt="" />
        </div>

        <div className="max-w-xl" >
          <h1 class=" my-16 md:my-6 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-5xl dark:text-white">
            {service_name}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
