import axios from "axios";
import { BASE_URL,TIMEOUT } from "./config";

class Request {
    constructor(BASE_URL,TIMEOUT) {
        this.instance = axios.create({
            baseURL:BASE_URL,
            timeout:TIMEOUT
        })
        this.instance.interceptors.response.use(res=>{
            return res.data
        },err=>{
            return new Error(err)
        })
    }

    request(config){
        return this.instance.request(config)
    }

    get(config){
        return this.instance.request({...config, method: "get" })  
    }

    post(config){
        return this.instance.request({...config, method: "post" })  
    }
}

export default new Request(BASE_URL,TIMEOUT)
