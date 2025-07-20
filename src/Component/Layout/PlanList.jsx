import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const PlanList = () => {
  const [plans, setPlans] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/plans/")
      .then((res) => res.json())
      .then((data) => setPlans(data))
      .catch(() => toast.error("Failed to load plans"));
  }, []);

  const handleCreatePlan = () => {
    if (!title) {
      toast.warn("Title required");
      return;
    }

    fetch("http://127.0.0.1:8000/plans/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to create plan");
        return res.json();
      })
      .then(() => {
        toast.success("Plan created");
        setTitle("");
        return fetch("http://127.0.0.1:8000/plans/");
      })
      .then((res) => res.json())
      .then((data) => setPlans(data))
      .catch(() => toast.error("Error creating plan"));
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-[#344C3D] mb-6">Your Plans</h2>

        {/* Create Plan */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter new plan title"
            className="flex-1 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-[#BFCFBB]"
          />
          <button
            onClick={handleCreatePlan}
            className="bg-[#344C3D] hover:bg-[#2a3b2d] text-white px-4 py-2 rounded-md"
          >
            Add
          </button>
        </div>

        {/* List Plans */}
        <ul className="space-y-4">
          {plans.map((plan) => (
            <li
              key={plan.id}
              className="bg-[#BFCFBB] text-[#344C3D] px-4 py-3 rounded-md shadow-sm flex justify-between items-center"
            >
              <span className="font-medium">{plan.title}</span>
              <span className="text-sm text-gray-600">ID: {plan.id}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanList;
