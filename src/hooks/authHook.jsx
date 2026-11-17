import {useState} from 'react';
import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import {addUser,removeUser} from "../features/authSlice";

export const useAuth = () => {
   let navigate = useNavigate();
   let dispatch = useDispatch();
   const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || []);
   const [loggedInUsers,setLoggedInUsers] = useState(null);


   const handleRegister = (data) => {
    let arr = [...registeredUsers,data];
    setRegisteredUsers(arr);
    localStorage.setItem("registeredUsers",JSON.stringify(arr));
    console.log(data);
    toast.success("User Registered Successfully");
    reset();
  };

   const handleLogin = (data) => {
         const existingUser = registeredUsers.find((user) => {
             return (user.email == data.email && user.password == data.password)
         })
   
         if(!existingUser){
            toast.error("User does not Exist")
            console.log("User With this Email does not exist");
            navigate("/register");
            console.log(existingUser);
            return;
         }
   
         console.log("Login Successfully",existingUser);
         toast.success("Login Successfull")
  
         setLoggedInUsers(existingUser);

         dispatch(addUser(existingUser));
         localStorage.setItem("loggedInUser",JSON.stringify(existingUser));
         navigate("/main");
         reset();
   }

   

   const {
     register, 
     handleSubmit, 
     formState:{errors},
     reset
    } = useForm({
      mode:"onChange"
    });
   

   return {
     navigate,
     register,
     handleSubmit,
     reset,
     errors,
     handleRegister,
     handleLogin
   }
} 