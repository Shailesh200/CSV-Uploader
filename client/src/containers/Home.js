import React, { useEffect } from 'react';
import { useState } from 'react';
import DataTable from '../components/CSVTable';
import { deleteCSV, saveCSV, getCSV } from '../utils/APIService';

function Home() {
  const [csvData, setCsvData] = useState({})
  const [inputKey, setInputKey] = useState('')

  const analyzeCSV = async (data, fileInfo) => {
    let csvData = {
      csvData: data,
      csvInfo: fileInfo
    }
    const res = await saveCSV(csvData)
    setCsvData(res)
  }


  const resetFileInput = async () => {
    let randomString = Math.random().toString(36);
    setInputKey(randomString);
    await deleteCSV(csvData._id).then(() => {
      setCsvData({})
    })
  }


  useEffect(async () => {
    const res = await getCSV();
    if (res !== undefined) {
      setCsvData(res)
    }
  }, [])


  return (
    <>
      <DataTable inputKey={inputKey} resetInput={resetFileInput} analyzeCSV={analyzeCSV} csvData={csvData} />
    </>
  )
}

export default Home;
