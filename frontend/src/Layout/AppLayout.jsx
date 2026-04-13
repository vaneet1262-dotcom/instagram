import { Outlet } from "react-router-dom"
import Leftbar from "../components/Leftbar"

const AppLayout = ( ) => {

    return (
        <>
         <div className="app-layout">
            <div className="container-fluid">
                <div className="d-flex">
                    <div className="col-lg-2 col-auto">
                        <Leftbar/>
                    </div>
                    <div className="col">                       
                     <Outlet/>
                    </div>

                </div>
            </div>
           

        </div>
        </>
    )
}

export default AppLayout;