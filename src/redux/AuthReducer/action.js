import axios from "axios"
import { baseUrl } from "../../baseUrl"
import { add_data_req_success, login_req_success, req_success, signup_req_success } from "./actionType"



export const signupFun = (ob) => async(dispatch) => {

   try {
       let res = await axios.post(`${baseUrl}/users`,ob)
        alert('Signup Successfully')
       dispatch({type:signup_req_success, payload: res.data})
    
   } catch (error) {
    alert(error)
   }
}




export const loginFun = () => async(dispatch) => {

   try {
       let res = await axios.get(`${baseUrl}/users`) 
       dispatch({type:login_req_success, payload: res.data})
    
   } catch (error) {
    alert(error)
   }
}



export const singleData = async() => {

    let id = JSON.parse(localStorage.getItem('userId'))
    try {
        let res = await axios.get(`${baseUrl}/users/${id}`)
        return  res.data
         
    }catch (error) {
     alert(error)
    }
}



export const addTrackerData = (ob) => async(dispatch) => {
    let singleDataVal = await singleData()
    console.log('singleDataVal',singleDataVal);
let id = JSON.parse(localStorage.getItem('userId'))
 
singleDataVal.data.push(ob);

console.log('localid', id);
console.log('localob', ob);
    try {
        let res = await axios.patch(`${baseUrl}/users/${id}`,singleDataVal)
         alert('Data Added Successfully')
        dispatch({type:add_data_req_success, payload: res.data})
     
    } catch (error) {
     alert(error)
    }
 }
 