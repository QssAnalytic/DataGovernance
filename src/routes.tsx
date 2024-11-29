import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import TestPage from "./pages/testpage";
import ApplicationData from "./pages/app-data";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/application-data" element={< ApplicationData/>} />
            </Route>
        </Route>,
    ),
);

export { router };