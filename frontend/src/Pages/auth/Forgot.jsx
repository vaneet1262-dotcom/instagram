import { useState } from "react";

const Forgot = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   

   const handleLogin = (e) => {
      e.preventDefault();


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
                           <button type="submit" className="w-100 bt">
                              Log in
                           </button>
                           <button type="button" className="w-100 bt1">
                              Forgot Password?
                           </button>
                        </div>

                        <div>
                           <button type="button" className="w-100 bt2">
                              Log in with Facebook
                           </button>
                           <button type="button" className="w-100 bt3">
                              Create New Account
                           </button>
                        </div>
                     </form>
                  </div>
      </>
   );
};

export default Forgot;