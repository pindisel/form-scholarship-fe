import { gatewayHelper } from "../utility";

async function getJob() {
  const body = {};
  const response = await gatewayHelper.http("GET", "job", body);
  return response;
}

async function createJob(data) {
  const body = {};
  const response = await gatewayHelper.http("POST", "job", body, data);
  return response;
}

export const JobService = {
  getJob,
  createJob,
};
