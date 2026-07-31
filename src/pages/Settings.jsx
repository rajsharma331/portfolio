import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Settings() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const updateAccount = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const res = await API.put("/auth/update", {
        email,
        currentPassword,
        newPassword,
      });


      alert(res.data.message);


      setEmail("");
      setCurrentPassword("");
      setNewPassword("");


    } catch (err) {

      alert(
        err.response?.data?.message || "Update failed"
      );

    } finally {

      setLoading(false);

    }

  };


  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">

      <form
        onSubmit={updateAccount}
        className="bg-slate-800 p-8 rounded-xl w-96"
      >

        <h1 className="text-3xl font-bold mb-6">
          ⚙️ Account Settings
        </h1>


        <input
          type="email"
          placeholder="New Email"
          className="w-full p-3 mb-4 bg-slate-700 rounded"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />


        <input
          type="password"
          placeholder="Current Password"
          className="w-full p-3 mb-4 bg-slate-700 rounded"
          value={currentPassword}
          onChange={(e)=>setCurrentPassword(e.target.value)}
          required
        />


        <input
          type="password"
          placeholder="New Password"
          className="w-full p-3 mb-6 bg-slate-700 rounded"
          value={newPassword}
          onChange={(e)=>setNewPassword(e.target.value)}
        />


        <button
          disabled={loading}
          className="w-full bg-cyan-500 hover:bg-cyan-600 p-3 rounded font-bold"
        >
          {loading ? "Updating..." : "Update Account"}
        </button>


        <button
          type="button"
          onClick={()=>navigate("/dashboard")}
          className="w-full mt-4 bg-slate-700 hover:bg-slate-600 p-3 rounded font-bold"
        >
          Back
        </button>


      </form>

    </div>
  );
}