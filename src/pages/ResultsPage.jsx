// src/pages/ResultsPage.js
import React, { useState } from "react";
import SearchForm from "../Components/SearchForm";
import Results from "../Components/Results";


const ResultsPage = () => {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async (searchCriteria) => {
    try {
      const response = await fetch("http://localhost:8080/one/singleresult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchCriteria),
      });

      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-9">
      <SearchForm onSearch={handleSearch} />
      <Results data={searchResults} />
    </div>
  );
};

export default ResultsPage;
