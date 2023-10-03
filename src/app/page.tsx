"use client";
import App from "@/components/App";
import NavBar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <NavBar />
      <App />
    </main>
  );
}
