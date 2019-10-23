import axios from 'axios'

const baseUrl = 'https://vortechmusic.com/api/1.0'

const get = async (endpoint) => {
  const url = baseUrl + endpoint
  const config = {
    params: {}, // eg. GET /url?param1=something
    headers: {} // eg. 'Authorization': 'Bearer <token>'
  }
  try {
    console.log('Requesting', url)
    const response = await axios.get(url, config)
    return response
  } catch (error) {
    return { error }
  }
}

export default {
  get
}
