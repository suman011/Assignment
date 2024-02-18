"use client";
import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useStore from "@/zustandstore/store";
import DatasetOutlinedIcon from "@mui/icons-material/DatasetOutlined";

const TableComponent = () => {
  const { clicked, setIsClicked } = useStore();

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(!clicked);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "77vw",
          height: "88vh",
        },
      }}
    >
      <Paper elevation={3}>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div class="flex mt-4 items-center  flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
            <div className="ml-4 mb-1">
              <DatasetOutlinedIcon />
            </div>
            <div className="ml-6 mt-2 font-bold">Category</div>
            <div className="relative">
              <div className="absolute ml-20 inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block ml-20 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-[500px] bg-gray-50"
              />
            </div>
            <div className="ml-auto mr-2">
              <Button
                style={{ backgroundColor: "#662681" }}
                variant="contained"
                onClick={handleClick}
              >
                Add New
              </Button>
            </div>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-black">
            <thead className="text-md h-[57px] text-black uppercase bg-[#fff8b7]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Position
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#f2f2f2] border-b">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="Jese image"
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">Neil Sims</div>
                    <div className="font-normal text-gray-500">
                      neil.sims@flowbite.com
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">React Developer</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                    Online
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit user
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Paper>
    </Box>
  );
};

export default TableComponent;
