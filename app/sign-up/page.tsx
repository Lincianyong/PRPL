// app/signup/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName,
        },
      },
    });
    setLoading(false);
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Check your email for the confirmation link!");
    }
  };

  return (
    <div className="w-full h-full px-5">
      <div className="auth-container">
        {/* logo */}
        <div className="w-[150px] pt-10 h-auto">
          <Image src="/logos/diatect.png" height={500} width={500} alt="" />
        </div>

        {/* header */}
        <div className="text-center mt-12">
          <h1 className="font-bold text-[24px]">Daftar Akun</h1>
          <div className="text-[14px]">
            Mohon diisi berdasarkan data yang sesuai
          </div>
        </div>

        {/* Input fields */}
        <div onSubmit={handleSignUp} className="flex-col space-y-4 mt-10">
          <div className="space-y-2">
            <p className="">
              <strong>Nama Lengkap</strong>
              <strong className="text-red">*</strong>
            </p>
            <div className="border-[1px] border-light_grey p-2 rounded-lg">
              <input
                type="text"
                placeholder="Display Name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="font-semibold"
              />
            </div>
          </div>
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
                className="font-semibold"
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
                className="font-semibold"
              />
            </div>
          </div>
          <div className="space-y-2">
            <p className="">
              <strong>Konfirmasi Password</strong>
              <strong className="text-red">*</strong>
            </p>
            <div className="border-[1px] border-light_grey p-2 rounded-lg">
              <input
                type="password"
                placeholder="Konfirmasi Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="font-semibold"
              />
            </div>
          </div>

          {/* button */}
          <div className="pt-6">
            <div className="text-center w-full p-3 rounded-lg bg-main_blue text-white">
              <button type="submit" disabled={loading}>
                {loading ? "Loading..." : "Daftar"}
              </button>
            </div>
          </div>

          {/* forget passowrd */}
          <p className="font-normal text-center">
            <strong>Belum pernah terdaftar</strong>{"  "}<strong className="text-main_blue">Daftar sekarang!</strong>
          </p>
        </div>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default SignUpPage;
