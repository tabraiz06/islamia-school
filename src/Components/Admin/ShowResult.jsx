import React from "react";
import { contexApi } from "../Context/ContexApi";

const ShowResult = () => {
  const { deleteResult, sinleclassResult } = contexApi();
  const deletesingleResult = async (id) => {
    console.log(id);
    deleteResult(id);
  };
  return (
    <div>
      <h1>results from show result</h1>
      {sinleclassResult.map((result, index) => {
        return (
          <div key={index}>
            <h2>Student Name : {result.studentName}</h2>;
            <h2>Student Father Name : {result.studentFatherName}</h2>
            <h2>class name : {result.className}</h2>
            <table>
              <thead>
                <tr>
                  <th>Subject Name</th>
                  <th>Prectical Marks</th>
                  <th>Theory Mark</th>
                  <th>Total Mark</th>
                </tr>
              </thead>
              <tbody>
                {result.marks.map((marks, index) => {
                  return (
                    <tr key={index}>
                      <td>{marks.subjectName}</td>
                      <td>{marks.precticalMark}</td>
                      <td>{marks.theoryMark}</td>
                      <td>{marks.totalMark}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button onClick={() => deletesingleResult(result._id)}>
              delete result{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowResult;
