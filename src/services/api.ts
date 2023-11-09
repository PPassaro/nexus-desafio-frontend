import axios from "axios";

export const apiAdvice = axios.create({
  baseURL: "https://api.adviceslip.com/",
});
