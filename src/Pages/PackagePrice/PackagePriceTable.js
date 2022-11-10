import React, { useEffect, useState } from "react";

const PackagePriceTable = () => {
  const [packagePrices, setPckagePrices] = useState([]);

  useEffect(() => {
    fetch("https://photographylux-server.vercel.app/packagePriceTable")
      .then((res) => res.json())
      .then((data) => setPckagePrices(data));
  });
  return (
    <>
      <div className="xl:container m-auto px-6 py-20 md:px-12 lg:px-20">
        <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
          <p className="text-xl font-thin text-gray-800 dark:text-white md:text-xl uppercase">
            Pricing
          </p>
          <h2 className="my-5 text-2xl font-semibold text-gray-800 dark:text-white md:text-4xl">
          Choose Custom Packages
          </h2>
          <p className="text-lg font-normal text-gray-800 dark:text-white md:text-xl">
          Whether you are looking for a food photography service for your website, cookbook, restaurant menu, social media, or any other purpose, we have got everything. We have designed different packages that will suit your needs and budget for sure.
          </p>
        </div>
        <table className="w-full mt-5 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-lg">
              <th scope="col" className=" py-3 px-6 bg-gray-50 dark:bg-gray-700">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="">
            {packagePrices.map((packagePrice) => (
              <tr
              key={packagePrice._id}
              className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  {packagePrice.package_name}
                </th>
                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-cyan-900">{packagePrice.pakage_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PackagePriceTable;
