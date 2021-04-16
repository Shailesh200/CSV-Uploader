import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';
import { defaultCSVData, templateFileName } from '../utils/constants';
import { Button } from '@material-ui/core';
import { CSVLink } from 'react-csv';

const appHeaderStyles = makeStyles({
  root: {
    backgroundImage: 'linear-gradient(90deg, #03a9f4 0%, #03a9f4 75%)',
    '&.MuiPaper-elevation4': {
      boxShadow: '0 5px 15px -5px rgba(0, 0, 0, 0.2)',
    },
  },
  toolBar: {
    margin: '0 auto',
    width: '100%',
    maxWidth: 1280,
    display: 'flex',
    justifyContent: 'space-between',
  },
  brandTitle: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.6,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#ffffff',
  },
  downloadText: {
    color: '#ffffff',
    textDecoration: 'none'
  }
});

export const AppHeader = () => {
  const classes = appHeaderStyles();

  return (
    <>
      <Fragment>
        <AppBar className={classes.root}>
          <Toolbar className={classes.toolBar}>
            <div className={classes.brandTitle}>
              CSV Viewer and Analyser
            </div>
        <Button color="inherit">
          <CSVLink filename={templateFileName} className={classes.downloadText} data={defaultCSVData}>Download Sample CSV</CSVLink>
        </Button>
          </Toolbar>
        </AppBar>
      </Fragment>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
}
