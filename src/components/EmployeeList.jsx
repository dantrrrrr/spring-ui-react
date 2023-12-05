import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosRequest } from "../config/axios";
import EmployeeRow from "./EmployeeRow";

export default function EmployeeList() {
  const [empList, setEmpList] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleDelete = async (id) => {
    try {
      const res = await axiosRequest.delete(`/employees/${id}`);

      console.log(
        "🚀 ~ file: EmployeeList.jsx:13 ~ handleDelete ~ res:",
        res.data
      );
      setEmpList((prevEmpList) => prevEmpList.filter((emp) => emp.id !== id));
    } catch (error) {
      console.log(
        "🚀 ~ file: EmployeeList.jsx:19 ~ handleDelete ~ error:",
        error
      );
    }
  };
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const res = await axiosRequest.get("/employees");
        setEmpList(res.data);
      } catch (error) {
        console.log(
          "🚀 ~ file: EmployeeList.jsx:9 ~ fetchEmployees ~ error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);
  return (
    <div className="container w-full  max-w-6xl mx-auto my-6 ">
      <Link to="/add-employee" className=" h-12">
        <button className="rounded-lg text-white bg-gray-600 hover:bg-gray-800 text-md py-2 px-6 font-semibold">
          Add employee
        </button>
      </Link>
      <div className="flex border border-b shadow-lg mt-5">
        <table className="min-w-full">
          <thead className="bg-gray-50 ">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Frist Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white  ">
            {loading && <h1 className="">Loading....</h1>}
            {!loading &&
              empList &&
              empList.length > 0 &&
              empList.map((emp, index) => (
                <EmployeeRow
                  key={index}
                  {...emp}
                  setEmpList={setEmpList}
                  empList={empList}
                  handleDelete={handleDelete}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
