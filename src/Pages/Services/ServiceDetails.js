import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Pagination } from "swiper";

const ServiceDetails = () => {
  const { _id, service_name, photo, description, price } = useLoaderData();

  return (
    <div className=" bg-gray-100 dark:bg-gray-900">
      <div>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl-grid-cols-2 gap-5 md:justify-items-center">
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



      {/* <!-- require JavaScript for carousel to work 
     eg : https://swiperjs.com/
-->> */}

<div class="py-16">
  <div class="xl:container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
    <h2 class="mb-12 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
      What's our customers say
    </h2>
    <Swiper class="swiper mySwiper">
      <div class="swiper-wrapper pb-6">
        <SwiperSlide class="swiper-slide !bg-transparent">
          <div class="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
            <img
              class="mx-auto !h-16 !w-16 rounded-full"
              src="images/avatars/second_user.webp"
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
            <p>
              <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto
              aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis
              cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span>
            </p>
            <div>
              <h6 class="text-lg font-semibold leading-none">John Doe</h6>
              <span class="text-xs text-gray-500">Product Designer</span>
            </div>
            <img
              class="mx-auto !w-28"
              src="images/clients/client-4.png"
              alt="company logo"
              height="400"
              width="142"
              loading="lazy"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide class="swiper-slide !bg-transparent">
          <div class="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
            <img
              class="mx-auto !h-16 !w-16 rounded-full"
              src="images/avatars/third_user.webp"
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
            <p>
              <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto
              aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis
              cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span>
            </p>
            <div>
              <h6 class="text-lg font-semibold leading-none">John Doe</h6>
              <span class="text-xs text-gray-500">Product Designer</span>
            </div>
            <img
              class="mx-auto !w-28"
              src="images/clients/client-3.png"
              alt="company logo"
              height="400"
              width="142"
              loading="lazy"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide class="swiper-slide !bg-transparent">
          <div class="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
            <img
              class="mx-auto !h-16 !w-16 rounded-full"
              src="images/avatars/first_user.webp"
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
            <p>
              <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto
              aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis
              cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span>
            </p>
            <div>
              <h6 class="text-lg font-semibold leading-none">John Doe</h6>
              <span class="text-xs text-gray-500">Product Designer</span>
            </div>
            <img
              class="mx-auto !w-28"
              src="images/clients/client-8.png"
              alt="company logo"
              height="400"
              width="142"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      </div>

      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
</div>

     
        
    </div>
  );
};

export default ServiceDetails;
