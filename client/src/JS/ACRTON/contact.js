import {
  LOAD_CONTACTS,
  GET_CONTACTS,
  FAIL_CONTACTS,
  GETONE_CONTACT,
} from "../ACTIONTYPE/contact";
import axios from "axios";

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
export const deletecontact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contact/${id}`);
    dispatch(getcontacts());
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response });
  }
};
export const getonecontact = (id) => (dispatch) => {
  axios
    .get(`/api/contact/${id}`)
    .then((res) =>
      dispatch({
        type: GETONE_CONTACT,
        payload: res.data.getone,
      })
    )
    .catch((err) => console.log(err));
};
export const postcontact = (newuser) => async (dispatch) => {
  try {
    await axios.post("/api/contact", newuser);
    dispatch(getcontacts());
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response });
  }
};
export const editcontact = (id, newcontact) => async (dispatch) => {
  try {
    await axios.put(`/api/contact/${id}`, newcontact);
    dispatch(getcontacts());
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response });
  }
};
