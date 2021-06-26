import axios from 'axios'

export const fetchService = async (url: string, method: string = 'GET', data: any = null, auth: any | null = null) => {
  const headers = {
    'Content-Type': 'application/json',
    // Accept: 'application/vnd.shipit.v4'
  }
  const objectRequest: any = { method, url, data, headers }
  const response = await axios(objectRequest)

  return response?.data
}

