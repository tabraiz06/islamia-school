// src/components/ResultModal.js
import React from "react";

const ResultModal = ({ result, onClose, onEdit, onDelete }) => {
  console.log(result);
  if (!result) return null;

  return (
    <div className="fixed mt-[7rem] inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-3/4 md:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-lg h-[80vh] overflow-y-scroll">
        <h2 className="text-2xl font-bold mb-4">Student Result</h2>

        {/* Student Information Table */}
        <table className="w-full mb-6">
          <tbody>
            <tr>
              <td className="py-2 px-4 font-bold">Roll Number:</td>
              <td className="py-2 px-4">{result.studentRollNumber}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-bold">Student Name:</td>
              <td className="py-2 px-4">{result.studentName}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-bold">Father's Name:</td>
              <td className="py-2 px-4">{result.studentFatherName}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-bold">Class:</td>
              <td className="py-2 px-4">{result.className}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-bold">Sesion:</td>
              <td className="py-2 px-4">{result.examSession}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-bold">Result:</td>
              <td className="py-2 px-4">{result.result}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-bold">Final Marks:</td>
              <td className="py-2 px-4">{result.finalMarks}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-bold">Total Marks:</td>
              <td className="py-2 px-4">{result.totalMarks}</td>
            </tr>
          </tbody>
        </table>

        {/* Subjects and Marks Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 border text-left text-gray-800 text-sm uppercase font-bold">
                  Subject
                </th>
                <th className="py-2 px-4 bg-gray-200 border text-left text-gray-800 text-sm uppercase font-bold">
                  Practical Marks
                </th>
                <th className="py-2 px-4 bg-gray-200 border text-left text-gray-800 text-sm uppercase font-bold">
                  Theory Marks
                </th>
                <th className="py-2 px-4 bg-gray-200 border text-left text-gray-800 text-sm uppercase font-bold">
                  Total Marks
                </th>
              </tr>
            </thead>
            <tbody>
              {result.marks.map((mark, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border">{mark.subject}</td>
                  <td className="py-2 px-4 border">{mark.practicalMarks}</td>
                  <td className="py-2 px-4 border">{mark.theoryMarks}</td>
                  <td className="py-2 px-4 border">{mark.totalMarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={() => [onEdit(result), onClose()]}
            className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
          >
            Edit
          </button>
          <button
            onClick={() => [onDelete(result._id), onClose()]}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
