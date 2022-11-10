import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const size = 3;
  useEffect(() => {
    fetch(`https://photographylux-server.vercel.app/services?size=${size}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-gray-50 dark:bg-gray-900 ">
      <div className="py-16">
        <div className="xl:container mx-auto space-y-12 px-6 md:px-12 lg:px-20">
          <div>
            <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              One of the best photography service
              <br className="sm:block" hidden />
              You have found
            </h2>
          </div>
          <div className="mt-16 justify-items-center grid gap-8 sm:w-2/3 sm:mx-auto md:w-full md:grid-cols-2  lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              to="/all_services"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Show More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
