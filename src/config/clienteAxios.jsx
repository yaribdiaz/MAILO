import axios from "axios";
import { oauth2SignIn } from "../utils/oauthSignIn";
import { trySampleRequest } from "../utils/oauthSignIn";
// Crear una instancia personalizada de axios

const gmailInterceptor = axios.create({
    baseURL: 'https://gmail.googleapis.com'
  });
  
  // Add a response interceptor
    gmailInterceptor.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error.response.request.status == '401'){
        oauth2SignIn()
        var fragmentString = location.hash.substring(1);
        // Parse query string to see if page request is coming from OAuth 2.0 server.
        var params = {};
        var regex = /([^&=]+)=([^&]*)/g, m;
        while (m = regex.exec(fragmentString)) {
          params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
        }
        if (Object.keys(params).length > 0) {
          localStorage.setItem('oauth2', JSON.stringify(params) );
          if (params['state'] && params['state'] == 'try_sample_request') {
            trySampleRequest();
          }
              }
    }
    return Promise.reject(error);
  });

  
  // Exportar la instancia personalizada de axios



  const axiosInterceptor = axios.create({
    baseURL: 'https://www.googleapis.com'
  });
  
  // Add a response interceptor
  axiosInterceptor.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error.response.request.status == '401'){
        oauth2SignIn()

        var fragmentString = location.hash.substring(1);
        // Parse query string to see if page request is coming from OAuth 2.0 server.
        var params = {};
        var regex = /([^&=]+)=([^&]*)/g, m;
        while (m = regex.exec(fragmentString)) {
          params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
        }
        if (Object.keys(params).length > 0) {
          localStorage.setItem('oauth2', JSON.stringify(params) );
          if (params['state'] && params['state'] == 'try_sample_request') {
            trySampleRequest();
          }
              }


    }
    return Promise.reject(error);
  });

  
  // Exportar la instancia personalizada de axios
  export {axiosInterceptor, gmailInterceptor} 