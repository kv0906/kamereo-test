import TYPE from './AppActionType';

const initialState = {
  listStore: null,
  storeData: null,
  loading: false,
  actionCompleted: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPE.HANDLE_LIST_STORE_FETCH :
      return {
        ...state,
        loading: true,
      };
    case TYPE.HANDLE_LIST_STORE_FETCH_SUCCESS :
      return {
        ...state,
        listStore: action.payload,
        loading: false,
      };
    case TYPE.HANDLE_STORE_FETCH :
      return {
        ...state,
        loading: true,
      };
    case TYPE.HANDLE_STORE_FETCH_SUCCESS :
      return {
        ...state,
        storeData: action.payload,
        loading: false,
      };
    case TYPE.EDIT_STORE_PROFILE :
      return {
        ...state,
        loading: true,
        actionCompleted: false,
      };
    case TYPE.EDIT_STORE_PROFILE_SUCCESS :
      return {
        ...state,
        loading: false,
        actionCompleted: true,
      };
    default:
      return state;
  }
};
