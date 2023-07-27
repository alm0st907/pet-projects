import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Root from "./routes/root.tsx";
import {ClerkProvider} from "@clerk/clerk-react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>

        <ClerkProvider publishableKey={REACT_APP_CLERK_PUBLISHABLE_KEY} >
            <App/>
            {/*  <RouterProvider router={router}/>*/}
        </ClerkProvider>
    </React.StrictMode>,
)
