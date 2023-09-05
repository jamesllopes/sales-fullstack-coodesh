"use client";
import axios from "axios";
import { destroyCookie, parseCookies } from "nookies";

const { "@SALES_TOKEN": token } = parseCookies();

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
