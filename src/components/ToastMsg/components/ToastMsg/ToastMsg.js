import React, { useImperativeHandle, forwardRef } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const CustomizedSnackbars = forwardRef((props, ref) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    
    useImperativeHandle(
        ref,
        () => ({
            handleToastVisibility() {
                setOpen(true);
            }
        }),
    )

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{ vertical: props.vertical, horizontal: props.horizontal }}
                open={open}
                autoHideDuration={3000}
                severity="success"
                onClose={handleClose}
                key={props.vertical, props.horizontal}
            >
                <Alert severity={props.severity}>
                    {props.message}
                </Alert>
            </Snackbar>
        </div>
    );
});

export default CustomizedSnackbars;
