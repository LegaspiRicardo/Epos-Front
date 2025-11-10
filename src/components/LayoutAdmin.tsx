// components/LayoutAdmin.tsx
import { Outlet } from "react-router-dom";
import AsideAdmin from "./AsideAdmin";

const LayoutAdmin = () => {
    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <AsideAdmin />

            {/* Main Content */}
            <div className="w-full overflow-x-hidden lg:ml-64">
                <main className="flex-1 bg-white p-0 overflow-auto">

                    <div className="w-full overflow-x-hidden">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LayoutAdmin;