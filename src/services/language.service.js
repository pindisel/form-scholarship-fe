import { gatewayHelper } from "../utility";

async function getLanguage() {
  const body = {};
  const response = await gatewayHelper.http("GET", "language", body);
  return response;
}

async function getLanguageById(id) {
  const body = {};
  const response = await gatewayHelper.http("GET", `language/${id}`, body);
  return response;
}

async function createLanguage(data) {
  const body = {};
  const response = await gatewayHelper.http("POST", "language", body, data);
  return response;
}

export const LanguageService = {
  getLanguage,
  createLanguage,
  getLanguageById,
};
