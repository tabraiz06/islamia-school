import { createContext, useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

const Context = createContext();
const ContextProvider = ({ children }) => {
  const [selectedClass, setSelectedClass] = useState("1");
  const [selectedSession, setSelectedSession] = useState("1ST TERMINAL");
  const [token, setToken] = useState(null);
  const [loader, setLoader] = useState(false);

  const [editingResult, setEditingResult] = useState(null);
  const [results, setResults] = useState([]);
  // const [sinleclassResult, setSinleclassResult] = useState([]);
  const [search, setSearch] = useState("");
  // add  new result or update any result
  const handleAddOrUpdateResult = async (result) => {
    if (editingResult) {
      // Update existing result
      try {
        const response = await fetch(
          `https://islamia-school-backend.vercel.app/one/result/${editingResult._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(result),
          }
        );

        if (response.ok) {
          singleClassResult(selectedClass, selectedSession); // Refresh results after update
          setEditingResult(null); // Reset editing state
        }
      } catch (error) {
        console.error("Error updating result:", error);
      }
    } else {
      // Add new result
      try {
        const response = await fetch(
          "https://islamia-school-backend.vercel.app/one/addnewresult",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(result),
          }
        );

        if (response.ok) {
          singleClassResult(selectedClass, selectedSession); // Refresh results after adding
        }
      } catch (error) {
        console.error("Error adding result:", error);
      }
    }
  };

  // FETCH ALL RESULTS
  const fecthallresults = async () => {
    const response = await fetch(
      "https://islamia-school-backend.vercel.app/one/allresults",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Token: sessionStorage.getItem("token"),
        },
      }
    );
    const result = await response.json();
    setAllStudentResult(result);
  };
  // search single class result
  const singleClassResult = async (className, examSession) => {
    const response = await fetch(
      `https://islamia-school-backend.vercel.app/one/result`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Token: sessionStorage.getItem("token"),
        },
        body: JSON.stringify({ className, examSession }),
      }
    );
    setLoader(true);
    const result = await response.json();
    if (response.ok) {
      setResults(result);
      setLoader(false);
    }
  };
  // delete result
  const deleteResult = async (id) => {
    try {
      const response = await fetch(
        `https://islamia-school-backend.vercel.app/one/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        singleClassResult(selectedClass, selectedSession); // Refresh results after deletion
      }
    } catch (error) {
      console.error("Error deleting result:", error);
    }
  };
  const handleEditClick = (result) => {
    setEditingResult(result);
  };

  useEffect(() => {
    // fecthallresults();
    setToken(sessionStorage.getItem("token"));
  }, []);

  // SINGLE CLASS RESULT
  
  return (
    <Context.Provider
      value={{
        singleClassResult,
        fecthallresults,
        deleteResult,

        search,
        setSearch,
        results,
        editingResult,
        setEditingResult,
        selectedClass,
        setSelectedClass,
        handleAddOrUpdateResult,
        handleEditClick,
        selectedSession,
        setSelectedSession,
        token,
        setToken,
        loader,
        setLoader,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const contexApi = () => {
  return useContext(Context);
};
export default ContextProvider;
