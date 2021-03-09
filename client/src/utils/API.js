import axios from "axios";

export default {
  signUp: function (userData) {
    return axios.post("/api/registerUser", userData)
  },

  login: function (userData) {
    return (
      axios.post("/api/login", userData))
  },

  addLead: function (userData) {
    return (
      axios.post("/api/leads", userData))
  },

  getAllLeads: function () {
    return (
      axios.get("/api/leads/"))
  },

  getLead: function (userData) {
    return (
      axios.get("/api/leads/:id", userData))
  },

  updateLead: function (id, userData) {
    console.log("axios call of update.")
    return (
      axios.put("/api/leads/" + id, userData))
  },

  deleteLead: function (id, userData) {
    return (
      axios.delete("/api/leads/" + id, userData))
  }
}