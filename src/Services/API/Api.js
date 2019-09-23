import ApiBase from './ApiBase';

export function getStoreInfo(id) {
  return ApiBase.get(`/stores/${id}`);
}
export function editStoreProfile(payload) {
  return ApiBase.put(`/stores/${payload.id}` , payload);
}
