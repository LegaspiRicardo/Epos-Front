// src/components/MetricCards.tsx
import { useMemo } from "react";
import type { User } from "../../../types/User";

interface MetricCardsProps {
    usuarios: User[];
}

const MetricCards = ({ usuarios }: MetricCardsProps) => {
    // Cálculo de métricas
    const metricas = useMemo(() => {
        const totalClientes = usuarios.length;
        const clientesConPedidos = usuarios.filter(user =>
            user.ultimoPedido && user.ultimoPedido !== "Sin pedidos"
        ).length;

        // Clientes nuevos este mes (usando Date objects para comparar correctamente)
        const clientesNuevosEsteMes = usuarios.filter(user => {
            const fechaRegistro = new Date(user.fechaRegistro);
            const ahora = new Date();
            return fechaRegistro.getMonth() === ahora.getMonth() &&
                fechaRegistro.getFullYear() === ahora.getFullYear();
        }).length;

        return {
            totalClientes,
            clientesConPedidos,
            clientesNuevosEsteMes
        };
    }, [usuarios]);

    return (
        <div className="w-11/12 mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Total de Usuarios */}
                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Total de Usuarios</p>
                            <p className="text-2xl font-bold text-gray-900">{metricas.totalClientes}</p>
                        </div>
                    </div>
                </div>

                {/* Clientes con Pedidos */}
                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                        <div className="bg-green-100 p-3 rounded-lg mr-4">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Clientes con Pedidos</p>
                            <p className="text-2xl font-bold text-gray-900">{metricas.clientesConPedidos}</p>
                            <p className="text-xs text-gray-500">
                                {((metricas.clientesConPedidos / metricas.totalClientes) * 100).toFixed(1)}% del total
                            </p>
                        </div>
                    </div>
                </div>

                {/* Usuarios Nuevos Este Mes */}
                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                        <div className="bg-purple-100 p-3 rounded-lg mr-4">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Usuarios Nuevos</p>
                            <p className="text-2xl font-bold text-gray-900">{metricas.clientesNuevosEsteMes}</p>
                            <p className="text-xs text-gray-500">Registrados este mes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MetricCards;