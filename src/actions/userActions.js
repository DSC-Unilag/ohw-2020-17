import axios from "axios";
import { errorHandler } from "../utils";
import {  USER_API_BASEURL } from "../constants"
import {createBrowserHistory } from "history"
export const loginUser = errorHandler(
  "LOGIN",
  async (dispatch, username, password, history) => {
    if (!!!username && !!!password) {
      throw new Error("invalid username or password");
    }
    dispatch({ type: "LOGIN_REQUEST" });
    const data = { email: username, password };
    const response = await axios.post(
      `${USER_API_BASEURL}/login`,
      data,
      { withCredentials: true }
    );

    const {
      data: { data: userData },
    } = response;
    const user = JSON.stringify(userData);
    if (user) {
      localStorage.setItem("id_token", user);
    }
    dispatch({ type: "LOGIN_SUCCESS", payload: userData || {} });
    history.push("/app/");
  }
);

export const signOut = errorHandler("LOGOUT", async (dispatch, history) => {
  await axios.post( `${USER_API_BASEURL}/logout`,null, {
    withCredentials: true,
  });
  localStorage.removeItem("id_token");
  dispatch({ type: "LOG_OUT_SUCCESS" });
  history.push("/login");
});

export const register = async(dispatch,user,setError)=>{
  try{
    dispatch({type:"SIGN_UP_REQUEST"})
    const response =await axios.post(`${USER_API_BASEURL}/register`,user, { withCredentials: true })
    dispatch({type:"SIGN_UP_SUCCESS"})
    const {
      data: { data: userData },
    } = response;
    const jsonuser = JSON.stringify(userData);
    if (jsonuser) {
      localStorage.setItem("id_token", jsonuser);
    }
    dispatch({ type: "LOGIN_SUCCESS", payload: userData || {} });
    createBrowserHistory().push("/app")
  }catch(e){
      if(e.response){
        setError(e.response.message)
      }else{
        setError("you are not connected to the internet")
      }
  }

}