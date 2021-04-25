import React, { forwardRef, useRef, useImperativeHandle, useEffect, useState } from 'react';
import ModelCreateProject from './ModelCreateProject.js';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    textTransform: 'uppercase',
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const EmpCreateProject = (props) => {
  const childRef = useRef();
  const classes = useStyles();
  const [affProjects, setAffProjects] = useState([]);
  const [affProjectsTeamMembers, setAffProjectsTeamMembers] = useState([]);

  useEffect(() => {
    let base_url = '';
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      // DEV Code
      base_url = process.env.REACT_APP_DEV_BASE_URL
    } else {
      // PRODUCTION Code
      base_url = process.env.REACT_APP_PROD_BASE_URL
    }
    axios.get(base_url + '/project/read').then((response) => {
      if (response.data.message == 'success') {
        console.log('Project Received', response.data.data);
        setAffProjects(response.data.data);
      }
    }).catch((err) => {
      console.log('Error:', err);
    });
  }, []);

  const handleRouteChange = (currentRoute, affid) => {
    props.history.push("/" + currentRoute + '/' + affid);
  };

  const handlefetchTeamMembers = (projectid, pro_index) => {
    let projectscontainer = document.querySelectorAll('#projectcontainer');
    projectscontainer.forEach((el, index) => {
      if (index == pro_index) {
        el.childNodes[0].childNodes[0].classList.add('bg-indigo-600');
        el.childNodes[0].childNodes[0].childNodes[0].classList.remove('text-indigo-700')
        el.childNodes[0].childNodes[0].childNodes[0].classList.add('text-white')
      } else {
        el.childNodes[0].childNodes[0].classList.remove('bg-indigo-600');
        el.childNodes[0].childNodes[0].classList.add('bg-blue-200');
        el.childNodes[0].childNodes[0].childNodes[0].classList.remove('text-white')
        el.childNodes[0].childNodes[0].childNodes[0].classList.add('text-indigo-700')
      }
    });
    let base_url = '';
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      // DEV Code
      base_url = process.env.REACT_APP_DEV_BASE_URL
    } else {
      // PRODUCTION Code
      base_url = process.env.REACT_APP_PROD_BASE_URL
    }
    let data = {};
    data.projectid = projectid;
    axios.post(base_url + '/project/teammembers/read', data).then((response) => {
      if (response.data.message == 'success') {
        console.log('Team Members Received', response.data.data);
        setAffProjectsTeamMembers(response.data.data);
      }
    }).catch((err) => {
      console.log('Error:', err);
    });
  }
  return (
    <React.Fragment>
      <div>
        <div>
          <button onClick={() => { childRef.current.handleNewProject() }} class="flex items-center align-middle py-2 bg-white shadow-md  rounded-md text-gray-800 text-sm font-semibold ml-0 border border-gray-200 hover:shadow-xl transition-all w-36  focus:outline-none">   <svg class="h-6 px-1" viewBox="0 0 36 36"><path class="ng-tns-c17-1" d="M16 16v14h4V20z" fill="#34A853"></path><path class="ng-tns-c17-1" d="M30 16H20l-4 4h14z" fill="#4285F4"></path><path class="ng-tns-c17-1" d="M6 16v4h10l4-4z" fill="#FBBC05"></path><path class="ng-tns-c17-1" d="M20 16V6h-4v14z" fill="#EA4335"></path><path class="ng-tns-c17-1" d="M0 0h36v36H0z" fill="none"></path></svg>Create Project</button>
        </div>

        <section className='grid grid-cols-12 gap-3'>
          <div class="col-span-4">
            <div class="flex items-center justify-between text-sm border-b border-gray-200 mt-3">
              <div>
                <button class="py-1 w-20 uppercase font-semibold select-none h-full focus:outline-none border-b border-black">
                  Affiliates
                </button>
              </div>
            </div>
            <ul class="py-1 h-64 sm:h-72 overflow-auto custom-scroll scrollbar">
              {
                affProjectsTeamMembers && affProjectsTeamMembers.length !== 0 ?
                  affProjectsTeamMembers.map((el, index) => {
                    return (
                      <li>
                        <div>
                          <button class="flex items-center w-full px-0 py-2 select-none hover:bg-gray-100 focus:outline-none">
                            <Avatar className={classes.orange}>{el.affname.slice(0, 2)}</Avatar>
                            <div class="transform translate-y-0.5 text-left ml-2 w-full">
                              <div className='flex flex-row w-full justify-between'>
                                <h3 class="leading-4 text-sm font-bold text-indigo-700 capitalize">{el.affname}</h3>
                                <div onClick={() => { handleRouteChange('manage-affiliate', el.affiliate_id) }}>
                                  <svg class="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                </div>
                              </div>
                              <span class="text-xs text-gray-500">{el.affemail}</span>
                            </div>
                          </button>
                          <div className='border-b border-gray-200 w-52 mx-auto'></div>
                        </div>
                      </li>
                    )
                  })
                  :
                  <li>
                    <p className="text-sm font-bold mt-4">Click on a project to view affiliates</p>
                    <img alt="team" class="w-48 h-48 mx-auto object-fit object-center flex-shrink-0 rounded-md mr-4" src="./img/notfound.svg" />
                  </li>
              }
            </ul>
          </div>
          <div className='create-projects col-span-8'>
            <div className='flex flex-col mt-0 space-y-2'>
              <div class="flex items-center justify-between text-sm border-b border-gray-200 mt-3">
                <div className='flex flex-row space-x-2 items-center'>
                  <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                  <button class="py-1 capitalize font-semibold select-none h-full focus:outline-none border-b">
                    <span className='text-gray-500'>Recent Projects</span>
                  </button>
                </div>
              </div>
              <div className='flex flex-col pr-2 space-y-2 items-end h-64 sm:h-70 overflow-auto custom-scroll scrollbar'>
                {
                  affProjects && affProjects.length !== 0 ?
                    affProjects.map((el, index) => {
                      return (
                        <div key={index} id='projectcontainer' class="p-0 w-full cursor-pointer bg-indigo-50" onClick={() => handlefetchTeamMembers(el.project_id, index)}>
                          <div class="h-full flex items-center border-gray-200 border p-2 rounded-lg">
                            <div class="w-14 h-14 bg-blue-200 rounded-md mr-4">
                              <p className='text-xs text-indigo-700 font-extrabold text-center mt-4'>{el.projectstatus}</p>
                            </div>
                            <div class="flex-grow">
                              <h2 class="text-indigo-600 text-sm title-font font-bold">{el.projectname}</h2>
                              <p class="text-gray-500 text-xs">{el.empname}</p>
                            </div>
                            <div class="flex-grow">
                              <h2 class="text-green-500 text-sm title-font font-bold">Created On</h2>
                              <p class="text-gray-500 text-xs">{el.createdon}</p>
                            </div>
                            <div class="flex-grow">
                              <h2 class="text-green-500 text-sm title-font font-bold">Team Members</h2>
                              <p class="text-gray-500 text-xs">{el.totalteammembers}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })
                    : <h4>No Project Found</h4>
                }
              </div>
            </div>
          </div>
        </section>
      </div>
      <ModelCreateProject ref={childRef} />
    </React.Fragment>
  );
};

export default withRouter(EmpCreateProject);
