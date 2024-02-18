import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const HomePage = () => {
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
      <Paper elevation={4}>
        <div>
          <div className="mt-20">
            <h1 className="text-2xl font-extrabold text-center">
              digitalflake
            </h1>
            <p className="text-md font-medium text-center">
              Welcome to the Digtialflaske admin
            </p>
          </div>
        </div>
      </Paper>
    </Box>
  );
};

export default HomePage;
