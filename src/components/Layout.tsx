// components/Layout.tsx
import  { useState } from 'react';
import { Outlet } from "react-router-dom";
import SuperiorBar from "./SuperiorBar";
import BotonPedido from './BotonPedido';
import ModalPedido from './ModalPedido';

const Layout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white overflow-x-hidden overflow-y-hidden">
            <SuperiorBar />
            
            <div className="mx-auto w-full"> 
                <main className="flex-1 bg-white p-0">
                    <Outlet /> 
                </main>
            </div>

            {/* Botón flotante del pedido */}
            <div className="fixed bottom-6 right-8 z-40">
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className=" text-white  rounded-full shadow-lg  transition-all duration-300 hover:scale-110"
                >
                    <BotonPedido />
                </button>
            </div>

            {/* Modal del pedido */}
            <ModalPedido 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </div>
    );
};

export default Layout;