import axios from 'axios';

const BASE_URL = `http://localhost:4000/csv`

export async function saveCSV(data) {

  console.log(data)

  return await axios.post(`${BASE_URL}/save`, data)
    .then(res => res.data)
    .catch((error) => {
      console.log(error)
    });
}

export async function deleteCSV(id) {
  return await axios.delete(`${BASE_URL}/delete/` + id)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error)
    })
}

export async function getCSV() {
  return await axios.get(BASE_URL)
    .then(res => res.data[0])
    .catch((error) => {
      console.log(error)
    });
}