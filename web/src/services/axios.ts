"use client";
import { snackbar } from "@/utils/snackbar";
import axios from "axios";
import { destroyCookie, parseCookies } from "nookies";
import { toast } from "react-toastify";

const { "@SALES_TOKEN": token } = parseCookies();

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});

if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

// api.interceptors.response.use(
//   undefined,
//   (err) => {
//     if (err.response.status === 401) {
//       snackbar(err.response.data.message, "error");

//       destroyCookie(null, "@SALES_TOKEN", {
//         path: "/",
//       });
//       location.replace("/auth/signin");
//       return;
//     }
//     return Promise.reject(err);
//   },
//   { synchronous: true }
// );
