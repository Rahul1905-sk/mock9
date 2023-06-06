import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import IncomeChart from "./charts/IncomeChart";
import { Box, Heading, Stack } from "@chakra-ui/react";
import ExppenseChart from "./charts/ExpenseChart";
import ExpenseChart from "./charts/ExpenseChart";

const Analytics = () => {
  const [mainData, setMainData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let id = JSON.parse(localStorage.getItem("userId"));

    let res = await axios.get(`${baseUrl}/users/${id}`);
    let data = res.data.data;
    let incomeData = data.filter((e) => e.type === "income");
    let expenseData = data.filter((e) => e.type === "expense");
    setData1(incomeData);
    setData2(expenseData);
    setMainData(data);
  };

  
  return (
    <Box> 
      <Stack direction="row" m={'auto'}>
        {data1.length !== 0 ? <IncomeChart data={data1} /> : ""}
        {data2.length !== 0 ? <ExpenseChart data={data2} /> : ""}
      </Stack>
    </Box>
  );
};

export default Analytics;
