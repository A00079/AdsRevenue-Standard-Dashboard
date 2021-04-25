import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { withRouter } from "react-router-dom";
import axios from "axios";

const ManageAffiliates = (props) => {

    const [editedDetails, setEditedDetails] = useState([]);
    const [affconvertion, setAffconvertion] = useState('');
    const [affpayout, setAffPayout] = useState('');
    const [affpaymentstatus, setAffPaymantStatus] = useState('');

    useEffect(() => {
        let affid = props.history.location.pathname.split('/')[2];
        let base_url = '';
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            // DEV Code
            base_url = process.env.REACT_APP_DEV_BASE_URL
        } else {
            // PRODUCTION Code
            base_url = process.env.REACT_APP_PROD_BASE_URL
        }
        let data = {
            affiliate_id: affid
        }
        axios.post(base_url + '/project/singleaffiliate/read', data).then((response) => {
            if (response.data.message == 'success') {
                console.log('Single Affiliate Received', response.data.data);

                setEditedDetails(response.data.data);
                setAffconvertion(response.data.data[0].conversion);
                setAffPayout(response.data.data[0].payout);
                setAffPaymantStatus(response.data.data[0].paymentstatus);
            }
        }).catch((err) => {
            console.log('Error:', err);
        });
    }, []);

    const handleAffiliateUpdate = (aff_id) => {
        let base_url = '';
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            // DEV Code
            base_url = process.env.REACT_APP_DEV_BASE_URL
        } else {
            // PRODUCTION Code
            base_url = process.env.REACT_APP_PROD_BASE_URL
        }
        let data = {
            data: {
                affiliate_id: aff_id,
                afftotalamount: affconvertion * affpayout,
                affconvertion: affconvertion,
                affpayout: affpayout,
                affpaymentstatus: affpaymentstatus
            }
        }
        axios.post(base_url + '/project/singleaffiliate/modify', data).then((response) => {
            if (response.data.message == 'success') {
                console.log('Single Affiliate Modified', response.data.data);
            }
        }).catch((err) => {
            console.log('Error:', err);
        });
    }

    return (
        <React.Fragment>
            <div class="flex flex-col mt-2">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Affiliate Name
                                        </th>
                                        <th scope="col" class="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Employee Name
                                        </th>
                                        <th scope="col" class="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Conevrsion
                                        </th>
                                        <th scope="col" class="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Payout
                                        </th>
                                        <th scope="col" class="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Payment Status
                                        </th>
                                        <th scope="col" class="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Total Amount
                                        </th>
                                        <th scope="col" class="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    {
                                        editedDetails && editedDetails.length !== 0 ?
                                            <tr>
                                                <td class="px-2 py-4 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        {/* <div class="flex-shrink-0 h-10 w-10">
                                                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                                                </div> */}
                                                        <div class="ml-4">
                                                            <div class="text-sm font-medium text-gray-900 capitalize">
                                                                {editedDetails[0].affname}
                                                            </div>
                                                            <div class="text-xs text-gray-500">
                                                                {editedDetails[0].affemail}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-2 py-4 whitespace-nowrap text-left">
                                                    <div class="text-sm text-gray-900">{editedDetails[0].empname}</div>
                                                    <div class="text-xs text-gray-500">{editedDetails[0].project}</div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <TextField
                                                        name="affconversion"
                                                        className='w-20'
                                                        required
                                                        id="affconversion"
                                                        label=""
                                                        variant="outlined"
                                                        value={affconvertion}
                                                        onChange={(e) => setAffconvertion(e.target.value)}
                                                    />
                                                </td>
                                                <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <TextField
                                                        name="affpayout"
                                                        className='w-20'
                                                        required
                                                        id="affpayout"
                                                        label=""
                                                        variant="outlined"
                                                        value={affpayout}
                                                        onChange={(e) => setAffPayout(e.target.value)}
                                                    />
                                                </td>
                                                <td class="px-2 py-4 whitespace-nowrap text-center text-sm font-medium">
                                                    <FormControl variant="outlined" className='w-full'>
                                                        <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
                                                        <Select
                                                            name='affpaymentstatus'
                                                            className='w-28 mx-auto'
                                                            labelId="demo-simple-select-outlined-label"
                                                            id="affpaymentstatus"
                                                            value={affpaymentstatus}
                                                            onChange={(e) => setAffPaymantStatus(e.target.value)}
                                                            label=""
                                                        >
                                                            <MenuItem value={'Pending'}>Pending</MenuItem>
                                                            <MenuItem value={'Completed'}>Completed</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </td>
                                                <td class="px-2 py-4 whitespace-nowrap text-green-400 text-center text-md font-bold">
                                                    {affconvertion * affpayout}
                                                </td>
                                                <td class="space-x-3 px-2 py-4 whitespace-nowrap text-center text-sm font-medium">
                                                    <button className="bg-red-400 mt-3 p-2 rounded-md">
                                                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                                    </button>
                                                    <button onClick={() => handleAffiliateUpdate(editedDetails[0].affiliate_id)} className="bg-blue-600 text-white  mt-3 p-2 rounded-md">
                                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                                    </button>
                                                </td>
                                            </tr> : "No Data Availiable"
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default withRouter(ManageAffiliates);