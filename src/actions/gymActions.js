import axios from "axios";

import {
  GYM_LIST_REQUEST,
  GYM_LIST_SUCCESS,
  GYM_LIST_ERROR,
  GYM_API_BASEURL,
} from "../constants/gymConstants";

const gymListings = async (dispatch) => {
  try {
    //tell app that a request is loading
    dispatch({ type: GYM_LIST_REQUEST });
    //get payload
    const {
      data: { data },
    } = await axios.get(`${GYM_API_BASEURL}`);
    //Send Payload
    dispatch({ type: GYM_LIST_SUCCESS, payload: data });
  } catch (error) {
    //send error message
    if (error) {
      console.log(error);
    }
    dispatch({ type: GYM_LIST_ERROR, payload: error.message });
  }
};

export { gymListings };
