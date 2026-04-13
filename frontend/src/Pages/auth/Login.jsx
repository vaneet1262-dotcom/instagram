import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Login = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const [loading, setLoading] = useState(false);
   

   const handleLogin = async(e) => {
        e.preventDefault();
          setLoading(true)
    
        
    
          if (!username) {
             alert("Please fill username");
             return;
          }
    
          if (!password) {
             alert("Please fill password");
             return;
          }
    
          if (password.length < 8) {
             alert("Password must be at least 8 characters");
             return;
          }
    
    try {
          const res = await axios.post("http://127.0.0.1:5000/auth/login",{
            name,email:username,password
           })
    
           console.log(res.data.message);
            setLoading(false)
           alert(res.data.message)
        
    } catch (error) {
         console.log(error.response.data.message)
          setLoading(false)
         alert(error.response.data.message);
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
                           <button type="button" className="w-100 bt1">
                              Forgot Password?
                           </button>
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
