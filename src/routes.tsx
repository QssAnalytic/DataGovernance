import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import ApplicationData from "./pages/app-data";
import DetailsPage from "./pages/lead-details";
import OverviewPage from "./pages/overview";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/application-data" element={< ApplicationData />} />
                <Route path="/details" element={<DetailsPage />} />
                <Route path="/overview" element={<OverviewPage />} />
            </Route>
        </Route>,
    ),)


export { router };
