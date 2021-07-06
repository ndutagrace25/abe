import axios from "axios";

export const sendMessage = () => (dispatch) => {
  let url = `https://menubackend.herokuapp.com/sms`;
  let data = {
    message: "Hello",
  };
  axios
    .post(url, data)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
};
