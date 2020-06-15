const headers = {
  'Content-Type': 'application/json',
};

export function get(address) {
  return _get(address);
}

export function post(address, params = {}) {
  return _withBody('POST')(address, params);
}

export function put(address, { params } = {}) {
  return _withBody('PUT')(address, { params });
}

export function patch(address, { params } = {}) {
  return _withBody('PATCH')(address, { params });
}

export function _delete(address, { params } = {}) {
  return _del(address, { params });
}

const _get = (address) =>
  Promise.resolve(
    fetch(address, {
      method: 'GET',
      headers: headers,
    })
  );

const _withBody = (method) => (address, params) => {
  return Promise.resolve(
    fetch(address, {
      method: method,
      headers: headers,
      body: JSON.stringify(params),
    })
  );
};

const _del = (address, { params } = {}) =>
  Promise.resolve(
    fetch(address, {
      method: 'DELETE',
      body: JSON.stringify(params),
    })
  );
