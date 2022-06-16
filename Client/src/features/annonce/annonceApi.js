
import axios from "axios";
import { requests } from "../requests";

export function getallAnnonce() {
  return axios
    .get(requests.annoncesapi + "/getAllAnnonce")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function getAnnonceByUser(id) {
  return axios
    .get(requests.annoncesapi +"/getByUserId/" + id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function getAnnonceById(id) {

  return axios
    .get(requests.annoncesapi +"/getByIdAnnonce/" + localStorage.getItem("singlepostid"))
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function createAnnonce(data) {
  return axios.post(requests.annoncesapi + "/createAnnonce", data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function deleteAnnonce(id) {
  return axios
    .delete(requests.annoncesapi + "/deleteAnnonce/" + id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function updateAnnonce(data) {

  return axios
    .put(requests.annoncesapi + "/updateAnnonce/" + data.id, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function  search(data) {

  return axios.get(`http://localhost:4000/annonces/search?keyword=${data.keyword}`)
      .then(res => {
          return res
      }
      )
      .catch(err => {
          return err
      }
      )
}

export function getAnnonceByrole(role) {

  return axios
    .get(requests.annoncesapi +"/getAnnonceByrolle/" +role)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

}