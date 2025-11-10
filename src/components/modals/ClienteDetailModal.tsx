// src/components/modals/ClienteDetailModal.tsx
import type { User, Domicilio } from "../../types/User";

interface ClienteDetailModalProps {
  cliente: User | null;
  isOpen: boolean;
  onClose: () => void;
}

const ClienteDetailModal = ({ cliente, isOpen, onClose }: ClienteDetailModalProps) => {
  if (!isOpen || !cliente) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-cyan-900 text-white p-4 rounded-t-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              Información del Cliente
            </h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6">
          {/* Información Básica */}
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="font-semibold text-gray-700">Nombre:</label>
                <p className="mt-1">{cliente.nombre} {cliente.apellidos}</p>
              </div>
              <div>
                <label className="font-semibold text-gray-700">Email:</label>
                <p className="mt-1">{cliente.email}</p>
              </div>
              <div>
                <label className="font-semibold text-gray-700">Teléfono:</label>
                <p className="mt-1">{cliente.telefono}</p>
              </div>
              <div>
                <label className="font-semibold text-gray-700">Estado:</label>
                <span className={`mt-1 inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                  cliente.status === "activo" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {cliente.status.toUpperCase()}
                </span>
              </div>
              <div>
                <label className="font-semibold text-gray-700">Fecha de Registro:</label>
                <p className="mt-1">{cliente.fechaRegistro}</p>
              </div>
              <div>
                <label className="font-semibold text-gray-700">Último Pedido:</label>
                <p className="mt-1">{cliente.ultimoPedido || "Sin pedidos"}</p>
              </div>
            </div>
          </div>

          {/* Domicilios */}
          <div className="py-6">
            <h3 className="text-lg font-semibold mb-4 text-cyan-900 border-b pb-2">
              Domicilios ({cliente.domicilios?.length || 0})
            </h3>
            {cliente.domicilios && cliente.domicilios.length > 0 ? (
              <div className="space-y-4">
                {cliente.domicilios.map((domicilio: Domicilio) => (
                  <div
                    key={domicilio.id}
                    className={`border rounded-lg p-4 ${
                      domicilio.principal ? "border-cyan-500 bg-cyan-50" : "border-gray-200"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-gray-700">
                        {domicilio.tipo.toUpperCase()}
                        {domicilio.principal && (
                          <span className="ml-2 bg-cyan-500 text-white px-2 py-1 rounded-full text-xs">
                            PRINCIPAL
                          </span>
                        )}
                      </span>
                    </div>
                    <p className="text-gray-600">
                      {domicilio.calle} #{domicilio.numero}
                    </p>
                    <p className="text-gray-600">
                      {domicilio.colonia}, {domicilio.ciudad}
                    </p>
                    <p className="text-gray-600">
                      {domicilio.estado}, C.P. {domicilio.codigoPostal}
                    </p>
                    {domicilio.referencias && (
                      <p className="text-gray-500 text-sm mt-2">
                        <span className="font-semibold">Referencias:</span> {domicilio.referencias}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">
                No hay domicilios registrados
              </p>
            )}
          </div>

          {/* Estadísticas */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-900 border-b pb-2">
              Estadísticas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-cyan-900">{cliente.pedidosRealizados || 0}</p>
                <p className="text-gray-600 text-sm">Pedidos Realizados</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-cyan-900">
                  ${cliente.totalGastado?.toLocaleString() || "0"}
                </p>
                <p className="text-gray-600 text-sm">Total Gastado</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-cyan-900">
                  {cliente.domicilios?.length || 0}
                </p>
                <p className="text-gray-600 text-sm">Domicilios</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-cyan-900">
                  {cliente.status === "activo" ? "Activo" : "Inactivo"}
                </p>
                <p className="text-gray-600 text-sm">Estado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3 rounded-b-lg flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClienteDetailModal;