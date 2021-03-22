import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import EmailTemplate from './HtmlTemplate';
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

const CustomizedDialogs = forwardRef((props, ref) => {

    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
    const [previewHtml, setpreviewHtml] = React.useState('');

    useImperativeHandle(
        ref,
        () => ({
            handleEmailPreview(el_template) {
                setOpen(true);
                setpreviewHtml(EmailTemplate[el_template]);
            }
        }),
    )
    const handleEmailTemplateSubmit = () => {

        const user = {
            subject: 'AdsRevenue',
            htmlTemplate: previewHtml
        };

        axios.post(`${process.env.REACT_APP_BASE_URL}/api/client/postemail/create`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
                handleClose();
            }).catch((err) => {
                console.error('Error Sending Email...', err);
            });
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Template Preview
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {ReactHtmlParser(previewHtml)}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={handleEmailTemplateSubmit} color="primary">
                        Send Email
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
})

export default CustomizedDialogs;
