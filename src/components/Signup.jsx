import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupFun } from "../redux/AuthReducer/action";

const init = {
  name: "",
  email: "",
  password: "",
  data: []
};

const Signup = () => {
  const [userData, setUserData] = useState(init);

  const dispatch = useDispatch()

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("eee");
    console.log(userData);
    
    dispatch(signupFun(userData));
  };

  return (
    <Stack w={"50%"} m={"auto"} mt={"100px"}>
      <Heading size={"xl"}>Signup Page</Heading>
      <form onSubmit={handleSignup}>
        <Input
          value={userData.name}
          placeholder="Full Name"
          onChange={(e) => {
            setUserData({ ...userData, name: e.target.value });
          }}
          type="username"
        />

        <Input
          value={userData.email}
          placeholder="Email"
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
          }}
          type="email"
        />

        <Input
          value={userData.password}
          placeholder="Password"
          onChange={(e) => {
            setUserData({ ...userData, password: e.target.value });
          }}
          type="password"
        />

        <Button mt={4} colorScheme="teal" onSubmit={handleSignup} type="submit">
          Submit
        </Button>
      </form>
    </Stack>
  );
};

export default Signup;
