import React, { useState } from 'react';

interface ProductoFormProps {
    onSuccess?: () => void;
    onCancel?: () => void;
}

const ProductoForm: React.FC<ProductoFormProps> = ({ onSuccess, onCancel }) => {
    const [step, setStep] = useState(1);

    // Paso 1: Información básica del producto
    const renderStep1 = () => (
        <div>
            <h3 className="text-lg font-semibold mb-4">Información Básica del Producto</h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nombre del Producto</label>
                    <input 
                        type="text" 
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                        placeholder="Ej: BR80-033RP"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Descripción</label>
                    <textarea 
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                        placeholder="Descripción del producto..."
                        rows={3}
                    />
                </div>
            </div>
        </div>
    );

    // Paso 2: Especificaciones técnicas
    const renderStep2 = () => (
        <div>
            <h3 className="text-lg font-semibold mb-4">Especificaciones Técnicas</h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Uso</label>
                    <input 
                        type="text" 
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                        placeholder="Ej: Agrícola, Industrial"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Diámetro de Rosca</label>
                    <input 
                        type="text" 
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                        placeholder="Ej: 5/8-11"
                    />
                </div>
            </div>
        </div>
    );

    const handleNext = () => {
        if (step < 2) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = () => {
        // Lógica para guardar el producto
        console.log('Guardando producto...');
        if (onSuccess) onSuccess(); // ✅ Ahora se usa onSuccess
    };

    const handleCancel = () => {
        if (onCancel) onCancel(); // ✅ Ahora se usa onCancel
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            {/* Indicador de pasos */}
            <div className="flex mb-6">
                <div className={`flex-1 text-center py-2 border ${step >= 1 ? 'bg-cyan-950 text-white' : 'bg-gray-200'}`}>
                    Paso 1: Producto
                </div>
                <div className={`flex-1 text-center py-2 border ${step >= 2 ? 'bg-cyan-950 text-white' : 'bg-gray-200'}`}>
                    Paso 2: Especificaciones
                </div>
            </div>

            {/* Contenido del formulario según el paso */}
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}

            {/* Botones de navegación */}
            <div className="flex justify-between mt-6">
                <div>
                    {onCancel && (
                        <button 
                            onClick={handleCancel}
                            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Cancelar
                        </button>
                    )}
                </div>
                <div className="flex gap-3">
                    {step > 1 && (
                        <button 
                            onClick={handleBack}
                            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Anterior
                        </button>
                    )}
                    {step < 2 ? (
                        <button 
                            onClick={handleNext}
                            className="px-4 py-2 bg-cyan-950 text-white rounded-lg hover:bg-cyan-900 transition-colors"
                        >
                            Siguiente
                        </button>
                    ) : (
                        <button 
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Guardar Producto
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductoForm;