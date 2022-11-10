import React from "react";

const Process = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900 ">
      <div className=" container m-auto space-y-8 px-6 md:px-12 lg:px-20">
        <div className="relative flex flex-col items-center overflow-hidden py-20 md:py-40  rounded-lg">
          <div className="py-20">
            <div className="container mx-auto px-6 text-center md:px-12">
              <div className="mb-16">
                <p className="text-red-400 dark:text-indigo-500 lg:mx-auto lg:w-8/12 text-lg md:text-2xl ">
                  Process
                </p>
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-6xl">
                  Food Photography Process
                </h2>
                <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
                  A picture is worth a thousand words, but to make it happen, we
                  have to go through a lot of effort, hard work, and some
                  processes. So, here’s how our team makes sure of a seamless
                  food photography session.
                </p>
              </div>
              <div className="grid gap-28 py-20 md:grid-cols-4 md:gap-12">
                <div className="group space-y-8 border-t-4 border-red-600 dark:border-gray-800">
                  <div className="mx-auto -mt-20 h-40 w-40 overflow-hidden rounded-[5rem]">
                    <div className="mx-auto  p-10 dark:bg-white bg-cyan-400   transition duration-300 group-hover:scale-[2] text-6xl text-gray-800 dark:text-gray-600 shadow-lg  font-extrabold">
                      1
                    </div>
                  </div>
                  <div className="space-y-4 text-center">
                    <div>
                      <h4 className="text-2xl text-gray-700 dark:text-white">
                        Concept
                      </h4>
                      <span className="block text-sm text-gray-500">
                        We start with discussing with clients for researching
                        and planning the photography concept.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="group space-y-8 border-t-4 border-red-600 dark:border-gray-800">
                  <div className="mx-auto -mt-20 h-40 w-40 overflow-hidden rounded-[5rem]">
                    <div className="mx-auto  p-10 dark:bg-white bg-cyan-400   transition duration-300 group-hover:scale-[2] text-6xl text-gray-800 dark:text-gray-600 shadow-lg  font-extrabold">
                      2
                    </div>
                  </div>
                  <div className="space-y-4 text-center">
                    <div>
                      <h4 className="text-2xl text-gray-700 dark:text-white">
                        Prepare
                      </h4>
                      <span className="block text-sm text-gray-500">
                        Next, we prepare the necessary props and equipment and
                        start shooting after getting the food.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="group space-y-8 border-t-4 border-red-600 dark:border-gray-800">
                  <div className="mx-auto -mt-20 h-40 w-40 overflow-hidden rounded-[5rem]">
                    <div className="mx-auto  p-10 dark:bg-white bg-cyan-400   transition duration-300 group-hover:scale-[2] text-6xl text-gray-800 dark:text-gray-600 shadow-lg  font-extrabold">
                      3
                    </div>
                  </div>
                  <div className="space-y-4 text-center">
                    <div>
                      <h4 className="text-2xl text-gray-700 dark:text-white">
                        Retouch
                      </h4>
                      <span className="block text-sm text-gray-500">
                        Then, it’s time for editing and retouching the photos to
                        make them more enticing and attractive.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="group space-y-8 border-t-4 border-red-600 dark:border-gray-800">
                  <div className="mx-auto -mt-20 h-40 w-40 overflow-hidden rounded-[5rem]">
                    <div className="mx-auto  p-10 dark:bg-white bg-cyan-400   transition duration-300 group-hover:scale-[2] text-6xl text-gray-800 dark:text-gray-600 shadow-lg  font-extrabold">
                      4
                    </div>
                  </div>
                  <div className="space-y-4 text-center">
                    <div>
                      <h4 className="text-2xl text-gray-700 dark:text-white">
                        Finalize
                      </h4>
                      <span className="block text-sm text-gray-500">
                        Once everything is complete, we deliver professionally
                        edited copies so that you can start using them.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
