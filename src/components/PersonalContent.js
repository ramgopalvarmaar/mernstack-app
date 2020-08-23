import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Board from './Board';

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});

function PersonalContent(props) {
  const { classes } = props;

  return (
    <div className={classes.contentWrapper}>
      <h1> Your Personal Stuffs here</h1>
       <Board />
      </div>
  );
}

PersonalContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonalContent);