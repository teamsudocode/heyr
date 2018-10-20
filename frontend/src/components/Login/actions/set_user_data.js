const axios = require("axios");

export function set_login(token) {
  return (dispatch, getState) => {
    axios
      .get(`${process.env.REACT_APP_URL || ""}/api/facebookLogin`)
      .then(function(response) {
        dispatch(fetch_success());
      })
      .catch(function(error) {
        console.log(error);
        // dispatch(fetch_error());
      });
  };
}

export function fetch_success() {
  return {
    type: "SET_LOGGED",
    isLogged: true
  };
}

// export function fetch_error() {
//   return {
//     type: "SET_LOGGED",
//     isLogged: false
//   };
// }
