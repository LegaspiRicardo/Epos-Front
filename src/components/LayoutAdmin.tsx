// components/LayoutAdmin.tsx
import { Outlet } from "react-router-dom";
import AsideAdmin from "./AsideAdmin";

const LayoutAdmin = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <AsideAdmin />
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <main className="flex-1 bg-white p-6 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default LayoutAdmin;