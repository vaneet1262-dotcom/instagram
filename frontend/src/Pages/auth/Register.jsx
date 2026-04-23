import { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

import toast from "react-hot-toast";

const Register = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   

   const handleRegister = async (e) => {
      e.preventDefault();
      setLoading(true)

       

try {

    if (!name) {
         throw new Error("Please fill name");
      
      }

      if (!email) {
         throw new Error("Please fill email");
         
      }

      if (!password) {
         throw new Error("Please fill password");
       
      }

      if (password.length < 8) {
         throw new Error("Password must be at least 8 characters");
      
      }
      const res = await axios.post("http://127.0.0.1:5000/auth/register",{
        name,email,password
       })


       toast.success(res.data.message)
    
} catch (error) {
     console.log(error)
    
     toast.error(error?.response?.data?.message || error.message);
}
finally {
   setName("")
   setEmail("")
   setPassword("")
   setLoading(false)
}

     

    
}


   return (
      <>
        <div className="container">
                     <h5 className="hd">Register into Instagram</h5>

                     <form onSubmit={handleRegister}>
                          <input
                           className="form-control ipt"
                           type="text"
                           placeholder="Name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                        />
                        <input
                           className="form-control ipt"
                           type="text"
                           placeholder="Email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                           type="password"
                           placeholder="Password"
                           className="form-control ipt"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                        />

                        <div>
                           <button type="submit"  disabled={loading}  className="w-100 bt">
                              {loading ? "Submitting" : "Sign Up"}
                               </button>
                          
                        </div>

                        <div>
                          
                           <Link type="button" to={"/"} className="w-100 bt3">
                              Login Account
                           </Link>
                        </div>
                     </form>
                  </div>
      </>
   );
};

export default Register;
