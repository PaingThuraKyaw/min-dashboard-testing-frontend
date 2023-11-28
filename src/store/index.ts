import { QueryClient } from "@tanstack/react-query";
import Axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const axios = Axios.create({
    baseURL : BASE_URL
})


export const queryClient = new QueryClient({
    defaultOptions : {
        queries : {
            staleTime : Infinity
        }
    }
})