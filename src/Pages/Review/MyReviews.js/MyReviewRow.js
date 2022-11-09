import React from 'react';

const MyReviewRow = ({handleDelete, myReview}) => {
    return (
        <>
            <div className="lg:w-3/4 xl:w-2/4 lg:mx-auto my-5">
              <div className="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
                <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                  <img
                    src={myReview.photo}
                    alt="art cover"
                    loading="lazy"
                    width="1000"
                    height="667"
                    className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="sm:p-2 sm:pl-0 sm:w-4/6">
                  <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
                    Jul 27 2022
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                      {myReview.service_name}
                  </h3>
                  <p className="my-6 text-gray-600 dark:text-gray-300">
                      {myReview.text}
                  </p>

                  <button onClick={() => handleDelete(myReview._id)} className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300">
                    Remove
                  </button>
                </div>
              </div>
            </div>
        </>
    );
};

export default MyReviewRow;