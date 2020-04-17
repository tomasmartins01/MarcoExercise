import React from "react";

import Header from "../Components/Header";
import Form from "../Components/Form";

import "../Styles/form.less";

const Contact = () => {
  return (
    <>
    <Header title="Contact" />
    <div className="form-container">
    <Form />
    </div>
    </>
  );
};

export default Contact;