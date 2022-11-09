import React, { useEffect, useState } from "react";
import SubmitReview from "./SubmitReview";
const Review = ({ itemId, service_name }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?itemId=${itemId}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [itemId]);
  return (
    <div className="">
      <div className="my-5  xl:container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">

        <div class="py-16">
          <div class="container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
            <div class="mb-20 space-y-4 px-6 md:px-0">
              <h2 class="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                Here is some fans.
              </h2>
            </div>
            <div class="md:columns-2 lg:columns-3 gap-8 space-y-8">
              {reviews.map((review) => (
                <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div class="flex gap-4">
                    <img
                      class="w-12 h-12 rounded-full"
                      src={review.picture}
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 class="text-lg font-medium text-gray-700 dark:text-white">
                        {review.name}
                      </h6>
                    </div>
                  </div>
                  <p class="mt-8">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SubmitReview></SubmitReview>
    </div>
  );
};

export default Review;
