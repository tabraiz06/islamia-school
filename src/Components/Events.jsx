import React from "react";

const Events = () => {
  return (
    <section id="events" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example Event */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Annual Science Fair</h3>
            <p className="text-gray-600 mb-4">
              Join us for our annual science fair where students showcase their
              innovative projects.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Read More
            </a>
          </div>
          {/* Repeat for more events */}
        </div>
      </div>
    </section>
  );
};

export default Events;
