// Interceptors
// You can intercept requests or responses before they are handled by then or catch.

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

// If you need to remove an interceptor later you can.

const myInterceptor = axios.interceptors.request.use(function () {/*...*/ });
axios.interceptors.request.eject(myInterceptor);

// You can add interceptors to a custom instance of axios.

const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/ });