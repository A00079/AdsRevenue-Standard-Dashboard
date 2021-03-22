import { AUTHENTICATE_USER } from "./types";

export const authenticateUser = authVal => dispatch => {
  // Set token to localStorage
  console.log('My First Val AuthAction...',authVal);
  dispatch(setCurrentUser(authVal));
  localStorage.setItem("authorizer", 'lkuokuy97rjtjaopewr90464-4jfkdfoeiwt-jdjfiodfj');
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: AUTHENTICATE_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("authorizer");
  // Remove auth header for future requests
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
