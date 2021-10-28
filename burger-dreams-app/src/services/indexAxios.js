import axios from "axios";
import {APISERVICES} from '../config/appConfig';

const BurgerAxios = axios.create({
    baseURL: APISERVICES
});

BurgerAxios.interceptors.request.use(
    function(config){
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
)
BurgerAxios.interceptors.response.use(
    function(response) {
        return response.data;
    }, function(error) {
        return Promise.reject(error);
    }
)
export {BurgerAxios};