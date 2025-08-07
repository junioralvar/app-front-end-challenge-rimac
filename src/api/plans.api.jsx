import axios from 'axios'
import { API_PLANS } from '../const'

export const getPlans = async () => {
  try {
    const { data } = await axios.get(API_PLANS)
    return data
  } catch (error) {
    return error
  }
}
