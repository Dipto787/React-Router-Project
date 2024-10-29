import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import ShowCommentsDetails from "./ShowCommentsDetails";

 
const ComentsDetails = () => {
    let commentData=useLoaderData(); 
    const navigate=useNavigate()
   let {name,email,body}=commentData;
    const handleback=()=>{
        navigate(-1)
    }
    return (
        <div>
          
         
         <h2>{name}</h2>
         <h3>Email: {email}</h3>
         <p>{body}</p>

        <button onClick={handleback}>back</button>

        </div>
    );
};

export default ComentsDetails;