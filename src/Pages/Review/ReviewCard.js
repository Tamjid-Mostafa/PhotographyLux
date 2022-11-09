import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <>
      <div className="swiper-wrapper pb-6">
        <div className="swiper-slide !bg-transparent">
          <div className="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
            <img
              className="mx-auto !h-16 !w-16 rounded-full"
              src="images/avatars/second_user.webp"
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
            <p>
              <span className="font-serif">"</span> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quaerat repellat perspiciatis
              excepturi est. Non ipsum iusto aliquam consequatur repellat
              provident, omnis ut, sapiente voluptates veritatis cum deleniti
              repudiandae ad doloribus. <span className="font-serif">"</span>
            </p>
            <div>
              <h6 className="text-lg font-semibold leading-none">John Doe</h6>
              <span className="text-xs text-gray-500">Product Designer</span>
            </div>
            <img
              className="mx-auto !w-28"
              src="images/clients/client-4.png"
              alt="company logo"
              height="400"
              width="142"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
