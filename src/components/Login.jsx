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
  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux"; 
import { loginFun } from "../redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";
  
  const init = {
   
    email: "",
    password: "",
  };
  
const Login = () => {
    const [userData, setUserData] = useState(init);

    const dispatch = useDispatch()

    const navigate = useNavigate()
    
    const {users} = useSelector(store=> store.AuthReducer)
    
   

    useEffect(() => {
      dispatch(loginFun())
    }, [])

    const handleLogin = (e) => {
      e.preventDefault();
       console.log(users);
      if(userData.email === '' || userData.password === '') {
        alert('Please fill details')
      } else {
        let filtered = users.filter((e)=> e.email === userData.email && e.password === userData.password ) 
console.log(filtered[0].id)
        if(filtered.length>0) {
            alert('Login Succesfull')
            localStorage.setItem('userId',JSON.stringify(+filtered[0].id))
            navigate('/dashboard')
        } else {
            alert('Wrong Credentials')

        }

      }
      
    };
  
    return (
      <Stack w={"50%"} m={"auto"} mt={"100px"}>
        <Heading size={"xl"}>Login Page</Heading>
        <form onSubmit={handleLogin}>
           
  
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
  
          <Button mt={4} colorScheme="teal" onSubmit={handleLogin} type="submit">
            Login
          </Button>
        </form>
      </Stack>
    );
  };
export default Login