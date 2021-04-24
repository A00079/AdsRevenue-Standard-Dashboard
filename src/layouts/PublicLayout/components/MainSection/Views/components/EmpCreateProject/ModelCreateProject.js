import React, { forwardRef, useRef, useImperativeHandle, useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Cookies from "js-cookie";
import axios from 'axios';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const CreateProject = forwardRef((props, ref) => {
    const [open, setOpen] = React.useState(false);
    const [teamMembers, setTeamMembers] = React.useState([]);

    const handleClose = () => {
        setOpen(false);
    };

    useImperativeHandle(
        ref,
        () => ({
            handleNewProject() {
                setOpen(true);
            }
        }),
    )

    const [newProject, setNewProject] = useState({
        empname: Cookies.get("fullname"),
        empemail: Cookies.get("email"),
        projectname: "",
        projectstatus: "",
    });

    const handleInputChange = (event) => {
        setNewProject((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    }

    const [newProjectTeam, setNewProjectTeam] = useState(
        {
            affname: "",
            affemail: "",
            affcontact: "",
            affpassword: "",
        }
    );

    const handleInputChangeAffTeam = (event) => {
        setNewProjectTeam((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    }

    const handleNewProjectSave = () => {
        let dataArr = [];
        let projectData = {
            projectdetails: {}
        }
        let projectteamData = {
            projectteamdetails: {}
        }
        dataArr.push(newProject);
        dataArr.map((el, index) => {
            el['project_id'] = Math.random().toString(36).substr(2, 9);
            el['createdon'] = new Date().toLocaleDateString().replaceAll('/', '-');
            el['totalteammembers'] = teamMembers.length;
        });
        projectData.projectdetails = dataArr;
        console.log('Project Details', projectData);
        teamMembers.map((el, index) => {
            el['project'] = projectData.projectdetails[0].project_id;
            el['empname'] = Cookies.get("fullname");
            el['empemail'] = Cookies.get("email");
            el['project'] = newProject.projectname;
        });
        projectteamData.projectteamdetails = teamMembers;

        let data = {};
        data.data = {};
        data.data.projectteamdetails = projectteamData.projectteamdetails;
        data.data.projectdetails = projectData.projectdetails;
        console.log('data.data.projectteamdetails', data.data.projectteamdetails);
        let base_url = '';
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            // DEV Code
            base_url = process.env.REACT_APP_DEV_BASE_URL
        } else {
            // PRODUCTION Code
            base_url = process.env.REACT_APP_PROD_BASE_URL
        }
        if (projectData.projectdetails.length !== 0) {
            axios.post(base_url + '/project/create', data).then((response) => {
                if (response.data.message == 'success') {
                    console.log('Project Added', response.data);
                    setTeamMembers([]);
                    document.getElementById('projectname').value = "";
                    document.getElementById('projectstatus').value = "";
                    setNewProject({});
                    handleClose();
                }
            }).catch((err) => {
                console.log('Error:', err);
            });
        }
    }
    const handleAddMultipleMembers = () => {
        setTeamMembers(teamMembers.concat(newProjectTeam));
        document.getElementById('affname').value = "";
        document.getElementById('affemail').value = "";
        document.getElementById('affcontact').value = "";
        document.getElementById('affpassword').value = "";
    }

    const handleMemberRemove = (name) => {
        setTeamMembers(teamMembers.filter(x => x.affname !== name));
    }

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Create Project
                </DialogTitle>
                <DialogContent dividers>
                    <div>
                        <p className='text-sm font-bold text-gray-600 py-2 pt-0'>Project Details</p>
                        <form noValidate autoComplete="off">
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        name="projectname"
                                        className='w-full'
                                        required
                                        id="projectname"
                                        label="Project Name"
                                        variant="outlined"
                                        defaultValue={newProject.projectname}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl variant="outlined" className='w-full'>
                                        <InputLabel id="demo-simple-select-outlined-label">Project Status</InputLabel>
                                        <Select
                                            name='projectstatus'
                                            className='w-full'
                                            labelId="demo-simple-select-outlined-label"
                                            id="projectstatus"
                                            defaultValue={newProject.status}
                                            onChange={(e) => handleInputChange(e)}
                                            label="Project Status"
                                        >
                                            <MenuItem value={'Active'}>Active</MenuItem>
                                            <MenuItem value={'Pending'}>Pending</MenuItem>
                                            <MenuItem value={'Completed'}>Completed</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <p className='text-sm font-bold text-gray-600'>Add Affilites</p>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        name="affname"
                                        className='w-full'
                                        required
                                        id="affname"
                                        label="Name"
                                        variant="outlined"
                                        defaultValue={newProject.affname}
                                        onChange={handleInputChangeAffTeam}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        name="affemail"
                                        className='w-full'
                                        required
                                        id="affemail"
                                        label="Email"
                                        variant="outlined"
                                        defaultValue={newProject.affemail}
                                        onChange={handleInputChangeAffTeam}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        name="affcontact"
                                        className='w-full'
                                        required
                                        id="affcontact"
                                        label="Contact No."
                                        variant="outlined"
                                        defaultValue={newProject.affcontact}
                                        onChange={handleInputChangeAffTeam}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        name="affpassword"
                                        className='w-full'
                                        required
                                        id="affpassword"
                                        label="Password"
                                        variant="outlined"
                                        defaultValue={newProject.affpassword}
                                        onChange={handleInputChangeAffTeam}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Button onClick={() => handleAddMultipleMembers()} variant="contained" color="primary" style={{ marginTop: '10px' }}>
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path></svg>
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <div class="flex flex-col">
                                        <div class="w-full">
                                            <div class="py-2 align-middle inline-block min-w-full sm:px-0 lg:px-0">
                                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-sm">
                                                    <table class="w-full divide-y divide-gray-200">
                                                        <thead class="bg-blue-100">
                                                            <tr>
                                                                <th scope="col" class="px-2 py-2 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                                                    Sr.No
                                                                </th>
                                                                <th scope="col" class="px-2 py-2 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                                                    Name
                                                                </th>
                                                                <th scope="col" class="px-2 py-2 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                                                    Contact No.
                                                                </th>
                                                                <th scope="col" class="px-2 py-2 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                                                    Password
                                                                </th>
                                                                <th scope="col" class="px-2 py-2 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                                                    Action
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="bg-white divide-y divide-gray-200">
                                                            {
                                                                teamMembers && teamMembers.map((el, index) => {
                                                                    return (
                                                                        <tr key={index}>
                                                                            <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                                                                {index + 1}
                                                                            </td>
                                                                            <td class="px-2 py-2 whitespace-nowrap">
                                                                                <div class="flex items-center">
                                                                                    <div class="">
                                                                                        <div class="text-sm font-medium text-gray-900">
                                                                                            {el.affname}
                                                                                        </div>
                                                                                        <div class="text-sm text-gray-500">
                                                                                            {el.affemail}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                                                                {el.affcontact}
                                                                            </td>
                                                                            <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                                                                {el.affpassword}
                                                                            </td>
                                                                            <td title="Remove" onClick={() => handleMemberRemove(el.affname)} class="text-right px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                                                                <svg class="w-6 h-6 text-right cursor-pointer text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleNewProjectSave} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
})

export default CreateProject;
