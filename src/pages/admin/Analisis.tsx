// src/pages/admin/Analisis.tsx
import { useState, useMemo } from "react";
import type { Cotizacion, PedidoFromCotizacion } from "../../types/Cotizacion";
import { mockCotizaciones, mockPedidos } from "../../data/mockCotizaciones";

const Analisis = () => {
    // Estados para cotizaciones
    const [sortConfigCotizaciones, setSortConfigCotizaciones] = useState<{
        key: string;
        direction: "asc" | "desc";
    } | null>(null);

    // Estados para pedidos
    const [sortConfigPedidos, setSortConfigPedidos] = useState<{
        key: string;
        direction: "asc" | "desc";
    } | null>(null);

    const [currentPageCotizaciones, setCurrentPageCotizaciones] = useState(1);
    const [currentPagePedidos, setCurrentPagePedidos] = useState(1);
    const [selectedCotizacion, setSelectedCotizacion] = useState<Cotizacion | null>(null);
    const [selectedPedido, setSelectedPedido] = useState<PedidoFromCotizacion | null>(null);
    const [activeTab, setActiveTab] = useState<'cotizaciones' | 'pedidos'>('cotizaciones');

    const itemsPerPage = 8;

    // Función para formatear fechas (similar a Clientes)
    const formatDate = (dateString: string): string => {
        if (!dateString) return "N/A";

        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) return dateString;

            return date.toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        } catch {
            return dateString;
        }
    };

    // Función para formatear moneda
    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN'
        }).format(amount);
    };

    // Funciones de ordenamiento (similar a Clientes)
    const handleSortCotizaciones = (key: string) => {
        let direction: "asc" | "desc" = "asc";
        if (
            sortConfigCotizaciones &&
            sortConfigCotizaciones.key === key &&
            sortConfigCotizaciones.direction === "asc"
        ) {
            direction = "desc";
        }
        setSortConfigCotizaciones({ key, direction });
    };

    const handleSortPedidos = (key: string) => {
        let direction: "asc" | "desc" = "asc";
        if (
            sortConfigPedidos &&
            sortConfigPedidos.key === key &&
            sortConfigPedidos.direction === "asc"
        ) {
            direction = "desc";
        }
        setSortConfigPedidos({ key, direction });
    };

    const sortItems = <T,>(items: T[], sortConfig: { key: string; direction: "asc" | "desc" } | null): T[] => {
        if (!sortConfig) return items;

        return [...items].sort((a: any, b: any) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            if (aValue == null && bValue == null) return 0;
            if (aValue == null) return sortConfig.direction === "asc" ? -1 : 1;
            if (bValue == null) return sortConfig.direction === "asc" ? 1 : -1;

            // Ordenamiento para fechas
            if (sortConfig.key.includes('fecha')) {
                const aDate = new Date(aValue).getTime();
                const bDate = new Date(bValue).getTime();
                if (sortConfig.direction === "asc") {
                    return aDate - bDate;
                } else {
                    return bDate - aDate;
                }
            }

            // Ordenamiento para números
            if (typeof aValue === 'number' && typeof bValue === 'number') {
                if (sortConfig.direction === "asc") {
                    return aValue - bValue;
                } else {
                    return bValue - aValue;
                }
            }

            // Ordenamiento para texto
            const aString = String(aValue).toLowerCase();
            const bString = String(bValue).toLowerCase();

            if (aString < bString) {
                return sortConfig.direction === "asc" ? -1 : 1;
            }
            if (aString > bString) {
                return sortConfig.direction === "asc" ? 1 : -1;
            }
            return 0;
        });
    };

    // Datos ordenados
    const sortedCotizaciones = useMemo(() => {
        return sortItems(mockCotizaciones, sortConfigCotizaciones);
    }, [sortConfigCotizaciones]);

    const sortedPedidos = useMemo(() => {
        return sortItems(mockPedidos, sortConfigPedidos);
    }, [sortConfigPedidos]);

    const getCurrentItems = <T,>(items: T[], currentPage: number): T[] => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return items.slice(startIndex, startIndex + itemsPerPage);
    };

    // Componentes de tabla para cotizaciones
    const TableHeaderCotizaciones = () => (
        <thead className="bg-cyan-900 text-white border border-gray-500 h-10 text-xs lg:text-md xl:text-base">
            <tr>
                {[
                    { key: "id", label: "ID" },
                    { key: "clienteNombre", label: "Cliente" },
                    { key: "fechaCreacion", label: "Fecha Creación" },
                    { key: "estado", label: "Estado" },
                    { key: "total", label: "Total" },
                    { key: "items", label: "Productos" },
                ].map(({ key, label }) => (
                    <th
                        key={key}
                        scope="col"
                        className="border border-gray-500 px-2 py-1"
                    >
                        <div className="flex items-center justify-between">
                            {label}
                            <button
                                onClick={() => handleSortCotizaciones(key)}
                                className="text-xs p-1 hover:bg-gray-300 rounded transition-colors"
                                title={`Ordenar por ${label}`}
                            >
                                {sortConfigCotizaciones?.key === key
                                    ? sortConfigCotizaciones.direction === "asc"
                                        ? "↑"
                                        : "↓"
                                    : "⇅"}
                            </button>
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    );

    const TableBodyCotizaciones = () => (
        <tbody className="text-center text-xs lg:text-md xl:text-base border border-gray-500">
            {getCurrentItems(sortedCotizaciones, currentPageCotizaciones).map((cotizacion) => (
                <tr
                    key={cotizacion.id}
                    className="h-10 hover:bg-cyan-700/20 cursor-pointer"
                    onClick={() => setSelectedCotizacion(cotizacion)}
                >
                    <th scope="row" className="border border-gray-500">
                        {cotizacion.id}
                    </th>
                    <td className="border border-gray-500">{cotizacion.clienteNombre}</td>
                    <td className="border border-gray-500">{formatDate(cotizacion.fechaCreacion)}</td>
                    <td className="border border-gray-500">
                        <span className={`px-2 py-1 rounded-full text-xs ${cotizacion.estado === 'enviada' ? 'bg-blue-100 text-blue-800' :
                                cotizacion.estado === 'aceptada' ? 'bg-green-100 text-green-800' :
                                    cotizacion.estado === 'pendiente' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-red-100 text-red-800'
                            }`}>
                            {cotizacion.estado}
                        </span>
                    </td>
                    <td className="border border-gray-500">{formatCurrency(cotizacion.total)}</td>
                    <td className="border border-gray-500">{cotizacion.items.length}</td>
                </tr>
            ))}
        </tbody>
    );

    // Componentes de tabla para pedidos
    const TableHeaderPedidos = () => (
        <thead className="bg-cyan-900 text-white border border-gray-500 h-10 text-xs lg:text-md xl:text-base">
            <tr>
                {[
                    { key: "id", label: "ID" },
                    { key: "clienteNombre", label: "Cliente" },
                    { key: "fechaPedido", label: "Fecha Pedido" },
                    { key: "estado", label: "Estado" },
                    { key: "total", label: "Total" },
                    { key: "metodoPago", label: "Método Pago" },
                ].map(({ key, label }) => (
                    <th
                        key={key}
                        scope="col"
                        className="border border-gray-500 px-2 py-1"
                    >
                        <div className="flex items-center justify-between">
                            {label}
                            <button
                                onClick={() => handleSortPedidos(key)}
                                className="text-xs p-1 hover:bg-gray-300 rounded transition-colors"
                                title={`Ordenar por ${label}`}
                            >
                                {sortConfigPedidos?.key === key
                                    ? sortConfigPedidos.direction === "asc"
                                        ? "↑"
                                        : "↓"
                                    : "⇅"}
                            </button>
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    );

    const TableBodyPedidos = () => (
        <tbody className="text-center text-xs lg:text-md xl:text-base border border-gray-500">
            {getCurrentItems(sortedPedidos, currentPagePedidos).map((pedido) => (
                <tr
                    key={pedido.id}
                    className="h-10 hover:bg-cyan-700/20 cursor-pointer"
                    onClick={() => setSelectedPedido(pedido)}
                >
                    <th scope="row" className="border border-gray-500">
                        {pedido.id}
                    </th>
                    <td className="border border-gray-500">{pedido.clienteNombre}</td>
                    <td className="border border-gray-500">{formatDate(pedido.fechaPedido)}</td>
                    <td className="border border-gray-500">
                        <span className={`px-2 py-1 rounded-full text-xs ${pedido.estado === 'confirmado' ? 'bg-green-100 text-green-800' :
                                pedido.estado === 'en_proceso' ? 'bg-blue-100 text-blue-800' :
                                    pedido.estado === 'enviado' ? 'bg-purple-100 text-purple-800' :
                                        pedido.estado === 'entregado' ? 'bg-gray-100 text-gray-800' :
                                            'bg-yellow-100 text-yellow-800'
                            }`}>
                            {pedido.estado.replace('_', ' ')}
                        </span>
                    </td>
                    <td className="border border-gray-500">{formatCurrency(pedido.total)}</td>
                    <td className="border border-gray-500">{pedido.metodoPago}</td>
                </tr>
            ))}
        </tbody>
    );

    // Modal para detalles de cotización
    const ModalCotizacion = () => {
        if (!selectedCotizacion) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-semibold text-gray-800">
                                Cotización #{selectedCotizacion.id}
                            </h3>
                            <button
                                onClick={() => setSelectedCotizacion(null)}
                                className="text-gray-500 hover:text-gray-700 text-2xl"
                            >
                                ×
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h4 className="font-semibold text-lg mb-3 text-cyan-800">Información del Cliente</h4>
                                <div className="space-y-2">
                                    <p><strong>Nombre:</strong> {selectedCotizacion.clienteNombre}</p>
                                    <p><strong>Email:</strong> {selectedCotizacion.clienteEmail}</p>
                                    <p><strong>Teléfono:</strong> {selectedCotizacion.clienteTelefono}</p>
                                    <p><strong>Estado:</strong> 
                                        <span className={`ml-2 px-2 py-1 rounded-full text-xs ${selectedCotizacion.estado === 'enviada' ? 'bg-blue-100 text-blue-800' :
                                            selectedCotizacion.estado === 'aceptada' ? 'bg-green-100 text-green-800' :
                                                selectedCotizacion.estado === 'pendiente' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'
                                            }`}>
                                            {selectedCotizacion.estado}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-3 text-cyan-800">Fechas</h4>
                                <div className="space-y-2">
                                    <p><strong>Creación:</strong> {formatDate(selectedCotizacion.fechaCreacion)}</p>
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

    // Modal para detalles de pedido
    const ModalPedido = () => {
        if (!selectedPedido) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-semibold text-gray-800">
                                Pedido #{selectedPedido.id}
                            </h3>
                            <button
                                onClick={() => setSelectedPedido(null)}
                                className="text-gray-500 hover:text-gray-700 text-2xl"
                            >
                                ×
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h4 className="font-semibold text-lg mb-3 text-cyan-800">Información del Pedido</h4>
                                <div className="space-y-2">
                                    <p><strong>Cliente:</strong> {selectedPedido.clienteNombre}</p>
                                    <p><strong>Fecha Pedido:</strong> {formatDate(selectedPedido.fechaPedido)}</p>
                                    <p><strong>Estado:</strong> 
                                        <span className={`ml-2 px-2 py-1 rounded-full text-xs ${selectedPedido.estado === 'confirmado' ? 'bg-green-100 text-green-800' :
                                            selectedPedido.estado === 'en_proceso' ? 'bg-blue-100 text-blue-800' :
                                                selectedPedido.estado === 'enviado' ? 'bg-purple-100 text-purple-800' :
                                                    selectedPedido.estado === 'entregado' ? 'bg-gray-100 text-gray-800' :
                                                        'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {selectedPedido.estado.replace('_', ' ')}
                                        </span>
                                    </p>
                                    <p><strong>Método Pago:</strong> {selectedPedido.metodoPago}</p>
                                    {selectedPedido.numeroSeguimiento && (
                                        <p><strong>N° Seguimiento:</strong> {selectedPedido.numeroSeguimiento}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-3 text-cyan-800">Dirección de Entrega</h4>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p>{selectedPedido.domicilioEntrega.calle} #{selectedPedido.domicilioEntrega.numeroExterior}</p>
                                    <p>{selectedPedido.domicilioEntrega.colonia}, {selectedPedido.domicilioEntrega.ciudad}</p>
                                    <p>{selectedPedido.domicilioEntrega.estado}, C.P. {selectedPedido.domicilioEntrega.codigoPostal}</p>
                                    <p className="text-sm text-gray-600 mt-2">
                                        <strong>Referencias:</strong> {selectedPedido.domicilioEntrega.referencias}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {selectedPedido.fechaEntregaEstimada && (
                            <div className="mb-6">
                                <h4 className="font-semibold text-lg mb-3 text-cyan-800">Entrega Estimada</h4>
                                <p className="text-lg">{formatDate(selectedPedido.fechaEntregaEstimada)}</p>
                            </div>
                        )}

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
                                <p className="text-lg"><strong>Subtotal:</strong> {formatCurrency(selectedPedido.subtotal)}</p>
                                <p className="text-lg"><strong>IVA (16%):</strong> {formatCurrency(selectedPedido.iva)}</p>
                                <p className="text-2xl font-bold text-cyan-800"><strong>Total:</strong> {formatCurrency(selectedPedido.total)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="w-11/12 mx-auto mt-8">
                <h1 className="text-3xl font-semibold mb-4">Cotizaciones y Pedidos</h1>
            </div>

            {/* Tabs de navegación */}
            <div className="w-11/12 mx-auto mb-6">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8">
                        <button
                            onClick={() => setActiveTab('cotizaciones')}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'cotizaciones'
                                    ? 'border-cyan-500 text-cyan-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            Cotizaciones ({mockCotizaciones.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('pedidos')}
                            className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'pedidos'
                                    ? 'border-cyan-500 text-cyan-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            Pedidos ({mockPedidos.length})
                        </button>
                    </nav>
                </div>
            </div>

            {/* Sección de Cotizaciones */}
            {activeTab === 'cotizaciones' && (
                <div className="w-11/12 mx-auto mb-8">
                    <h2 className="text-lg font-semibold mb-3">Cotizaciones Pendientes y Enviadas</h2>
                    <table className="w-full border border-gray-500">
                        <TableHeaderCotizaciones />
                        <TableBodyCotizaciones />
                    </table>

                    {/* Paginación para cotizaciones */}
                    {sortedCotizaciones.length > itemsPerPage && (
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={() => setCurrentPageCotizaciones(prev => Math.max(prev - 1, 1))}
                                disabled={currentPageCotizaciones === 1}
                                className="mx-1 px-3 py-1 bg-cyan-700 text-white rounded disabled:opacity-50"
                            >
                                Anterior
                            </button>
                            <span className="mx-3 py-1">
                                Página {currentPageCotizaciones} de {Math.ceil(sortedCotizaciones.length / itemsPerPage)}
                            </span>
                            <button
                                onClick={() => setCurrentPageCotizaciones(prev =>
                                    prev < Math.ceil(sortedCotizaciones.length / itemsPerPage) ? prev + 1 : prev
                                )}
                                disabled={currentPageCotizaciones >= Math.ceil(sortedCotizaciones.length / itemsPerPage)}
                                className="mx-1 px-3 py-1 bg-cyan-700 text-white rounded disabled:opacity-50"
                            >
                                Siguiente
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* Sección de Pedidos */}
            {activeTab === 'pedidos' && (
                <div className="w-11/12 mx-auto mb-8">
                    <h2 className="text-lg font-semibold mb-3">Pedidos Confirmados</h2>
                    <table className="w-full border border-gray-500">
                        <TableHeaderPedidos />
                        <TableBodyPedidos />
                    </table>

                    {/* Paginación para pedidos */}
                    {sortedPedidos.length > itemsPerPage && (
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={() => setCurrentPagePedidos(prev => Math.max(prev - 1, 1))}
                                disabled={currentPagePedidos === 1}
                                className="mx-1 px-3 py-1 bg-cyan-700 text-white rounded disabled:opacity-50"
                            >
                                Anterior
                            </button>
                            <span className="mx-3 py-1">
                                Página {currentPagePedidos} de {Math.ceil(sortedPedidos.length / itemsPerPage)}
                            </span>
                            <button
                                onClick={() => setCurrentPagePedidos(prev =>
                                    prev < Math.ceil(sortedPedidos.length / itemsPerPage) ? prev + 1 : prev
                                )}
                                disabled={currentPagePedidos >= Math.ceil(sortedPedidos.length / itemsPerPage)}
                                className="mx-1 px-3 py-1 bg-cyan-700 text-white rounded disabled:opacity-50"
                            >
                                Siguiente
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* Modales para detalles */}
            <ModalCotizacion />
            <ModalPedido />
        </div>
    );
};

export default Analisis;