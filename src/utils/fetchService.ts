import axios from 'axios'
import { API_URL } from '@utils'

const API_BASE_URL = process.env.API_URL ?? API_URL

export const fetchService = async (url: any, method: string = 'GET', data: any = null, auth: any | null = null) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github.v3+json'
  }

  const objectRequest: any = { method, url, data, headers }
  const response = await axios(objectRequest)

  return response?.data
}

