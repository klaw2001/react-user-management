import React from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col md={5}>
              <Card className="m-4 p-4">
                <h3>Add User</h3>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    contact: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                      errors.name = "Name is Required";
                    }

                    if (!values.email) {
                      errors.email = "Email is Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    if (!values.password) {
                      errors.password = "Password is Required";
                    }
                    if (!values.contact) {
                      errors.contact = "Contact is Required";
                    }

                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      // alert(JSON.stringify(values, null, 2));
                      axios
                        .post(
                          "https://64c22b43fa35860baea14921.mockapi.io/records/records",
                          values
                        )
                        .then((res) => {
                          if (res.status == 201) {
                            navigate("/user-list");
                          }
                        })
                        .catch((err) => console.log(err));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="name"
                        placeholder="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control mt-2"
                        value={values.name}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control mt-2"
                        value={values.email}
                      />
                      {errors.email && touched.email && errors.email}
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control mt-2"
                        value={values.password}
                      />
                      <input
                        type="number"
                        name="contact"
                        placeholder="contact"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control mt-2"
                        value={values.contact}
                      />
                      {errors.password && touched.password && errors.password}
                      <button
                        type="submit"
                        className="btn btn-primary mt-2"
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </form>
                  )}
                </Formik>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AddUser;
