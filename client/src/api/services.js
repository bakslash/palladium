
import http from "./http";

const getPatients = () => {
  return http.get("/patients");
};

const register = data => {
  return http.post("/patients/register", data);
};

export default {
  getPatients,
  register,
};