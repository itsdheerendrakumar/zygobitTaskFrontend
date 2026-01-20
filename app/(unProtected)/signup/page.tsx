"use client";

import { register } from "@/api/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Signup() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const hanldeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        setLoading(true)
        const res = await register(user);
        setUser(pre => ({ ...pre, name: "", email: "", password: "" }));
        router.push("/login");
        setLoading(false)
    } catch (error) {
        setLoading(false)
    }
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col gap-4 p-4 bg-gray-400 rounded-md" onSubmit={hanldeSubmit}>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="name">Name</label>
          <input
            placeholder="Enter name"
            className="bg-white px-4 py-2 rounded-md"
            type="text"
            value={user.name}
            onChange={(e) => setUser(pre => ({...pre, "name": e.target.value}))}
            required
          />
        </div>
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

export default Signup;
