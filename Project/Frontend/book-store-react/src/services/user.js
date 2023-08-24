import axios from "axios"
import { createUrl, log } from "../utils/utils"

export async function loginUser(email, password) {
  const url = createUrl('/users/signin')
  const body = {
    email,
    password,
  }

  try {
    const response = await axios.post(url, body)
    log(response.data)
    return response;
  } catch (ex) {
    log(ex)
    return ex;
  }
}