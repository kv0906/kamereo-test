import TYPE from './AppActionType';

export const handleStoreFetch = (payload = {}) => ({
  type: TYPE.HANDLE_STORE_FETCH,
  payload,
});
export const handleListStoreFetch = (payload = {}) => ({
  type: TYPE.HANDLE_LIST_STORE_FETCH,
  payload,
});

export const handleListStoreFetchSuccess = (payload = {}) => ({
  type: TYPE.HANDLE_LIST_STORE_FETCH_SUCCESS,
  payload,
});

export const handleStoreFetchSuccess = (payload = {}) => ({
  type: TYPE.HANDLE_STORE_FETCH_SUCCESS,
  payload,
});
export const editStoreProfile = (payload = {}) => ({
  type: TYPE.EDIT_STORE_PROFILE,
  payload,
});
export const editStoreProfileSuccess = (payload = {}) => ({
  type: TYPE.EDIT_STORE_PROFILE_SUCCESS,
  payload,
});




