import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotesIcon from '@material-ui/icons/Notes';
import TodayIcon from '@material-ui/icons/Today';
import LinkIcon from '@material-ui/icons/Link';
import MicIcon from '@material-ui/icons/Mic';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

const categories = [
  {
    id: 'Pick your tool here',
    children: [
      { id: 'Notes', icon: <NotesIcon />, active: true },
      { id: 'Calendar', icon: <TodayIcon /> },
      { id: 'Links', icon: <LinkIcon /> },
      { id: 'Voice Notes', icon: <MicIcon /> },
      { id: 'Reminder', icon: <AddAlertIcon /> },
      { id: 'To-Do', icon: <PlaylistAddCheckIcon /> },
    ],
  }
];

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: 37,
    paddingBottom: 37,
  },
  firebase: {
    fontSize: 26,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#9AB39A',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(3),
  },
  divider: {
    marginTop: theme.spacing(3),
  },
});

function Navigator(props) {
  const { classes, ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          Organize
        </ListItem>
        
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader} >
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem
                key={childId}
                button
                className={clsx(classes.item, active && classes.itemActiveItem)}
              >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}

            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);