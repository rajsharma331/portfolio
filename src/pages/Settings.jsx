import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Settings() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

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
      alert(err.response?.data?.message || "Update failed");
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
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative mb-4">
          <input
            type={showCurrentPassword ? "text" : "password"}
            placeholder="Current Password"
            className="w-full p-3 bg-slate-700 rounded pr-12"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />

          <button
            type="button"
            onClick={() =>
              setShowCurrentPassword(!showCurrentPassword)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
          >
            {showCurrentPassword ? (
              <FaEyeSlash />
            ) : (
              <FaEye />
            )}
          </button>
        </div>

        <div className="relative mb-6">
          <input
            type={showNewPassword ? "text" : "password"}
            placeholder="New Password"
            className="w-full p-3 bg-slate-700 rounded pr-12"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() =>
              setShowNewPassword(!showNewPassword)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
          >
            {showNewPassword ? (
              <FaEyeSlash />
            ) : (
              <FaEye />
            )}
          </button>
        </div>

        <button
          disabled={loading}
          className="w-full bg-cyan-500 hover:bg-cyan-600 p-3 rounded font-bold transition"
        >
          {loading ? "Updating..." : "Update Account"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="w-full mt-4 bg-slate-700 hover:bg-slate-600 p-3 rounded font-bold transition"
        >
          Back to Dashboard
        </button>
      </form>
    </div>
  );
}