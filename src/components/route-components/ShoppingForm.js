import React, { Component } from "react";
import InputMask from "react-input-mask";
import { NavLink } from "react-router-dom";

class ShoppingForm extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    street: "",
    houseNumber: "",
    city: "",
    postcode: "",
    submitDone: false,

    errors: {
      nameErr: false,
      surnameErr: false,
      emailValid: "",
      streetErr: false,
      houseNumberErr: false,
      cityErr: false,
      postcodeErr: false
    }
  };

  handleChangeValue = e => {
    const type = e.target.type;
    const name = e.target.name;

    if (type === "checkbox" || type === "radio") {
      this.setState({
        [name]: e.target.checked
      });
    } else {
      this.setState({
        [name]: e.target.value
      });
    }
  };

  handleValidation = e => {
    const { email, errors } = this.state;

    const value = e.target.value;
    const invalid = e.target.getAttribute("invalid");

    if (!value.length) {
      this.setState({
        errors: { ...errors, [invalid]: true }
      });
    } else {
      this.setState({
        errors: { ...errors, [invalid]: false }
      });
    }

    if (invalid === "emailErr" && !value.length) {
      this.setState({
        errors: { ...errors, emailValid: "email can`t be empty" }
      });
    } else if (invalid === "emailErr" && !email.includes("@")) {
      this.setState({
        errors: { ...errors, emailValid: "email should contain @" }
      });
    } else if (invalid === "emailErr" && email.includes("@") && value.length) {
      this.setState({
        errors: { ...errors, emailValid: "" }
      });
    }
  };

  handleSubmitForm = e => {
    e.preventDefault();

    const {
      name,
      surname,
      email,
      street,
      houseNumber,
      city,
      postcode
    } = this.state;

    const { emailValid } = this.state.errors;

    if (
      name &&
      surname &&
      email &&
      street &&
      houseNumber &&
      city &&
      postcode &&
      emailValid === ""
    ) {
      console.log({
        user: {
          name: { name },
          surname: { surname },
          email: { email },
          address: {
            street: { street },
            houseNumber: { houseNumber },
            city: { city },
            postcode: { postcode }
          }
        }
      });

      this.props.formInfoId.forEach(productInfo => {
        console.log({
          product: {
            id: productInfo.idProduct,
            options: [
              {
                id: productInfo.colorsId,
                value: productInfo.colorId
              },
              {
                id: productInfo.capacitiesId,
                value: productInfo.capacityId
              }
            ],
            amount: productInfo.totalPrice
          }
        });
      });

      this.setState({
        name: "",
        surname: "",
        email: "",
        street: "",
        houseNumber: "",
        city: "",
        postcode: "",
        submitDone: true
      });
    } else {
      alert("you must properly fill form");
    }
  };

  render() {
    const {
      name,
      surname,
      email,
      street,
      houseNumber,
      city,
      postcode,
      submitDone
    } = this.state;

    const {
      nameErr,
      surnameErr,
      emailValid,
      streetErr,
      houseNumberErr,
      cityErr,
      postcodeErr
    } = this.state.errors;

    return (
      <section className="section-shopping-form">
        {!submitDone && (
          <>
            <NavLink to="/shopping-cart" className="link">
              <div className="icon-cart__box">
                <i className="fas fa-shopping-cart icon-cart__icon"></i>
              </div>
            </NavLink>

            <h4 className="section-shopping-form__title">shopping form</h4>

            <form
              className="shopping-form"
              noValidate
              onSubmit={this.handleSubmitForm}
            >
              <div className="shopping-form__box-basic">
                <label
                  htmlFor="name"
                  className="shopping-form__title shopping-form__title--basic-one"
                >
                  name
                </label>
                <input
                  id="name"
                  className="shopping-form__input shopping-form__input--basic-one"
                  name="name"
                  type="text"
                  invalid="nameErr"
                  value={name}
                  onChange={this.handleChangeValue}
                  onBlur={this.handleValidation}
                />

                {nameErr && (
                  <span className="shopping-form__invalid shopping-form__invalid--basic-one">
                    name can`t be empty
                  </span>
                )}

                <label
                  htmlFor="surname"
                  className="shopping-form__title shopping-form__title--basic-two"
                >
                  surname
                </label>
                <input
                  id="surname"
                  className="shopping-form__input shopping-form__input--basic-two"
                  name="surname"
                  type="text"
                  invalid="surnameErr"
                  value={surname}
                  onChange={this.handleChangeValue}
                  onBlur={this.handleValidation}
                />

                {surnameErr && (
                  <span className="shopping-form__invalid shopping-form__invalid--basic-two">
                    surname can`t be empty
                  </span>
                )}

                <label
                  htmlFor="email"
                  className="shopping-form__title shopping-form__title--basic-three"
                >
                  email
                </label>
                <input
                  id="email"
                  className="shopping-form__input shopping-form__input--basic-three"
                  name="email"
                  type="text"
                  invalid="emailErr"
                  value={email}
                  onChange={this.handleChangeValue}
                  onBlur={this.handleValidation}
                />

                {emailValid && (
                  <span className="shopping-form__invalid shopping-form__invalid--basic-three">
                    {emailValid}
                  </span>
                )}
              </div>

              <fieldset className="shopping-form__fieldset">
                <legend className="shopping-form__legend">address</legend>

                <div className="shopping-form__box-address ">
                  <div className="shopping-form__box-street">
                    <label
                      htmlFor="street"
                      className="shopping-form__title shopping-form__title--address"
                    >
                      street
                    </label>

                    <input
                      id="street"
                      className="shopping-form__input shopping-form__input--address"
                      name="street"
                      type="text"
                      invalid="streetErr"
                      value={street}
                      onChange={this.handleChangeValue}
                      onBlur={this.handleValidation}
                    />

                    {streetErr && (
                      <span className="shopping-form__invalid">
                        street can`t be empty
                      </span>
                    )}
                  </div>

                  <div className="shopping-form__box-number">
                    <label
                      htmlFor="houseNumber"
                      className="shopping-form__title shopping-form__title--address"
                    >
                      number
                    </label>
                    <input
                      id="houseNumber"
                      className="shopping-form__input shopping-form__input--address"
                      name="houseNumber"
                      type="text"
                      invalid="houseNumberErr"
                      value={houseNumber}
                      onChange={this.handleChangeValue}
                      onBlur={this.handleValidation}
                    />

                    {houseNumberErr && (
                      <span className="shopping-form__invalid">
                        number can`t be empty
                      </span>
                    )}
                  </div>

                  <div className="shopping-form__box-city">
                    <label
                      htmlFor="city"
                      className="shopping-form__title shopping-form__title--address"
                    >
                      city
                    </label>
                    <input
                      id="city"
                      className="shopping-form__input shopping-form__input--address"
                      name="city"
                      type="text"
                      invalid="cityErr"
                      value={city}
                      onChange={this.handleChangeValue}
                      onBlur={this.handleValidation}
                    />

                    {cityErr && (
                      <span className="shopping-form__invalid">
                        city can`t be empty
                      </span>
                    )}
                  </div>

                  <div className="shopping-form__box-postcode">
                    <label
                      htmlFor="postcode"
                      className="shopping-form__title shopping-form__title--address"
                    >
                      post code
                    </label>
                    <InputMask
                      id="postcode"
                      className="shopping-form__input shopping-form__input--address"
                      mask="99-999"
                      name="postcode"
                      invalid="postcodeErr"
                      maskChar={null}
                      value={postcode}
                      onChange={this.handleChangeValue}
                      onBlur={this.handleValidation}
                    />

                    {postcodeErr && (
                      <span className="shopping-form__invalid">
                        postcode can`t be empty
                      </span>
                    )}
                  </div>
                </div>
              </fieldset>

              <input
                type="submit"
                className="shopping-form__submit"
                value="submit"
              />
            </form>
          </>
        )}

        {submitDone && (
          <NavLink to="/" className="link">
            <button className="buy-again" onClick={this.props.handleBuyAgain}>
              buy again
            </button>
          </NavLink>
        )}
      </section>
    );
  }
}

export default ShoppingForm;
