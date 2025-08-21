"use client";

import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const error = searchParams.get("error"); // from middleware
  const callbackUrl = searchParams.get("callbackUrl") || "/products"; // fallback to home

  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
      const timer = setTimeout(() => setShowAlert(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // ✅ Trigger Google sign in
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const res = await signIn("google", { callbackUrl, redirect: false });
      if (res?.ok) {
        setSuccess(true);
        setTimeout(() => {
          router.push(callbackUrl);
        }, 2000); // wait 2s before redirect
      } else {
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      {/* Alert (Not logged in) */}
      {showAlert && (
        <div className="alert alert-error shadow-lg mb-4 w-96 animate-bounce">
          <span>You must be logged in to access that page!</span>
        </div>
      )}

      {/* Success message */}
      {success && (
        <div className="alert alert-success shadow-lg mb-4 w-96">
          <span>Login successful! Redirecting...</span>
        </div>
      )}

      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center text-white">Login</h2>

          {/* Loading Spinner */}
          {loading ? (
            <button className="btn btn-primary mt-4">Signing in...</button>
          ) : (
            <button
              onClick={handleGoogleLogin}
              className="btn btn-primary mt-4">
              Sign in with Google
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
