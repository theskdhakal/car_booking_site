import { loginUser } from "../../helper/axios"
import toast from "react-hot-toast"

export const signInAction=async(userData)=>{
   const{status,message} =await loginUser(userData)
   toast[status](message)
}