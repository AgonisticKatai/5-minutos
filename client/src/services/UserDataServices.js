import axios from 'axios'

import { getAuthHeader } from './AuthServices.js'

async function AddPost (title, content) {
  const url = 'http://localhost:3005/post'
  const response = await axios.put(url, { title, content }, getAuthHeader())
  return response.data
}

async function GetPosts () {
  const url = 'http://localhost:3005/posts'
  const response = await axios.get(url, getAuthHeader())
  return response.data
}

export { AddPost, GetPosts }
