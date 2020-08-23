import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  large : {
    width: theme.spacing(7),
    height: theme.spacing(7),
  }
}));

export default function ButtonAppBar() {
  return (
    <div>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Avatar alt="Remy Sharp" src="https://www.w3schools.com/howto/img_avatar2.png" 
              className={useStyles.large} />
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
