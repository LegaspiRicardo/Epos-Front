// components/modals/admin/ModalCategorias.tsx
import React from 'react';
import type { Categoria } from '../../../types/Categoria';

interface ModalCategoriasProps {
    isOpen: boolean;
    onClose: () => void;
    mode: 'view' | 'create' | 'edit';
    categoria?: Categoria;
    onSubmit: (data: Omit<Categoria, 'id'>) => void;
    onDelete?: (id: number) => void;
}

const ModalCategorias: React.FC<ModalCategoriasProps> = ({
    isOpen,
    onClose,
    mode,
    categoria,
    onSubmit,
    onDelete
}) => {
    const [formData, setFormData] = React.useState({
        nombre: '',
        img: '',
    });

    React.useEffect(() => {
        if (categoria) {
            setFormData({
                nombre: categoria.nombre,
                img: categoria.img || ''
            });
        } else {
            setFormData({ nombre: '', img: '' });
        }
    }, [categoria, isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.nombre.trim()) return;

        onSubmit(formData);
        onClose();
    };

    const handleDelete = () => {
        if (categoria && onDelete) {
            onDelete(categoria.id);
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md mx-4">
                <div className="bg-cyan-950 text-white p-4 rounded-t-lg">
                    <h2 className="text-xl font-semibold">
                        {mode === 'create' && 'Agregar Categoría'}
                        {mode === 'edit' && 'Editar Categoría'}
                        {mode === 'view' && 'Ver Categoría'}
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
                            placeholder="Ingresa el nombre de la categoría"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            URL de Imagen
                        </label>
                        <input
                            type="url"
                            value={formData.img}
                            onChange={(e) => setFormData({ ...formData, img: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                            disabled={mode === 'view'}
                            placeholder="https://ejemplo.com/imagen.jpg"
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

export default ModalCategorias;