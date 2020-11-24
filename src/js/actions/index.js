// src/js/actions/index.js
import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
  IS_FETCHING,
  SIGN_UP_ERROR,
  SUBMIT_PET_SUCCESS,
  SUBMIT_PET_ERROR,
  PET_DATA_LOADED,
  PET_PYTHON_GET, PET_ERROR,
} from "../constants/action-types";
//const python = require('../../scraperCall.js')

export function getData() {
  return function (dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}

export function submitPet(petinfo) {
  var newPet = petinfo;
  console.log("petinfo: ", newPet);
  return function (dispatch) {
    dispatch({ type: IS_FETCHING });
    console.log("after dispatch");
    return fetch("http://localhost:5000/pets/plus/", {
      method: "POST",
      headers: {
        Accept: "applicationjson",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newPet.name,
        size: newPet.size,
        species: newPet.species,
        breed: newPet.breed,
        location: newPet.location,
        comments: newPet.comments,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        dispatch({ type: SUBMIT_PET_SUCCESS });
      })
      .catch((error) => {
        console.log("Error", error);
        dispatch({ type: SUBMIT_PET_ERROR });
      });
  };
}

export function signUp(userinfo) {
  var newUser = userinfo;
  console.log("function call: ", newUser);
  return function (dispatch) {
    dispatch({ type: IS_FETCHING });
    console.log("ok just checking");
    return fetch("http://localhost:5000/users/add/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: newUser.username,
        fullName: newUser.fullName,
        email: newUser.email,
        password: newUser.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        dispatch({ type: SIGN_UP_SUCCESS });
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch({ type: SIGN_UP_ERROR });
      });
  };
}

export function getPets(){
  return function (dispatch) {
    dispatch({ type: IS_FETCHING });
   //find_pets_py();
    return fetch("http://localhost:5000/pets/")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: PET_DATA_LOADED, payload: json });
      });
  };
}

export function scrapeWebByLocation(city){
  return function (dispatch) {
    dispatch({ type: IS_FETCHING });
fetch(`http://localhost:5000/find_pets_py/${city}`)
  .then((response) => response.json())
  .then((json) => {
    dispatch({ type: PET_PYTHON_GET, payload: json });
  })
  .catch((error) => {
    console.error("Error:", error);
    dispatch({ type: PET_ERROR });
  });
};
}

