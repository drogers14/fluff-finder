import { 
    ADD_ARTICLE, 
    SIGN_UP, 
    SIGN_UP_SUCCESS,
SIGN_UP_ERROR,
IS_FETCHING,
SUBMIT_PET_ERROR,
SUBMIT_PET_SUCCESS,
PET_DATA_LOADED,
 } from "../constants/action-types";

const initialState = {
  articles: [],
  signupSuccess: false,
  isFetching: false,
  signupError: false,
  submitPetSuccess: false,
  submitPetError: false,
  petData: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
    });
  }
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload),
    });
  }
  if(action.type === SIGN_UP_SUCCESS){
      return {...state, isFetching: false, signupSuccess: true, signupError: false }
  }
  if(action.type === SIGN_UP_ERROR){
      return {...state, signupError: true, isFetching: false, signupSuccess: false}
  }
  if(action.type === IS_FETCHING){
      return {...state, 
        isFetching: true, 
        signupError: false, 
        signupSuccess: false,
        submitPetSuccess: false, 
        submitPetError: false,
    }
  }
  if(action.type === SUBMIT_PET_ERROR){
      return {...state, submitPetError: true, submitPetSuccess: false, isFetching: false}
  }
  if(action.type === SUBMIT_PET_SUCCESS){
      return {...state, submitPetSuccess: true, submitPetError: false, isFetching: false}
  }
  if(action.type === PET_DATA_LOADED){
      return { ...state, petData: action.payload, isFetching: false }
  }
  return state;
}

export default rootReducer;
