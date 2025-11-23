// components/modals/admin/ModalAcabados.tsx
import React from 'react';
import type { Acabado } from '../../../types/Acabado';

interface ModalAcabadosProps {
    isOpen: boolean;
    onClose: () => void;
    mode: 'view' | 'create' | 'edit';
    acabado?: Acabado;
    onSubmit: (data: Omit<Acabado, 'id'>) => void;
    onDelete?: (id: number) => void;
}

const ModalAcabados: React.FC<ModalAcabadosProps> = ({
    isOpen,
    onClose,
    mode,
    acabado,
    onSubmit,
    onDelete
}) => {
    const [formData, setFormData] = React.useState({
        nombre: ''
    });

    React.useEffect(() => {
        if (acabado) {
            setFormData({
                nombre: acabado.nombre
            });
        } else {
            setFormData({ nombre: '' });
        }
    }, [acabado, isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.nombre.trim()) return;

        onSubmit(formData);
        onClose();
    };

    const handleDelete = () => {
        if (acabado && onDelete) {
            onDelete(acabado.id);
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md mx-4">
                <div className="bg-cyan-950 text-white p-4 rounded-t-lg">
                    <h2 className="text-xl font-semibold">
                        {mode === 'create' && 'Agregar Acabado'}
                        {mode === 'edit' && 'Editar Acabado'}
                        {mode === 'view' && 'Ver Acabado'}
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    <div className="mb-6">
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
                            placeholder="Ingresa el nombre del acabado"
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

export default ModalAcabados;