import React, { use, useState } from "react";
import ToggleBtns from "../ToggleBtns/ToggleBtns";
import Counter from "../Counter/Counter";
import IssueCard from "./IssueCard";

const Issues = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const initialIssues = use(fetchPromise);
  //   console.log(initialIssues);

  const [data, setData] = useState(initialIssues);

  return (
    <div>
      <Counter data={data} ></Counter>
      <ToggleBtns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></ToggleBtns>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:px-15 px-2">
        {initialIssues.map((employee) => {
          const issue = employee.issues[0]; // take the first issue only
          return <IssueCard issue={issue} employee={employee}></IssueCard>;
        })}
      </div>
    </div>
  );
};

export default Issues;
