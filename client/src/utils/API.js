import axios from "axios";

export default {
  signUp: function () {
    return axios.post("/api/reigsterUser")
  }
}