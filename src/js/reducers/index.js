import { 
    ADD_ARTICLE, 
    SIGN_UP, 
    SIGN_UP_SUCCESS,
SIGN_UP_ERROR,
IS_FETCHING,
SUBMIT_PET_ERROR,
SUBMIT_PET_SUCCESS,
PET_DATA_LOADED,
PET_PYTHON_GET,
PET_ERROR,
 } from "../constants/action-types";

const initialState = {
  articles: [],
  signupSuccess: false,
  isFetching: false,
  signupError: false,
  submitPetSuccess: false,
  submitPetError: false,
  petData: [],
  petError: false,
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
        petError: false,
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
  if(action.type === PET_PYTHON_GET){
   var newArray = action.payload;
  // newArray.push(action.payload);
   console.log(newArray);
   //newArray.concat(state.petData)
    return {...state, petData: newArray, isFetching: false, petError:  false}
  }
  if(action.type === PET_ERROR){
    return{...state, isFetching: false, petError: true}
  }
  return state;
}

export default rootReducer;
