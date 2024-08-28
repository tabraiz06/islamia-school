import React, { useState } from "react";
import ShowResult from "./ShowResult";
import { contexApi } from "../Context/ContexApi";
import AddResult from "./AddResult";

const AdminPannel = () => {
  const { singleClassResult, search, setSearch } = contexApi();

  const [showResult, setShowResult] = useState(false);

  const handleClick = async () => {
    singleClassResult(search);
    setShowResult(true);
  };

  return (
    <div>
      <div>
        <h1>add new student result</h1>
        <AddResult />
      </div>
      <h1>find by class name</h1>
      <input
        type="text"
        placeholder="ex-one two three"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleClick}>search</button>
      {showResult && <ShowResult />}
    </div>
  );
};

export default AdminPannel;
