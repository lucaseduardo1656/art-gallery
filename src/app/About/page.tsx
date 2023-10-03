"use client";
import AboutPage from "@/components/AboutPage";
import NavBar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex h-full flex-col items-center justify-between">
      <NavBar />
      <AboutPage />
    </main>
  );
}
