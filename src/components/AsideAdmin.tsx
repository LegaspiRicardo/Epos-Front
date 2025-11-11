// components/AsideAdmin.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AsideAdmin: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    const menuItems = [
        { path: '/admin', label: 'Dashboard', icon: '/icons/gestion.png' },
        {
            path: '/admin/productos',
            label: 'Productos',
            icon: '/icons/producto.png',
            subItems: [
                { path: '/admin/productos', label: 'Todos los Productos' },
                { path: '/admin/categorias', label: 'Categorías' },
                { path: '/admin/marcas', label: 'Marcas' },
                { path: '/admin/acabados', label: 'Acabados' }
            ]
        },
        { path: '/admin/clientes', label: 'Clientes', icon: '/icons/cliente.png' },
        { path: '/admin/cotizaciones-pedidos', label: 'Cotizaciones y Pedidos', icon: '/icons/grafica.png' },
        { path: '/admin/perfil', label: 'Mi Cuenta', icon: '/icons/usuario.png' },
    ];

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const isProductsActive = () => {
        return location.pathname.startsWith('/admin/productos') ||
            location.pathname.startsWith('/admin/categorias') ||
            location.pathname.startsWith('/admin/marcas') ||
            location.pathname.startsWith('/admin/acabados');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProducts = () => {
        setIsProductsOpen(!isProductsOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const closeAll = () => {
        setIsMenuOpen(false);
        setIsProductsOpen(false);
    };

    return (
        <>
            {/* Botón del menú hamburguesa - visible solo en celular/tablet */}
            <button
                onClick={toggleMenu}
                className="lg:hidden fixed top-7 left-6 z-50 p-2 bg-cyan-950 text-white rounded-md shadow-lg"
            >
                {isMenuOpen ? '✕' : '☰'}
            </button>

            {/* Overlay para cerrar el menú al hacer click fuera - solo en celular/tablet */}
            {isMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={closeMenu}
                />
            )}

            {/* Menú lateral  */}
            <aside className={`
                fixed
                left-0 top-0 bottom-0
                w-64 bg-cyan-950 text-white min-h-screen p-4
                transform transition-transform duration-300 ease-in-out z-40
                ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                {/* Logo/Header */}
                <div className="mb-8 p-4 border-b border-gray-700">
                    <Link to="/admin" onClick={closeAll}>
                        <h2 className="text-xl font-bold text-center">EPOS ADMIN</h2>
                    </Link>
                </div>

                {/* Navigation */}
                <nav>
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                {item.subItems ? (
                                    // Item con submenú
                                    <div>
                                        <button
                                            onClick={toggleProducts}
                                            className={`flex items-center justify-between w-full space-x-3 p-3 rounded-lg transition-colors duration-200 ${isProductsActive()
                                                    ? 'bg-gray-500 text-white shadow-lg'
                                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                                }`}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <span className="text-lg w-5 h-5 flex items-center justify-center">
                                                    {item.icon.includes('/') ? (
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
                                            </div>
                                            <span className={`transform transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''
                                                }`}>
                                                ▼
                                            </span>
                                        </button>

                                        {/* Submenú */}
                                        {isProductsOpen && (
                                            <ul className="ml-6 mt-2 space-y-1 border-l-2 border-gray-600 pl-3">
                                                {item.subItems.map((subItem) => (
                                                    <li key={subItem.path}>
                                                        <Link
                                                            to={subItem.path}
                                                            onClick={closeAll}
                                                            className={`flex items-center space-x-3 p-2 rounded-lg transition-colors duration-200 ${isActive(subItem.path)
                                                                    ? 'bg-gray-600 text-white'
                                                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                                                }`}
                                                        >
                                                            <span className="text-sm font-medium">
                                                                {subItem.label}
                                                            </span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ) : (
                                    // Item normal
                                    <Link
                                        to={item.path}
                                        onClick={closeAll}
                                        className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${isActive(item.path)
                                                ? 'bg-gray-500 text-white shadow-lg'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                            }`}
                                    >
                                        <span className="text-lg w-5 h-5 flex items-center justify-center">
                                            {item.icon.includes('/') ? (
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
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer/Link to public site */}
                <div className="mt-8 pt-4 border-t border-gray-700">
                    <Link
                        to="/"
                        onClick={closeAll}
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