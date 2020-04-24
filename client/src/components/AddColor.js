import React from "react";
import { Formik, Form, Field } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddColor = ({ updateColors }) => {
  return (
    <div className="AddColor">
      <Formik
        initialValues={{ color: "", hex: "" }}
        onSubmit={(values, { resetForm }) => {
          const { color, hex } = values;
          const obj = {
            color,
            code: { hex },
            id: new Date().toLocaleTimeString(),
          };
          axiosWithAuth()
            .post("/api/colors", obj)
            .then((res) => {
              updateColors(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
          resetForm();
        }}
      >
        {() => (
          <Form>
            <label htmlFor="color">
              <Field type="text" name="color" id="color" placeholder="color" />
            </label>
            <label htmlFor="hex">
              <Field type="text" name="hex" id="hex" placeholder="hex" />
            </label>
            <div className="btn-add">
              <button type="submit">Add Color</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddColor;
