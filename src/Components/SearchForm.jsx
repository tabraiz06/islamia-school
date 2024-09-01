// src/components/SearchForm.js
import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const Session = ["1st Terminal", "2nd Terminal", "Final"];
  const [data, setData] = useState({
    className: "",
    studentName: "",
    studentFatherName: "",
    studentRollNumber: "",
    examSession: "",
  });

  const className = [
    "Nursary",
    "LKG",
    "UKG",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value.toUpperCase() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md "
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Search Your Result
      </h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">
          class Name
        </label>
        <select
          type="text"
          id="name"
          name="className"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter your name"
        >
          <option value="">Slecet Class</option>
          {className.map((ele, i) => {
            return (
              <option value={ele} key={i}>
                {ele}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">
          Session
        </label>
        <select
          type="text"
          id="name"
          name="examSession"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter your name"
        >
          <option value="">Slecet Session</option>
          {Session.map((ele, i) => {
            return (
              <option value={ele} key={i}>
                {ele}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          value={data.studentName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="rollNumber" className="block text-gray-700">
          Roll Number
        </label>
        <input
          type="text"
          id="rollNumber"
          name="studentRollNumber"
          value={data.studentRollNumber}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter your roll number"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="fatherName" className="block text-gray-700">
          Father's Name
        </label>
        <input
          type="text"
          id="fatherName"
          name="studentFatherName"
          value={data.studentFatherName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter your father's name"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Search Result
      </button>
    </form>
  );
};

export default SearchForm;
