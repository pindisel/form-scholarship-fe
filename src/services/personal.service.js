import { gatewayHelper } from "../utility";

async function getPersonal() {
  const body = {};
  const response = await gatewayHelper.http("GET", "personal", body);
  return response;
}

async function createPersonal(data) {
  const body = {};
  const response = await gatewayHelper.http("POST", "personal", body, data);
  return response;
}

export const PersonalService = {
  getPersonal,
  createPersonal,
};
