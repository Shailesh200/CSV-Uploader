import React, { useEffect, useState } from 'react';
import CSVAnaylser from './CSVAnaylser';
import MUIDataTable from 'mui-datatables';
import uploadCSV from '../assets/uploadCSV.png';
import { Box, Fade, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    height: 'auto',
    minHeight: 'calc(100vh - 300px)',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    width: '100%',
    maxWidth: '320px',
    margin: '0 auto',
    textAlign: 'center',
  },
  img: {
    display: 'block',
    margin: '5em auto 24px',
    width: '100%',
    height: 'auto',
    maxWidth: '300px',
  },
  p: {
    display: 'block',
    width: '100%',
    fontSize: '17px',
  },
});

export default function DataTable(props) {
  const { analyzeCSV, csvData, inputKey, resetInput } = props;
  const [rows, setRows] = useState([])
  const [cols, setCols] = useState([])
  const classes = useStyles();

  useEffect(() => {
    if (csvData?.csvData === undefined) return;
    if (csvData.csvData.length === 0) {
      setCols([])
      setRows([])
      return;
    }
    let allData = csvData.csvData;
    let listOfCols = allData.shift()
    setCols(listOfCols)
    setRows(allData)
  }, [csvData])

  const options = {
    filterType: 'checkbox',
    rowsPerPageOptions: [25, 50, 100, 500],
    rowsPerPage: 25
  };

  return (
    <div>
      <CSVAnaylser inputKey={inputKey} resetInput={resetInput} csvData={csvData} analyzeCSV={analyzeCSV} />
      {
        csvData?.csvData?.length > 0
          ? <Fade in={true}>
            <div style={{ height: 800, width: '100%' }}>
              <MUIDataTable
                title={csvData.csvInfo.name}
                data={rows}
                columns={cols}
                options={options}
              />
            </div>
          </Fade>
          : <Fade in={true}>
            <Box component="div" className={classes.root}>
              <img src={uploadCSV} alt="Upload CSV" className={classes.img} />
              <p className={classes.p}>Upload a CSV File to see the contents</p>
            </Box>
          </Fade>
      }
    </div>
  );
}