import { GET_USERS, GET_PROFILE } from "../types";

// eslint-disable-next-line
export default (state, action) => {
  //se crea una función anónima, donde se le pasa como parámetro state y action...
  const { payload, type } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        selectedUser: payload,
      };
    default:
      return state;
  }
};
