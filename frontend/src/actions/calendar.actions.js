import {eventConstants} from "./constants";
import axios from '../helpers/axios';
// import { useDispatch , useSelector } from 'react-redux';

export const createEvent = (event) => {
  console.log(event);

  return async(dispatch) => {

    dispatch({
      type : eventConstants.EVENT_REGISTER_REQUEST
    })
    const res = await axios.post('/event/create' , event )

    if(res.status == 201){
    //   const {message} = res.data;
      dispatch({
        type : eventConstants.EVENT_REGISTER_SUCCESS,
        payload : {
        //   message
        event
        }
      })
    }else{
    //   if(res.status == 400){
        dispatch({
          type : eventConstants.EVENT_REGISTER_FAILURE,
          payload : {
            error : res.data.error
          }
        })
    //   }
    }
  }
}

export const getEvent = () => {
  // console.log();

  return async(dispatch) => {

    dispatch({
      type : eventConstants.GET_EVENT_REQUEST
    })
    const res = await axios.get(`/event/details/${localStorage.getItem("userId")}`)

    // console.log(localStorage.getItem("userId"));

    if(res.status == 200){
    //   const {message} = res.data;
      dispatch({
        type : eventConstants.GET_EVENT_SUCCESS,
        payload : {
        //   message
          event : res.data 
        }
      })
    }else{
    //   if(res.status == 400){
        dispatch({
          type : eventConstants.GET_EVENT_FAILURE,
          payload : {
            error : res.data.error
          }
        })
    //   }
    }
  }
}

export const deleteParticularEvent = (tempId) => {
  // console.log();

  return async(dispatch) => {

    dispatch({
      type : eventConstants.DELETE_EVENT_REQUEST
    })
    const res = await axios.delete(`/event/delete/${tempId}`)

    // console.log(localStorage.getItem("userId"));

    if(res.status == 200){
      const {message} = res.data;
      dispatch({
        type : eventConstants.DELETE_EVENT_SUCCESS,
        payload : {
        //   message
          // event : res.data 
          message : message
        }
      })
    }else{
    //   if(res.status == 400){
        dispatch({
          type : eventConstants.DELETE_EVENT_FAILURE,
          payload : {
            error : res.data.error
          }
        })
    //   }
    }
  }
}

export const updateParticularEvent = (tempId , event) => {
  // console.log();

  return async(dispatch) => {

    dispatch({
      type : eventConstants.UPDATE_EVENT_REQUEST
    })
    const res = await axios.put(`/event/update/${tempId}` , event)

    // console.log(localStorage.getItem("userId"));

    if(res.status == 200){
      const {message} = res.data;
      dispatch({
        type : eventConstants.UPDATE_EVENT_SUCCESS,
        payload : {
        //   message
          // event : res.data 
          message : message
        }
      })
    }else{
    //   if(res.status == 400){
        dispatch({
          type : eventConstants.UPDATE_EVENT_FAILURE,
          payload : {
            error : res.data.error
          }
        })
    //   }
    }
  }
}