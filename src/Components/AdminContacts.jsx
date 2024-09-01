import React, { useEffect, useState } from "react";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "https://islamia-school-backend.vercel.app/api/contacts"
        );
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  const handleView = (contact) => {
    setSelectedContact(contact);
  };

  const handleClose = () => {
    setSelectedContact(null);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(
        `https://islamia-school-backend.vercel.app/api/contacts/${id}`,
        {
          method: "DELETE",
        }
      );
      setContacts(contacts.filter((contact) => contact._id !== id));
      setSelectedContact(null);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Submissions</h2>
      <table className="w-full bg-white border border-gray-200 rounded-md shadow-md">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Subject</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id} className="border-b">
              <td className="p-3">{contact.name}</td>
              <td className="p-3">{contact.email}</td>
              <td className="p-3">{contact.subject}</td>
              <td className="p-3">
                <button
                  onClick={() => handleView(contact)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedContact && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md max-w-lg mx-auto">
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            <p>
              <strong>Name:</strong> {selectedContact.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedContact.email}
            </p>
            <p>
              <strong>Subject:</strong> {selectedContact.subject}
            </p>
            <p>
              <strong>Message:</strong> {selectedContact.message}
            </p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleDelete(selectedContact._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
              <button
                onClick={handleClose}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminContacts;
