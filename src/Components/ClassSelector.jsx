// src/components/ClassSelector.js
import React from "react";
import { contexApi } from "./Context/ContexApi";

const ClassSelector = () => {
  const array = [
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
  const Session = ["1ST TERMINAL", "2ND TERMINAL", "FINAL"];
  const {
    setSelectedClass,
    selectedClass,
    selectedSession,
    setSelectedSession,
  } = contexApi();

  const handleClassChange = (classNumber) => {
    setSelectedClass(classNumber);
  };
  return (
    <div className="mb-6">
      <label htmlFor="classSelector" className="block text-gray-700 mb-2">
        Select Class:
      </label>
      <select
        id="classSelector"
        value={selectedClass}
        onChange={(e) => handleClassChange(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        {array.map((i) => (
          <option key={i + 1} value={i}>
            Class {i}
          </option>
        ))}
      </select>
      <label htmlFor="classSelector" className="block text-gray-700 mb-2">
        Select Session:
      </label>
      <select
        id="classSelector"
        value={selectedSession}
        onChange={(e) => setSelectedSession(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        {Session.map((i) => (
          <option key={i + 1} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ClassSelector;
