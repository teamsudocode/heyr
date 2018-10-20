import axios from "axios";

export function set_login(token) {
  return (dispatch, getState) => {
    axios
      .get(`${process.env.REACT_APP_URL || ""}/api/facebookLogin`)
      .then(function(response) {
        console.log(response);
        let user_id = response.userID;
        dispatch(fetch_success(user_id));
      })
      .catch(function(error) {
        console.log(error);
        // dispatch(fetch_error());
      });
  };
}

export function fetch_success(user_id) {
  return {
    type: "SET_LOGGED",
    isLogged: true,
    userId: user_id
  };
}

// export function fetch_error() {
//   return {
//     type: "SET_LOGGED",
//     isLogged: false
//   };
// }
