import axios, { AxiosRequestConfig } from "axios";
const qs = require("qs");

const http = axios.create({
  baseURL: "https://prng.esmartlotto.ie/api/v1/",
  timeout: 30000,
  paramsSerializer: function (params) {
    return qs.stringify(params, {
      encode: false
    });
  },
});

export default http;