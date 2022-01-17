import axios from "axios";

//korysergeydev@gmail.com
const EndpointRegistration = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`;
const EndpointLogin = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`;

export const registrationUserApi = async (inputFormState) => {
 try {
  const response = await axios.post(EndpointRegistration, {
   ...inputFormState,
   returnSecureToken:true,
  });
  return response;
 } catch (error) {
  console.log(error);
 }
};

export const loginUserApi = async (inputFormState) => {
 try {
  const response = await axios.post(EndpointLogin, {
   ...inputFormState,
   returnSecureToken: true,
  });
  return response;
 } catch (error) {
  console.log(error);
 }
};

export const logoutApi = async (authToken) => {
 axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
 try {
  const response = await axios.post(EndpointLogin, { returnSecureToken: true });
  return response;
 } catch (error) {
  console.log(error);
 }
};
