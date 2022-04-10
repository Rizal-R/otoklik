import {
  GET_DATA_LIST,
  GET_DATA_SHOW,
  GET_DATA_UPDATE,
  GET_DATA_DELETE,
  GET_DATA_ADD
} from "action/Action";

let initialState = {
  getDataAPI: false,
  errorDataList: false,
  getDataView: false,
  errorDataView: false,
  getDataDelete: false,
  errorDataDelete: false,
  getDataAdd: false,
  errorDataAdd: false,
  getDataUpdate: false,
  errorDataUpdate: false,
  title: "Rizal Rudiantoro",
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_LIST:
      return {
        ...state,
        getDataAPI: action.payload.data,
        errorDataList: action.payload.errorMessage,
      };
    case GET_DATA_SHOW:
      return {
        ...state,
        getDataView: action.payload.data,
        errorDataView: action.payload.errorMessage
      };
    case GET_DATA_UPDATE:
      return {
        ...state,
        getDataUpdate: action.payload.data,
        errorDataUpdate: action.payload.errorMessage
      };
    case GET_DATA_DELETE:
      return {
        ...state,
        getDataDelete: action.payload.data,
        errorDataDelete: action.payload.errorMessage
      };
    case GET_DATA_ADD:
      return {
        ...state,
        getDataAdd: action.payload.data,
        errorDataAdd: action.payload.errorMessage
      };
    default:
      return state;
  }
};

export default data;