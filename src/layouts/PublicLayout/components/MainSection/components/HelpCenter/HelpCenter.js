import React from 'react';
import Button from '@material-ui/core/Button';

const HelpCenter = () => {
    return (
        <React.Fragment>
            <div class="p-2 w-full">
                <div class="w-full h-full flex items-center bg-indigo-700 border-gray-200 border p-2 rounded-lg">
                    <img alt="team" class="w-24 h-24 mr-4 object-cover object-center flex-shrink-0" src="/img/contact.svg" />
                    <div class="flex-grow text-left">
                        <h2 class="text-white text-left title-font font-bold">Need Help?</h2>
                        <p class="text-gray-300 text-xs mb-1">Do you have any problem while using the Sales Management portal.</p>
                        <Button variant="contained" color="primary">
                            <span className="text-xs text-white">Contact Now</span>
                        </Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HelpCenter;