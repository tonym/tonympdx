const API = {
  get,
  post
}

export default API;

/**
 * GET from a REST API
 * @param  {String} endpoint     The endpoint from which to GET
 * @param  {Object} [options={}] Header or content options
 * @return {Promise}             Promise contains parsed JSON response
 */
function get(endpoint, options = {}) {

  return fetch(endpoint, options).then(response => {
      return response.ok ? response.json() : Promise.reject(response.statusText);
    }).then(data => {
      return data;
    });

}

function post(endpoint, fields, options = {}) {

  const requestOptions = Object.assign({}, {
    body: JSON.stringify(fields),
    cache: 'no-cache',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    mode: 'no-cors'
  }, options);

  return fetch(endpoint, requestOptions)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .then(task => {
      return task;
    });

}
