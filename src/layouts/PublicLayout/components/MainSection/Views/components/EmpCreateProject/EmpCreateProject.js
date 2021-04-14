import React from "react";

const EmpCreateProject = () => {
  return (
    <React.Fragment>
      <div class="grid grid-cols-12 mt-20">
        <aside class="col-span-4 bg-white h-screen py-5  w-60">
          <button class="flex items-center align-middle py-2 bg-white shadow-md  rounded-3xl text-gray-800 text-sm font-semibold ml-3 border border-gray-200 hover:shadow-xl transition-all w-36  focus:outline-none">
            {" "}
            <svg class="h-8 px-4" viewBox="0 0 36 36">
              <path
                class="ng-tns-c17-1"
                d="M16 16v14h4V20z"
                fill="#34A853"
              ></path>
              <path
                class="ng-tns-c17-1"
                d="M30 16H20l-4 4h14z"
                fill="#4285F4"
              ></path>
              <path
                class="ng-tns-c17-1"
                d="M6 16v4h10l4-4z"
                fill="#FBBC05"
              ></path>
              <path
                class="ng-tns-c17-1"
                d="M20 16V6h-4v14z"
                fill="#EA4335"
              ></path>
              <path class="ng-tns-c17-1" d="M0 0h36v36H0z" fill="none"></path>
            </svg>
            Create
          </button>

          {/* <div class="mt-5">
            <div class="bg-blue-50 mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
              <button class="text-blue-500 text-sm font-semibold flex items-center  focus:outline-none">
                <svg
                  class="h-5  px-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Recent
              </button>
            </div>
            <div class="mt-1  mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
              <button class="text-gray-600  text-sm font-semibold flex items-center  focus:outline-none">
                <svg
                  class="h-6  px-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Shared with me
              </button>
            </div>

            <div class="mt-1  mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
              <button class="text-gray-600 text-sm font-semibold flex items-center  focus:outline-none">
                <svg
                  class="h-6  px-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Owned by me
              </button>
            </div>

            <div class="mt-1  mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
              <button class="text-gray-600  text-sm font-semibold flex items-center focus:outline-none">
                <svg
                  class="h-6  px-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Trash
              </button>
            </div>

            <hr class="my-2"></hr>
            <div class="mt-1  mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
              <button class="text-gray-600  text-sm font-semibold flex items-center focus:outline-none">
                <svg
                  class="h-6  px-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
                Enterprise Admin
              </button>
            </div>
          </div> */}
        </aside>
        <div class="col-span-4 absolute px-4  w-full pr-10">
          <div class="bg-white ml-64  mt-5">
            <div class="flex space-x-12">
              <button class="text-gray-600  text-lg font-medium flex items-center focus:outline-none">
                Recent
              </button>

              <div class="flex">
                <button class="text-blue-600 bg-blue-100  text-sm font-semibold flex items-center  focus:outline-none border border-gray-300 rounded rounded-l-md rounded-r-none px-2 py-2">
                  Report
                </button>
                <button class="text-gray-600 text-sm font-semibold flex items-center  focus:outline-none border border-l-0 border-r-0  border-gray-300 px-2 py-2">
                  Data Sources
                </button>
                <button class="text-gray-600 text-sm font-semibold flex items-center  focus:outline-none border border-gray-300 rounded rounded-r-md rounded-l-none px-2 py-2">
                  Owned by me
                </button>
              </div>
            </div>

            <hr class="my-5"></hr>

            <div class="flex justify-between">
              <h3 class="font-semibold text-gray-500">Start with a Template</h3>
              <div class="flex items-center">
                <h3 class="font-semibold text-gray-500">Template</h3>
                <svg
                  class="h-6 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
            </div>

            <div class="flex mt-5">
              <div class="max-w-xs rounded overflow-hidden shadow-lg my-2py-4 border border-gray-300">
                <img
                  class="h-28  px-8 "
                  src="https://ssl.gstatic.com/analytics/rap/20210322_00020000/static/pngs/blank_google_add_2x.png"
                  alt="Sunset in the mountains"
                />
                <div class="px-2 py-2">
                  <div class="font-semibold text-sm mb-2">Blank Report</div>
                  <p class="font-semibold text-gray-400 text-xs">Data Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmpCreateProject;
