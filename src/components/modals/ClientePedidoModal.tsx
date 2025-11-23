// components/modals/ClientePedidoModal.tsx
import React from 'react';
import type { PedidoPerfil } from '../../types/PerfilTypes';

interface ModalPedidoProps {
    selectedPedido: PedidoPerfil | null;
    onClose: () => void;
}

const ClientePedidoModal: React.FC<ModalPedidoProps> = ({
    selectedPedido,
    onClose
}) => {
    if (!selectedPedido) return null;

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

    // Función para obtener el color del estado
    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case "pendiente": return "bg-yellow-100 text-yellow-800";
            case "procesando": return "bg-blue-100 text-blue-800";
            case "en_transito": return "bg-purple-100 text-purple-800";
            case "entregado": return "bg-green-100 text-green-800";
            case "completado": return "bg-green-100 text-green-800";
            case "cancelado": return "bg-red-100 text-red-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    // Función para obtener el texto del estado
    const getEstadoTexto = (estado: string) => {
        switch (estado) {
            case "pendiente": return "Pendiente";
            case "procesando": return "Procesando";
            case "en_transito": return "En Tránsito";
            case "entregado": return "Entregado";
            case "completado": return "Completado";
            case "cancelado": return "Cancelado";
            default: return estado;
        }
    };

    // Función para obtener el texto del método de pago
    const getMetodoPagoTexto = (metodo: string) => {
        switch (metodo) {
            case "transferencia": return "Transferencia Bancaria";
            case "tarjeta": return "Tarjeta de Crédito/Débito";
            case "efectivo": return "Efectivo";
            default: return metodo;
        }
    };

    // Calcular subtotal de un item
    const calcularSubtotalItem = (item: any) => {
        return item.cantidad * item.producto.precio;
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Pedido #{selectedPedido.id}
                        </h3>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            ×
                        </button>
                    </div>





                    {/* Información del Pedido */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <h4 className="font-semibold text-lg mb-3 text-cyan-800">Información del Pedido</h4>
                            <div className="rounded-lg space-y-2 p-4 bg-gray-50">
                                <p><strong>Fecha de pedido:</strong> {formatDate(selectedPedido.fechaCreacion)}</p>
                                <p><strong>Entrega estimada:</strong> {formatDate(selectedPedido.fechaEntregaEstimada)}</p>
                                <p><strong>Método de pago:</strong> {getMetodoPagoTexto(selectedPedido.metodoPago)}</p>
                                {selectedPedido.trackingNumber && (
                                    <p><strong>Guía de envío:</strong> {selectedPedido.trackingNumber}</p>
                                )}
                            </div>
                        </div>


                        <div>
                            {/* Dirección de Entrega */}
                            {selectedPedido.domicilio && (
                                <div className="mb-6">
                                    <h4 className="font-semibold text-lg mb-3 text-cyan-800">Dirección de Entrega</h4>
                                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                                        <p>{selectedPedido.domicilio.calle} #{selectedPedido.domicilio.numeroExterior}</p>
                                        {selectedPedido.domicilio.numeroInterior && (
                                            <p>Int. {selectedPedido.domicilio.numeroInterior}</p>
                                        )}
                                        <p>{selectedPedido.domicilio.colonia}, {selectedPedido.domicilio.ciudad}</p>
                                        <p>{selectedPedido.domicilio.estado}, C.P. {selectedPedido.domicilio.codigoPostal}</p>
                                        {selectedPedido.domicilio.referencias && (
                                            <p className="text-sm text-gray-600 mt-2">
                                                <strong>Referencias:</strong> {selectedPedido.domicilio.referencias}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Información de Seguimiento */}
                    {selectedPedido.trackingNumber && (
                        <div className="my-6 p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-semibold text-lg mb-2 text-blue-800">Información de Seguimiento</h4>
                            <p>Puedes rastrear tu pedido con el número: <strong>{selectedPedido.trackingNumber}</strong></p>
                            <p className="text-sm text-blue-600 mt-2">
                                El estado actual de tu pedido es: <span className={`px-2 py-1 rounded-full text-xs ${getEstadoColor(selectedPedido.estado)}`}>
                                    {getEstadoTexto(selectedPedido.estado)}
                                </span>
                            </p>
                        </div>
                    )}


                    {/* Productos del Pedido */}
                    <div className="mb-6">
                        <h4 className="font-semibold text-lg mb-3 text-cyan-800">Productos del Pedido</h4>
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
                                    {selectedPedido.items.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="border border-gray-300 px-3 py-2">
                                                <div>
                                                    <p className="font-medium">{item.producto.nombre}</p>
                                                    <p className="text-sm text-gray-600">{item.producto.descripcion}</p>
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 px-3 py-2 text-center">{item.cantidad}</td>
                                            <td className="border border-gray-300 px-3 py-2 text-right">
                                                {formatCurrency(item.producto.precio)}
                                            </td>
                                            <td className="border border-gray-300 px-3 py-2 text-right">
                                                {formatCurrency(calcularSubtotalItem(item))}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>



                    <div className='w-6/12 ml-auto'>
                        <div className="space-y-2">
                            <div className='flex justify-between items-center'>
                                <div>
                                    <strong>Subtotal:</strong>
                                </div>
                                <div>
                                    <p>{formatCurrency(selectedPedido.subtotal)}</p>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <strong>IVA (16%):</strong>
                                </div>
                                <div>
                                    <p>{formatCurrency(selectedPedido.iva)}</p>
                                </div>
                            </div>

                            <div className='flex justify-between items-center pt-2 border-t border-gray-200'>
                                <div>
                                    <strong className="text-lg">Total:</strong>
                                </div>
                                <div>
                                    <p className="text-lg font-bold text-cyan-800">
                                        {formatCurrency(selectedPedido.total)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Botón de Cerrar */}
                    <div className="flex justify-end pt-4 border-t border-gray-200">
                        <button
                            onClick={onClose}
                            className="bg-cyan-800 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientePedidoModal;