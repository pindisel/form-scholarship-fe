import { gatewayHelper } from "../utility";

async function getUser() {
  const body = {};
  const response = await gatewayHelper.http("GET", "user", body);
  return response;
}

async function getUserById(id) {
  const body = {};
  const response = await gatewayHelper.http("GET", `user/${id}`, body);
  return response;
}

async function createUser(data) {
  const body = {};
  const response = await gatewayHelper.http("POST", "user/signup", body, data);
  return response;
}

async function signinUser(data) {
  const body = {};
  const response = await gatewayHelper.http("POST", "user/signin", body, data);
  return response;
}

async function verifyUser(token) {
  const body = {};
  const response = await gatewayHelper.http(
    "PUT",
    `user/verify/${token}`,
    body
  );
  return response;
}

export const UserService = {
  getUser,
  getUserById,
  createUser,
  signinUser,
  verifyUser,
};
