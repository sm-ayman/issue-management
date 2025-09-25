import React from "react";

const ToggleBtns = ({ toggleStatus, setToggleStatus }) => {
  console.log(toggleStatus);
  return (
    <div className="flex mt-10 items-center justify-center md:justify-end md:pe-15 font-semibold">
      <button
        onClick={() => setToggleStatus("All")}
        className={`toggle-btns rounded-s-lg ${
          toggleStatus == "All" && "!bg-purple-700 text-white duration-400"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setToggleStatus("Pending")}
        className={`toggle-btns ${
          toggleStatus == "Pending" && "!bg-purple-700 text-white duration-400"
        }`}
      >
        Pending
      </button>
      <button
        onClick={() => setToggleStatus("Submitted")}
        className={`toggle-btns ${
          toggleStatus == "Submitted" &&
          "!bg-purple-700 text-white duration-400"
        }`}
      >
        Submitted
      </button>
      <button
        onClick={() => setToggleStatus("Reviewed")}
        className={`toggle-btns rounded-e-lg ${
          toggleStatus == "Reviewed" && "!bg-purple-700 text-white duration-400"
        }`}
      >
        Reviewed
      </button>
    </div>
  );
};

export default ToggleBtns;
