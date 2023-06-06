import { Button, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTrackerData } from '../redux/AuthReducer/action'

const init = {
  type: '',
  category: '',
  amount: 0,
  date:''
}

const Tracker = () => {

  const [trackerData, setTrackerData] = useState(init)
const dispatch = useDispatch()

const state = useSelector(store => store.AuthReducer)

console.log('state tracker', state);
  const handleSubmit = (e) => {
    e.preventDefault()
    // let data = {...trackerData, amount: +trackerData.amount};
    // console.log(data);
dispatch(addTrackerData(trackerData))
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <Select placeholder='Select Type' onChange={(e)=>setTrackerData({...trackerData,type:e.target.value})}>
 
  <option value='income'>Income</option>
  <option value='expense'>Expense</option>
</Select>
      { trackerData.type === 'income' && <Select placeholder='Category' onChange={(e)=>setTrackerData({...trackerData,category:e.target.value})}>
 
  <option value='salary'>Salary</option>
  <option value='gifts'>Gifts</option>
  <option value='refunds'>Refunds</option>
  <option value='other'>Other</option>
</Select>}
    { trackerData.type === 'expense' &&  <Select placeholder='Category' onChange={(e)=>setTrackerData({...trackerData,category:e.target.value})}>
 
  <option value='food'>Food & Drinks</option>
  <option value='shopping'>Shopping</option>
  <option value='housing'>Housing</option>
  <option value='bills'>Bills</option>
  <option value='vehicle'>Vehicle & Transport</option>
  <option value='lifestyle'>Lifestyle</option>
</Select>}
<Input type='number' placeholder='Amount' onChange={(e)=>setTrackerData({...trackerData,amount:+e.target.value})} />
<Input type='date' placeholder='Date' onChange={(e)=>setTrackerData({...trackerData,date:e.target.value})} />
<Button type='submit'> Create </Button>
    </form>
  )
}

export default Tracker