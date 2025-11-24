// src/pages/admin/Perfil.tsx
import React, { useState } from 'react';

interface UserProfile {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    puesto: string;
    departamento: string;
    fechaIngreso: string;
    avatar?: string;
}

const Perfil = () => {
    const [user, setUser] = useState<UserProfile>({
        id: 1,
        nombre: "Elda Paola Orozco Salas",
        email: "paola@epos.com",
        telefono: "+52 55 1234 5678",
        puesto: "Administradora del Sistema",
        departamento: "Administración",
        fechaIngreso: "2023-01-15",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(user);

    const handleEditToggle = () => {
        if (isEditing) {
            setFormData(user); // Reset form if canceling
        }
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        setUser(formData);
        setIsEditing(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const InfoField = ({ label, value, name, type = "text" }: {
        label: string;
        value: string;
        name: string;
        type?: string;
    }) => (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>
            {isEditing ? (
                <input
                    type={type}
                    name={name}
                    value={formData[name as keyof UserProfile] as string}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                />
            ) : (
                <div className="px-3 py-2 bg-gray-50 rounded-md border border-transparent">
                    {value || "No especificado"}
                </div>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 pt-4 pb-32">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className=" md:w-11/12 lg:w-full w-9/12 mx-auto mb-6">
                    <h1 className=" text-3xl font-bold text-gray-900">Mi Perfil</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Columna izquierda - Información principal */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            {/* Header de la tarjeta */}
                            <div className="bg-cyan-800 px-6 py-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold text-white">Información Personal</h2>
                                    <button
                                        onClick={isEditing ? handleSave : handleEditToggle}
                                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isEditing
                                            ? 'bg-transparent border border-white hover:text-cyan-900 hover:bg-white text-white'
                                            : 'bg-white hover:bg-gray-100 text-cyan-800'
                                            }`}
                                    >
                                        {isEditing ? 'Guardar Cambios' : 'Editar Perfil'}
                                    </button>
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="p-6">
                                <div className="flex flex-col md:flex-row gap-6 mb-6">
                                    {/* Avatar */}
                                    <div className="flex-shrink-0  mx-auto">
                                        <div className="relative">
                                            <img
                                                src="/icons/cuenta.png"
                                                alt="Avatar"
                                                className="w-32 h-32 rounded-full object-cover border-4 border-cyan-900"
                                            />
                                            {isEditing && (
                                                <button className="absolute bottom-0 right-0 bg-cyan-600 text-white p-2 rounded-full hover:bg-cyan-700 transition-colors duration-200">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Información básica */}
                                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-0">
                                        <InfoField
                                            label="Nombre Completo"
                                            value={user.nombre}
                                            name="nombre"
                                        />
                                        <InfoField
                                            label="Correo Electrónico"
                                            value={user.email}
                                            name="email"
                                            type="email"
                                        />
                                        <InfoField
                                            label="Teléfono"
                                            value={user.telefono}
                                            name="telefono"
                                            type="tel"
                                        />
                                        <InfoField
                                            label="Puesto"
                                            value={user.puesto}
                                            name="puesto"
                                        />
                                        <InfoField
                                            label="Departamento"
                                            value={user.departamento}
                                            name="departamento"
                                        />
                                        <InfoField
                                            label="Fecha de Ingreso"
                                            value={new Date(user.fechaIngreso).toLocaleDateString('es-MX')}
                                            name="fechaIngreso"
                                            type="date"
                                        />
                                    </div>
                                </div>

                                {isEditing && (
                                    <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                                        <button
                                            onClick={handleEditToggle}
                                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            onClick={handleSave}
                                            className="px-4 py-2 bg-cyan-800 text-white rounded-md hover:bg-cyan-700 transition-colors duration-200"
                                        >
                                            Guardar Cambios
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Columna derecha - Información adicional */}
                    <div className="space-y-2">
                        {/* Tarjeta de Estado */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Estado de la Cuenta</h3>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-gray-600">Verificación</span>
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                    Verificada
                                </span>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-gray-600">Rol</span>
                                <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                    Administrador
                                </span>
                            </div>
                        </div>

                        {/* Tarjeta de Configuración Rápida */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Configuración Rápida</h3>
                            <div className="space-y-3">
                                <button className="w-full flex items-center justify-between p-3 text-left text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200">
                                    <span>Notificaciones</span>
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <button className="w-full flex items-center justify-between p-3 text-left text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200">
                                    <span>Privacidad</span>
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <button className="w-full flex items-center justify-between p-3 text-left text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200">
                                    <span>Seguridad</span>
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Tarjeta de Acciones Rápidas */}
                        <div className="bg-white rounded-lg border p-6">
                            <h3 className="text-lg font-semibold text-cyan-900 mb-3">Acciones Rápidas</h3>
                            <div className="space-y-2">
                                <button className="w-full bg-cyan-800 hover:bg-cyan-700 text-white py-2 px-4 rounded-md transition-colors duration-200 text-sm font-medium">
                                    Cambiar Contraseña
                                </button>
                                <button className="w-full border border-red-500 text-gray-700 hover:bg-red-500 hover:text-white  py-2 px-4 rounded-md transition-colors duration-200 text-sm font-medium">
                                    Cerrar Sesión
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perfil;