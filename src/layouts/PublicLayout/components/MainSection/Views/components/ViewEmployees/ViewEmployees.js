import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const ViewEmployees = () => {
  return (
    <div class="flex flex-col mx-3 my-5">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-indigo-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                  >
                    DOB
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                  >
                    Street Address
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                  >
                    City
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                  >
                    State
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                  >
                    Country
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-md"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-bold text-indigo-600">
                          Jane Cooper
                        </div>
                        <div class="text-xs text-indigo-500">
                          jane.cooper@example.com
                        </div>
                        <div class="text-xs font-medium text-black">
                          9869686968
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-2 whitespace-nowrap">
                    <div class="text-sm font-bold text-indigo-600">
                      24-12-2021
                    </div>
                  </td>
                  <td class="px-6 py-2 whitespace-nowrap">
                    <div class="text-sm font-bold text-indigo-600">
                      Regional Paradigm Technician
                    </div>
                  </td>
                  <td class="px-6 py-2 whitespace-nowrap text-sm font-bold text-indigo-600">
                    Admin
                  </td>
                  <td class="px-6 py-2 whitespace-nowrap text-sm font-bold text-indigo-600">
                    Admin
                  </td>
                  <td class="px-6 py-2 whitespace-nowrap text-sm font-bold text-indigo-600">
                    Admin
                  </td>
                  <td class="px-6 py-2 whitespace-nowrap text-sm font-bold text-indigo-600">
                    <DeleteIcon style={{ color: "red" }} />
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-md"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-bold text-indigo-600">
                          Jane Cooper
                        </div>
                        <div class="text-xs text-indigo-500">
                          jane.cooper@example.com
                        </div>
                        <div class="text-xs font-medium text-black">
                          9869686968
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-2 whitespace-nowrap">
                    <div class="text-sm font-bold text-indigo-600">
                      24-12-2021
                    </div>
                  </td>
                  <td class="px-6 py-2 whitespace-nowrap">
                    <div class="text-sm font-bold text-indigo-600">
                      Regional Paradigm Technician
                    </div>
                  </td>
                  <td class="px-6 py-2 whitespace-nowrap text-sm font-bold text-indigo-600">
                    Admin
                  </td>
                  <td class="px-6 py-2 whitespace-nowrap text-sm font-bold text-indigo-600">
                    Admin
                  </td>
                  <td class="px-6 py-2 whitespace-nowrap text-sm font-bold text-indigo-600">
                    Admin
                  </td>
                  <td class="px-6 py-2 whitespace-nowrap text-sm font-bold text-indigo-600">
                    <DeleteIcon style={{ color: "red" }} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployees;
