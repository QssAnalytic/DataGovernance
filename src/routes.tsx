import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import TestPage from "./pages/testpage";
import OverviewPage from "./pages/overview";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/overview" index element={<OverviewPage />} />
                <Route path="/test" element={<TestPage />} />
            </Route>
        </Route>,
    ),
);

export { router };