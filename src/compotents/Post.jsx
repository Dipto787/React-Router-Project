import { useLoaderData } from "react-router-dom";

 
 

 
const Post = () => {
 const user=useLoaderData();
 let {name,id}=user;
    return (
        <div>
      <h1>ok ok {name}</h1>
      <h3>{id}</h3>
        </div>
    );
};

export default Post;