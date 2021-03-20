import {
  FAIL_CONTACTS,
  GET_CONTACTS,
  LOAD_CONTACTS,
} from "../ACTIONTYPE/contact";

const initialState = {
  listcontact: [],
  load: false,
  errors: null,
};
const contactreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACTS:
      return { ...state, load: true };

    case GET_CONTACTS:
      return { ...state, load: false, listcontact: payload.list };
    case FAIL_CONTACTS:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};
export default contactreducer;
