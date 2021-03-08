import axios from "axios";

export default {
  signUp: function (userData) {
    return axios.post("/api/registerUser", userData)
  },

  login: function (userData) {
    return (
      console.log("Reached axios post"),
      axios.post("/api/login", userData))
  }
}