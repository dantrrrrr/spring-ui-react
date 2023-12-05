import React, { useState } from "react";
import { axiosRequest } from "../config/axios";
import { useNavigate } from "react-router-dom";
export default function AddEmployee() {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosRequest.post("/employees", formData);
      console.log(
        "🚀 ~ file: AddEmployee.jsx:19 ~ handleSubmit ~ res:",
        res.data
      );
      navigate("/");
    } catch (error) {
      console.log(
        "🚀 ~ file: AddEmployee.jsx:19 ~ handleSubmit ~ error:",
        error
      );
    } finally {
    }
  };
  return (
    <div className="max-w-2xl flex shadow border-b mx-auto">
      <form className="p-8 " onSubmit={handleSubmit}>
        <div className="font-thin text-2xl tracking-wider">
          <h1 className="capitalize">Add new employee</h1>
        </div>
        <div className="flex flex-col  justify-center h-14 w-full my-4 ">
          <label
            className="block text-gray-600 text-sm font-normal"
            htmlFor="firstname"
          >
            First Name
          </label>
          <input
            required
            className=" px-2 py-2 h-10 w-96 border rounded-md mt-2"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col  justify-center h-14 w-full my-4 ">
          <label
            className="block text-gray-600 text-sm font-normal"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            required
            className=" px-2 py-2 h-10 w-96 border rounded-md mt-2"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col  justify-center h-14 w-full my-4 ">
          <label
            className="block text-gray-600 text-sm font-normal"
            htmlFor="emailId"
          >
            Email
          </label>
          <input
            required
            className=" px-2 py-2 h-10 w-96 border rounded-md mt-2"
            type="email"
            id="emailId"
            name="emailId"
            value={formData.emailId}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="flex gap-3">
          <button className="text-white  font-semibold rounded-lg bg-green-500 px-4 py-2 shadow-lg hover:bg-green-600">
            Save
          </button>
          <button
            type="button"
            className="text-white  font-semibold rounded-lg bg-red-500 px-4 py-2 shadow-lg hover:bg-red-600"
            onClick={(e) => {
              e.preventDefault();
              setFormData({ id: "", firstName: "", lastName: "", emailId: "" });
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
