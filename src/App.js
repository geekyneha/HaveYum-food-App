import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/pages/Layout";
import Login from "./components/pages/Login/Login";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import Help from "./components/pages/Help/Help";
import Error from "./components/pages/Error/Error";
import Body from "./components/Body/Body";
import Menu from "./components/pages/Menu/Menu";
import About from './components/pages/About/About'


const App = () => {
    return (
        <div className="AppLayout">
           <Layout />
           <Outlet />
        </div>
    )

  
}
 const router= createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            { 
                path:"/",
                element:<Body />
        
            },
           
            {
                path:"/help",
                element:<Help />
            },{
                path:"/restaurant/:restaurantId",
                element:<Menu />
            }
        ],
        
        errorElement:<Error />
    },
    { 
        path:"/login",
        element:<Login />

    },
   
    
 ])





const heading = React.createElement("h1", { id: "heading" }, "This is a React element.");
const root = ReactDOM.createRoot(document.getElementById("root"));




root.render(<RouterProvider router={router}/>)
