import React, { useEffect, useState } from 'react';

const FoodPhoto = () => {

  const [foodPhoto, setFoodPhoto] = useState([]);
  useEffect(() => {
    fetch(`https://photographylux-server.vercel.app/foodPhotos`)
      .then((res) => res.json())
      .then((data) => setFoodPhoto(data));
  }, []);

    return (
        <div>
            
    <div className="py-16">
  <div className="container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
    <div className="mb-20 space-y-4 px-6 md:px-0">
      <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
        We have some fans.
      </h2>
    </div>
    <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
          <img className="w-12 h-12 rounded-full" src="" alt="" width="" height="" loading="lazy"/>
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">Eric Ampire</h6>
            <p className="text-sm text-gray-500 dark:text-gray-400">Mobile dev</p>
          </div>
        </div>
        <p className="mt-8"></p>
      </div>
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
          <img className="w-12 h-12 rounded-full" src="" alt="" width="" height="" loading="lazy"/>
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">Eric Ampire</h6>
            <p className="text-sm text-gray-500 dark:text-gray-400">Mobile dev</p>
          </div>
        </div>
        <p className="mt-8"></p>
      </div>
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
          <img className="w-12 h-12 rounded-full" src="" alt="" width="" height="" loading="lazy"/>
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">Eric Ampire</h6>
            <p className="text-sm text-gray-500 dark:text-gray-400">Mobile dev</p>
          </div>
        </div>
        <p className="mt-8"></p>
      </div>
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
          <img className="w-12 h-12 rounded-full" src="" alt="" width="" height="" loading="lazy"/>
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">Eric Ampire</h6>
            <p className="text-sm text-gray-500 dark:text-gray-400">Mobile dev</p>
          </div>
        </div>
        <p className="mt-8"></p>
      </div>
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
          <img className="w-12 h-12 rounded-full" src="" alt="" width="" height="" loading="lazy"/>
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">Eric Ampire</h6>
            <p className="text-sm text-gray-500 dark:text-gray-400">Mobile dev</p>
          </div>
        </div>
        <p className="mt-8"></p>
      </div>
     

    </div>
  </div>
</div>

        </div>
    );
};

export default FoodPhoto;