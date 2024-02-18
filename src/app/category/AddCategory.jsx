import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useStore from "@/zustandstore/store";

const AddCategory = () => {
  const { clicked, setIsClicked } = useStore();

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(!clicked);
  };
  const status = [
    {
      value: "Active",
      label: "Active",
    },
    {
      value: "Inactive",
      label: "Inactive",
    },
  ];

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
        <div className="bg-white rounded-md">
          <div className="mt-4 flex justify-start">
            <Button
              style={{ color: "black" }}
              className="ml-2"
              onClick={handleClick}
            >
              <ArrowBackIcon />
            </Button>
            <div className="ml-4 font-bold">Add Category</div>
          </div>
          <div className="mt-6 mx-6 flex justify-between">
            <div className="w-[380px]">
              <TextField
                required
                fullWidth
                focused
                id="outlined-required"
                label="Description"
                //   defaultValue="Hello World"
              />
            </div>
            <div className="w-[380px]">
              <TextField
                required
                fullWidth
                focused
                id="outlined-required"
                label="Category Name"
                //   defaultValue="Hello World"
              />
            </div>
            <div className="w-[380px]">
              <TextField select label="Select" fullWidth focused>
                {status.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 40,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Button
            style={{
              backgroundColor: "white",
              text: "black",
              borderRadius: 20,
              width: 200,
            }}
            className="text-black font-medium mr-3"
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            style={{ backgroundColor: "#662681", borderRadius: 20, width: 200 }}
            variant="contained"
          >
            Save
          </Button>
        </div>
      </Paper>
    </Box>
  );
};

export default AddCategory;
