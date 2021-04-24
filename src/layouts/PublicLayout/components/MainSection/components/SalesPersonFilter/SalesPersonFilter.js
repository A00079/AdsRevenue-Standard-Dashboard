import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const SalesPersonFilter = () => {
    const classes = useStyles();
    const [openSelectingGropuType, setSelectingGropuType] = React.useState(false);
    const [selectedGroup, setSelectedGroup] = React.useState('Select Type');

    const handleSetGroup = (val) => {
        setSelectedGroup(val);
        handleSelectingGropuType();
    };
    const handleSelectingGropuType = (event) => {
        setSelectingGropuType(!openSelectingGropuType);
    };
    return (
        <React.Fragment>
            <section className="mt-1">
                <div className="flex flex-wrap justify-between">
                    <div class="relative inline-block text-left ml-1">
                        <div>
                            <button onClick={() => handleSelectingGropuType()} type="button" 
                            class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 lg:px-4 py-2 bg-white text-xs lg:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white" id="options-menu" aria-expanded="true" aria-haspopup="true">
                                {selectedGroup}
                                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        {
                            openSelectingGropuType ? <div class="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <div class="py-1" role="none">
                                    <a onClick={() => handleSetGroup('Sales Person')} href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Sales Person</a>
                                    <a onClick={() => handleSetGroup('Sales Team')} href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Sales Team</a>
                                </div>
                            </div> : ""
                        }
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default SalesPersonFilter;