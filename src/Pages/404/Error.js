import React from "react";
import { Link } from "react-router-dom";
import image from "../../Asset 11.png";

const Error = () => {
  return (
    <>
      <div className=" bg-gray-100 dark:bg-gray-900 ">
        <div className="h-screen my-auto container mx-auto py-12 grid sm:grid-cols-1 md:grid-cols-2 gap-16 justify-items-end items-center">
          <div className="px-6 text-gray-600 md:px-12 xl:px-6">
            <h2 className="text-3xl font-bold text-gray-800  md:text-4xl dark:text-white">
              <div className="text-5xl font-dark font-bold">404</div>
              <p className="text-2xl md:text-3xl font-light leading-normal">
                Sorry we couldn't find this page.{" "}
              </p>
              <p className="mb-8">
                But dont worry, you can find plenty of other things on our
                homepage.
              </p>

              <Link
                to="/"
                className="text-white bg-cyan-400 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                back to homepage
              </Link>
            </h2>
          </div>

          <div className="max-w-fit flex justify-end">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
