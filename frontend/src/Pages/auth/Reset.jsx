import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Reset = () => {
   const [password, setPassword] = useState("");
   const [cpassword, setCPassword] = useState("");

   const [loading, setLoading] = useState(false);

   const token = window.location.pathname.split("/auth/reset/")[1]
   

   const handleForgot = async(e) => {
      e.preventDefault();
      setLoading(true)

   try {
      

      if (!password) {
         throw new Error("Please fill password");
      
      }
        if (!cpassword) {
         throw new Error("Please fill cpassword");
      
      }

         if (password !== cpassword) {
         throw new Error("confirm password not match");
      
      }



          const res = await axios.post("http://127.0.0.1:5000/auth/reset",{
            password,
            token
           })
           toast.success(res.data.message)
           window.location.href="/"
           
    

   } catch (error) {
         console.log(error)
         toast.error(error?.response?.data?.message || error.message);
}
finally {
   setPassword("")
    setCPassword("")
   setLoading(false)
   
}
   


      
}


   return (
      <>
        <div className="container">
                     <h5 className="hd">Reset into Instagram</h5>

                     <form onSubmit={handleForgot}>
                        <input
                           className="form-control ipt"
                           type="password"
                           placeholder="Password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                        />

 <input
                           className="form-control ipt"
                           type="password"
                           placeholder="Confirm Password"
                           value={cpassword}
                           onChange={(e) => setCPassword(e.target.value)}
                        />

                     

                        <div>
                         
                           <button type="submit" disabled={loading} className="btn btn-primary w-100">
                             {loading ? "Submitting" : "Reset Password?"} 
                           </button>
                        </div>

                       
                     </form>
                  </div>
      </>
   );
};

export default Reset;