import { Button, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Tracker from './Tracker'
import Analytics from './Analytics'
import History from './History'

const Dashboard = () => {
  const [checkVal, setCheckVal] = useState(0)
  
  return ( 
    <Stack>

    <Stack w={'fit-content'} direction={'row'} m={'auto'}>
      <Button onClick={()=> setCheckVal(0)} > Tracker</Button>
      <Button onClick={()=> setCheckVal(1)} > Analytics</Button>
      <Button onClick={()=> setCheckVal(2)} > History</Button>
    </Stack>

   { checkVal === 0 &&  <Tracker />}
   { checkVal === 1 && <Analytics />}
   { checkVal === 2 && <History />}
    
    </Stack>
  )
}

export default Dashboard