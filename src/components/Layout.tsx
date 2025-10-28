import SuperiorBar from "./SuperiorBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="min-h-screen bg-white">
            <SuperiorBar />
            
            <div className="max-w-5xl mx-auto w-full"> 
                <main className="flex-1 bg-white p-0">
                    <Outlet /> 
                </main>
            </div>
        </div>
    );
};

export default Layout;