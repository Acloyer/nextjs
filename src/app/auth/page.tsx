"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  if (status === "loading") {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div>
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted text-center">Authenticating, please wait...</p>
        </div>
      </div>
    );
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });
    console.log("values email: " + values.email)
    console.log("values password: " + values.password)

    if (result?.error) {
      alert("Invalid credentials");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#f5f7fa" }}
    >
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h1 className="text-center mb-4 display-6">Login</h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
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
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component="div" className="form-error" />
              </div>

              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                Login
              </button>
            </Form>
          )}
        </Formik>

        <hr className="my-4" />

        <button
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          className="btn btn-dark w-100 mb-3"
        >
          Sign in with GitHub
        </button>

        <button
          onClick={() => router.push("/auth/register")}
          className="btn btn-outline-primary w-100"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
