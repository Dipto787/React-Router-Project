import { Link } from "react-router-dom";

 
const Navbar = () => {
 
        let sti={
            marginRight:'10px'
        }
    

    return (
        <div>
            <h1>NavBar</h1>
            <ul style={sti} >
                <Link style={sti} to='./'>Home</Link>
                <Link  style={sti} to='./about'>about</Link>
                <Link style={sti}  to='./contact'>contact</Link>
                <Link style={sti} to='./users'>Users</Link>
                <Link to='./comments'>Comments</Link>
              
            </ul>
        </div>
    );
};

export default Navbar;