import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../../../../lotties/admin.json';
import { EmployeeInfo, LoggedInEmployees, TotalTeams, HelpCenter, SalesPersonFilter, EmailTemplateCards } from "..";
import './Dashboard.css';

const Dashboard = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <React.Fragment>
            <section>
                <div className="w-full flex-col flex sm:flex-row justify-between space-x-0 sm:space-x-2 py-1">
                    <div class="w-full mb-24 sm:mb-0 h-40 sm:w-1/2 lg:w-full text-gray-600 body-font">
                        <div class="container mx-auto px-5 flex md:flex-row flex-col rounded-lg items-center" style={{ background: '#E8F6ED' }}>
                            <div class="lg:flex-grow md:w-1/2 mb-0 lg:pr-24 md:pr-0 flex flex-col md:items-start md:text-left sm:mb-16 md:mb-0 items-center text-center">
                                <h1 class="title-font text-lg lg:text-xl mb-1 font-bold" style={{ color: '#88D985' }}>Welcome back! <span style={{ color: '#88D985' }}>Admin</span>
                                </h1>
                                <p class="mb-0 leading-relaxed text-xs text-gray-400 font-medium">All system are running smoothly.</p>
                                <p class="mb-1 leading-relaxed text-xs text-gray-400 font-medium">All the stats of your activity are displayed below & up to date.</p>
                            </div>
                            <div class="md:w-1/2 w-full">
                                <div>
                                    <Lottie
                                        options={defaultOptions}
                                        height={150}
                                        width={150}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <section className="main-emp-details flex flex-wrap justify-start mt-1 sm:mt-1  space-x-0">
                            <SalesPersonFilter />
                            <SalesPersonFilter />
                            <SalesPersonFilter />
                        </section> */}
                        <section className="mt-2 h-64 sm:h-96 overflow-auto custom-scroll scrollbar">
                            <EmailTemplateCards />
                        </section>
                    </div>
                    <div className="w-full sm:w-1/2 short-employee-info mt-96 sm:mt-0 ">
                        <div className="employee-info mt-2 sm:mt-0">
                            <EmployeeInfo />
                        </div>
                        <div className="logged-in-emp-details mt-2">
                            <LoggedInEmployees />
                        </div>
                        <div className="team-info mt-1">
                            <p className="text-gray-600 text-sm font-semibold py-1">Teams</p>
                            <TotalTeams />
                        </div>
                        <div className="need-help">
                            <HelpCenter />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    )
}

export default Dashboard;