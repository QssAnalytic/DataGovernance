import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import DetailsPage from "./pages/lead-details-page";
import Tracker from "./pages/tracker";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="t" element={<Tracker/>} />
        <Route path="/details" element={<DetailsPage />} />
      </Route>
    </Route>
  )
);

export { router };
