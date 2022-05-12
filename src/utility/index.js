import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

async function http(method, endpoint, body = null, data) {
  const headers = { "Content-Type": "application/json" };

  let response = null;

  if (method) {
    response = await axios({
      url: `${BASE_URL}/api/${endpoint}`,
      method: method.toUpperCase(),
      headers,
      params: body,
      data: data,
    });
  }

  return response;
}

export const gatewayHelper = {
  http,
};
