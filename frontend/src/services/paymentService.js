import API from "./api";

export const submitUTR = (data) =>
  API.post("/payment/submit", data);