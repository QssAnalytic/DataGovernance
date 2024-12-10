import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import ApplicationData from "./pages/app-data";
import DetailsPage from "./pages/lead-details-page";
import Tracker from "./pages/tracker";
import Career from "./pages/career";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/application-data" element={< ApplicationData />} />
                <Route path="/details" element={<DetailsPage />} />
                <Route path="t" element={<Tracker/>} />
                <Route path="/career" element={<Career/>} />
            </Route>
        </Route>,
    ),)


export { router };
