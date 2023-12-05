import React from "react";
import { axiosRequest } from "../config/axios";
import { useNavigate } from "react-router-dom";

export default function EmployeeRow({
  firstName,
  lastName,
  emailId,
  id,
  handleDelete,
}) {
  const navigate = useNavigate();
  const editEmployee = (id) => {
    navigate(`/edit-employee/${id}`);
  };
  return (
    <tr>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{emailId}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          href="#"
          className="text-indigo-600 hover:text-indigo-800 px-4 "
          onClick={() => editEmployee(id)}
        >
          Edit
        </a>
        <a
          href="#"
          className="text-red-600 hover:text-red-800 px-4 "
          onClick={() => handleDelete(id)}
        >
          Delete
        </a>
      </td>
    </tr>
  );
}
