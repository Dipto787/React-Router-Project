import { Link } from "react-router-dom";

 
const Showcomment = ({comentuserdata}) => {
    let {name,email,body,id }=comentuserdata;
    let styles={
        border:'5px solid pink',
        padding:'10px',
        borderRadius:'10px',
       
    }
      
    return (
        <div style={styles}>
            <h2>{name}</h2>
            <h3>Email: {email}</h3>
            <p>{body}</p>
            <Link to={`/comments/${id}`}>Show Details</Link>
        </div>
    );
};

export default Showcomment;