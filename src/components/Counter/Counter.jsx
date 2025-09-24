import React from "react";

const Counter = () => {
  return (
    <div className="mt-10 flex flex-col md:flex-row gap-5 px-4 md:px-10">
      {/* Pending */}
      <div className="flex-1 card w-full md:w-96 bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Pending</h3>
        <span className="bg-yellow-200 text-yellow-800 text-xl font-bold px-4 py-2 rounded-full">
          3
        </span>
      </div>

      {/* Submitted */}
      <div className="flex-1 card w-full md:w-96 bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Submitted</h3>
        <span className="bg-blue-200 text-blue-800 text-xl font-bold px-4 py-2 rounded-full">
          1
        </span>
      </div>

      {/* Reviewed */}
      <div className="flex-1 card w-full md:w-96 bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Reviewed</h3>
        <span className="bg-green-200 text-green-800 text-xl font-bold px-4 py-2 rounded-full">
          1
        </span>
      </div>
    </div>
  );
};

export default Counter;
