import axios from 'axios';

import {header, baseUrl} from './constants';

export async function test(){
  return axios.get(baseUrl, header)
  .then(response => {
      console.log('Data received from database.');
      return response.data;
  })
  .catch((err) => {
      console.log(err)
  })
}

export async function getCategory(category){
  return axios.get(`${baseUrl}/v1/${category}`)
  .then(response => {
    if(response.status == 200) return response.data
    else console.log(response)
  })
  .catch((err) => {
      console.log(err)
  })
}