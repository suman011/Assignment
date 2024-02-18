"use client";
import React, { useEffect } from "react";
import TableComponent from "./TableComponent";
import useStore from "@/zustandstore/store";
import AddProduct from "./AddProduct";

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
            {clicked ? <AddProduct /> : <TableComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
