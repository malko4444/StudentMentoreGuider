"use client";
import React, { useState } from "react";
import axios from "axios";

function Page() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);

  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseData(null);

    try {
      const response = await axios.post(`${baseURL}/user/mentor/login`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // to send cookies if backend uses JWT cookies
      });

      console.log("✅ Login Response:", response.data);
      setResponseData(response.data);
    } catch (error) {
      console.error("❌ Error:", error.response ? error.response.data : error.message);
      setResponseData(error.response?.data || { message: "Login failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4">
      <h1 className="text-3xl font-semibold mb-6">Mentor Login</h1>

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-black/40 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-blue-500/30"
      >
        {/* Email */}
        <label className="block mb-4">
          <span className="text-sm text-gray-300">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 mt-1 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        {/* Password */}
        <label className="block mb-6">
          <span className="text-sm text-gray-300">Password</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 mt-1 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-200 font-medium disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {responseData && (
        <div className="mt-6 w-full max-w-md bg-black/50 border border-blue-400/40 p-4 rounded-lg text-sm">
          <h2 className="font-semibold text-blue-300 mb-2">Response:</h2>
          <pre className="whitespace-pre-wrap break-words">
            {JSON.stringify(responseData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default Page;
