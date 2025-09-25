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
    </div>
  );
};

export default Issues;
