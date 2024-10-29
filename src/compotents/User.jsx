import { Link } from "react-router-dom";

 
const User = ({data}) => {
    let {name,email,username,phone,id}=data;
    let borderStyle={
        border:'5px solid yellow',
        padding:'10px',
        borderRadius:'10px',
        marginTop:'5px'
    }
    return (
        <div style={borderStyle}>
            <h2>{name}</h2>
            <h4>User Name: {username}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>show details</Link>

        </div>
    );
};

export default User;