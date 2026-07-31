import { useState } from "react";
import API from "../services/api";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const login = async (e) => {
    e.preventDefault();

    try {

      const res = await API.post("/auth/login", {
        email,
        password,
      });


      localStorage.setItem(
        "token",
        res.data.token
      );


      window.location.href = "/dashboard";


    } catch (err) {

      alert(
        err.response?.data?.message || "Login failed"
      );

    }

  };


  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">


      <form
        onSubmit={login}
        className="bg-slate-800 p-8 rounded-xl w-96"
      >

        <h1 className="text-3xl font-bold mb-6">
          Admin Login
        </h1>


        <input
          className="w-full p-3 mb-4 bg-slate-700 rounded"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />


        <input
          className="w-full p-3 mb-6 bg-slate-700 rounded"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />


        <button
          className="w-full bg-cyan-500 p-3 rounded font-bold"
        >
          Login
        </button>


      </form>


    </div>

  );
}