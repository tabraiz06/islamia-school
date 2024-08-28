// src/pages/AdminPage.js
import React, { useState, useEffect } from "react";
import ClassSelector from "../Components/ClassSelector";
import ResultForm from "../Components/ResultForm";
import ResultList from "../Components/ResultList";
import { contexApi } from "../Components/Context/ContexApi";
import { Link } from "react-router-dom";

const AdminPage = () => {
  // const [selectedClass, setSelectedClass] = useState("1");
  // const [editingResult, setEditingResult] = useState(null);

  const {
    singleClassResult,
    editingResult,
    setEditingResult,
    selectedClass,
    setSelectedClass,
    selectedSession,
  } = contexApi();

  useEffect(() => {
    singleClassResult(selectedClass, selectedSession);
  }, [selectedClass, selectedSession]);

 

  
  

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Link to="/admission/forms">View Admission froms</Link>
          </button>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Link to="/contacts">View Contact Us</Link>
          </button>
        </div>

        {/* Class Selector */}
        <ClassSelector />

        {/* Result Form */}
        <ResultForm />

        {/* Result List */}
        <ResultList />
      </div>
    </div>
  );
};

export default AdminPage;
