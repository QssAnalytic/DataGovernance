import { Outlet } from "react-router-dom";

const Layout = () => {
    console.log("first")
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