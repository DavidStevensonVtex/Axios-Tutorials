// Cancellation

// Cancelling requests

// Setting the timeout property in an axios call handles response related timeouts.

// In some cases (e.g. network connection becomes unavailable) an axios call would benefit 
// from cancelling the connection early. Without cancellation, the axios call can hang until 
// the parent code/stack times out (might be a few minutes in a server-side applications).

// To terminate an axios call you can use following methods:

//      signal
//      cancelToken (deprecated)

// Combining timeout and cancellation method (e.g. signal) should cover response related timeouts 
// AND connection related timeouts.

// signal: AbortController

// Starting from v0.22.0 Axios supports AbortController to cancel requests in fetch API way:

const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// cancel the request
controller.abort()