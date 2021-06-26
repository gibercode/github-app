export const API_URL = 'https://api.github.com/'

const API_BASE_URL = process.env.API_URL ?? API_URL

//api routes
export const users = `${API_BASE_URL}users`

