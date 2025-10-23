import SuperiorBar from "./SuperiorBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="">
            <SuperiorBar />
            <main className="flex-1 bg-white p-0">
                <Outlet /> {/* Aquí se renderiza la vista actual */}
            </main>
        </div>
    );
};

export default Layout;
