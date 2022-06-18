import axios from "axios";

const instance = axios.create({
  baseURL: 'api',
  timeout: 10000
})

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url,
      {
        params
      },
    ).then(response => {
      resolve(response.data);
    }, err => {
      reject(err);
    })
  })
}