import React from "react";

const coursesData = [
  {
    className: "Class One",
    subjects: [
      "Mathematics",
      "English",
      "Environmental Science",
      "Hindi",
      "Art & Craft",
    ],
  },
  {
    className: "Class Two",
    subjects: ["Mathematics", "English", "Science", "Hindi", "Moral Science"],
  },
  {
    className: "Class Three",
    subjects: [
      "Mathematics",
      "English",
      "Science",
      "Social Studies",
      "Computer Science",
    ],
  },
  {
    className: "Class Four",
    subjects: [
      "Mathematics",
      "English",
      "Science",
      "Social Studies",
      "General Knowledge",
    ],
  },
  {
    className: "Class Five",
    subjects: [
      "Mathematics",
      "English",
      "Science",
      "Social Studies",
      "Computer Science",
    ],
  },
  {
    className: "Class Six",
    subjects: [
      "Mathematics",
      "English",
      "Physics",
      "Chemistry",
      "Biology",
      "History",
      "Geography",
    ],
  },
  {
    className: "Class Seven",
    subjects: [
      "Mathematics",
      "English",
      "Physics",
      "Chemistry",
      "Biology",
      "History",
      "Geography",
    ],
  },
  {
    className: "Class Eight",
    subjects: [
      "Mathematics",
      "English",
      "Physics",
      "Chemistry",
      "Biology",
      "History",
      "Geography",
      "Civics",
    ],
  },
  {
    className: "Class Nine",
    subjects: [
      "Mathematics",
      "English",
      "Physics",
      "Chemistry",
      "Biology",
      "History",
      "Geography",
      "Economics",
    ],
  },
  {
    className: "Class Ten",
    subjects: [
      "Mathematics",
      "English",
      "Physics",
      "Chemistry",
      "Biology",
      "History",
      "Geography",
      "Political Science",
    ],
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{course.className}</h3>
              <ul className="list-disc list-inside">
                {course.subjects.map((subject, subIndex) => (
                  <li key={subIndex} className="text-gray-600">
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
