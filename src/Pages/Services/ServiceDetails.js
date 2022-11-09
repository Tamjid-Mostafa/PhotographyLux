import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";
import Review from "../Review/Review";
import PackagePriceTable from "../PackagePrice/PackagePriceTable";

const ServiceDetails = () => {
  const { _id, service_name, photo, description, price, itemId } =
    useLoaderData();

  return (
    <div className=" bg-gray-100 dark:bg-gray-900 ">
      <div>
        <div className="px-10 container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl-grid-cols-2 gap-5 md:justify-items-center">
          <div className=" rounded-lg my-24 md:my-16">
            <img className="" src={photo} alt="" />
          </div>

          <div className="max-w-xl">
            <h1 className=" my-16 md:my-6 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-5xl dark:text-white">
              {service_name}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </div>
      <Review 
      itemId={itemId} 
      service_name={service_name}
      ></Review>
      <PackagePriceTable></PackagePriceTable>
    </div>
  );
};

export default ServiceDetails;
