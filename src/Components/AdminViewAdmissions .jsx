// src/components/AdminViewAdmissions.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import AdmissionModal from "./AdmissionModal"; // Modal component

const AdminViewAdmissions = () => {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedAdmission, setSelectedAdmission] = useState(null); // To store the selected admission for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  useEffect(() => {
    fetchAdmissions();
  }, []);

  const fetchAdmissions = async () => {
    try {
      const response = await axios.get(
        "https://islamia-school-backend.vercel.app/api/admissions/all"
      );
      setAdmissions(response.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching admissions data");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://islamia-school-backend.vercel.app/api/admissions/delete/${id}`
      );
      setAdmissions(admissions.filter((admission) => admission._id !== id));
      alert("Admission record deleted successfully.");
    } catch (err) {
      alert("Error deleting admission record.");
    }
  };

  const handleView = (admission) => {
    setSelectedAdmission(admission);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAdmission(null);
    setIsModalOpen(false);
  };

  if (loading) return <p>Loading admissions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4 ">
      <h2 className="text-2xl font-bold mb-4">Admissions List</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Student Name</th>
            <th className="py-2 px-4 border-b">Father's Name</th>
            <th className="py-2 px-4 border-b">Class</th>
            <th className="py-2 px-4 border-b">DOB</th>
            <th className="py-2 px-4 border-b">Contact</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {admissions.map((admission) => (
            <tr key={admission._id}>
              <td className="py-2 px-4 border-b">{admission.studentName}</td>
              <td className="py-2 px-4 border-b">{admission.fatherName}</td>
              <td className="py-2 px-4 border-b">{admission.selectedClass}</td>
              <td className="py-2 px-4 border-b">{admission.dateOfBirth}</td>
              <td className="py-2 px-4 border-b">{admission.contactNumber}</td>
              <td className="py-2 px-4 border-b">{admission.email}</td>
              <td className="py-2 px-4 border-b">{admission.address}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleView(admission)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  View
                </button>
                <button
                  onClick={() => handleDelete(admission._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && selectedAdmission && (
        <AdmissionModal
          admission={selectedAdmission}
          onClose={closeModal}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default AdminViewAdmissions;
