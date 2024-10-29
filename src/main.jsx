import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './compotents/Navbar.jsx';
import About from './compotents/About.jsx';
import Contact from './compotents/Contact.jsx';
import Home from './compotents/Home.jsx';
import Users from './compotents/Users.jsx';
import Post from './compotents/Post.jsx';
import Comments from './compotents/Comments.jsx';
import ComentsDetails from './compotents/ComentsDetails.jsx';

let router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<Post></Post>
      },
      {
        path:'/comments',
        loader:() => fetch('https://jsonplaceholder.typicode.com/comments'),
        element:<Comments></Comments>
      },
      {
        path:'/comments/:postId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.postId}`),
        
        element:<ComentsDetails></ComentsDetails>,
        
      }
    ]
    
    
  },
  

])

 
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
