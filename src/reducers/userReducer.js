export function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, isLoading: true };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: !!localStorage.getItem("id_token"),
        isLoading: false,
        user: action.payload,
      };
    case "LOG_OUT_SUCCESS":
      return { ...state, isAuthenticated: false, error: "", isLoading: false };
    case "LOGIN_FAILURE":
      return { ...state, error: action.payload };
    case "SIGN_UP_REQUEST":
         return {...state,isLoading:true}
    case "SIGN_UP_SUCCESS":
         return {...state,isLoading:false }
    case "Error":
      return { ...state, error: action.payload, isLoading: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
