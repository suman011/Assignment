"use client";
import React, { useState } from "react";
import Input from "../components/Input";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import axios from "axios";
import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const defaultData = { email: "", password: " " };

const LoginFrom = () => {
  const [data, setData] = useState(defaultData);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const OnClickLogin = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      alert("Please fill all the required fields");
    }

    //call api

    try {
      const response = await axios.post("api/authentication", data);
      setData(defaultData);

      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "30vw",
          height: "75vh",
          marginTop: 10,
          marginBottom: 4,
          marginLeft: 3,
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
            <div className="pt-10 ml-4">
              <form>
                <div className="w-[473px]">
                  <TextField
                    label="Email Id"
                    name="email"
                    focused
                    fullWidth
                    value={email}
                    onChange={handleChange}
                    color="secondary"
                  />
                </div>
                <div className="w-[473px] mt-10">
                  <FormControl
                    variant="outlined"
                    focused
                    fullWidth
                    name="password"
                    value={password}
                    onChange={handleChange}
                    color="secondary"
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </div>
              </form>
            </div>
          </div>
          <div className="pt-2 flex justify-end">
            <Button className=" text-md text-[#a08cb1] mr-5">
              Forgot Password?
            </Button>
          </div>
          <div className="pt-20 flex justify-center">
            <Button className="bg-[#5c218b] w-[473px] h-[70px] text-white">
              Log In
            </Button>
          </div>
        </div>
      </Paper>
    </Box>
  );
};

export default LoginFrom;
