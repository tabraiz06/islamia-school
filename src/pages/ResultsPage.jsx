// src/pages/ResultsPage.js
import React, { useState } from "react";
import SearchForm from "../Components/SearchForm";
import Results from "../Components/Results";
import { contexApi } from "../Components/Context/ContexApi";
import Loader from "../Components/Loader";

const ResultsPage = () => {
  const [searchResults, setSearchResults] = useState(null);
  const { setLoader, loader } = contexApi();

  const handleSearch = async (searchCriteria) => {
    try {
      const response = await fetch(
        "https://islamia-school-backend.vercel.app/one/singleresult",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(searchCriteria),
        }
      );
      setLoader(true);
      const data = await response.json();
      if (response.ok) {
        setSearchResults(data);
        setLoader(false);
      }
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-9">
      <SearchForm onSearch={handleSearch} />
      {loader ? <Loader /> : <Results data={searchResults} />}
    </div>
  );
};

export default ResultsPage;
