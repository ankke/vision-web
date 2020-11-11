import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Camera from '@material-ui/icons/Camera';
import GridOn from '@material-ui/icons/GridOn';
import Settings from '@material-ui/icons/Settings';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import colors from '../../constants/colors.json';
import { Route } from 'react-router';
import { routes } from '../../constants/routes';
import CamerasListContainer from '../cameras/CamerasListContainer';
import { useHistory } from 'react-router';
import SettingsContainer from "../settings/SettingsContainer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignSelf: 'center',
    height: '100%',
    flex: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    colorPrimary: colors.YELLOW_MAIN,
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    backGroundColor: colors.NAVY_MAIN,
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  shadow: {
    boxShadow: '0 3px 5px 2px rgba(150, 60, 90, .3)',
  },
  color: {
    color: colors.MAIN,
    fontSize: 30,
  },
}));

export default function Menu() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color={colors.YELLOW_MAIN}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.shadow}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon className={classes.color} />
          </IconButton>
          <Typography noWrap className={classes.color}>
            Camera Vision
          </Typography>
        </Toolbar>
      </AppBar>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon className={classes.color} />
            ) : (
              <ChevronLeftIcon className={classes.color} />
            )}
          </IconButton>
        </div>
        <List>
          <ListItem
            button
            key={'Cameras'}
            onClick={() => {
              history.push(routes.camerasList);
            }}
          >
            <ListItemIcon>
              <Camera className={classes.color} />
            </ListItemIcon>
            <ListItemText primary={'Cameras'} className={classes.color} />
          </ListItem>
          <ListItem
            button
            key={'Presets'}
            onClick={() => {
              history.push(routes.presets);
            }}
          >
            <ListItemIcon>
              <GridOn className={classes.color} />
            </ListItemIcon>
            <ListItemText primary={'Presets'} className={classes.color} />
          </ListItem>
          <ListItem
            button
            key={'Settings'}
            onClick={() => {
              history.push(routes.settings);
            }}
          >
            <ListItemIcon>
              <Settings className={classes.color} />
            </ListItemIcon>
            <ListItemText primary={'Settings'} className={classes.color} />
          </ListItem>
        </List>
      </Drawer>
      <Route exact path={routes.camerasList} component={CamerasListContainer} />
      <Route exact path={routes.presets} component={CamerasListContainer} />
      <Route exact path={routes.presets} component={CamerasListContainer} />
      <Route exact path={routes.settings} component={SettingsContainer} />
    </div>
  );
}
