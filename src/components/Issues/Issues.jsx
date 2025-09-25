import React, { use, useState } from "react";
import ToggleBtns from "../ToggleBtns/ToggleBtns";
import Counter from "../Counter/Counter";
import IssueCard from "./IssueCard";

const Issues = ({ fetchPromise }) => {
  const initialIssues = use(fetchPromise);
  const [data, setData] = useState(initialIssues);
  const [toggleStatus, setToggleStatus] = useState("All");

  // Filter issues based on toggleStatus
  const filteredData =
    toggleStatus === "All"
      ? data
      : data.filter((issue) => issue.status === toggleStatus);

  return (
    <div>
      <Counter data={data}></Counter>
      <ToggleBtns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></ToggleBtns>
      {filteredData.length == 0 ? (
        <div className="flex flex-col items-center justify-center h-72 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 md:mx-15 mx-6 mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z"
            />
          </svg>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Nothing to Manage!
          </h2>
          <p className="text-sm text-gray-500 text-center">
            There are no issues matching your filter. Try changing the status or
            refresh.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:px-15 px-2">
          {filteredData.map((issue) => (
            <IssueCard
              key={issue.ticketId}
              issue={issue}
              data={data}
              setData={setData}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Issues;
