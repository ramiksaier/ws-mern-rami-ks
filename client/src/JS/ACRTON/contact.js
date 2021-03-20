import {
  LOAD_CONTACTS,
  GET_CONTACTS,
  FAIL_CONTACTS,
} from "../ACTIONTYPE/contact";
import { axios } from "axios";

export const getcontacts = () => async (dispatch) => {
  dispatch({ type: LOAD_CONTACTS });
  try {
    let result = await axios.get("/api/contact");
    console.log(result);

    dispatch({ type: GET_CONTACTS, payload: result.data });
  } catch (error) {
    dispatch({
      type: FAIL_CONTACTS,
      payload: error.response,
    });
  }
};
