import axios from "axios";
import { requests } from "../requests";

export function updateUser(data) {
  return axios
    .put(requests.usersapi + "/update/" + data.id, data.data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function uploadAvatar(data) {
  return axios
    .put(requests.usersapi + "/avatar/" + data.id, data.data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

    
export function getuser(role) {

  return axios.get(requests.usersapi + '/getUserbyrole/'+role)
      .then(res => {
          return res
      })
      .catch(err => {
          return err
      })


  }


export function deleteuser(id) {
  
  return axios.delete(requests.usersapi + '/deleteUserbyid/'+id)
      .then(res => {
          return res
      })
      .catch(err => {
          return err
      })


  }

