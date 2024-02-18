"use client";
import React, { useEffect } from "react";
import TableComponent from "./TableComponent";
import AddCategory from "./AddCategory";
import useStore from "@/zustandstore/store";

// const TableComponent = dynamic(() => import("./TableComponent"));

const Category = () => {
  const { clicked, setIsClicked } = useStore();
  useEffect(() => {
    setIsClicked(false);
  }, []);
  return (
    <div>
      <div>
        <div style={{ display: "flex" }}>
          <div className="w-full">
            {clicked ? <AddCategory /> : <TableComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
