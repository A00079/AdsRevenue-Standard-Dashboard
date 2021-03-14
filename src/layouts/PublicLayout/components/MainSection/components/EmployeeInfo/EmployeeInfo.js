import React from 'react';

const EmployeeInfo = () => {
    return (
        <React.Fragment>
            <section>
                <div className="flex flex-col">
                    <div class="w-full">
                        <div class="w-full mx-auto h-full flex space-x-1 lg:space-x-2 items-center border-gray-200 border p-2 rounded-lg">
                            <div className="w-full sm:h-24 h-full space-y-1 bg-gray-100 p-1 rounded-md">
                                <img alt="team" class="mx-auto w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full" src="https://dummyimage.com/80x80" />
                                <div class="flex-grow">
                                    <h2 class="text-blue-700 text-center title-font font-medium text-xs">Total Employees</h2>
                                    <p class="text-indigo-600 text-sm text-center font-bold">567</p>
                                </div>
                            </div>
                            <div className="w-full sm:h-24 h-full space-y-1 bg-gray-100 p-1 rounded-md">
                                <img alt="team" class="mx-auto w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full" src="https://dummyimage.com/80x80" />
                                <div class="flex-grow">
                                    <h2 class="text-blue-700 text-center title-font font-medium text-xs">Log In Employees</h2>
                                    <p class="text-indigo-600 text-sm text-center font-bold">467</p>
                                </div>
                            </div>
                            <div className="w-full sm:h-24 h-full space-y-1 bg-gray-100 p-1 rounded-md">
                                <img alt="team" class="mx-auto w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full" src="https://dummyimage.com/80x80" />
                                <div class="flex-grow">
                                    <h2 class="text-blue-700 text-center title-font font-medium text-xs">Total Teams</h2>
                                    <p class="text-indigo-600 text-sm text-center font-bold">60</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default EmployeeInfo;