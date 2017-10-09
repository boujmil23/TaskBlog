import axios from 'axios';
import Toast from 'react-native-simple-toast';
import { ROOT_URL } from '../constants/usefull';
import {
  TASK_PROP,
  FETCH_BLOG,
  DELETE_NOTE_STORE,
  FETCH_BLOG_SUCCESS
 } from './type';

//*********************************Fetch Blog*****************************
 export const fetchBlog = ({ siteID }) => {

   return (dispatch) => {
      dispatch({ type: FETCH_BLOG });
     axios({
       method: 'get',
       url: `${ROOT_URL}/blogs/${siteID}`
     })
     .then(response => {
       console.log(response);
        dispatch({ type: FETCH_BLOG_SUCCESS, payload: response.data });
        dispatch({
           type: TASK_PROP,
           payload: { prop: 'siteID', value: siteID }
         });
     })
     .catch(response => {
       console.log(response);
     });
   };
 };
 //*********************************Delete note*****************************

 export const deleteNote = ({ noteID }) => {
   return (dispatch) => {
     console.log(noteID)
      dispatch({
        type: TASK_PROP,
        payload: { prop: 'loadingDelete', value: true }
       });
     axios({
       method: 'delete',
       url: `${ROOT_URL}/notes/${noteID}`
     })
     .then(response => {
       console.log(response);
           if (response.data.err) {
             Toast.show(response.data.err, Toast.SHORT);
             dispatch({
               type: TASK_PROP,
               payload: { prop: 'loadingDelete', value: false }
              });
           } else {
             dispatch({ type: DELETE_NOTE_STORE, payload: noteID });
             Toast.show('Note deleted successfully', Toast.SHORT);
           }
         })
     .catch(response => {
       console.log(response);
       Toast.show('Can not access to server!', Toast.SHORT);
       dispatch({
         type: TASK_PROP,
         payload: { prop: 'loadingDelete', value: false }
        });

     });
   };
 };
