// components/ModalCotizacion.tsx
import React, { useState } from 'react';
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

    const [comprobanteSubido, setComprobanteSubido] = useState(false);

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

    // Función para manejar la subida del comprobante de pago
    const handleComprobanteUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'application/pdf')) {
            // Aquí iría la lógica para subir el comprobante al backend
            console.log('Comprobante subido:', file.name);

            // Simular subida exitosa
            setComprobanteSubido(true);
            alert(`Comprobante "${file.name}" subido correctamente. El administrador revisará tu pago.`);

        } else if (file) {
            alert('Por favor, sube solo archivos JPG, PNG o PDF');
        }
        event.target.value = '';
    };

    // Función para ver la orden de pago
    const handleViewOrdenPago = () => {
        if (selectedCotizacion.ordenPagoUrl) {
            window.open(selectedCotizacion.ordenPagoUrl, '_blank');
        }
    };

    // Función para ver el comprobante subido
    const handleViewComprobante = () => {
        if (selectedCotizacion.comprobantePagoUrl) {
            window.open(selectedCotizacion.comprobantePagoUrl, '_blank');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Cotización #{selectedCotizacion.id}
                        </h3>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            ×
                        </button>
                    </div>

                    <div className='md:flex'>
                        <div className="md:w-6/12 gap-6 mb-6">
                            <div>
                                <h4 className="font-semibold text-lg mb-3 text-cyan-800">Contacto</h4>
                                <div className="space-y-2">
                                    <p><strong>Email:</strong> {selectedCotizacion.clienteEmail}</p>
                                    <p><strong>Teléfono:</strong> {selectedCotizacion.clienteTelefono}</p>
                                    <p>
                                        <strong>Estado:</strong>
                                        <span className={`ml-2 px-2 py-1 rounded-full text-xs ${selectedCotizacion.estado === "enviada"
                                            ? "bg-blue-100 text-blue-800"
                                            : selectedCotizacion.estado === "aceptada"
                                                ? "bg-green-100 text-green-800"
                                                : selectedCotizacion.estado === "pendiente"
                                                    ? "bg-yellow-100 text-yellow-800"
                                                    : selectedCotizacion.estado === "rechazada"
                                                        ? "bg-red-100 text-red-800"
                                                        : selectedCotizacion.estado === "pagada"
                                                            ? "bg-purple-100 text-purple-800"
                                                            : "bg-gray-100 text-gray-800"
                                            }`}>
                                            {selectedCotizacion.estado}
                                        </span>
                                    </p>
                                    <p><strong>Fecha Solicitud: </strong>{formatDate(selectedCotizacion.fechaCreacion)} </p>
                                </div>
                            </div>
                        </div>

                        <div className='md:w-6/12'>
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
                        </div>


                    </div>

                    {selectedCotizacion.notasCliente && (
                        <div className="mb-6">
                            <h4 className="font-semibold text-lg mb-3 text-cyan-800">Tus Notas</h4>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-700">{selectedCotizacion.notasCliente}</p>
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


                    {/* Sección de Documentos de Pago */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Orden de Pago */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-lg mb-3 text-cyan-800">
                                Orden de Pago
                            </h4>
                            {selectedCotizacion.ordenPagoUrl ? (
                                <div className="text-center">
                                    <div className="mb-3">
                                        <svg
                                            className="w-12 h-12 text-red-500 mx-auto"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 mb-3">
                                        La orden de pago está disponible para descargar
                                    </p>
                                    <button
                                        onClick={handleViewOrdenPago}
                                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full"
                                    >
                                        Ver Orden de Pago
                                    </button>
                                    <p className="text-xs text-gray-500 mt-2">
                                        Descarga el PDF y realiza el pago según las instrucciones
                                    </p>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <div className="mb-3">
                                        <svg
                                            className="w-12 h-12 text-gray-400 mx-auto"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l4 4v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-gray-600">
                                        Esperando orden de pago del administrador
                                    </p>
                                    <p className="text-xs text-gray-500 mt-2">
                                        El administrador generará la orden de pago pronto
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Comprobante de Pago */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-lg mb-3 text-cyan-800">
                                Comprobante de Pago
                            </h4>
                            {selectedCotizacion.comprobantePagoUrl || comprobanteSubido ? (
                                <div className="text-center">
                                    <div className="mb-3">
                                        <svg
                                            className="w-12 h-12 text-green-500 mx-auto"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 mb-3">
                                        Comprobante de pago subido
                                    </p>
                                    <button
                                        onClick={handleViewComprobante}
                                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full mb-2"
                                    >
                                        Ver Comprobante
                                    </button>
                                    <p className="text-xs text-gray-500">
                                        El administrador revisará tu comprobante
                                    </p>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <div className="mb-3">
                                        <svg
                                            className="w-12 h-12 text-cyan-700 mx-auto"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 mb-3">
                                        Sube tu comprobante de pago
                                    </p>
                                    <label className="bg-cyan-700 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg cursor-pointer font-medium transition-colors inline-block w-full">
                                        <span>Subir Comprobante</span>
                                        <input
                                            type="file"
                                            accept=".jpg,.jpeg,.png,.pdf"
                                            onChange={handleComprobanteUpload}
                                            className="hidden"
                                        />
                                    </label>
                                    <p className="text-xs text-gray-500 mt-2">
                                        JPG, PNG o PDF (máx. 10MB)
                                    </p>
                                </div>
                            )}
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