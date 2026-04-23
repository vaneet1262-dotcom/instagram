import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Forgot = () => {
   const [email, setEmail] = useState("");

   const [loading, setLoading] = useState(false);
   

   const handleForgot = async(e) => {
      e.preventDefault();
      setLoading(true)

   try {
      

      if (!email) {
         throw new Error("Please fill email");
      
      }



          const res = await axios.post("http://127.0.0.1:5000/auth/forgot",{
            email
           })
           toast.success(res.data.message)
           
    

   } catch (error) {
         console.log(error)
         toast.error(error?.response?.data?.message || error.message);
}
finally {
   setEmail("")
   setLoading(false)
   
}
   


      
}


   return (
      <>
        <div className="container">
                     <h5 className="hd">Log into Instagram</h5>

                     <form onSubmit={handleForgot}>
                        <input
                           className="form-control ipt"
                           type="text"
                           placeholder="email address"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />

                     

                        <div>
                         
                           <button type="submit" disabled={loading} className="btn btn-primary w-100">
                             {loading ? "Submitting" : "Forgot Password?"} 
                           </button>
                        </div>

                        <div>
                           <Link to={"/"}>
                              Log in 
                           </Link>
                         
                        </div>
                     </form>
                  </div>
      </>
   );
};

export default Forgot;