import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple, brown, amber } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    brown: {
        color: theme.palette.getContrastText(brown[500]),
        backgroundColor: brown[500],
    },
    amber: {
        color: theme.palette.getContrastText(amber[500]),
        backgroundColor: amber[500],
    },
}));

export default function TotalTeams() {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <div className="flex flex-wrap justify-start">
                <div className="flex flex-col w-16 sm:w-20 mt-1 sm:mt-0">
                    <Avatar className={clsx(classes.orange, 'mx-auto')}>H</Avatar>
                    <p className="text-center text-xs">Team one</p>
                </div>
                <div className="flex flex-col w-16 sm:w-20 mt-1 sm:mt-0">
                    <Avatar className={clsx(classes.purple, 'mx-auto')}>AO</Avatar>
                    <p className="text-center text-xs">Team one</p>
                </div>
                <div className="flex flex-col w-16 sm:w-20 mt-1 sm:mt-0">
                    <Avatar className={clsx('bg-green-800 mx-auto')}>GH</Avatar>
                    <p className="text-center text-xs">Team one</p>
                </div>
                <div className="flex flex-col w-16 sm:w-20 mt-1 sm:mt-0">
                    <Avatar className={clsx(classes.brown, 'mx-auto')}>TY</Avatar>
                    <p className="text-center text-xs">Team one</p>
                </div>
            </div>
        </section>
    );
}
