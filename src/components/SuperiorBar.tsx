// src/components/SuperiorBar.tsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SuperiorBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`bg-cyan-950 text-white py-3 px-6 shadow-md transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50' : 'relative'}`}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className="hover:text-amber-400 transition-colors"
                        >
                            <img src="/logoepos.png" alt="" className="w-24" />
                        </Link>
                        <p className="text-sm text-gray-300 ml-4 hidden md:block">
                            Comercializadora industrial
                        </p>
                    </div>
                    
                    {/* Botón para abrir/cerrar el menú lateral */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="hover:text-amber-500 transition-colors flex flex-col items-center text-xs group"
                    >
                        <div className="w-8 h-8 flex items-center justify-center bg-cyan-800 rounded-lg group-hover:bg-cyan-700 transition-colors">
                            <span className="text-lg font-bold">☰</span>
                        </div>
                        <span className="hidden sm:block mt-1">Menú</span>
                    </button>
                </div>
            </header>

            {/* Menú lateral (navbar) */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-cyan-950 text-white shadow-2xl z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6">
                    {/* Header del menú lateral */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold">EPOS Industrial</h2>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white hover:text-amber-500 text-2xl"
                        >
                            ×
                        </button>
                    </div>

                    {/* Links de navegación */}
                    <nav className="space-y-6">
                        <NavLink 
                            to="/categorias" 
                            icon="/icons/categoria.png" 
                            label="Categorías" 
                            onClick={() => setIsMenuOpen(false)} 
                        />
                        <NavLink 
                            to="/marcas" 
                            icon="/icons/lupa.png" 
                            label="Marcas" 
                            onClick={() => setIsMenuOpen(false)} 
                        />
                        <NavLink 
                            to="/tienda" 
                            icon="/icons/producto.png" 
                            label="Productos" 
                            onClick={() => setIsMenuOpen(false)} 
                        />
                        <NavLink 
                            to="/perfil" 
                            icon="/icons/usuario.png" 
                            label="Perfil" 
                            onClick={() => setIsMenuOpen(false)} 
                        />
                    </nav>

                    {/* Información adicional */}
                    <div className="mt-12 pt-6 border-t border-cyan-700">
                        <p className="text-sm text-cyan-200 mb-2">Contacto</p>
                        <p className="text-xs text-cyan-300">33 4343 3234</p>
                        <p className="text-xs text-cyan-300">epos@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* Overlay para cerrar el menú al hacer clic fuera */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </>
    );
};

// Componente auxiliar para los links de navegación
const NavLink = ({ 
    to, 
    icon, 
    label, 
    onClick 
}: { 
    to: string; 
    icon: string; 
    label: string;
    onClick: () => void;
}) => (
    <Link
        to={to}
        onClick={onClick}
        className="flex items-center space-x-4 p-3 hover:bg-cyan-800 rounded-lg transition-colors group"
    >
        <img 
            src={icon} 
            alt={label} 
            className="w-8 h-8 group-hover:scale-110 transition-transform" 
        />
        <span className="text-lg font-medium group-hover:text-amber-400 transition-colors">
            {label}
        </span>
    </Link>
);

export default SuperiorBar;