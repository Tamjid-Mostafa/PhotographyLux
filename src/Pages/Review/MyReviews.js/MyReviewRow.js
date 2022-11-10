import React, { useState } from "react";
import { HiChatAlt2 } from "react-icons/hi";

const MyReviewRow = ({
  handleDelete,
  myReviews,
  myReview,
  setMyReviews,
  showModal,
  setShowModal,
}) => {
  const { _id } = myReview;

  const handleSubmitReview = (event) => {
    event.preventDefault();

    const userReview = {
      text: event.target.value,
    };
    console.log(userReview);

    fetch(`http://localhost:5000/my_reviews/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = myReviews.filter((myReview) => myReview._id !== _id);
        const updated = myReviews.find((myReview) => myReview._id !== _id);
        updated.status = "Updated";

        const updatedList = [updated, ...remaining];
        setMyReviews(updatedList);
      });
  };

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

            <div className="grid grid-cols-2 gap-3">
              <>
                <button
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Open regular modal
                </button>
                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              Update Review
                            </h3>
                            <button
                              className="p-1 ml-auto bg-transparent border-0 text-black dark:text-gray-800 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <form
                              onSubmit={handleSubmitReview}
                              action=""
                              className="space-y-8"
                            >
                              <div className="space-y-4">
                                <div className="relative flex items-center">
                                  <HiChatAlt2 className="w-6 h-6 absolute left-4 inset-y-0 my-auto"></HiChatAlt2>
                                  <input
                                    type="text"
                                    name="review"
                                    id="review"
                                    autoComplete="review"
                                    placeholder="Very Awesome"
                                    className="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-primary"
                                  />
                                </div>
                              </div>
                              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal(false)}
                                >
                                  Close
                                </button>
                                <button
                                  onSubmit={() => setShowModal(false)}
                                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                >
                                  Save Changes
                                </button>
                              </div>
                            </form>
                          </div>
                          {/*footer*/}
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </>

              <button
                onClick={() => handleDelete(myReview._id)}
                className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyReviewRow;
