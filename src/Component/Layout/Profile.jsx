import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  useEffect(() => {
    fetch("https://42scszck-8000.inc1.devtunnels.ms/account/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch profile");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setFormData({
          first_name: data.first_name || "",
          last_name: data.last_name || "",
          username: data.username || "",
          email: data.email || "",
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!formData.first_name.trim()) {
      setError("First name is required.");
      return;
    }
    if (!formData.last_name.trim()) {
      setError("Last name is required.");
      return;
    }
    if (!formData.username.trim()) {
      setError("Username is required.");
      return;
    }
    if (!formData.email.trim()) {
      setError("Please enter a valid email address.");
      return;
    }

    setSaving(true);

    try {
      const res = await fetch("https://42scszck-8000.inc1.devtunnels.ms/account/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(
          errData.detail || "Failed to update profile. Try again."
        );
      }

      const updatedUser = await res.json();
      setUser(updatedUser);
      setSuccessMsg("Profile updated successfully!");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return (
      <p className="text-center text-[#0B1F3A] mt-10">Loading profile...</p>
    );

  return (
    <div className="max-w-md mx-auto mt-10 bg-white text-[#0B1F3A] p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-[#0B1F3A]">My Profile</h2>

      {error && (
        <div className="mb-4 bg-red-100 text-red-700 p-3 rounded font-medium">
          {error}
        </div>
      )}
      {successMsg && (
        <div className="mb-4 bg-green-100 text-green-700 p-3 rounded font-medium">
          {successMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <label className="block mb-2 font-semibold" htmlFor="first_name">
          First Name
        </label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          value={formData.first_name}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded border border-gray-300 bg-white text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
          required
        />

        <label className="block mb-2 font-semibold" htmlFor="last_name">
          Last Name
        </label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          value={formData.last_name}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded border border-gray-300 bg-white text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
          required
        />

        <label className="block mb-2 font-semibold" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded border border-gray-300 bg-white text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
          required
        />

        <label className="block mb-2 font-semibold" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-6 p-2 rounded border border-gray-300 bg-white text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
          required
        />

        <button
          type="submit"
          disabled={saving}
          className={`w-full py-3 rounded bg-[#0B1F3A] text-white font-bold hover:bg-[#132E51] transition ${
            saving ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {saving ? "Saving..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default Profile;