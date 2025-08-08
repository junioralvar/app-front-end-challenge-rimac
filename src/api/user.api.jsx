import axios from 'axios'
import { API_USER } from '../const'

export const getUser = async () => {
  try {
    const { data } = await axios.get(API_USER)
    return data
  } catch (error) {
    alert(error + '\nError con la API:\n ' + API_USER)
    return error
  }
}
