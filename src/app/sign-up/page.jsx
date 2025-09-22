"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/login"
        redirectUrl="/dashboard" // <-- redirect here after signup
      />
    </div>
  );
}
