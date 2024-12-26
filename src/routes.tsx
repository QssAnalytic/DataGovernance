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
import { Vacancies } from "./pages/career/vacancies";
import { TalentPool } from "./pages/career/talent-pool";
import RawData from "./pages/raw-data";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/application-data" element={< ApplicationData />} />
                <Route path="/details" element={<DetailsPage />} />
                <Route path="t" element={<Tracker/>} />
                <Route path="/vacancies" element={<Vacancies/>} />
                <Route path="/talent-pool" element={<TalentPool/>} />
                <Route path="/raw-data" element={<RawData/>} />
            </Route>
        </Route>,
    ),)


export { router };
