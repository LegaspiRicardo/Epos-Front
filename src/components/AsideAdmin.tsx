// components/AsideAdmin.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AsideAdmin: React.FC = () => {
    const location = useLocation();

    const menuItems = [
        { path: '/admin', label: 'Dashboard', icon: '📊' },
        { path: '/admin/productos', label: 'Productos', icon: '📦' },
        { path: '/admin/clientes', label: 'Clientes', icon: '👥' },
        { path: '/admin/analisis', label: 'Análisis', icon: '📈' },
        { path: '/admin/perfil', label: 'Mi Perfil', icon: '👤' },
    ];

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
            {/* Logo/Header */}
            <div className="mb-8 p-4 border-b border-gray-700">
                <h2 className="text-xl font-bold text-center">EPOS ADMIN</h2>
            </div>

            {/* Navigation */}
            <nav>
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${isActive(item.path)
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                            >
                                <span className="text-lg">{item.icon}</span>
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
                    className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
                >
                    <span className="text-lg">🏠</span>
                    <span className="font-medium">Volver al Sitio</span>
                </Link>
            </div>
        </aside>
    );
};

export default AsideAdmin;