import { gatewayHelper } from "../utility";

async function getContact() {
  const body = {};
  const response = await gatewayHelper.http("GET", "contact", body);
  return response;
}

async function getContactById(id) {
  const body = {};
  const response = await gatewayHelper.http("GET", `contact/${id}`, body);
  return response;
}

async function createContact(data) {
  const body = {};
  const response = await gatewayHelper.http("POST", "contact", body, data);
  return response;
}

export const ContactService = {
  getContact,
  createContact,
  getContactById,
};
