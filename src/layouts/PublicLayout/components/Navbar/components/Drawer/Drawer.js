import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Avatar, CustomDropDown, ThreeDotMenu } from "../../components";
import StoreIcon from "@material-ui/icons/Store";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import AddBoxIcon from "@material-ui/icons/AddBox";
import EditIcon from "@material-ui/icons/Edit";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import ExploreIcon from "@material-ui/icons/Explore";
import RoomIcon from "@material-ui/icons/Room";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import DeleteIcon from "@material-ui/icons/Delete";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import GroupIcon from "@material-ui/icons/Group";
import AddAlarmIcon from "@material-ui/icons/AddAlarm";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HistoryIcon from "@material-ui/icons/History";
import RateReviewIcon from "@material-ui/icons/RateReview";
import EmailIcon from "@material-ui/icons/Email";
import ReceiptIcon from "@material-ui/icons/Receipt";
import Button from "@material-ui/core/Button";
import { Gauge } from "../../../../../../components/GraphComponents/components";
import { Dashboard } from "../../../MainSection/components";
import {
  AddEmployees,
  SingleEmails,
  ViewEmployees,
} from "../../../MainSection/Views/components";
import HomeIcon from "@material-ui/icons/Home";
import { withRouter } from "react-router-dom";
import standardApi from "../../../../../../utils/standardApi/standardApi.js";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { authenticateUser } from "../../../../../../actions/authActions.js";
import EmployeeHomeScreen from "../../../MainSection/Views/components/EmployeeHomeScreen";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
    },
  },
  drawerOpen: {
    width: drawerWidth,
    "&::-webkit-scrollbar": {
      display: "none",
    },
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f5f5f5",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "#eeeeee",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    fontWeight: "bold",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: "12px",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  nested: {
    paddingTop: theme.spacing(0),
    paddingLeft: theme.spacing(4),
  },
}));

const MiniDrawer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [activePanelNumber, setActivePanelNumber] = React.useState("5");
  const [activeRoute, setActiveRoute] = React.useState("/");
  const [userFullName, setUserFullName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");

  React.useEffect(() => {
    let splitRoute = props.history.location.pathname.split("/");
    if (props.history.location.pathname == "/") {
      setActiveRoute(props.history.location.pathname);
    } else {
      setActiveRoute(splitRoute[1]);
    }
    if (!!Cookies.get("fullname") && !!Cookies.get("email")) {
      setUserFullName(Cookies.get("fullname"));
      setUserEmail(Cookies.get("email"));
    }
  }, [props.history.pathname]);

  const activePanel = (item) => {
    if (item == "manageemployees") {
      setActivePanelNumber("1");
    } else if (item == "shootemails") {
      setActivePanelNumber("2");
    } else if (item == "emailtemplates") {
      setActivePanelNumber("3");
    } else if (item == "shootmessages") {
      setActivePanelNumber("4");
    } else if (item == "home") {
      props.history.push("/");
      setActivePanelNumber("5");
    }
    handleDrawerOpen();
  };

  const getCurrentDate = () => {
    var today = new Date();
    var day = today.getDay();
    var daylist = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday ",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    console.log("Today is : " + daylist[day] + ".");
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var prepand = hour >= 12 ? " PM " : " AM ";
    hour = hour >= 12 ? hour - 12 : hour;
    if (hour === 0 && prepand === " PM ") {
      if (minute === 0 && second === 0) {
        hour = 12;
        prepand = " Noon";
      } else {
        hour = 12;
        prepand = " PM";
      }
    }
    if (hour === 0 && prepand === " AM ") {
      if (minute === 0 && second === 0) {
        hour = 12;
        prepand = " Midnight";
      } else {
        hour = 12;
        prepand = " AM";
      }
    }
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const d = new Date();
    return (
      hour +
      ":" +
      minute +
      prepand +
      " at " +
      new Date().getDate() +
      "th " +
      monthNames[d.getMonth()] +
      " " +
      new Date().getFullYear()
    );
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleRouteChange = (currentRoute) => {
    setActiveRoute(currentRoute);
    props.history.push("/" + currentRoute);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    handleShootemails("close");
    handleEmployees("close");
    handleEmailTemplates("close");
    handleShootMessages("close");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [openEmployees, setOpenEmployee] = React.useState(false);
  const [openemailtemplates, setOpenEmailTemplates] = React.useState(false);
  const [openshootemails, setOpenShootemails] = React.useState(false);
  const [openshootmessages, setOpenShootMessages] = React.useState(false);

  const handleShootemails = (el) => {
    if (!!el) {
      if (el == "close") {
        setOpenShootemails(false);
      } else {
        setOpenShootemails(!openshootemails);
      }
    }
  };
  const handleShootMessages = (el) => {
    if (!!el) {
      if (el == "close") {
        setOpenShootMessages(false);
      } else {
        setOpenShootMessages(!openshootmessages);
      }
    }
  };
  const handleEmailTemplates = (el) => {
    if (!!el) {
      if (el == "close") {
        setOpenEmailTemplates(false);
      } else {
        setOpenEmailTemplates(!openemailtemplates);
      }
    }
  };
  const handleEmployees = (el) => {
    if (!!el) {
      if (el == "close") {
        setOpenEmployee(false);
      } else {
        setOpenEmployee(!openEmployees);
      }
    }
  };

  const handleSyncData = () => {
    standardApi.read("/syncdata", Cookies.get("access")).then((response) => {
      console.log("sync data", response.data);
    });
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.grow}>
        <AppBar
          position="fixed"
          color={"inherit"}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <div className="flex flex-row justify-between sm:space-x-8">
              {open ? (
                ""
              ) : (
                <img
                  src="/img/DashboardLogo.svg"
                  className="hidden sm:block object-contain object-cover w-16 h-16 py-4 -mx-6"
                />
              )}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div className="flex flex-col ml-4">
              <Typography className={classes.title} variant="h6" noWrap>
                <span className="font-semibold text-indigo-800">
                  AdsRevenue
                </span>
              </Typography>
              <small
                className={clsx(
                  classes.title,
                  "text-xs font-medium text-gray-400"
                )}
              >
                {getCurrentDate()}
              </small>
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <Button
              onClick={() => {
                handleSyncData();
              }}
              variant="contained"
              size="small"
              style={{ backgroundColor: "#068F38", marginRight: "10px" }}
            >
              <div className="flex flex-row justify-between items-center space-x-1">
                <HistoryIcon className="text-white" />
                <small className="text-xs font-bold text-white capitalize">
                  Sync Data
                </small>
              </div>
            </Button>
            <div className={classes.sectionDesktop}>
              <div className="border-gray-100 border-l-2 border-r-2 mt-2">
                <IconButton
                  aria-label="show 4 new mails"
                  className="border-none outline-none"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon className="text-gray-500" />
                  </Badge>
                </IconButton>
              </div>
              <div className="border-gray-100 border-r-2 px-2 mt-2">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon className="text-gray-500" />
                  </Badge>
                </IconButton>
              </div>
              <div className="flex flex-row justify-between items-center">
                <Avatar />
                <CustomDropDown authenticateUserFunc={props.authenticateUser} />
              </div>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <div className="flex flex-row justify-between items-center">
            <img
              src="/img/DashboardLogo.svg"
              className="object-contain object-cover w-16 h-16 py-2"
            />
            <h4
              className="text-gray-600 text-indigo-800 font-bold text-lg ml-2"
              paragraph
            >
              AdsRevenue
            </h4>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List className="bg-blue-50">
          <ListItem className="bg-green-50">
            {open ? (
              <div className="lg:w-full md:full w-full">
                <div className="h-full flex flex-row justify-between items-center rounded-lg">
                  <Avatar />
                  <div className="flex-grow">
                    <div className="flex flex-row justify-between items-center">
                      <h2 className="text-blue-800 title-font font-bold">
                        {userFullName}
                      </h2>
                      <img
                        src="/img/checkmark.png"
                        className="ml-1 object-contain object-cover w-4 h-4"
                      />
                    </div>
                    <p className="text-gray-500">{userEmail}</p>
                  </div>
                  <ThreeDotMenu />
                </div>
              </div>
            ) : (
              <div className="-mx-4 sm:-mx-2 p-0">
                <Avatar />
              </div>
            )}
          </ListItem>
        </List>
        {open ? (
          <h4 className="text-gray-600 font-bold ml-3">Navigation</h4>
        ) : (
          ""
        )}
        <List>
          <div
            onClick={() => activePanel("home")}
            className={
              activePanelNumber == "5"
                ? "border-blue-700 border-l-4 rounded-r-full bg-indigo-100"
                : "hover:border-blue-700 border-l-4 rounded-r-full hover:bg-indigo-100"
            }
          >
            <ListItem button>
              <ListItemIcon
                style={open ? { minWidth: "40px" } : { minWidth: "60px" }}
              >
                <div className="bg-indigo-100 p-2 rounded -mx-3 sm:-mx-2">
                  <HomeIcon
                    className={open ? "text-blue-700" : "text-blue-700"}
                  />
                </div>
              </ListItemIcon>
              <ListItemText>
                <span className="text-sm text-purple-800 font-bold">Home</span>
              </ListItemText>
            </ListItem>
          </div>
          {props.authrole == "admin" ? (
            <div
              onClick={() => activePanel("manageemployees")}
              className={
                activePanelNumber == "1"
                  ? "border-blue-700 border-l-4 rounded-r-full bg-indigo-100"
                  : "hover:border-blue-700 border-l-4 rounded-r-full hover:bg-indigo-100"
              }
            >
              <ListItem button onClick={handleEmployees}>
                <ListItemIcon
                  style={open ? { minWidth: "40px" } : { minWidth: "60px" }}
                >
                  <div className="bg-indigo-100 p-2 rounded -mx-3 sm:-mx-2">
                    <GroupAddIcon
                      className={open ? "text-red-800" : "text-red-800"}
                    />
                  </div>
                </ListItemIcon>
                <ListItemText>
                  <span className="text-sm text-purple-800 font-bold">
                    Manage Employees
                  </span>
                </ListItemText>
                {openEmployees ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            </div>
          ) : null}
          {props.authrole == "employee" ? (
            <div
              onClick={() => activePanel("manageemployees")}
              className={
                activePanelNumber == "1"
                  ? "border-blue-700 border-l-4 rounded-r-full bg-indigo-100"
                  : "hover:border-blue-700 border-l-4 rounded-r-full hover:bg-indigo-100"
              }
            >
              <ListItem button onClick={handleEmployees}>
                <ListItemIcon
                  style={open ? { minWidth: "40px" } : { minWidth: "60px" }}
                >
                  <div className="bg-indigo-100 p-2 rounded -mx-3 sm:-mx-2">
                    <GroupAddIcon
                      className={open ? "text-red-800" : "text-red-800"}
                    />
                  </div>
                </ListItemIcon>
                <ListItemText>
                  <span className="text-sm text-purple-800 font-bold">
                    Manage Affiliates
                  </span>
                </ListItemText>
                {openEmployees ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            </div>
          ) : null}

          <Collapse in={openEmployees} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => {
                  handleRouteChange("add-affiliates");
                }}
              >
                <ListItemIcon>
                  <div className="bg-indigo-100 p-0 rounded ">
                    <AddBoxIcon
                      className={open ? "text-green-700" : "text-green-700"}
                    />
                  </div>
                </ListItemIcon>
                <ListItemText>
                  <span className="text-green-700 font-bold text-xs">
                    Add Affiliates
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                onClick={() => {
                  handleRouteChange("view-affiliates");
                }}
              >
                <ListItemIcon>
                  <div className="bg-indigo-100 p-0 rounded">
                    <EditIcon
                      className={open ? "text-green-700" : "text-green-700"}
                    />
                  </div>
                </ListItemIcon>
                <ListItemText>
                  <span className="text-green-700 font-bold text-xs">
                    View Affiliates
                  </span>
                </ListItemText>
              </ListItem>
            </List>
          </Collapse>
          <div
            onClick={() => activePanel("shootemails")}
            className={
              activePanelNumber == "2"
                ? "border-blue-700 border-l-4 rounded-r-full bg-indigo-100"
                : "hover:border-blue-700 border-l-4 rounded-r-full hover:bg-indigo-100"
            }
          >
            <ListItem button onClick={handleShootemails}>
              <ListItemIcon
                style={open ? { minWidth: "40px" } : { minWidth: "60px" }}
              >
                <div className="bg-indigo-100 p-2 rounded -mx-3 sm:-mx-2">
                  <EmailIcon
                    className={open ? "text-red-800" : "text-red-800"}
                  />
                </div>
              </ListItemIcon>
              <ListItemText>
                <span className="text-sm text-purple-800 font-bold">
                  Shoot Emails
                </span>
              </ListItemText>
              {openshootemails ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </div>
          <Collapse in={openshootemails} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => {
                  handleRouteChange("single-emails");
                }}
              >
                <ListItemIcon>
                  <div className="bg-indigo-100 p-0 rounded ">
                    <AddBoxIcon
                      className={open ? "text-green-700" : "text-green-700"}
                    />
                  </div>
                </ListItemIcon>
                <ListItemText>
                  <span className="text-green-700 font-bold text-xs">
                    Single Email
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <div className="bg-indigo-100 p-0 rounded">
                    <EditIcon
                      className={open ? "text-green-700" : "text-green-700"}
                    />
                  </div>
                </ListItemIcon>
                <ListItemText>
                  <span className="text-green-700 font-bold text-xs">
                    Bluck Emails
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <div className="bg-indigo-100 p-0 rounded">
                    <EditIcon
                      className={open ? "text-green-700" : "text-green-700"}
                    />
                  </div>
                </ListItemIcon>
                <ListItemText>
                  <span className="text-green-700 font-bold text-xs">
                    External File
                  </span>
                </ListItemText>
              </ListItem>
            </List>
          </Collapse>
          <div
            onClick={() => activePanel("emailtemplates")}
            className={
              activePanelNumber == "3"
                ? "border-blue-700 border-l-4 rounded-r-full bg-indigo-100"
                : "hover:border-blue-700 border-l-4 rounded-r-full hover:bg-indigo-100"
            }
          >
            <ListItem button onClick={handleEmailTemplates}>
              <ListItemIcon
                style={open ? { minWidth: "40px" } : { minWidth: "60px" }}
              >
                <div className="bg-indigo-100 p-2 rounded -mx-3 sm:-mx-2">
                  <ReceiptIcon
                    className={open ? "text-purple-800" : "text-purple-800"}
                  />
                </div>
              </ListItemIcon>
              <ListItemText>
                <span className="text-sm text-purple-800 font-bold">
                  Email Templates
                </span>
              </ListItemText>
              {openemailtemplates ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </div>
          <Collapse in={openemailtemplates} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <div className="bg-indigo-100 p-0 rounded ">
                    <AddBoxIcon
                      className={open ? "text-green-700" : "text-green-700"}
                    />
                  </div>
                </ListItemIcon>
                <ListItemText>
                  <span className="text-green-700 font-bold text-xs break-words">
                    Business Services
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <div className="bg-indigo-100 p-0 rounded ">
                    <EditIcon
                      className={open ? "text-green-700" : "text-green-700"}
                    />
                  </div>
                </ListItemIcon>
                <ListItemText>
                  <span className="text-green-700 font-bold text-xs break-words">
                    Marketing
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <div className="bg-indigo-100 p-0 rounded ">
                    <EditIcon
                      className={open ? "text-green-700" : "text-green-700"}
                    />
                  </div>
                </ListItemIcon>
                <ListItemText>
                  <span className="text-green-700 font-bold text-xs break-words">
                    Events
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <div className="bg-indigo-100 p-0 rounded ">
                    <EditIcon
                      className={open ? "text-green-700" : "text-green-700"}
                    />
                  </div>
                </ListItemIcon>
                <ListItemText>
                  <span className="text-green-700 font-bold text-xs break-words">
                    Newsletter
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <div className="bg-indigo-100 p-0 rounded ">
                    <EditIcon
                      className={open ? "text-green-700" : "text-green-700"}
                    />
                  </div>
                </ListItemIcon>
                <ListItemText>
                  <span className="text-green-700 font-bold text-xs break-words">
                    Service Promotion
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <div className="bg-indigo-100 p-0 rounded ">
                    <EditIcon
                      className={open ? "text-green-700" : "text-green-700"}
                    />
                  </div>
                </ListItemIcon>
                <ListItemText>
                  <span className="text-green-700 font-bold text-xs break-words">
                    Product Promotion
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <div className="bg-indigo-100 p-0 rounded ">
                    <EditIcon
                      className={open ? "text-green-700" : "text-green-700"}
                    />
                  </div>
                </ListItemIcon>
                <ListItemText>
                  <span className="text-green-700 font-bold text-xs break-words">
                    Welcome
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <div className="bg-indigo-100 p-0 rounded ">
                    <EditIcon
                      className={open ? "text-green-700" : "text-green-700"}
                    />
                  </div>
                </ListItemIcon>
                <ListItemText>
                  <span className="text-green-700 font-bold text-xs break-words">
                    Thankyou
                  </span>
                </ListItemText>
              </ListItem>
            </List>
          </Collapse>
          <div
            onClick={() => activePanel("shootmessages")}
            className={
              activePanelNumber == "4"
                ? "pointer-events-none border-blue-700 border-l-4 rounded-r-full bg-indigo-100"
                : "pointer-events-none hover:border-blue-700 border-l-4 rounded-r-full hover:bg-indigo-100"
            }
          >
            <ListItem button onClick={handleShootMessages}>
              <ListItemIcon
                style={open ? { minWidth: "40px" } : { minWidth: "60px" }}
              >
                <div className="bg-indigo-100 p-2 rounded -mx-3 sm:-mx-2">
                  <RateReviewIcon
                    className={open ? "text-yellow-500" : "text-yellow-500"}
                  />
                </div>
              </ListItemIcon>
              <ListItemText>
                <span className="text-sm text-purple-800 font-bold">
                  Shoot Messages
                </span>
              </ListItemText>
              {openshootmessages ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </div>
          <Collapse in={openshootmessages} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <div className="bg-indigo-100 p-0 rounded ">
                    <AddLocationIcon
                      className={open ? "text-green-700" : "text-green-700"}
                    />
                  </div>
                </ListItemIcon>
                <ListItemText>
                  <span className="text-green-700 font-bold text-xs break-words">
                    Bulk Messages
                  </span>
                </ListItemText>
              </ListItem>
            </List>
          </Collapse>
          <div className="hover:border-blue-700 border-l-4 rounded-r-full hover:bg-indigo-100">
            <ListItem button>
              <ListItemIcon
                style={open ? { minWidth: "40px" } : { minWidth: "60px" }}
              >
                <div className="bg-indigo-100 p-2 rounded -mx-2 sm:-mx-2">
                  <ExitToAppIcon
                    className={open ? "text-blue-700" : "text-blue-700"}
                  />
                </div>
              </ListItemIcon>
              <ListItemText>
                <span className="text-sm text-purple-800 font-bold">
                  Logout
                </span>
              </ListItemText>
            </ListItem>
          </div>
        </List>
        {open ? (
          <div class="p-2 pt-0 w-full">
            <div class="h-full flex items-center border-gray-100 shadow-sm border-2 p-1 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 object-cover object-center flex-shrink-0 rounded-lg mr-4"
                src="/img/feedback.svg"
              />
              <div class="flex-grow w-10 space-y-1">
                <h2 class="text-gray-900 title-font text-xs font-medium w-10 word-wrap">
                  Share us your feedback.
                </h2>
                <p class="text-white bg-indigo-600 px-2 text-xs py-1 w-20 rounded-md">
                  Feedback
                </p>
              </div>
            </div>
          </div>
        ) : (
          <img
            alt="team"
            class="w-12 h-12 object-cover object-center mx-auto flex-shrink-0 rounded-lg mr-4"
            src="/img/feedback.svg"
          />
        )}
      </Drawer>
      <main className={clsx(classes.content, "w-full")}>
        <div className={classes.toolbar} />
        <Typography paragraph className="pl-14 sm:pl-20 lg:pl-0">
          {activeRoute == "home" && props.authrole == "admin" ? (
            <Dashboard />
          ) : (
            <EmployeeHomeScreen />
          )}
          {activeRoute == "add-employees" ? <AddEmployees /> : ""}
          {activeRoute == "view-employees" ? <ViewEmployees /> : ""}
          {activeRoute == "single-emails" ? <SingleEmails /> : ""}
        </Typography>
        <Typography paragraph></Typography>
      </main>
    </div>
  );
};

MiniDrawer.propTypes = {
  isAuthenticated: PropTypes.object.isRequired,
  authrole: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
  authrole: state.isAuthenticated.authrole,
});

export default withRouter(
  connect(mapStateToProps, { authenticateUser })(MiniDrawer)
);
