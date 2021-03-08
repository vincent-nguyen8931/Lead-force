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

  getAllLeads: function (userData) {
    return (
      axios.get("/api/leads/", userData))
  },

  getLead: function (userData) {
    return (
      axios.get("/api/leads/:id", userData))
  },

  updateLead: function (userData) {
    return (
      axios.put("/api/leads", userData))
  },

  deleteLead: function (userData) {
    return (
      axios.delete("/api/leads/:id", userData))
  }
}