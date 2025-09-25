import React, { use, useState } from "react";
import ToggleBtns from "../ToggleBtns/ToggleBtns";
import Counter from "../Counter/Counter";

const Issues = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const initialIssues = use(fetchPromise);
  console.log(initialIssues);
  return (
    <div>
      <Counter></Counter>
      <ToggleBtns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></ToggleBtns>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:px-15 px-2">
        {initialIssues.map((employee) => {
          const issue = employee.issues[0]; // take the first issue only
          return (
            <div
              key={employee.employeeId}
              className="card bg-base-100 shadow-md hover:shadow-xl transition"
            >
              <div className="card-body bg-gray-100">
                {/* Employee Header */}
                <div className="flex items-center gap-4">
                  <img
                    src={employee.employeeImg}
                    alt={employee.name}
                    className="w-14 h-14 rounded-full border"
                  />
                  <div>
                    <h2 className="card-title text-lg">{employee.name}</h2>
                    <p className="text-sm text-gray-500">{employee.role}</p>
                    <p className="text-xs text-gray-400">
                      {employee.department}
                    </p>
                  </div>
                </div>

                {/* Single Issue */}
                {issue && (
                  <div className="mt-4 border p-4 rounded-lg bg-base-200">
                    <h3 className="font-semibold text-lg">{issue.subject}</h3>
                    <p className="text-xs text-gray-500">
                      Ticket: {issue.ticketId}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span
                        className={`badge text-md font-semibold ${
                          issue.status === "Pending"
                            ? "badge-warning"
                            : issue.status === "Submitted"
                            ? "badge-info"
                            : "badge-success"
                        }`}
                      >
                        {issue.status}
                      </span>
                      <span
                        className={`badge  ${
                          issue.priority === "Critical"
                            ? "badge-error"
                            : issue.priority === "High"
                            ? "badge-warning"
                            : issue.priority === "Medium"
                            ? "badge-info"
                            : "badge-neutral"
                        }`}
                      >
                        {issue.priority}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Issues;
