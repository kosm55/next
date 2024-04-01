import axios from "axios";
import {baseURL} from "@/constants/urls";
import {AxiosResponse} from "axios";

export type IRes<T>=Promise<AxiosResponse<T>>
const apiService=axios.create({baseURL})

export {apiService}