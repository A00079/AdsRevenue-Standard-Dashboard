import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import Button from '@material-ui/core/Button';
import { green, purple, red } from '@material-ui/core/colors';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Dialog } from "../../../../../../components/ModalPopUp/components";

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const EmailTemplateCards = () => {
    const childRef = useRef();
    return (
        <React.Fragment>
            <section className="bg-gray-50">
                <div class="container py-1 mx-auto rounded">
                    <div class="flex flex-col text-left w-full">
                        <h1 class="sm:text-sm text-2xl font-bold title-font text-indigo-700">Email Templates</h1>
                    </div>
                    <div class="flex flex-wrap cursor-pointer">
                        <div class="lg:w-1/3 sm:w-1/2 p-2">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-64 h-64 rounded-lg object-cover object-center border-gray-200 border-2 rounded-lg shadow-lg" src="/img/businesstemp-01.PNG" />
                                <div class="px-8 py-10 relative z-10 w-64 h-64 border-4 border-gray-200 bg-white opacity-0 hover:opacity-90">
                                    <button onClick={() => { childRef.current.handleEmailPreview('businesstemplate_01') }} className="w-full mx-auto mt-16 bg-indigo-700 px-4 py-2 text-white rounded z-50">
                                        Preview
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-2">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-64 h-64 rounded-lg object-cover object-center border-gray-200 border-2 rounded-lg shadow-lg" src="/img/businesstemp-02.PNG" />
                                <div class="px-8 py-10 relative z-10 w-64 h-64 border-4 border-gray-200 bg-white opacity-0 hover:opacity-90">
                                    <button onClick={() => { childRef.current.handleEmailPreview('businesstemplate_02') }} className="w-full mx-auto mt-16 bg-indigo-700 px-4 py-2 text-white rounded z-50">
                                        Preview
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-2">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-64 h-64 rounded-lg object-cover object-center border-gray-200 border-2 rounded-lg shadow-lg" src="/img/businesstemp-03.PNG" />
                                <div class="px-8 py-10 relative z-10 w-64 h-64 border-4 border-gray-200 bg-white opacity-0 hover:opacity-90">
                                    <button className="w-full mx-auto mt-16 bg-indigo-700 px-4 py-2 text-white rounded z-50">
                                        Preview
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-2">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-64 h-64 rounded-lg object-cover object-center border-gray-200 border-2 rounded-lg shadow-lg" src="/img/businesstemp-04.PNG" />
                                <div class="px-8 py-10 relative z-10 w-64 h-64 border-4 border-gray-200 bg-white opacity-0 hover:opacity-90">
                                    <button className="w-full mx-auto mt-16 bg-indigo-700 px-4 py-2 text-white rounded z-50">
                                        Preview
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-2">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-64 h-64 rounded-lg object-cover object-center border-gray-200 border-2 rounded-lg shadow-lg" src="/img/businesstemp-05.PNG" />
                                <div class="px-8 py-10 relative z-10 w-64 h-64 border-4 border-gray-200 bg-white opacity-0 hover:opacity-90">
                                    <button className="w-full mx-auto mt-16 bg-indigo-700 px-4 py-2 text-white rounded z-50">
                                        Preview
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-2">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-64 h-64 rounded-lg object-cover object-center border-gray-200 border-2 rounded-lg shadow-lg" src="/img/businesstemp-06.PNG" />
                                <div class="px-8 py-10 relative z-10 w-64 h-64 border-4 border-gray-200 bg-white opacity-0 hover:opacity-90">
                                    <button className="w-full mx-auto mt-16 bg-indigo-700 px-4 py-2 text-white rounded z-50">
                                        Preview
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Dialog ref={childRef} />
        </React.Fragment>
    )
}

export default EmailTemplateCards;