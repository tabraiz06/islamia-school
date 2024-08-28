// src/components/AdmissionModal.js
import React from "react";

const AdmissionModal = ({ admission, onClose, onDelete }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-1/2">
        <h3 className="text-xl font-bold mb-4">Admission Details</h3>
        <table className="min-w-full bg-white border border-gray-300 mb-4">
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b font-bold">Student Name:</td>
              <td className="py-2 px-4 border-b">{admission.studentName}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-bold">Father's Name:</td>
              <td className="py-2 px-4 border-b">{admission.fatherName}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-bold">Class:</td>
              <td className="py-2 px-4 border-b">{admission.selectedClass}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-bold">DOB:</td>
              <td className="py-2 px-4 border-b">{admission.dateOfBirth}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-bold">Contact Number:</td>
              <td className="py-2 px-4 border-b">{admission.contactNumber}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-bold">Email:</td>
              <td className="py-2 px-4 border-b">{admission.email}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-bold">Address:</td>
              <td className="py-2 px-4 border-b">{admission.address}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end">
          <button
            onClick={() => onDelete(admission._id)}
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionModal;
