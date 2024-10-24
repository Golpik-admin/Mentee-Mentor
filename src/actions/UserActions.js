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
import { toast } from "react-toastify";

// Register
export const registerAction = (body) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const response = await axios.post("/user/register", body);
    console.log("Auth fields:", response);

    const data = response?.data;
    const user = data.data.user;
    const token = data.data.access_token;
    const role = user.role;

    console.log("loginAction", data);

    // Save token to local storage
    localStorage.setItem("authToken", token);

    // Dispatch success actions
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: { user, role, message: "Account registered successfully!" },
    });
    dispatch({ type: LOGIN_SUCCESS, payload: user });
    dispatch({ type: SET_USER_ROLE, payload: role });

    // Show success toast message
    toast.success("Account registered successfully!", {
      position: "top-center",
      autoClose: 3000, // Duration in ms
    });
  } catch (error) {
    // console.log("loginActionErrrorr", error);
    const errorMessage = error.response?.data?.message || "Registration failed";

    dispatch({
      type: REGISTER_USER_FAIL,
      payload: {
        message: errorMessage,
        data: error.response?.data,
      },
    });

    // Show error toast message
    toast.error(errorMessage, {
      position: "top-center",
      // position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // Duration in ms
    });
  }
};

// Login
export const loginAction = (body) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post("/auth/token", body);
    localStorage.setItem("authToken", data.data.access_token);

    const user = data.data.user;
    const role = user.role;
    console.log("loginActionvvvvvvvvvv", user);
    dispatch({ type: LOGIN_SUCCESS, payload: user });
    dispatch({ type: SET_USER_ROLE, payload: role });
  } catch (error) {
    console.log("loginActionError", error);
    const errorMessage =
      error.response?.data?.message ||
      "Login failed. Please check your email and password.";

    dispatch({
      type: LOGIN_FAIL,
      payload: {
        message: errorMessage,
        data: error.response?.data,
      },
    });

    toast.error(errorMessage, {
      position: "top-center",
      autoClose: 3000, // Duration in ms
    });
  }
};

// Load user
export const loadUserAction = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get("auth/user");

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response });
  }
};

// Logout
export const logoutAction = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_REQUEST });
    const { data } = await axios.post("auth/logout");
    localStorage.removeItem("authToken");
    // window.location.reload();
    dispatch({ type: LOGOUT_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response });
  }
};

// Forgot password
export const forgotPasswordAction = (body) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const { data } = await axios.post('/auth/forgotpwd', body);

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: FORGOT_PASSWORD_FAIL, payload: error.response });
  }
};

// Reset password
export const resetPasswordAction = (body) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    const { data } = await axios.post('/auth/forgotpwd/reset', body);

    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: RESET_PASSWORD_FAIL, payload: error.response });
  }
};

// Verify email
export const verifyEmailAction = () => async (dispatch) => {
  try {
    dispatch({ type: VERIFY_USER_REQUEST });

    const { data } = await axios.post("auth/email/send");

    dispatch({ type: VERIFY_USER_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: VERIFY_USER_FAIL, payload: error.response });
  }
};

// Verify account
export const verifyAccountAction = (body) => async (dispatch) => {
  try {
    dispatch({ type: VERIFY_USER_REQUEST });

    const { data } = await axios.post("auth/email/verify", body);

    dispatch({ type: VERIFY_USER_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: VERIFY_USER_FAIL, payload: error.response });
  }
};

//Create profile
export const createProfile = (body) => async (dispatch) => {
  try {
    const data = await axios.post("/user/complete-profile", body);

    const token = data.data.access_token;
    // const role = user.role;

    localStorage.setItem("authToken", token);

    toast.success("Account created successfully!", {
      position: "top-center",
      autoClose: 3000,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Account failed";
    toast.error(errorMessage, {
      position: "top-center",
      autoClose: 3000,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
