// src/components/ResultForm.js
import React, { useState, useEffect } from "react";
import { contexApi } from "./Context/ContexApi";

const ResultForm = ( ) => {
  const {
    handleAddOrUpdateResult,
    editingResult,
    selectedClass,
    selectedSession,
  } = contexApi();
   const className =['Nursary', "LKG", 'UKG','1','2','3','4','5','6','7','8','9','10']
const Session = ["1st Terminal", "2nd Terminal", "Final"];
  const [formData, setFormData] = useState({
    studentName: "",
    studentFatherName: "",
    studentRollNumber: "",
    className: selectedClass,
    result: "",
    finalMarks: "",
    totalMarks: "",
    examSession:selectedSession,
    marks: [],
  });

  useEffect(() => {
    if (editingResult) {
      setFormData(editingResult);
    }
  }, [editingResult]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.toUpperCase() });
  };

  const handleMarksChange = (index, field, value) => {
    const updatedMarks = formData.marks.map((mark, i) =>
      i === index ? { ...mark, [field]: value } : mark
    );
    setFormData({ ...formData, marks: updatedMarks });
  };

  const addSubject = () => {
    setFormData({
      ...formData,
      marks: [
        ...formData.marks,
        { subject: "", practicalMarks: "", theoryMarks: "", totalMarks: "" },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddOrUpdateResult(formData);
    setFormData({
      studentName: "",
      studentFatherName: "",
      studentRollNumber: "",
      className: "",
      result: "",
      finalMarks: "",
      totalMarks: "",
      examSession:"",
      marks: [],
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mb-6"
    >
      <h2 className="text-2xl font-bold mb-4">
        {editingResult ? "Edit Result" : "Add New Result"}
      </h2>

      {/* Student Details */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="studentName" className="block text-gray-700">
            Student Name
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label htmlFor="studentFatherName" className="block text-gray-700">
            Father's Name
          </label>
          <input
            type="text"
            id="studentFatherName"
            name="studentFatherName"
            value={formData.studentFatherName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label htmlFor="studentRollNumber" className="block text-gray-700">
            Roll Number
          </label>
          <input
            type="text"
            id="studentRollNumber"
            name="studentRollNumber"
            value={formData.studentRollNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label htmlFor="className" className="block text-gray-700">
            Class
          </label>
          <select
            type="text"
            id="name"
            name="className"
            
            onChange={handleInputChange}
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
        <div>
          <label htmlFor="result" className="block text-gray-700">
            Result
          </label>
          <input
            type="text"
            id="result"
            name="result"
            value={formData.result}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label htmlFor="className" className="block text-gray-700">
            Session
          </label>
          <select
            type="text"
            id="name"
            name="examSession"
            
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your name"
          >
            <option value="">Slecet Class</option>
            {Session.map((ele, i) => {
              return (
                <option value={ele} key={i}>
                  {ele}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="finalMarks" className="block text-gray-700">
            Final Marks
          </label>
          <input
            type="number"
            id="finalMarks"
            name="finalMarks"
            value={formData.finalMarks}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label htmlFor="totalMark" className="block text-gray-700">
            Total Marks
          </label>
          <input
            type="number"
            id="totalMark"
            name="totalMarks"
            value={formData.totalMarks}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      {/* Marks Details */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Subjects and Marks</h3>
        {formData.marks.map((mark, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 mb-2">
            <input
              type="text"
              placeholder="Subject"
              value={mark.subject}
              onChange={(e) =>
                handleMarksChange(
                  index,
                  "subject",
                  e.target.value.toUpperCase()
                )
              }
              className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="number"
              placeholder="Practical Marks"
              value={mark.practicalMarks}
              onChange={(e) =>
                handleMarksChange(index, "practicalMarks", e.target.value)
              }
              className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="number"
              placeholder="Theory Marks"
              value={mark.theoryMarks}
              onChange={(e) =>
                handleMarksChange(index, "theoryMarks", e.target.value)
              }
              className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="number"
              placeholder="Total Marks"
              value={
                (mark.totalMarks =
                  Number(mark.theoryMarks) + Number(mark.practicalMarks))
              }
              onChange={(e) =>
                handleMarksChange(
                  index,
                  "totalMarks",
                  Number(mark.theoryMarks) + Number(mark.practicalMarks)
                )
              }
              className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addSubject}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add Subject
        </button>
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        {editingResult ? "Update Result" : "Add Result"}
      </button>
    </form>
  );
};

export default ResultForm;
