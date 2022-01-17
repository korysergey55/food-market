import React from "react";
import { AdvFormContainer } from "./AdvFormStyled";
import { createNewAdvApi } from "../../../services/api";
import { useState } from "react";

const productCategories = [
  "phones",
  "laptops",
  "ipad",
  "appleWatch",
  "airPods",
];

const AdvForm = () => {
  const initialState = {
    category: productCategories[0],
    name: "",
    price: "",
    description: "",
    isSale: false,
    image: "",
  };

  const [state, setState] = useState(initialState);

  const onHandleChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    if (type === "checkbox") {
      setState((prev) => ({ ...prev, [name]: checked }));
      return;
    }
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (evt) => {
    evt.preventDefault();
    createNewAdvApi(state.category, { ...state });
    setState({ ...initialState });
  };

  return (
    <AdvFormContainer>
      <form onSubmit={onHandleSubmit} className="advForm">
        <div className="advFormContent">
          <div className="leftColumn">
            <label className="advFormLabel">
              Category
              <select
                value={state.category}
                name="category"
                className="advFormInput"
                onChange={onHandleChange}
              >
                {productCategories.map((category) => (
                  <option value={category} key={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label className="advFormLabel">
              Name
              <input
                type="text"
                name="name"
                value={state.name}
                className="advFormInput"
                onChange={onHandleChange}
              />
            </label>
            <label className="advFormLabel">
              Picture
              <input
                type="text"
                name="image"
                value={state.image}
                className="advFormInput"
                onChange={onHandleChange}
              />
            </label>
          </div>
          <div className="rightColumn">
            <label className="advFormLabel">
              Description
              <input
                type="text"
                name="description"
                value={state.description}
                className="advFormInput"
                onChange={onHandleChange}
              />
            </label>
            <label className="advFormLabel">
              Price
              <input
                type="text"
                name="price"
                value={state.price}
                className="advFormInput"
                onChange={onHandleChange}
              />
            </label>
            <label className="advFormLabelCheckBox">
              In sale
              <input
                type="checkbox"
                name="isSale"
                checked={state.isSale}
                className="advFormCheckBox"
                onChange={onHandleChange}
              />
            </label>
          </div>
        </div>
        <button type="submit" className="submitButton">
          Add product
        </button>
      </form>
    </AdvFormContainer>
  );
};

export default AdvForm;



// class AdvForm extends Component {
//  state = {
//   ...initialState,
//  };

//  onHandleChange = (e) => {
//   const { name, value, type, checked } = e.target;
//   if (type === "checkbox") {
//    this.setState({ [name]: checked });
//    return;
//   }
//   this.setState({ [name]: value });
//  };
//  onHandleSubmit = (e) => {
//   e.preventDefault();
//   createNewAdvApi(this.state.category, { ...this.state });
//   alert("Товар добавлен");
//   this.setState({ ...initialState });
//  };
//  render() {
//   return (
//    <AdvFormContainer>
//     <form onSubmit={this.onHandleSubmit} className="advForm">
//      <div className="advFormContent">
//       <div className="leftColumn">
//        <label className="advFormLabel">
//         Category
//         <select
//          value={this.state.category}
//          name="category"
//          className="advFormInput"
//          onChange={this.onHandleChange}
//         >
//          {productCategories.map((category) => (
//           <option value={category} key={category}>
//            {category}
//           </option>
//          ))}
//         </select>
//        </label>

//        <label className="advFormLabel">
//         Name
//         <input
//          type="text"
//          name="name"
//          value={this.state.name}
//          className="advFormInput"
//          onChange={this.onHandleChange}
//         />
//        </label>
//        <label className="advFormLabel">
//         Picture
//         <input
//          type="text"
//          name="image"
//          value={this.state.image}
//          className="advFormInput"
//          onChange={this.onHandleChange}
//         />
//        </label>
//       </div>
//       <div className="rightColumn">
//        <label className="advFormLabel">
//         Description
//         <input
//          type="text"
//          name="description"
//          value={this.state.description}
//          className="advFormInput"
//          onChange={this.onHandleChange}
//         />
//        </label>
//        <label className="advFormLabel">
//         Price
//         <input
//          type="text"
//          name="price"
//          value={this.state.price}
//          className="advFormInput"
//          onChange={this.onHandleChange}
//         />
//        </label>
//        <label className="advFormLabelCheckBox">
//         In sale
//         <input
//          type="checkbox"
//          name="isSale"
//          checked={this.state.isSale}
//          className="advFormCheckBox"
//          onChange={this.onHandleChange}
//         />
//        </label>
//       </div>
//      </div>
//      <button type="submit" className="submitButton">
//       Add product
//      </button>
//     </form>
//    </AdvFormContainer>
//   );
//  }
// }

// export default AdvForm;
