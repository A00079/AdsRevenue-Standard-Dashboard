import { AUTHENTICATE_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  authAccessToken: null,
  authRefreshToken: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      console.log('authReducer...', action.payload);
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        authAccessToken: action.payload.accessToken,
        authRefreshToken: action.payload.refreshToken
      };
    default:
      return state;
  }
}
