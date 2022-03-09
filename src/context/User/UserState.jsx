import React, { useReducer } from "react";
import axios from "axios";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import { GET_USERS, GET_PROFILE } from "../types";

const urlApi = "https://reqres.in/api/users/";

const UserState = (props) => {
  const initialState = {
    users: [],
    selectedUser: null,
  };
  //alternativa de useState: useReducer acepta un reducer del tipo (state, action) => newState
  const [state, dispatch] = useReducer(UserReducer, initialState);
  //función que actualizarán el estado:
  const getUsers = async () => {
    try {
      const res = await axios.get(urlApi);
      const data = res.data.data;
      dispatch({
        type: GET_USERS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getProfile = async (id) => {
    try {
      const res = await axios.get(urlApi + id);
      const { data } = res;
      dispatch({
        type: GET_PROFILE,
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider //provee lo que está en el estado...
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile,
      }}
    >
      {/*  props.childre: son los componentes hijos que van a estar dentro de éste componente(UserState). */}
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
