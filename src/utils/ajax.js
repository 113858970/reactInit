
/**
 * ajax({
 *   url: '/path/to/visit',
 *   type: 'GET/POST/PUT/DELETE',
 *   data: {},
 *   headers: {},
 *   success: [func],
 *   error: [func],
 *   complete: [func]
 * })
 */

// noop function
const noop = function () {}

const tryParseJson = function (ctx) {
  try {
    return JSON.parse(ctx);
  }
  catch (ex) {
    return ctx;
  }
}

function ajax (userOptions) {
  // should have url param
  if (!userOptions.url) { return false; }

  // init options
  let defaultOptions = {
    type: 'GET',
    async: true,
    data: {},
    headers: {},
    success: noop,
    error: noop,
    complete: noop
  };
  let options = Object.assign(defaultOptions, userOptions);
  let xhr = new XMLHttpRequest();
  let method = options.type;
  let url = options.url;
  let data = options.data;
  let headers = {};


  // ready function
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || (xhr.status > 200 && xhr.status < 300)) {
        options.success(xhr.responseText, xhr);
      } else {
        options.error(xhr.responseText, xhr.status, xhr);
      }
      options.complete(xhr.responseText, xhr.status, xhr);
    } else {}
  };


  if (method === 'FORM') {
    let formData = new FormData();
  }
  else {
    let sendData = null;
    headers['Accept'] = 'application/json';
    // method GET & DELETE　
    if (method === 'GET' || method === 'DELETE') {
      if (typeof data === 'object') {
        let queryArray = [];
        for (let key in data) {
          queryArray.push(`${key}=${encodeURIComponent(data[key])}`);
        }
        queryArray.push(`t=${Date.now()}`);
        url += (url.indexOf('?') > -1 ? '&' : '?') + queryArray.join('&');
      } else {}
    }
    // method POST & PUT
    else if (method === 'POST' || method === 'PUT') {
      sendData = JSON.stringify(data);
      headers['Content-Type'] = 'application/json';
    }
    // start request
    xhr.open(method, url, options.async);
    for (let key in headers) {
      xhr.setRequestHeader(key, headers[key]);
    }
    xhr.send(sendData);
  }

  return xhr;

}



export default ajax;
