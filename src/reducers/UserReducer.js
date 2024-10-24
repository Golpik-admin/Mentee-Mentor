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
  SET_USER_ROLE, // Add the constant here
  CLEAR_ERRORS,
} from "../constants/UserConstant";

const initialState = {
  user: null,
  role: null, // Add role to the state
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // REGISTER
    case REGISTER_USER_REQUEST:
      return {
        loading: true,
        error: null,
        message: null,
        userType: null,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        // userType: action.payload.role,
        user: action.payload.user,
        role: action.payload.role,
        message: action.payload.message,
        error: null,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        message: null,
        error: action.payload,
      };

    // LOGIN & LOAD
    case LOGIN_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
        error: null,
      };
    case LOGIN_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_FAIL:
    case LOAD_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    // LOGOUT
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
        message: action.payload,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // FORGOT PASSWORD
    case FORGOT_PASSWORD_REQUEST:
    case VERIFY_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        message: null,
      };
    case FORGOT_PASSWORD_SUCCESS:
    case VERIFY_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case FORGOT_PASSWORD_FAIL:
    case VERIFY_USER_FAIL:
      return {
        ...state,
        loading: false,
        message: null,
        error: action.payload,
      };

    // RESET PASSWORD
    case RESET_PASSWORD_REQUEST:
      return {
        loading: true,
        error: null,
        message: null,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        loading: false,
        message: action.payload,
      };
    case RESET_PASSWORD_FAIL:
      return {
        loading: false,
        message: null,
        error: action.payload,
      };

    // SET USER ROLE
    case SET_USER_ROLE:
      return {
        ...state,
        role: action.payload, // Set the role here
      };

    // CLEAR ERRORS
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default userReducer;
