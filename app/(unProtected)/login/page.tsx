"use client";

import { login } from "@/api/api";
import { useState } from "react";
import { useRouter } from 'next/navigation'
function Login() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const hanldeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
          setLoading(true)
          const res = await login(user);
          setUser(pre => ({ ...pre, name: "", email: "", password: "" }))
          setLoading(false);
          localStorage.setItem("authToken", res?.token)
          router.push("/dashboard")
      } catch (error) {
          setLoading(false)
      }
    }
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col gap-4 p-4 bg-gray-400 rounded-md" onSubmit={hanldeSubmit}>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Enter email"
            className="bg-white px-4 py-2 rounded-md"
            type="text"
            onChange={(e) => setUser(pre => ({...pre, "email": e.target.value}))}
            required
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="name">Pasword</label>
          <input
            placeholder="Enter password"
            className="bg-white px-4 py-2 rounded-md"
            type={"password"}
            onChange={(e) => setUser(pre => ({...pre, "password": e.target.value}))}
            required
          />
        </div>
        <button className="bg-blue-400 text-white px-4 py-2 rounded-md">
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Login;
