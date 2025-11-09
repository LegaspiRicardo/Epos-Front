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
                <main className="flex-1 bg-white p-0 overflow-auto">
                    <div className="w-10/12 md:w-10/12 lg:w-11/12  mx-auto pt-6">
                        <h1 className="text-3xl font-bold mb-4">Dashboard Admin</h1>
                    </div>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default LayoutAdmin;