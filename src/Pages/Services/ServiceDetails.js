import React, { useEffect, useState } from "react";

const ServiceDetails = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
    }, []);
  return (
    <div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </div>
  );
};

export default ServiceDetails;
