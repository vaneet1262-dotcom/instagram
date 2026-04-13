import {useState , useEffect} from "react"

const Verifyotp = () =>{
const [otp , setOtp] = useState("");

 const handleLogin = (e) =>{
    e.preventDefault();

    const savedOtp = localStorage.getItem("otp");

      if (otp === savedOtp) {
         alert("OTP Verified Successfully");
  
      } else {
         alert("Invalid OTP");
      }

 }

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-7">
                  <div className="bd">
                     <img
                        className="logo"
                        src="/insta.webp"
                        alt="logo"
                        width="10%"
                     />
                     <div>
                        <h1 className="em">
                           See everyday moments from your
                           <span className="cf"> close friends.</span>
                        </h1>
                        <img
                           className="image"
                           src="https://static.cdninstagram.com/rsrc.php/v4/yF/r/reN9rvYdLTB.png"
                           alt="preview"
                           width="100%"
                        />
                     </div>
                  </div>
                </div>
                <div className="col-4">
                    <form action="" onSubmit={handleLogin}>
                    <input className="inpt form-control" type="text" placeholder="enter otp"   onChange={(e) => setOtp(e.target.value)} />
                    <button className="btn1 w-100">Verify otp</button>
                    </form>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Verifyotp;