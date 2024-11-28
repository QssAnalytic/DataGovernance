import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <main className="">
                <div className="">
                        <Outlet />
                </div>
            </main>
        </div>
    )
}

export default Layout