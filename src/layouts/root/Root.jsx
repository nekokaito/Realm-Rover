import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="container mx-auto min-h-screen">
                
                <NavBar></NavBar>
                
            
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;