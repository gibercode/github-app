import axios from 'axios'

export const fetchService = async (url: any, method: string = 'GET', data: any = null) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github.v3+json'
  }

  const objectRequest: any = { method, url, data, headers }
  const response = await axios(objectRequest)

  return response?.data
}

