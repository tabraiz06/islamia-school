// src/components/Results.js
import React from "react";

const Results = ({ data }) => {
  console.log(data);
  if (!data || data.message === "invalid data") {
    return null; // Return nothing if there's no data
  }

  return (
    <section id="results" className="py-10 bg-gray-50 mt-4">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Search Results
        </h2>

        <div className="bg-white shadow-md rounded-lg p-10 mb-6">
          <h3 className="text-xl font-bold text-gray-800">Student Details</h3>
          <p className="text-gray-700">
            <strong>Name:</strong> {data.studentName}
          </p>
          <p className="text-gray-700">
            <strong>Father's Name:</strong> {data.studentFatherName}
          </p>
          <p className="text-gray-700">
            <strong>Roll Number:</strong> {data.studentRollNumber}
          </p>
          <p className="text-gray-700">
            <strong>Class:</strong> {data.className}
          </p>
          <p className="text-gray-700">
            <strong>Session:</strong> {data.examSession}
          </p>
          <p className="text-gray-700">
            <strong>Result:</strong> {data.result}
          </p>
          <p className="text-gray-700">
            <strong>Final Marks:</strong> {data.finalMarks} / {data.totalMarks}
          </p>
        </div>

        {/* Display detailed marks */}
        <div className="overflow-x-auto text-center">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-gray-200 text-left text-gray-800 text-sm uppercase font-bold">
                  Subject
                </th>
                <th className="py-3 px-6 bg-gray-200 text-left text-gray-800 text-sm uppercase font-bold">
                  Practical Marks
                </th>
                <th className="py-3 px-6 bg-gray-200 text-left text-gray-800 text-sm uppercase font-bold">
                  Theory Marks
                </th>
                <th className="py-3 px-6 bg-gray-200 text-left text-gray-800 text-sm uppercase font-bold">
                  Total Marks
                </th>
              </tr>
            </thead>
            <tbody>
              {data.marks.map((mark, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 px-6 text-gray-700">{mark.subject}</td>
                  <td className="py-4 px-6 text-gray-700">
                    {mark.practicalMarks}
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                    {mark.theoryMarks}
                  </td>
                  <td className="py-4 px-6 text-gray-700">{mark.totalMarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Results;
