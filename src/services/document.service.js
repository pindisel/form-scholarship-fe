import { gatewayHelper } from "../utility";

async function getDocument() {
  const body = {};
  const response = await gatewayHelper.http("GET", "document", body);
  return response;
}

async function getDocumentById(id) {
  const body = {};
  const response = await gatewayHelper.http("GET", `document/${id}`, body);
  return response;
}

async function createDocument(data) {
  const body = {};
  const response = await gatewayHelper.http("POST", "document", body, data);
  return response;
}

export const DocumentService = {
  getDocument,
  createDocument,
  getDocumentById,
};
