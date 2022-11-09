import React, { useContext } from 'react';
import { HiChatAlt2 } from "react-icons/hi";
import { AuthContext } from '../../context/AuthProvider';

const SubmitReview = () => {
    const { user } = useContext(AuthContext);

    const reviews = {
        
    }






    return (
        <div>
            
    <body class=" flex flex-col justify-center bg-white dark:bg-gray-900">
  <div class="relative">
    <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 transition duration-300 delay-0">
      <div class="blur-[106px]  bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
      <div class="blur-[106px]  bg-gradient-to-r from-pink-400 to-yellow-300"></div>
    </div>
    <div class=" xl:container m-auto px-6 text-gray-500 md:px-12">
      <div class="m-auto space-y-8 sm:w-4/5 md:w-3/5 xl:w-2/5">
        <div class="p-8 md:py-12">
          <h2 class="mt-20 mb-8 text-3xl font-bold text-gray-800 dark:text-white">Share your opinion.</h2>
          <form action="" class="space-y-8">
            <div class="space-y-4">
              <div class="relative flex items-center">
                <HiChatAlt2  fill="none"  class="w-6 h-6 absolute left-4 inset-y-0 my-auto">
                 
                </HiChatAlt2>                      
                <input
                  type="text"
                  name="review"
                  id="review"
                  autocomplete="review"
                  placeholder="Very Awesome"
                  class="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-primary"
                />
                <div class="absolute right-1">
                  <button  class="relative flex h-10 w-10 sm:w-max ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                    <span class="hidden relative text-base font-semibold text-white dark:text-gray-200 sm:block">Submit</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="relative w-5 h-5 text-white dark:text-gray-900 sm:hidden">
                      <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>                      
                  </button>
                </div>
              </div>
            </div>
            <p class="text-gray-500 text-md text-center font-semibold">
                I'm eager to know your opinion.
            </p>

            
          </form>
        </div>
      </div>
    </div>
  </div>
</body>

        </div>
    );
};

export default SubmitReview;