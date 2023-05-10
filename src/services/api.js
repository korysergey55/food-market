import axios from "axios";
const baseURL = "https://goodfood-c0ae2-default-rtdb.firebaseio.com/"

export const getAllAdvByCategoryApi = async (category) => {
  try {
    const response = await axios.get(baseURL + `products/${category}.json`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewAdvApi = async (category, newProduct) => {
  try {
    const response = await axios.post(
      baseURL + `products/${category}.json`,
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
    await axios.delete(baseURL + `products/${category}/${id}.json`);
  } catch (error) {
    console.log(error);
  }
};

export const getProductByIDApi = async (category, id) => {
  try {
    const response = await axios.get(
      baseURL + `products/${category}/${id}.json`
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
