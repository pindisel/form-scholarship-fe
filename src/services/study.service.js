import { gatewayHelper } from "../utility";

async function getStudy() {
  const body = {};
  const response = await gatewayHelper.http("GET", "study", body);
  return response;
}

async function getStudyById(id) {
  const body = {};
  const response = await gatewayHelper.http("GET", `study/${id}`, body);
  return response;
}

async function createStudy(data) {
  const body = {};
  const response = await gatewayHelper.http("POST", "study", body, data);
  return response;
}

export const StudyService = {
  getStudy,
  createStudy,
  getStudyById,
};
