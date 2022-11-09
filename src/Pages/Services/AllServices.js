import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
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
              <ServiceCard key={services._id} service={service}></ServiceCard>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AllServices;
