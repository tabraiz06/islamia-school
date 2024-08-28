import React, { useState } from "react";

const AddResult = () => {
  const initialValue = {
    subjectName: "",
    precticalMarks: "",
    theoryMarks: "",
    result: "",
  };
  const [marks, setMarks] = useState(initialValue);
  const [markAdded, setMarkAdded] = useState([]);

  const handleChange = (e) => {
    console.log(e);
    setMarks({ ...marks, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    setMarkAdded([...markAdded, marks]);
  };
  console.log(markAdded);
  return (
    <div>
      <label htmlFor="className">Class Name</label>
      <input type="text" name="className" />
      <label htmlFor="studentName">Student Name</label>
      <input type="text" name="studentName" />
      <label htmlFor="studentFatherName">Student Father Name</label>
      <input type="text" name="studentFatherName" />
      <label htmlFor="studentRollNumber">Roll Number(must be unique)</label>
      <input type="text" name="studentRollNumber" />
      <div>
        <h1>Marks</h1>
        <label htmlFor="subjectName">subject name</label>
        <input type="text" name="subjectName" onChange={handleChange} />
        <label htmlFor="precticalMark">Prectical Marks</label>
        <input type="text" name="precticalMarks" onChange={handleChange} />
        <label htmlFor="theoryMark">Theory Marks</label>
        <input type="text" name="theoryMarks" onChange={handleChange} />
        <label htmlFor="totalMarks">Total Marks</label>
        <input type="text" name="totalMarks" onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>subject name</th>
            <th>prectical marks</th>
            <th>theory marks</th>
            <th>total marks</th>
          </tr>
        </thead>
        <tbody>
          {markAdded.map((marks, index) => {
            {
              console.log(marks);
            }
            return (
              <tr key={index}>
                <td>{marks.subjectName}</td>
                <td>{marks.precticalMarks}</td>
                <td>{marks.theoryMarks}</td>
                <td>{marks.totalMarks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <label htmlFor="finalMarks">Final Marks</label>
        <input type="text" name="finalMarks" />
        <label htmlFor="totalMarks">Total Marks</label>
        <input type="text" name="totalMarks" />
        <label htmlFor="result">Result</label>
        <input type="text" name="result" />
        <button>add</button>
      </div>
    </div>
  );
};

export default AddResult;
