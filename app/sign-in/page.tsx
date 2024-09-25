// app/signin/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (error) {
      setMessage(error.message);
    } else {
      router.push("/dashboard"); // Redirect to dashboard after successful sign-in
    }
  };

  return (
    <div className="auth-container w-full h-full px-5">
      {/* logo */}
      <div className="w-[150px] pt-10 h-auto">
        <Image src="/logos/diatect.png" height={500} width={500} alt="" />
      </div>

      {/* header */}
      <p className="text-center mt-12">
        <h1 className="font-bold text-[24px]">Masuk Akun</h1>
        <p className="text-[14px]">Mohon diisi berdasarkan data yang sesuai</p>
      </p>

      <form onSubmit={handleSignIn}>
        <div className="flex-col space-y-4 mt-10">
          <div className="space-y-2">
            <p className="">
              <strong>Email</strong>
              <strong className="text-red">*</strong>
            </p>
            <div className="border-[1px] border-light_grey p-2 rounded-lg">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="font-semibold w-full"
              />
            </div>
          </div>
          <div className="space-y-2">
            <p className="">
              <strong>Password</strong>
              <strong className="text-red">*</strong>
            </p>
            <div className="border-[1px] border-light_grey p-2 rounded-lg">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="font-semibold w-full"
              />
            </div>
            <div className="text-right pt-2 text-main_blue">Lupa Password</div>
          </div>
        </div>
        <div className="bg-main_blue text-center p-4 rounded-lg text-white font-semibold mt-10">
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Sign In"}
          </button>
        </div>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default SignInPage;
