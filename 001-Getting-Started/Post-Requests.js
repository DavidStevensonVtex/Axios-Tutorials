axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// Performing multiple concurrent requests

function getUserAccount() {
    return axios.get('/user/12345');
}

function getUserPermissions() {
    return axios.get('/user/12345/permissions');
}

const [acct, perm] = await Promise.all([getUserAccount(), getUserPermissions()]);

// OR

Promise.all([getUserAccount(), getUserPermissions()])
    .then(function ([acct, perm]) {
        // ...
    });

// Post an HTML form as JSON

const { data } = await axios.post('/user', document.querySelector('#my-form'), {
    headers: {
        'Content-Type': 'application/json'
    }
})

// Forms
// Multipart (multipart/form-data)

const {data2} = await axios.post('https://httpbin.org/post', {
    firstName: 'Fred',
    lastName: 'Flintstone',
    orders: [1, 2, 3],
    photo: document.querySelector('#fileInput').files
  }, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
)