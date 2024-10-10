import { axiosInstance as axios } from "../helpers/Axios.Interceptors";
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  VERIFY_USER_REQUEST,
  VERIFY_USER_SUCCESS,
  VERIFY_USER_FAIL,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SET_USER_ROLE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  CLEAR_ERRORS,
} from "../constants/UserConstant";

// Register
export const registerAction = (authFields) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const { data } = await axios.post(`/api/auth/register`, authFields);

    const token = data.data.access_token;
    const user = data.data.user;
    const role = user.role;

    localStorage.setItem("authToken", token);

    dispatch({ type: REGISTER_USER_SUCCESS, payload: user });
    dispatch({ type: LOGIN_SUCCESS, payload: user });

    dispatch({ type: SET_USER_ROLE, payload: role });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message || "Registration failed",
    });
  }
};

// Login
export const loginAction = (authFields) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await axios.post(`/api/auth/login`, authFields);

    localStorage.setItem("authToken", data.data.access_token);

    const user = data.data.user;
    const role = user.role; // Assuming role comes from the user data

    dispatch({ type: LOGIN_SUCCESS, payload: user });

    // Set user role
    dispatch({ type: SET_USER_ROLE, payload: role });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response });
  }
};

// Load user
export const loadUserAction = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`/api/auth/user`);

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response });
  }
};

// Logout
export const logoutAction = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_REQUEST });

    const { data } = await axios.post(`/api/auth/logout`);

    localStorage.removeItem("authToken");

    // window.location.reload();

    dispatch({ type: LOGOUT_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response });
  }
};

// Forgot password
export const forgotPasswordAction = (authFields) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const { data } = await axios.post(`/api/auth/forgot-password`, authFields);

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: FORGOT_PASSWORD_FAIL, payload: error.response });
  }
};

// Reset password
export const resetPasswordAction = (authFields) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    const { data } = await axios.post(`/api/auth/reset-password`, authFields);

    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: RESET_PASSWORD_FAIL, payload: error.response });
  }
};

// Verify email
export const verifyEmailAction = () => async (dispatch) => {
  try {
    dispatch({ type: VERIFY_USER_REQUEST });

    const { data } = await axios.post(`/api/auth/email/send`);

    dispatch({ type: VERIFY_USER_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: VERIFY_USER_FAIL, payload: error.response });
  }
};

// Verify account
export const verifyAccountAction = (authFields) => async (dispatch) => {
  try {
    dispatch({ type: VERIFY_USER_REQUEST });

    const { data } = await axios.post(`/api/auth/email/verify`, authFields);

    dispatch({ type: VERIFY_USER_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: VERIFY_USER_FAIL, payload: error.response });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
