import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";

const PackagePriceTable = () => {
  const [packagePrices, setPckagePrices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/packagePriceTable")
      .then((res) => res.json())
      .then((data) => setPckagePrices(data));
  });
  return (
    <>
      <div class="xl:container m-auto px-6 py-20 md:px-12 lg:px-20">
        <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
          <p class="text-xl font-thin text-gray-800 dark:text-white md:text-xl uppercase">
            Pricing
          </p>
          <h2 class="my-5 text-2xl font-semibold text-gray-800 dark:text-white md:text-4xl">
          Choose Our Packages
          </h2>
          <p class="text-lg font-normal text-gray-800 dark:text-white md:text-xl">
          Whether you are looking for a food photography service for your website, cookbook, restaurant menu, social media, or any other purpose, we have got everything. We have designed different packages that will suit your needs and budget for sure.
          </p>
        </div>
        <table class="w-full mt-5 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-lg">
              <th scope="col" class=" py-3 px-6 bg-gray-50 dark:bg-gray-700">
                Product name
              </th>
              <th scope="col" class="py-3 px-6">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="">
            {packagePrices.map((packagePrice) => (
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  {packagePrice.package_name}
                </th>
                <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-cyan-900">{packagePrice.pakage_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PackagePriceTable;
