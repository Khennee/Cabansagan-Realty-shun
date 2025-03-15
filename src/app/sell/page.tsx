"use client";
import React from "react";
import Header from "@/components/frontend/Header";

const SellPage = () => {
  return (
    <div
      className="flex flex-col min-h-screen w-full bg-cover bg-center bg-repeat"
      style={{ backgroundImage: "url('/sell.jpg')" }}
    >
      <Header />
    </div>
  );
};

export default SellPage;
