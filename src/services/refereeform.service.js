import { gatewayHelper } from "../utility";

async function getRef1() {
  const body = {};
  const response = await gatewayHelper.http("GET", "refereeform/1", body);
  return response;
}

async function getRef2() {
  const body = {};
  const response = await gatewayHelper.http("GET", "refereeform/2", body);
  return response;
}

async function getRef1ById(id) {
  const body = {};
  const response = await gatewayHelper.http("GET", `refereeform/1/${id}`, body);
  return response;
}

async function getRef2ById(id) {
  const body = {};
  const response = await gatewayHelper.http("GET", `refereeform/2/${id}`, body);
  return response;
}

async function createRef1(data) {
  const body = {};
  const response = await gatewayHelper.http(
    "POST",
    "refereeform/1",
    body,
    data
  );
  return response;
}

async function createRef2(data) {
  const body = {};
  const response = await gatewayHelper.http(
    "POST",
    "refereeform/2",
    body,
    data
  );
  return response;
}

export const RefereeFormService = {
  getRef1,
  getRef2,
  getRef1ById,
  getRef2ById,
  createRef1,
  createRef2,
};
