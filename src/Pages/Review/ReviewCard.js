import React from 'react';

const ReviewCard = ({review}) => {
    
    return (
        <>
                <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={review.picture}
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        {review.name}
                      </h6>
                    </div>
                  </div>
                  <p className="mt-8">{review.text}</p>
                </div>
        </>
    );
};

export default ReviewCard;