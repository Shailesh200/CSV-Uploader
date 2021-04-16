import React from 'react';
import CSVReader from 'react-csv-reader';
import { Button, makeStyles } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    width: '100%'
  }
}));

function CSVAnaylser(props) {
  const { analyzeCSV, resetInput, inputKey } = props
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        <CSVReader
          onError={(err) => console.log(err)}
          key={inputKey}
          onClick={e => (e.target.value = null)}
          onFileLoaded={(data, fileInfo) => analyzeCSV(data, fileInfo)}
          cssInputClass={classes.input}
        />

      </Button>
      <Button onClick={() => resetInput()} >Reset Data</Button>
    </div>
  )
}

export default CSVAnaylser;
