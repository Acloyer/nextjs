'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [status, router]);

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

  if (!session) {
    return null;
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="card shadow-lg p-4 text-center" style={{ maxWidth: "500px", width: "100%" }}>
        <h1 className="mb-4">Welcome, {session.user?.name || "User"}!</h1>
        <p>Email: {session.user?.email}</p>

        <div className="mt-4 d-flex justify-content-around">
          <button
            onClick={() => router.push("/dashboard")}
            className="btn btn-primary w-45"
          >
            Go to Dashboard
          </button>

          <button
            onClick={() => signOut()}
            className="btn btn-danger w-45"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
