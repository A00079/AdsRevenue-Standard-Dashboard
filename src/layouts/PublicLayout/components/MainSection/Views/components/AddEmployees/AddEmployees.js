import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { ToastMsg } from "../../../../../../../components/ToastMsg/components";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
        fontSize: '14px'
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    }
}));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const AddEmployees = () => {
    const childRef = useRef();
    const classes = useStyles();

    const [userDetails, setEmployeeDetails] = useState({
        firstname: "Sherlok",
        lastname: "",
        phonenumber: "",
        email: "",
        gender: "",
        dob: new Date('2016-08-18T21:11:54')
    });

    const handleInputChange = (event, flag) => {
        if (flag == 'date') {
            setEmployeeDetails((prevProps) => ({
                ...prevProps,
                ['dob']: event
            }));
        } else {
            setEmployeeDetails((prevProps) => ({
                ...prevProps,
                [event.target.name]: event.target.value
            }));
        }
    };

    const handleFormSubmit = () => {
        console.log(userDetails);
        let data = {};
        data.data = userDetails;
        if (!!userDetails) {
            axios.post(process.env.REACT_APP_BASE_URL + '/addnewuser', data).then((response) => {
                if (response.data.message == 'success') {
                    console.log('User Added', response.data);
                }
            }).catch((err) => {
                console.log('Error:', err);
            });
        }
    };

    return (
        <section>
            <div className='bread-crumbs mt-1 mb-3'>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
                        <HomeIcon className={classes.icon} />
                        <span className="text-gray-500 font-semibold">Home</span>
                    </Link>
                    <Link
                        color="inherit"
                        href="/getting-started/installation/"
                        onClick={handleClick}
                        className={classes.link}
                    >
                        <GroupAddIcon className={classes.icon} />
                        <span className="text-gray-500 font-semibold">Manage Employees</span>
                    </Link>
                    <Typography color="textPrimary" className={classes.link}>
                        <PersonAddIcon className={clsx(classes.icon, 'text-indigo-700')} />
                        <span className="text-indigo-700 font-bold">Add New Employee</span>
                    </Typography>
                </Breadcrumbs>
            </div>
            <div className='from-actions py-3 bg-indigo-100 -mx-2'>
                <div className='flex flex-col sm:flex-row justify-between space-x-4 px-10 items-center'>
                    <div className='title'>
                        <h4 className="text-blue-600 font-bold text-sm">Add New Employees</h4>
                    </div>
                    <div className='flex flex-row justify-between space-x-4 px-10 text-sm items-center mt-4 sm:mt-0'>
                        <button className="text-blue-600 text-xs sm:text-md font-bold">Cancel</button>
                        <button onClick={() => { handleFormSubmit() }} className="text-blue-600 text-xs sm:text-md font-bold border-blue-600 rounded-md border-2 py-1 px-3">Save</button>
                        <button onClick={() => { childRef.current.handleToastVisibility() }} className="text-white font-bold bg-blue-600 text-xs sm:text-md border-blue-600 rounded-md border-2 py-1 px-2">Save & Add Another</button>
                    </div>
                </div>
            </div>
            <div className="employee-contact-form">
                <div class="hidden sm:block" aria-hidden="true">
                    <div class="py-5">
                        <div class="border-t border-gray-200"></div>
                    </div>
                </div>

                <div class="mt-10 sm:mt-0">
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="md:col-span-1">
                            <div class="px-4 sm:px-3">
                                <h3 class="text-lg font-bold leading-6 text-indigo-600">Personal Information</h3>
                                <p class="mt-1 text-xs font-bold text-gray-600">
                                    Please provide us with your correct personal details.This data will be used all over by the application.
                                </p>
                                <img src="/img/personalinfo.svg" className="hidden sm:block object-cover object-center w-full h-full" />
                            </div>
                        </div>
                        <div class="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div class="shadow overflow-hidden sm:rounded-md">
                                    <div class="px-4 py-5 bg-white sm:p-6">
                                        <div class="grid grid-cols-6 gap-6">
                                            <div class="col-span-6 sm:col-span-3">
                                                <TextField
                                                    name="firstname"
                                                    style={{ width: '100%' }}
                                                    required
                                                    id="outlined-required"
                                                    label="First Name"
                                                    variant="outlined"
                                                    defaultValue={userDetails.firstname}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3">
                                                <TextField
                                                    name="lastname"
                                                    style={{ width: '100%' }}
                                                    required
                                                    id="outlined-required"
                                                    label="Last Name"
                                                    variant="outlined"
                                                    defaultValue={userDetails.lastname}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div class="col-span-6 sm:col-span-3">
                                                <TextField
                                                    name="phonenumber"
                                                    style={{ width: '100%' }}
                                                    label="Phone Number"
                                                    id="outlined-start-adornment"
                                                    className={clsx(classes.margin, classes.textField)}
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                                    }}
                                                    variant="outlined"
                                                    defaultValue={userDetails.phonenumber}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div class="col-span-6 sm:col-span-3">
                                                <TextField
                                                    name="email"
                                                    style={{ width: '100%' }}
                                                    required
                                                    id="outlined-required"
                                                    label="Email"
                                                    variant="outlined"
                                                    defaultValue={userDetails.email}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div class="col-span-6 sm:col-span-3">
                                                <FormControl name="gender" variant="outlined" style={{ minWidth: '100%' }}>
                                                    <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                                                    <Select
                                                        name="gender"
                                                        style={{ width: '100%' }}
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        label="Gender"
                                                        defaultValue={userDetails.gender}
                                                        onChange={(e) => handleInputChange(e, 'gender')}
                                                    >
                                                        <MenuItem value='Male'>Male</MenuItem>
                                                        <MenuItem value='Female'>Female</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div class="col-span-6 sm:col-span-3">
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardDatePicker
                                                        style={{ width: '100%', marginTop: '6px' }}
                                                        id="date-picker-dialog"
                                                        label="Date of Birth"
                                                        format="MM/dd/yyyy"
                                                        value={userDetails.dob}
                                                        onChange={(e) => handleInputChange(e, 'date')}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                    />
                                                </MuiPickersUtilsProvider>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Save
                                        </button>
                                    </div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true">
                    <div class="py-5">
                        <div class="border-t border-gray-200"></div>
                    </div>
                </div>

                <div class="mt-10 sm:mt-0">
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="md:col-span-1">
                            <div class="px-4 sm:px-3">
                                <h3 class="text-lg font-bold leading-6 text-indigo-600">Address Details</h3>
                                <p class="mt-1 text-xs font-bold text-gray-600">
                                    Please provide us with your correct address details.This data will be used all over by the application.
                                </p>
                                <img src="/img/address.svg" className="hidden sm:block object-cover object-center h-full w-full" />
                            </div>
                        </div>
                        <div class="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div class="shadow overflow-hidden sm:rounded-md">
                                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <div class="grid grid-cols-6 gap-6">
                                            <div class="col-span-6 sm:col-span-12">
                                                <TextField
                                                    style={{ width: '100%' }}
                                                    required
                                                    id="outlined-required"
                                                    label="Street Address"
                                                    defaultValue="A/293, Poonam Empire"
                                                    variant="outlined"
                                                />
                                            </div>
                                            <div class="col-span-6 sm:col-span-4">
                                                <TextField
                                                    style={{ width: '100%' }}
                                                    required
                                                    id="outlined-required"
                                                    label="City"
                                                    defaultValue="A/293, Poonam Empire"
                                                    variant="outlined"
                                                />
                                            </div>
                                            <div class="col-span-6 sm:col-span-4">
                                                <TextField
                                                    style={{ width: '100%' }}
                                                    required
                                                    id="outlined-required"
                                                    label="State"
                                                    defaultValue="A/293, Poonam Empire"
                                                    variant="outlined"
                                                />
                                            </div>
                                            <div class="col-span-6 sm:col-span-4">
                                                <TextField
                                                    style={{ width: '100%' }}
                                                    required
                                                    id="outlined-required"
                                                    label="Zip Code"
                                                    defaultValue="A/293, Poonam Empire"
                                                    variant="outlined"
                                                />
                                            </div>
                                            <div class="col-span-6 sm:col-span-4">
                                                <TextField
                                                    style={{ width: '100%' }}
                                                    required
                                                    id="outlined-required"
                                                    label="Country"
                                                    defaultValue="A/293, Poonam Empire"
                                                    variant="outlined"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Save
                                        </button>
                                    </div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastMsg ref={childRef} vertical={"top"} horizontal={"right"} message={"Hello World"} severity={"success"} />
        </section>
    );
}

export default AddEmployees;
