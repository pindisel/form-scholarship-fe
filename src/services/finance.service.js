import { gatewayHelper } from "../utility";

async function getFinance() {
  const body = {};
  const response = await gatewayHelper.http("GET", "finance", body);
  return response;
}

async function getFinanceById(id) {
  const body = {};
  const response = await gatewayHelper.http("GET", `finance/${id}`, body);
  return response;
}

async function createFinance(data) {
  const body = {};
  const response = await gatewayHelper.http("POST", "finance", body, data);
  return response;
}

export const FinanceService = {
  getFinance,
  createFinance,
  getFinanceById,
};
