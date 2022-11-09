import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";


const ServiceCard = ({ service }) => {
  const { _id, photo, service_name, description, price } = service;
  return (
      <div className="relative max-w-sm h-[32rem] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <PhotoProvider
          speed={() => 1000}
          easing={(type) =>
            type === 2
              ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
              : "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }
          maskOpacity={0.8}
        >
          <PhotoView src={photo}>
            <img className="rounded-t-lg" src={photo} alt="" />
          </PhotoView>
        </PhotoProvider>
        <div className="p-5">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {service_name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description.slice(0, 100)}...
          </p>
          <p className="font-normal text-gray-700 dark:text-cyan-400">
            Price: ${price}
          </p>
          <Link
            to={`/serviceDetails/${_id}`} className="absolute left-40 bottom-6">
          <div
            className="group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="relative w-5 h-5 text-gray-600 dark:text-white transition duration-300 group-hover:translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          </Link>
        </div>
      </div>
  );
};

export default ServiceCard;
