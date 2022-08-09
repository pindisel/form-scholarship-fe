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

async function getRefById(id_ref, id_user) {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    `refereeform/${id_ref}/${id_user}`,
    body
  );
  return response;
}

async function createRef(id_ref, data) {
  const body = {};
  const response = await gatewayHelper.http(
    "POST",
    `refereeform/${id_ref}`,
    body,
    data
  );
  return response;
}

export const RefereeFormService = {
  getRef1,
  getRef2,
  getRefById,
  createRef,
};
