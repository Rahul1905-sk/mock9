import { add_data_req_success, login_req_success, signup_req_success } from "./actionType";

const init = {
  isAuth: false,
  users: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case signup_req_success: {
      return {
        ...state,
        isAuth: false,
        users: payload,
      };
    }
    case login_req_success: {
      return {
        ...state,
        isAuth: true,
        users: payload,
      };
    }
    case add_data_req_success : {
      return {
        ...state,
        users : payload
      }
       
    }

    default: {
      return state;
    }
  }
};
