import React, { useState } from "react";

const NewAdmin = () => {
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    userName: "",
    password: "",
    isAdmin: false,
  });
  const handleChange = (e) => {
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAdmin),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <h1>add new admin</h1>
      <form>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="userName"
          required
          placeholder="unique user name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          required
          placeholder="password"
          onChange={handleChange}
        />
        <select name="isAdmin" required onChange={handleChange}>
          <option value="select">select</option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};

export default NewAdmin;
