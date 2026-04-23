import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import toast from "react-hot-toast";

const Login = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const [loading, setLoading] = useState(false);
   

   const handleLogin = async(e) => {
        e.preventDefault();
          setLoading(true)
    
        
    
    try {


          if (username =="") {
            throw new Error("Please fill username");
         
           
          }
    
          if (!password) {
              throw new Error("Please fill password");
            
          }
    
          if (password.length < 8) {
              throw new Error("Password must be at least 8 characters");
      
          }
    

          const res = await axios.post("http://127.0.0.1:5000/auth/login",{
            name,email:username,password
           })
    
           toast.success(res.data.message)
        
    } catch (error) {
         console.log(error)
         toast.error(error?.response?.data?.message || error.message);
}
finally {
   setUsername("")
   setPassword("")
   setLoading(false)
}

    


    }


   return (
      <>
        <div className="container">
                     <h5 className="hd">Log into Instagram</h5>

                     <form onSubmit={handleLogin}>
                        <input
                           className="form-control ipt"
                           type="text"
                           placeholder="Mobile Number, username or email"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                        />

                        <input
                           type="password"
                           placeholder="Password"
                           className="form-control ipt"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                        />

                        <div>
                           <button type="submit" disabled={loading} className="w-100 bt">
                              {loading? "Logining" : "Log in"}
                           </button>
                           <Link  className="w-100 bt1" to={"/auth/forgot"}>
                              Forgot Password?
                           </Link>
                        </div>

                        <div>
                           <button type="button" className="w-100 bt2">
                              Log in with Facebook
                           </button>
                           <Link to={"/auth/register"}  className="btn btn-primary w-100 p-2">
                              Create New Account
                           </Link>
                        </div>
                     </form>
                  </div>
      </>
   );
};

export default Login;
