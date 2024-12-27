"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import "../../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Min 6 chars").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = async (values: FormValues) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      alert(errorData.message || "Registration failed");
      return;
    }

    alert("Registration successful! You can now login.");
    router.push("/auth");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h1 className="text-center mb-4 display-6">Register</h1>

        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validationSchema={RegisterSchema}
          onSubmit={handleRegister}
        >
          {({ isSubmitting }) => (
            <Form className="custom-form">
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" className="form-error" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
                <ErrorMessage name="password" component="div" className="form-error" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                />
                <ErrorMessage name="confirmPassword" component="div" className="form-error" />
              </div>

              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
