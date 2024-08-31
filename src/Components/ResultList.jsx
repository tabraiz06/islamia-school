// src/components/ResultList.js
import React, { useState } from "react";
import ResultModal from "./ResultModal";
import { contexApi } from "./Context/ContexApi";
import Loader from "./Loader";


const ResultList = () => {
  const [selectedResult, setSelectedResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
const { results, handleEditClick, deleteResult, loader } = contexApi();
console.log(loader)

  const handleViewClick = (result) => {
    setSelectedResult(result);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedResult(null);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Results</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-gray-200 text-left text-gray-800 text-sm uppercase font-bold">
                Roll Number
              </th>
              <th className="py-3 px-6 bg-gray-200 text-left text-gray-800 text-sm uppercase font-bold">
                Student Name
              </th>
              <th className="py-3 px-6 bg-gray-200 text-left text-gray-800 text-sm uppercase font-bold">
                Class
              </th>
              <th className="py-3 px-6 bg-gray-200 text-left text-gray-800 text-sm uppercase font-bold">
                Result
              </th>
              <th className="py-3 px-6 bg-gray-200 text-left text-gray-800 text-sm uppercase font-bold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {loader? <Loader/>:
            results.map((result) => (
              <tr key={result._id} className="border-b">
                <td className="py-4 px-6 text-gray-700">
                  {result.studentRollNumber}
                </td>
                <td className="py-4 px-6 text-gray-700">
                  {result.studentName}
                </td>
                <td className="py-4 px-6 text-gray-700">{result.className}</td>
                <td className="py-4 px-6 text-gray-700">{result.result}</td>
                <td className="py-4 px-6 text-gray-700">
                  <button
                    onClick={() => handleViewClick(result)}
                    className="mr-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleEditClick(result)}
                    className="mr-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteResult(result._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Viewing Result */}
      {isModalOpen && (
        <ResultModal
          result={selectedResult}
          onClose={closeModal}
          onDelete={deleteResult}
          onEdit={handleEditClick}
        />
      )}
    </div>
  );
};

export default ResultList;
