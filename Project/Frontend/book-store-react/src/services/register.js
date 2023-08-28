import axios from "axios"



export async function registerUser(
    firstName,
    lastName,
    email,
    password,
    mobile
  ) {
    const url = createUrl('/user/register')
    const body = {
      firstName,
      lastName,
      email,
      password,
      mobile,
    }
  
    // wait till axios is making the api call and getting response from server
    try {
      const response = await axios.post(url, body)
      log(response.data)
      return response.data
    } catch (ex) {
      log(ex)
      return ex
    }
  }