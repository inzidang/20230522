import App from "./App";
import Contact from "./Contact";
import Profile from "./Profile";
import { createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    
]);

export default router