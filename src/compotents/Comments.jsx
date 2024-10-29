import { useLoaderData } from "react-router-dom"; 
import Showcomment from "./Showcomment";
const Comments = () => {
    let commentData=useLoaderData();
    let styles={
         display:'grid',
         gridTemplateColumns:'repeat(3,1fr)',
         gap:'10px'
    }
      
  return (
        <div style={styles}>
            {
                 commentData.map(comentuserdata=><Showcomment key={comentuserdata.id} comentuserdata={comentuserdata}></Showcomment>)
            }
        </div>
    );
};

export default Comments;