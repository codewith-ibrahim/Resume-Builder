"use client";

import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn
        path="/login"
        routing="path"
        signUpUrl="/sign-up"
        redirectUrl="/dashboard" // <-- redirect here after login
      />
    </div>
  );
}
