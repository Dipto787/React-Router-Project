import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

 
const Home = () => {
    return (
        <div>
        <Navbar></Navbar>
            {/* <h1>home page</h1>  */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;