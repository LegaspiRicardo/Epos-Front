// components/modals/ModalDomicilio.tsx
import React, { useState, useEffect } from 'react';

// Interface para domicilios en el perfil
interface DomicilioPerfil {
    id: number;
    calle: string;
    numero: string;
    colonia: string;
    ciudad: string;
    estado: string;
    codigoPostal: string;
    referencias?: string;
    tipo: "casa" | "negocio" | "otro";
    principal: boolean;
}

interface ModalDomicilioProps {
    isOpen: boolean;
    onClose: () => void;
    domicilio?: DomicilioPerfil | null;
    mode: 'view' | 'create';
    onEdit?: () => void;
    onSave?: (domicilio: DomicilioPerfil) => void;
}

// Estados de México para el dropdown
const estadosMexico = [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche",
    "Chiapas", "Chihuahua", "Ciudad de México", "Coahuila", "Colima",
    "Durango", "Estado de México", "Guanajuato", "Guerrero", "Hidalgo",
    "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca",
    "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa",
    "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
];

const ModalDomicilio: React.FC<ModalDomicilioProps> = ({
    isOpen,
    onClose,
    domicilio,
    mode,
    onEdit,
    onSave
}) => {
    const [formData, setFormData] = useState<Omit<DomicilioPerfil, 'id'>>({
        calle: '',
        numero: '',
        colonia: '',
        ciudad: '',
        estado: '',
        codigoPostal: '',
        referencias: '',
        tipo: 'casa',
        principal: false
    });

    // Inicializar formulario cuando el modal se abre o el domicilio cambia
    useEffect(() => {
        if (domicilio && mode === 'create') {
            // Modo editar: cargar datos existentes
            const { id, ...domicilioData } = domicilio;
            setFormData(domicilioData);
        } else if (!domicilio && mode === 'create') {
            // Modo crear: resetear formulario
            setFormData({
                calle: '',
                numero: '',
                colonia: '',
                ciudad: '',
                estado: '',
                codigoPostal: '',
                referencias: '',
                tipo: 'casa',
                principal: false
            });
        }
    }, [domicilio, mode, isOpen]);

    if (!isOpen) return null;

    const isView = mode === 'view';
    // const isCreate = mode === 'create';

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (onSave) {
            // Para editar, mantenemos el ID original
            const domicilioToSave: DomicilioPerfil = domicilio
                ? { ...formData, id: domicilio.id }
                : { ...formData, id: Date.now() }; // ID temporal para nuevo

            onSave(domicilioToSave);
        }
    };

    const titulo = isView
        ? (domicilio?.principal ? "Domicilio Principal" : "Domicilio")
        : (domicilio ? "Editar Domicilio" : "Agregar Domicilio");

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-semibold text-gray-800">
                            {titulo}
                        </h3>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            ×
                        </button>
                    </div>

                    {isView && domicilio ? (
                        // MODO VISUALIZACIÓN
                        <div className="space-y-4">

                            <div className='flex'>
                                <div className=' w-9/12'>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
                                    <p className="text-gray-900">{domicilio.calle} #{domicilio.numero}</p>
                                    <p className="text-gray-900">{domicilio.colonia}, {domicilio.ciudad}</p>
                                    <p className="text-gray-900">{domicilio.estado}, C.P. {domicilio.codigoPostal}</p>
                                </div>
                                <div>
                                    <div className='w-3/12'>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                                        <p className="text-gray-900">{domicilio.tipo.toUpperCase()}</p>
                                    </div>
                                </div>
                            </div>
                            {domicilio.referencias && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Referencias</label>
                                    <p className="text-gray-900">{domicilio.referencias}</p>
                                </div>
                            )}

                            {domicilio.principal && (
                                <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3">
                                    <p className="text-cyan-800 text-sm font-medium">Este es tu domicilio principal</p>
                                    <p className="text-cyan-600 text-xs mt-1">Las entregas se enviarán a esta dirección por defecto</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        // MODO CREAR/EDITAR - FORMULARIO
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-1">
                                        Tipo de Domicilio *
                                    </label>
                                    <select
                                        id="tipo"
                                        name="tipo"
                                        value={formData.tipo}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                        required
                                    >
                                        <option value="casa">Casa</option>
                                        <option value="negocio">Negocio</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="calle" className="block text-sm font-medium text-gray-700 mb-1">
                                            Calle *
                                        </label>
                                        <input
                                            type="text"
                                            id="calle"
                                            name="calle"
                                            value={formData.calle}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                            placeholder="Av. Principal"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="numero" className="block text-sm font-medium text-gray-700 mb-1">
                                            Número *
                                        </label>
                                        <input
                                            type="text"
                                            id="numero"
                                            name="numero"
                                            value={formData.numero}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                            placeholder="123"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="colonia" className="block text-sm font-medium text-gray-700 mb-1">
                                        Colonia *
                                    </label>
                                    <input
                                        type="text"
                                        id="colonia"
                                        name="colonia"
                                        value={formData.colonia}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                        placeholder="Centro"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700 mb-1">
                                            Ciudad *
                                        </label>
                                        <input
                                            type="text"
                                            id="ciudad"
                                            name="ciudad"
                                            value={formData.ciudad}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                            placeholder="Guadalajara"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-1">
                                            Estado *
                                        </label>
                                        <select
                                            id="estado"
                                            name="estado"
                                            value={formData.estado}
                                            onChange={handleInputChange}
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="">Selecciona un estado</option>
                                            {estadosMexico.map(estado => (
                                                <option key={estado} value={estado}>
                                                    {estado}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="codigoPostal" className="block text-sm font-medium text-gray-700 mb-1">
                                        Código Postal *
                                    </label>
                                    <input
                                        type="text"
                                        id="codigoPostal"
                                        name="codigoPostal"
                                        value={formData.codigoPostal}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                        placeholder="44100"
                                        pattern="[0-9]{5}"
                                        maxLength={5}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="referencias" className="block text-sm font-medium text-gray-700 mb-1">
                                        Referencias
                                    </label>
                                    <textarea
                                        id="referencias"
                                        name="referencias"
                                        value={formData.referencias}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                        placeholder="Entre calles... frente a... etc."
                                    />
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="principal"
                                        name="principal"
                                        checked={formData.principal}
                                        onChange={handleInputChange}
                                        className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="principal" className="ml-2 block text-sm text-gray-700">
                                        Establecer como domicilio principal
                                    </label>
                                </div>

                                {formData.principal && (
                                    <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3">
                                        <p className="text-cyan-800 text-sm font-medium">
                                            Este será tu domicilio principal
                                        </p>
                                        <p className="text-cyan-600 text-xs mt-1">
                                            Las entregas se enviarán a esta dirección por defecto
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-end space-x-3 pt-6 mt-6 border-t border-gray-200">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="bg-cyan-800 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                                >
                                    {domicilio ? 'Actualizar' : 'Guardar'} Domicilio
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Botones para el MODO VISUALIZACIÓN */}
                    {isView && (
                        <div className="flex justify-end space-x-3 pt-6 mt-6 border-t border-gray-200">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                Cerrar
                            </button>
                            <button
                                onClick={onEdit}
                                className="bg-cyan-800 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                            >
                                Editar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ModalDomicilio;