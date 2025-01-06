import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Portfolio from "./Components/Portfolio/Portfolio";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";



const router = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"about",element:<About/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>},
    {path:"*",element:<h1 className="translate-x-1/2 translate-y-1/2">Not Found 404...</h1>},
  ]}
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
