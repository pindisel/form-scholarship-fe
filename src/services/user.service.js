import { gatewayHelper } from "../utility";

async function getUser() {
  const body = {};
  const response = await gatewayHelper.http("GET", "user", body);
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

export const UserService = {
  getUser,
  createUser,
  signinUser,
};
