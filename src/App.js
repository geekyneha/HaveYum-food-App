import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/pages/Layout";
import Login from "./components/pages/Login/Login";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Help from "./components/pages/Help/Help";
import Error from "./components/pages/Error/Error";


const App = () => {
    return (
        <div className="AppLayout">
           <Layout />
        </div>
    )

  
}
 const router= createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement:<Error />
    },
    { 
        path:"/login",
        element:<Login />

    },
    {
        path:"/help",
        element:<Help />
    }
 ])






const heading = React.createElement("h1", { id: "heading" }, "This is a React element.");
const root = ReactDOM.createRoot(document.getElementById("root"));




root.render(<RouterProvider router={router}/>)
