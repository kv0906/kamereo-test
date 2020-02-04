import ApiBase from './ApiBase';

export function getStoreInfo(id) {
  return ApiBase.get(`/stores/${id}`);
}
export function getListStore() {
  return ApiBase.get('/stores');
}
export function editStoreProfile(payload) {
  return ApiBase.put(`/stores/${payload.id}` , payload);
}
