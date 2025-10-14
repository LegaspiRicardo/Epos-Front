import { useState } from "react";
import { Link } from "react-router-dom";

const BottomBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Botón flotante para mostrar/ocultar la barra */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-12 right-5 bg-cyan-700 hover:bg-cyan-800 text-white px-4 py-2 rounded-full shadow-lg transition-transform active:scale-95 z-50"
            >
                {isOpen ? "Cerrar" : "☰"}
            </button>

            {/* Barra inferior (oculta o visible) */}
            <div
                className={`fixed bottom-0 left-0 w-full bg-gray-300  transition-transform duration-300 z-40 ${isOpen ? "translate-y-0" : "translate-y-full"
                    }`}
            >
                <div className="flex justify-around items-center py-3 text-sm ">
                    <Link
                        to="/"
                        className="hover:text-amber-500 hover:font-bold transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Inicio
                    </Link>

                    <Link
                        to="/categorias"
                        className="hover:text-amber-500 hover:font-bold transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Categorías
                    </Link>

                    <Link
                        to="/marcas"
                        className="hover:text-amber-500 hover:font-bold transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Marcas
                    </Link>

                    <Link
                        to="/perfil"
                        className="hover:text-amber-500 hover:font-bold transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Perfil
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BottomBar;
