import { axiosGetCancellable } from "../helpers/axios.helper"

const axiosConfig = {
  baseURL: 'https://sample-accounts-api.herokuapp.com',
};

function searchUser(userId) {
  return axiosGetCancellable(`/users/${userId}`, axiosConfig);
}

function searchAccount(accId) {
  return axiosGetCancellable(`/accounts/${accId}`, axiosConfig);
}

function getUserAccounts(userId) {
  return axiosGetCancellable(`/users/${userId}`, axiosConfig);
}

export { searchUser, searchAccount, getUserAccounts };
