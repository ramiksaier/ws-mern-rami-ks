import {
  FAIL_CONTACTS,
  GETONE_CONTACT,
  GET_CONTACTS,
  LOAD_CONTACTS,
} from "../ACTIONTYPE/contact";

const initialState = {
  listcontact: [],
  load: false,
  errors: null,
  user: {},
};
const contactreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACTS:
      return { ...state, load: true };

    case GET_CONTACTS:
      return { ...state, load: false, listcontact: payload.list };
    case FAIL_CONTACTS:
      return { ...state, load: false, errors: payload };
    case GETONE_CONTACT:
      return { ...state, user: payload };
    default:
      return state;
  }
};
export default contactreducer;
