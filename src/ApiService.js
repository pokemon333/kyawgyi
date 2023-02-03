import VueAxios from 'vue-axios'
import axios from 'axios'
import JWTService from './JWTService';

class ApiService  {
    vueInstance;

    static init(app){
       ApiService.vueInstance = app;
       ApiService.vueInstance.use(VueAxios, axios);
       ApiService.vueInstance.axios.defaults.baseURL = "http://localhost:8000/api/"; 
    }
    static setHeader(){
        ApiService.vueInstance.axios.defaults.headers.common["Authorization"] = `Bearer ${JWTService.getToken()}`;
        ApiService.vueInstance.axios.defaults.headers.common["Accept"] ="application/json";
    }
    static get(url){
        return ApiService.vueInstance.axios.get(url);
    }
    static post(url, form , config){
        return ApiService.vueInstance.axios.post(url, form , config);
    }
    static put(url, form){
        return ApiService.vueInstance.axios.put(url, form);
    }
    static patch(url, form){
        return ApiService.vueInstance.axios.patch(url, form);
    }
    static delete(url){
        return ApiService.vueInstance.axios.delete(url);
    }
};
export default ApiService;