import axios from 'axios'

async function login (username, password) {
  const url = 'http://localhost:3005/login'
  const response = await axios.post(url, { username, password })
  return response.data.token
}

async function register (username, password) {
  const url = 'http://localhost:3005/register'
  const response = await axios.post(url, { username, password })
  return response.data
}

const getAuthHeader = () => {
  const token = localStorage.getItem('token')
  return ({
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `bearer ${token}`
    }
  })
}

export { login, register, getAuthHeader }
