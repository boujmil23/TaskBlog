import _ from 'lodash';
import {
   TASK_PROP,
   FETCH_BLOG,
   DELETE_NOTE_STORE,
   FETCH_BLOG_SUCCESS
 } from '../actions/type';

const INITIAL_STATE = {
      loadingBlog: false,
      loadingDelete: false,
      siteID: null,
      blog: {},
      notes: []

};
 export default(state = INITIAL_STATE, action) => {
   switch (action.type) {
     case TASK_PROP:
         return { ...state, [action.payload.prop]: action.payload.value };
     case FETCH_BLOG:
         return { ...state, blog: {}, notes: [], loadingBlog: true }
     case FETCH_BLOG_SUCCESS:
          return { ...state, loadingBlog: false, blog: action.payload, notes: action.payload.notes };
      case DELETE_NOTE_STORE:
         return { ...state, loadingDelete: false, notes: _.filter(state.notes, (o) => { return o.id !== action.payload; }) };
     default:
        return state;

   }
 };
