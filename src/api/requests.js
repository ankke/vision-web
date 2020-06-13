export function get(address) {
  return _get(address);
}

export function post(address, { params = {} } = {}) {
  return _withBody("POST")(address, { params });
}

export function put(address, { params = {} } = {}) {
  return _withBody("PUT")(address, { params });
}

export function patch(address, { params = {} } = {}) {
  return _withBody("PATCH")(address, { params });
}

export function _delete(address, { params = {} } = {}) {
  return _del(address, { params });
}

const _get = (address, { headers, withToken }) =>
  Promise.resolve(
    fetch(address, {
      method: "GET",
    })
  );

const _withBody = (method) => (address, { params }) =>
  Promise.resolve(
    fetch(address, {
      method: method,
      body: JSON.stringify(params),
    })
  );

const _del = (address, { params } = {}) =>
  Promise.resolve(
    fetch(address, {
      method: "DELETE",
      body: JSON.stringify(params),
    })
  );
