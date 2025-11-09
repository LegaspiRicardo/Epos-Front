import React from 'react';
import type { Producto } from '../../types/Producto';

interface ProductoModalProps {
    isOpen: boolean;
    onClose: () => void;
    producto: Producto | null;
    onEdit?: (producto: Producto) => void;
}

const ProductoModal: React.FC<ProductoModalProps> = ({
    isOpen,
    onClose,
    producto,
    onEdit
}) => {
    if (!isOpen || !producto) return null;

    const getBadgeClass = (status: string) => {
        switch (status) {
            case 'existente':
                return 'bg-green-200 text-green-800';
            case 'inexistente':
                return 'bg-red-200 text-red-800';
            case 'revisar disp':
                return 'bg-yellow-200 text-yellow-800';
            default:
                return 'bg-gray-200 text-gray-800';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'existente': return 'Existente';
            case 'inexistente': return 'Inexistente';
            case 'revisar disp': return 'Revisar Disp.';
            default: return status;
        }
    };

    const handleEdit = () => {
        if (onEdit) {
            onEdit(producto);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
                {/* Header del Modal */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-cyan-950 text-white rounded-t-lg">
                    <div>
                        <h2 className="text-3xl font-semibold">
                            {producto.categoria?.nombre}     {producto.nombre}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-cyan-200 text-2xl font-bold"
                    >
                        ×
                    </button>
                </div>

                {/* Contenido del Modal */}
                <div className="p-6">
                    {/* Información General */}
                    <div className="mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            {/* Columna 1: Imagen */}
                            <div className="space-y-4">
                                <div>
                                    <div className="w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-4">
                                        {producto.img ? (
                                            <div className="text-center">
                                                <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                                    <span className="text-blue-600 text-2xl">📷</span>
                                                </div>
                                                <p className="text-sm text-gray-600">Imagen disponible</p>
                                                <button className="mt-2 text-cyan-600 hover:text-cyan-800 text-sm font-medium">
                                                    Ver imagen completa
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="text-center">
                                                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                                </div>
                                                <p className="text-sm text-gray-500">No hay imagen cargada</p>
                                                <button
                                                    onClick={handleEdit}
                                                    className="mt-2 text-cyan-600 hover:text-cyan-800 text-sm font-medium"
                                                >
                                                    Subir imagen
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* Columna 2: descripcion y categoría*/}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-600 mb-1">
                                        Descripción
                                    </label>
                                    <p className="text-gray-700 text-xl leading-relaxed">
                                        {producto.descripcion}
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-600 mb-1">
                                        Categoría
                                    </label>
                                    <p className="text-gray-700 text-xl">
                                        {producto.categoria?.nombre || 'No especificada'}
                                    </p>
                                </div>
                            </div>

                            {/* Columna 3: Marca y Acabado */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-600 mb-1">
                                        Marca
                                    </label>
                                    <p className="text-gray-700 text-xl">
                                        {producto.marca?.nombre || 'No especificada'}
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-600 mb-1">
                                        Acabado
                                    </label>
                                    <p className="text-gray-700 text-xl">
                                        {producto.acabado?.nombre || 'No especificado'}
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Especificaciones Técnicas */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                            Especificaciones Técnicas
                        </h3>

                        {producto.especificacion ? (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {producto.especificacion.uso && (
                                    <div className="bg-gray-50 p-3 rounded-lg">
                                        <label className="block text-xs font-medium text-gray-500 mb-1">
                                            Uso
                                        </label>
                                        <p className="text-sm font-medium text-gray-800">
                                            {producto.especificacion.uso}
                                        </p>
                                    </div>
                                )}

                                {producto.especificacion.uEmpaque && (
                                    <div className="bg-gray-50 p-3 rounded-lg">
                                        <label className="block text-xs font-medium text-gray-500 mb-1">
                                            Unidad de Empaque
                                        </label>
                                        <p className="text-sm font-medium text-gray-800">
                                            {producto.especificacion.uEmpaque}
                                        </p>
                                    </div>
                                )}

                                {producto.especificacion.grado && (
                                    <div className="bg-gray-50 p-3 rounded-lg">
                                        <label className="block text-xs font-medium text-gray-500 mb-1">
                                            Grado
                                        </label>
                                        <p className="text-sm font-medium text-gray-800">
                                            {producto.especificacion.grado}
                                        </p>
                                    </div>
                                )}

                                {producto.especificacion.dRosca && (
                                    <div className="bg-gray-50 p-3 rounded-lg">
                                        <label className="block text-xs font-medium text-gray-500 mb-1">
                                            Diámetro de Rosca
                                        </label>
                                        <p className="text-sm font-medium text-gray-800">
                                            {producto.especificacion.dRosca}
                                        </p>
                                    </div>
                                )}

                                {producto.especificacion.pRosca && (
                                    <div className="bg-gray-50 p-3 rounded-lg">
                                        <label className="block text-xs font-medium text-gray-500 mb-1">
                                            Paso de Rosca
                                        </label>
                                        <p className="text-sm font-medium text-gray-800">
                                            {producto.especificacion.pRosca}
                                        </p>
                                    </div>
                                )}

                                {producto.especificacion.longitud && (
                                    <div className="bg-gray-50 p-3 rounded-lg">
                                        <label className="block text-xs font-medium text-gray-500 mb-1">
                                            Longitud
                                        </label>
                                        <p className="text-sm font-medium text-gray-800">
                                            {producto.especificacion.longitud}
                                        </p>
                                    </div>
                                )}

                                {producto.especificacion.familia && (
                                    <div className="bg-gray-50 p-3 rounded-lg">
                                        <label className="block text-xs font-medium text-gray-500 mb-1">
                                            Familia
                                        </label>
                                        <p className="text-sm font-medium text-gray-800">
                                            {producto.especificacion.familia}
                                        </p>
                                    </div>
                                )}
                                <div className='bg-gray-50 p-3 rounded-lg'>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">
                                        Estado del Inventario
                                    </label>
                                    <span className={`inline-flex px-3 py-1 rounded-full text-md font-medium ${getBadgeClass(producto.status)}`}>
                                        {getStatusText(producto.status)}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-8 bg-gray-50 rounded-lg">
                                <p className="text-gray-500">No hay especificaciones técnicas registradas</p>
                                <button
                                    onClick={handleEdit}
                                    className="mt-2 text-cyan-600 hover:text-cyan-800 text-sm font-medium"
                                >
                                    Agregar especificaciones
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer del Modal */}
                <div className="flex justify-between items-center p-6 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                    <div className="text-sm text-gray-600">
                        Última actualización: 20 Nov 2024
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Cerrar
                        </button>
                        <button
                            onClick={handleEdit}
                            className="px-4 py-2 bg-cyan-950 text-white rounded-lg hover:bg-cyan-900 transition-colors flex items-center gap-2"
                        >
                            <span>✏️</span>
                            Editar Producto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductoModal;