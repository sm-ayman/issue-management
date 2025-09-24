import React from "react";

const ToggleBtns = () => {
  return (
    <div className="flex  mt-10 items-center justify-end px-15 font-semibold ">
      <button className="toggle-btns rounded-s-lg ">All</button>
      <button className="toggle-btns">Pending</button>
      <button className="toggle-btns">Submitted</button>
      <button className="toggle-btns rounded-e-lg">Reviewed</button>
    </div>
  );
};

export default ToggleBtns;
