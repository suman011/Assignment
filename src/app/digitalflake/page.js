import React from "react";
import HomePage from "./HomePage";

// const TableComponent = dynamic(() => import("./TableComponent"));

const MainPage = () => {
  return (
    <div>
      <div>
        <div style={{ display: "flex" }}>
          <div className="w-full">
            <HomePage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
