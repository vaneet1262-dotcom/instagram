import { Outlet } from "react-router-dom"

const AuthLayout = () => {

    return (
        <>
         <div className="container-fluid">
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


               <div className="col-5">
                 <Outlet/>
               </div>

            </div>
         </div>
        </>
    )

}

export default AuthLayout
