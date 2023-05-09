import axios from "axios";
// REACT_APP_BASE_URL = https://react-shop-5c360-default-rtdb.firebaseio.com/

const baseURL = "https://goodfood-c0ae2-default-rtdb.firebaseio.com/"

export const getAllAdvByCategoryApi = async (category) => {
  try {
    const response = await axios.get(baseURL + `advertisements/${category}.json`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewAdvApi = async (category, newProduct) => {
  try {
    const response = await axios.post(
      baseURL + `advertisements/${category}.json`,
      newProduct,
      //   {
      //   headers: { Authorization: 'Bearer ' + process.env.REACT_APP_API_KEY }
      // }
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
