// components/ModalCotizacion.tsx
import React from 'react';
import type { Cotizacion } from '../../types/Cotizacion';

interface ModalCotizacionProps {
    selectedCotizacion: Cotizacion | null;
    onClose: () => void;
}

const ClienteModalCotizacion: React.FC<ModalCotizacionProps> = ({
    selectedCotizacion,
    onClose
}) => {
    if (!selectedCotizacion) return null;

    // Función para formatear fechas
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Función para formatear moneda
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN'
        }).format(amount);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Cotización {selectedCotizacion.clienteNombre}
                        </h3>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            ×
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <h4 className="font-semibold text-lg mb-3 text-cyan-800">Contacto</h4>
                            <div className="space-y-2">
                                <p><strong>Email:</strong> {selectedCotizacion.clienteEmail}</p>
                                <p><strong>Teléfono:</strong> {selectedCotizacion.clienteTelefono}</p>

                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-3 text-cyan-800">Fecha de Solicitud</h4>
                            <div className="space-y-2">
                                <p className='text-xl font-semibold'>{formatDate(selectedCotizacion.fechaCreacion)}</p>
                                {selectedCotizacion.fechaEnvio && (
                                    <p><strong>Envío:</strong> {formatDate(selectedCotizacion.fechaEnvio)}</p>
                                )}
                                {selectedCotizacion.fechaRespuesta && (
                                    <p><strong>Respuesta:</strong> {formatDate(selectedCotizacion.fechaRespuesta)}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {selectedCotizacion.domicilioEntrega && (
                        <div className="mb-6">
                            <h4 className="font-semibold text-lg mb-3 text-cyan-800">Dirección de Entrega</h4>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p>{selectedCotizacion.domicilioEntrega.calle} #{selectedCotizacion.domicilioEntrega.numeroExterior}</p>
                                <p>{selectedCotizacion.domicilioEntrega.colonia}, {selectedCotizacion.domicilioEntrega.ciudad}</p>
                                <p>{selectedCotizacion.domicilioEntrega.estado}, C.P. {selectedCotizacion.domicilioEntrega.codigoPostal}</p>
                                <p className="text-sm text-gray-600 mt-2">
                                    <strong>Referencias:</strong> {selectedCotizacion.domicilioEntrega.referencias}
                                </p>
                            </div>
                        </div>
                    )}


                    <div className="mb-6">
                        <h4 className="font-semibold text-lg mb-3 text-cyan-800">Productos Cotizados</h4>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-300">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-300 px-3 py-2 text-left">Producto</th>
                                        <th className="border border-gray-300 px-3 py-2 text-center">Cantidad</th>
                                        <th className="border border-gray-300 px-3 py-2 text-right">Precio Unitario</th>
                                        <th className="border border-gray-300 px-3 py-2 text-right">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedCotizacion.items.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="border border-gray-300 px-3 py-2">
                                                <div>
                                                    <p className="font-medium">{item.producto.nombre}</p>
                                                    <p className="text-sm text-gray-600">{item.producto.descripcion}</p>
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 px-3 py-2 text-center">{item.cantidad}</td>
                                            <td className="border border-gray-300 px-3 py-2 text-right">{formatCurrency(item.precioUnitario)}</td>
                                            <td className="border border-gray-300 px-3 py-2 text-right">{formatCurrency(item.subtotal)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                        <div className="text-right">
                            <p className="text-lg"><strong>Subtotal:</strong> {formatCurrency(selectedCotizacion.subtotal)}</p>
                            <p className="text-lg"><strong>IVA (16%):</strong> {formatCurrency(selectedCotizacion.iva)}</p>
                            <p className="text-2xl font-bold text-cyan-800"><strong>Total:</strong> {formatCurrency(selectedCotizacion.total)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClienteModalCotizacion;