import React, { useEffect, useState } from 'react';

const EmployeeInfo = (props) => {
    const [empInfo, setEmpInfo] = useState([]);
    useEffect(() => {
        setEmpInfo(props.data);
    }, []);
    return (
        <React.Fragment>
            <section>
                <div className="flex flex-col">
                    <div class="w-full">
                        <div class="w-full mx-auto h-full flex space-x-1 lg:space-x-2 items-center border-gray-200 border p-2 rounded-lg">
                            {
                                empInfo.map((el, index) => {
                                    return (
                                        <div key={index} className="w-full sm:h-24 h-full space-y-1 bg-gray-100 p-1 rounded-md">
                                            <img alt="team" className="mx-auto w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full" src="https://dummyimage.com/80x80" />
                                            <div className="flex-grow">
                                                <h2 className="text-blue-700 text-center title-font font-medium text-xs">{el.label}</h2>
                                                <p className="text-indigo-600 text-sm text-center font-bold">{el.count}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default EmployeeInfo;