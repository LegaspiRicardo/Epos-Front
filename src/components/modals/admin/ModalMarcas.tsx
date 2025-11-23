// components/modals/admin/ModalMarcas.tsx
import React from 'react';
import type { Marca } from '../../../types/Marca';

interface ModalMarcasProps {
    isOpen: boolean;
    onClose: () => void;
    mode: 'view' | 'create' | 'edit';
    marca?: Marca;
    onSubmit: (data: Omit<Marca, 'id'>) => void;
    onDelete?: (id: number) => void;
}

const ModalMarcas: React.FC<ModalMarcasProps> = ({
    isOpen,
    onClose,
    mode,
    marca,
    onSubmit,
    onDelete
}) => {
    const [formData, setFormData] = React.useState({
        nombre: '',
        img: ''
    });

    React.useEffect(() => {
        if (marca) {
            setFormData({
                nombre: marca.nombre,
                img: marca.img || ''
            });
        } else {
            setFormData({ nombre: '', img: '' });
        }
    }, [marca, isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.nombre.trim()) return;

        onSubmit(formData);
        onClose();
    };

    const handleDelete = () => {
        if (marca && onDelete) {
            onDelete(marca.id);
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md mx-4">
                <div className="bg-cyan-950 text-white p-4 rounded-t-lg">
                    <h2 className="text-xl font-semibold">
                        {mode === 'create' && 'Agregar Marca'}
                        {mode === 'edit' && 'Editar Marca'}
                        {mode === 'view' && 'Ver Marca'}
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Nombre *
                        </label>
                        <input
                            type="text"
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                            required
                            disabled={mode === 'view'}
                            placeholder="Ingresa el nombre de la marca"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            URL de Imagen
                        </label>
                        <input
                            type="url"
                            value={formData.img}
                            onChange={(e) => setFormData({ ...formData, img: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                            disabled={mode === 'view'}
                            placeholder="https://ejemplo.com/logo-marca.jpg"
                        />
                    </div>

                    <div className="flex justify-end space-x-3">
                        {mode === 'edit' && onDelete && (
                            <button
                                type="button"
                                onClick={handleDelete}
                                className="px-4 py-2 border border-red-600 text-red-600 bg-white rounded-md hover:bg-red-700 transition-colors"
                            >
                                Eliminar
                            </button>
                        )}

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                        >
                            Cancelar
                        </button>

                        {mode !== 'view' && (
                            <button
                                type="submit"
                                className="px-4 py-2 bg-cyan-950 text-white rounded-md hover:bg-cyan-700 transition-colors"
                            >
                                {mode === 'create' ? 'Crear' : 'Guardar'}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalMarcas;