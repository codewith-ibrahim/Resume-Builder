"use client";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./Providers"; 

export default function ClientProviders({ children }) {
  return (
    <ClerkProvider>
      <Providers>{children}</Providers>
    </ClerkProvider>
  );
}
