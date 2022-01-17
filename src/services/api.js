import axios from "axios";
// REACT_APP_BASE_URL = https://criptoshop-62529-default-rtdb.firebaseio.com/ //env korysergeyDev@gmail.com
// REACT_APP_API_KEY = AIzaSyBWUe5DycXWIqiLuoM_--zJGO5qLfUwhkU // env korysergeyDev@gmail.com

const baseURL = "https://criptoshop-62529-default-rtdb.firebaseio.com/"

export const getAllAdvByCategoryApi = async (category) => {
 try {
  const response = await axios.get(baseURL + `advertisements/${category}.json`);
  return response.data;
 } catch (error) {
  console.log(error);
 }
};

export const createNewAdvApi = async (category, newAdv) => {
 try {
  const response = await axios.post(
   baseURL + `advertisements/${category}.json`,
   newAdv
  );
  return response;
 } catch (error) {
  console.log(error);
 }
};

export const deleteAdvApi = async (category, id) => {
 try {
  await axios.delete(baseURL + `advertisements/${category}/${id}.json`);
 } catch (error) {
  console.log(error);
 }
};

export const getProductByIDApi = async (category, id) => {
 try {
  const response = await axios.get(
   baseURL + `advertisements/${category}/${id}.json`
  );
  return response.data;
 } catch (error) {
  console.log(error);
 }
};

export const createNewOrderApi = async (order) => {
 try {
  await axios.post(baseURL + "orders.json", order);
 } catch (error) {
  console.log(error);
 }
};
