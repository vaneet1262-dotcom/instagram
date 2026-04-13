import { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const Register = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   

   const handleRegister = async (e) => {
      e.preventDefault();
      setLoading(true)

        if (!name) {
         alert("Please fill name");
         return;
      }

      if (!email) {
         alert("Please fill email");
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
      const res = await axios.post("http://127.0.0.1:5000/auth/register",{
        name,email,password
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
