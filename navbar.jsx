import {
    alpha,
    AppBar,
    Avatar,
    Badge,
    InputBase,
    makeStyles,
    Toolbar,
    Button,
} from "@material-ui/core";
import { Notifications, Search, People } from "@material-ui/icons";
import { useState } from "react";



const drawerWidth = 340

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#fff",
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "3%",
        [theme.breakpoints.down("sm")]: {
            display: (props) => (props.open ? "flex" : "none"),
            width: "3%",
        },
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(1),
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    icons: {
        alignItems: "center",
        display: (props) => (props.open ? "none" : "flex"),

    },
    badge: {
        marginRight: theme.spacing(2),
        color: "#333333"
    },
    drawer: {
        width: drawerWidth,

    },
    drawerPaper: {
        width: drawerWidth,

    },
    mainDiv: {
        display: "flex",
    },
    forNav: {
        position: "relative",
        left: `calc(${drawerWidth}px - 6%)`,
        width: "82.5%",
        
    },
}));

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });
    return (
        <div className={classes.mainDiv}>

            <AppBar className={classes.forNav} elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.search}>
                        <Search className={classes.badge} />
                        <InputBase className={classes.input} />
                    </div>
                    <div className={classes.icons}>
                        <Search
                            className={classes.searchButton}
                            onClick={() => setOpen(true)}
                        />
                    
                        <Button>
                            <Avatar variant="square" alt="Example Alt" src="https://cdn-icons-png.flaticon.com/512/555/555417.png" />
                        </Button>

                        <Badge badgeContent={2} color="secondary" className={classes.badge}>
                            <Notifications />
                        </Badge>
                        <Badge className={classes.badge}>
                            <People />
                        </Badge>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;