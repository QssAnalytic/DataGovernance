import { Outlet } from "react-router-dom";
import { Header } from "./components/Shared/Header";
import { SideBar } from "./components/Shared/SideBar/SideBar";
const Layout = () => {
    return (
        <div className="flex flex-col">
            <Header/>
            <div className="flex h-[calc(100vh-120px)]">
                <SideBar/>
                <main className="p-4 pl-[100px]">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
