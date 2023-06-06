import { Box, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import PieChart2 from './PieChart2'

const ExpenseChart = ({data}) => {
  
  const [state,setState] = useState({
    labels: data?.map((el)=>el.category),
    datasets: [
        {
            label: 'Rupees',
            data: data?.map((el)=>el.amount),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 1
        }
    ]
})


  return (
    <Box w={'30%'}>
       <Heading> EXPENSE CHART</Heading>
         <PieChart2 chartData={state} />
        
    </Box>
  )
}

export default ExpenseChart