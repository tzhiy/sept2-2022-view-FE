import axios from "axios";

const instance = axios.create({
  baseURL: 'api',
  timeout: 10000
})

export const get = (url, params = {}, header = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url,
      {
        params,
        headers: {
          "Content-Type": "application/json",
          ...header
        },
      },
    ).then(response => {
      resolve(response);
    }, err => {
      reject(err);
    })
  })
}