"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import DatasetOutlinedIcon from "@mui/icons-material/DatasetOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const LeftComponent = () => {
  const ListOfButtons = ["Home", "Category", "Products"];

  const [active, setActive] = useState("Home");

  const router = useRouter();

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name === "home") {
      setActive("Home");
      router.push("/");
    } else if (e.target.name === "category") {
      setActive("Category");
      router.push("/category");
    } else if (e.target.name === "product") {
      setActive("Products");
      router.push("/product");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          width: 350,
          height: "90vh",
          backgroundColor: "#f4f4f4",
        },
      }}
    >
      <Paper>
        <div className="ml-4 mt-4">
          <Button
            style={{ color: "black" }}
            className={`h-[59px] w-[330px]  ${
              active === "Home" ? "bg-[#fff8b7]" : "bg-[#f4f4f4]"
            } flex items-center`}
            value={active}
            name="home"
            onClick={handleChange}
          >
            <div className="mx-1 mb-1">
              <HomeIcon />
            </div>
            <div>Home</div>
            <div className="flex-grow" />{" "}
            <div className="mx-1 mb-1">
              <ArrowRightOutlinedIcon />
            </div>
          </Button>
          <Button
            style={{ color: "black" }}
            className={`mt-4 h-[59px] w-[330px]  ${
              active === "Category" ? "bg-[#fff8b7]" : "bg-[#f4f4f4]"
            } flex items-center`}
            value={active}
            name="category"
            onClick={handleChange}
          >
            <div className="mx-1 mb-1">
              <DatasetOutlinedIcon />
            </div>
            <ul>Category</ul>
            <div className="flex-grow" />{" "}
            <div className="mx-1 mb-1">
              <ArrowRightOutlinedIcon />
            </div>
          </Button>
          <Button
            style={{ color: "black" }}
            className={`mt-4 h-[59px] w-[330px]  ${
              active === "Products" ? "bg-[#fff8b7]" : "bg-[#f4f4f4]"
            } flex items-center`}
            value={active}
            name="product"
            onClick={handleChange}
          >
            <div className="mx-1 mb-1">
              <BusinessCenterIcon />
            </div>
            <ul>Products</ul>
            <div className="flex-grow" />{" "}
            <div className="mx-1 mb-1">
              <ArrowRightOutlinedIcon />
            </div>
          </Button>
        </div>
      </Paper>
    </Box>
  );
};

export default LeftComponent;
