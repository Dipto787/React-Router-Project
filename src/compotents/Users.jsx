import { useLoaderData } from "react-router-dom";
import User from "./User";

 
const Users = () => {
    let load=useLoaderData();
    console.log(load);
    let respon={
        display:'grid',
        gridTemplateColumns:'repeat(3,1fr)',
        gap:'5px'
    }
    return (
        <div>
            <h1>{load.length}</h1>
           <div style={respon}>
           {
                load.map(data=><User key={data.id} data={data}></User>)
            }
           </div>
        </div>
    );
};

export default Users;