// components/AsideAdmin.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AsideAdmin: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { path: '/admin', label: 'Dashboard', icon: '/icons/gestion.png' },
        { path: '/admin/productos', label: 'Productos', icon: '/icons/producto.png' },
        { path: '/admin/clientes', label: 'Clientes', icon: '/icons/cliente.png' },
        { path: '/admin/analisis', label: 'Análisis', icon: '/icons/grafica.png' },
        { path: '/admin/perfil', label: 'Mi Cuenta', icon: '/icons/usuario.png' },
    ];

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Botón del menú hamburguesa - visible solo en móvil/tablet */}
            <button
                onClick={toggleMenu}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-cyan-950 text-white rounded-md shadow-lg"
            >
                {isMenuOpen ? '✕' : '☰'}
            </button>

            {/* Overlay para cerrar el menú al hacer click fuera - solo en móvil/tablet */}
            {isMenuOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={closeMenu}
                />
            )}

            {/* Menú lateral */}
            <aside className={`
                fixed lg:static
                w-64 bg-cyan-950 text-white min-h-screen p-4
                transform transition-transform duration-300 ease-in-out z-40
                ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                {/* Logo/Header */}
                <div className="mb-8 p-4 border-b border-gray-700">
                    <Link to="/admin" onClick={closeMenu}>
                        <h2 className="text-xl font-bold text-center">EPOS ADMIN</h2>
                    </Link>
                </div>

                {/* Navigation */}
                <nav>
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    onClick={closeMenu}
                                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${isActive(item.path)
                                        ? 'bg-gray-500 text-white shadow-lg'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }`}
                                >
                                    <span className="text-lg w-5 h-5 flex items-center justify-center">
                                        {item.icon.includes('/') ? (
                                            // Es una imagen
                                            <img 
                                                src={item.icon} 
                                                alt="" 
                                                className="w-full h-full object-contain"
                                            />
                                        ) : (
                                            item.icon
                                        )}
                                    </span>
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer/Link to public site */}
                <div className="mt-8 pt-4 border-t border-gray-700">
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
                    >
                        <span className="font-medium">Volver al Sitio</span>
                    </Link>
                </div>
            </aside>
        </>
    );
};

export default AsideAdmin;