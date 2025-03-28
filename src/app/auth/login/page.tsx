import { LoginForm } from "@/components/auth/login-form";
import Header from "@/components/frontend/Header";
import React from "react";

export default function Page() {
  return (
    <div
      className="flex flex-col min-h-screen w-full bg-cover bg-center bg-repeat"
      style={{ backgroundImage: "url('/login.jpg')" }}
    >
      <Header />
      <div className="flex flex-1 items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
