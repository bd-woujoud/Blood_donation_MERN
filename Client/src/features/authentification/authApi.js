
import axios from "axios"

export function register (data) {

    return axios.post("http://localhost:4000/users/register",data,{ credentials: 'include'}
  )
        .then((res) => {
            return res
        })
        .catch((err) => {

            return err
        })
}

