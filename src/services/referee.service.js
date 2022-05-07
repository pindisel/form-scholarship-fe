import { gatewayHelper } from "../utility";

async function getReferee() {
  const body = {};
  const response = await gatewayHelper.http("GET", "referee", body);
  return response;
}

async function createReferee(data) {
  const body = {};
  const response = await gatewayHelper.http("POST", "referee", body, data);
  return response;
}

export const RefereeService = {
  getReferee,
  createReferee,
};
