import { gatewayHelper } from "../utility";

async function getEducation() {
  const body = {};
  const response = await gatewayHelper.http("GET", "education", body);
  return response;
}

async function createEducation(data) {
  const body = {};
  const response = await gatewayHelper.http("POST", "education", body, data);
  return response;
}

export const EducationService = {
  getEducation,
  createEducation,
};
