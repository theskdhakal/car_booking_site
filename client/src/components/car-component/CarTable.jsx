import React from "react";

const CarTable = () => {
  return (
    <div>
      <h1 className="text-center underline mb-5 ">Car -inventory</h1>

      <div className="flex justify-center">
        <div class="relative w-3/4 overflow-x-auto rounded shadow-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 border ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  S.N
                </th>
                <th scope="col" class="px-6 py-3">
                  Product
                </th>
                <th scope="col" class="px-6 py-3">
                  Color
                </th>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b ">
                <td class="px-6 py-4">1</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">$2999</td>
              </tr>
              <tr class="bg-white border-b  ">
                <td class="px-6 py-4">2</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">White</td>
                <td class="px-6 py-4">Laptop PC</td>
                <td class="px-6 py-4">$1999</td>
              </tr>
              <tr class="bg-white ">
                <td class="px-6 py-4">3</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Magic Mouse 2
                </th>
                <td class="px-6 py-4">Black</td>
                <td class="px-6 py-4">Accessories</td>
                <td class="px-6 py-4">$99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CarTable;
