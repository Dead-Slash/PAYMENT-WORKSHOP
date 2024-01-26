import { GETUSERS } from "./Actiontype";

const initialState = { users: [] };

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETUSERS:
      return { ...state, users: payload };

    default:
      return state;
  }
};
