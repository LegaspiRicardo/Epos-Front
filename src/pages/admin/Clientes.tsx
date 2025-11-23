// src/pages/admin/Clientes.tsx
import { useState, useMemo } from "react";
import type { User } from "../../types/User";
import { mockUsers } from "../../data/mockUsers";
import ClienteDetailModal from "../../components/modals/ClienteDetailModal";
import MetricCards from "../../components/sections/admin/MetricCards";


const Clientes = () => {
  // Estados independientes para cada tabla
  const [sortConfigClientes, setSortConfigClientes] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const [sortConfigRegistrados, setSortConfigRegistrados] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const [currentPageClientes, setCurrentPageClientes] = useState(1);
  const [currentPageRegistrados, setCurrentPageRegistrados] = useState(1);
  const [selectedCliente, setSelectedCliente] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemsPerPage = 8;

  // Función para formatear fechas
  const formatDate = (dateString: string): string => {
    if (!dateString || dateString === "Sin pedidos") return "Sin pedidos";

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


  const handleClienteClick = (cliente: User) => {
    setSelectedCliente(cliente);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCliente(null);
  };

  const handleSortClientes = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfigClientes &&
      sortConfigClientes.key === key &&
      sortConfigClientes.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfigClientes({ key, direction });
  };

  const handleSortRegistrados = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfigRegistrados &&
      sortConfigRegistrados.key === key &&
      sortConfigRegistrados.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfigRegistrados({ key, direction });
  };

  const sortItems = (items: User[], sortConfig: { key: string; direction: "asc" | "desc" } | null) => {
    if (!sortConfig) return items;

    return [...items].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof User];
      const bValue = b[sortConfig.key as keyof User];

      // Manejar valores undefined o null
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return sortConfig.direction === "asc" ? -1 : 1;
      if (bValue == null) return sortConfig.direction === "asc" ? 1 : -1;

      // Ordenamiento especial para campos numéricos
      if (sortConfig.key === 'id') {
        const aNum = Number(aValue);
        const bNum = Number(bValue);
        if (sortConfig.direction === "asc") {
          return aNum - bNum;
        } else {
          return bNum - aNum;
        }
      }

      // Ordenamiento especial para fechas
      if (sortConfig.key === 'fechaRegistro' || sortConfig.key === 'ultimoPedido') {
        // Convertir a Date objects para ordenar correctamente
        const aDate = new Date(aValue as string).getTime();
        const bDate = new Date(bValue as string).getTime();

        if (sortConfig.direction === "asc") {
          return aDate - bDate;
        } else {
          return bDate - aDate;
        }
      }

      // Ordenamiento por texto para otros campos
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

  // Usar mockUsers en lugar de usuarios
  const sortedUsuariosClientes = useMemo(() => {
    const clientes = mockUsers.filter(user => user.rol === "cliente");
    return sortItems(clientes, sortConfigClientes);
  }, [sortConfigClientes]);

  const sortedUsuariosRegistrados = useMemo(() => {
    const registrados = mockUsers.filter(user => user.rol === "registrado");
    return sortItems(registrados, sortConfigRegistrados);
  }, [sortConfigRegistrados]);

  const getCurrentItems = (items: User[], currentPage: number) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };


  const TableHeaderClientes = () => (
    <thead className="bg-cyan-900 text-white border border-gray-500 h-10 text-xs lg:text-md xl:text-base">
      <tr>
        {[
          { key: "id", label: "ID" },
          { key: "nombre", label: "Nombre" },
          { key: "apellidos", label: "Apellidos" },
          { key: "email", label: "Email" },
          { key: "telefono", label: "Teléfono" },
          { key: "fechaRegistro", label: "Fecha Registro" },
          { key: "ultimoPedido", label: "Último Pedido" },
        ].map(({ key, label }) => (
          <th
            key={key}
            scope="col"
            className="border border-gray-500 px-2 py-1"
          >
            <div className="flex items-center justify-between">
              {label}
              <button
                onClick={() => handleSortClientes(key)}
                className="text-xs p-1 hover:bg-gray-300 rounded transition-colors"
                title={`Ordenar por ${label}`}
              >
                {sortConfigClientes?.key === key
                  ? sortConfigClientes.direction === "asc"
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

  const TableHeaderRegistrados = () => (
    <thead className="bg-cyan-900 text-white border border-gray-500 h-10 text-xs lg:text-md xl:text-base">
      <tr>
        {[
          { key: "id", label: "ID" },
          { key: "nombre", label: "Nombre" },
          { key: "apellidos", label: "Apellidos" },
          { key: "email", label: "Email" },
          { key: "telefono", label: "Teléfono" },
          { key: "fechaRegistro", label: "Fecha Registro" },
          { key: "ultimoPedido", label: "Último Pedido" },
        ].map(({ key, label }) => (
          <th
            key={key}
            scope="col"
            className="border border-gray-500 px-2 py-1"
          >
            <div className="flex items-center justify-between">
              {label}
              <button
                onClick={() => handleSortRegistrados(key)}
                className="text-xs p-1 hover:bg-gray-300 rounded transition-colors"
                title={`Ordenar por ${label}`}
              >
                {sortConfigRegistrados?.key === key
                  ? sortConfigRegistrados.direction === "asc"
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

  const TableBody = ({ items }: { items: User[] }) => (
    <tbody className="text-center text-xs lg:text-md xl:text-base border border-gray-500">
      {items.map((usuario) => (
        <tr
          key={usuario.id}
          className="h-10 hover:bg-cyan-700/20 cursor-pointer"
          onClick={() => handleClienteClick(usuario)}
        >
          <th scope="row" className="border border-gray-500">
            {usuario.id}
          </th>
          <td className="border border-gray-500">{usuario.nombre}</td>
          <td className="border border-gray-500">{usuario.apellidos}</td>
          <td className="border border-gray-500">{usuario.email}</td>
          <td className="border border-gray-500">{usuario.telefono}</td>
          <td className="border border-gray-500">{formatDate(usuario.fechaRegistro)}</td>
          <td className="border border-gray-500">
            {formatDate(usuario.ultimoPedido || "Sin pedidos")}
          </td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div>
      <div className="lg:w-11/12 md:w-10/12 w-8/12 mx-auto mt-4">
        <h1 className="text-3xl font-semibold mb-4">Gestión de Clientes</h1>
      </div>

      <MetricCards usuarios={mockUsers} />

      {/* Sección de Clientes (con pedidos) */}
      <div className="w-11/12 mx-auto mb-8">
        <h2 className="text-lg font-semibold mb-3">Clientes con Pedidos</h2>
        <table className="w-full border border-gray-500">
          <TableHeaderClientes />
          <TableBody items={getCurrentItems(sortedUsuariosClientes, currentPageClientes)} />
        </table>

        {/* Paginación independiente para clientes */}
        {sortedUsuariosClientes.length > itemsPerPage && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setCurrentPageClientes(prev => Math.max(prev - 1, 1))}
              disabled={currentPageClientes === 1}
              className="mx-1 px-3 py-1 bg-cyan-700 text-white rounded disabled:opacity-50"
            >
              Anterior
            </button>
            <span className="mx-3 py-1">
              Página {currentPageClientes} de {Math.ceil(sortedUsuariosClientes.length / itemsPerPage)}
            </span>
            <button
              onClick={() => setCurrentPageClientes(prev =>
                prev < Math.ceil(sortedUsuariosClientes.length / itemsPerPage) ? prev + 1 : prev
              )}
              disabled={currentPageClientes >= Math.ceil(sortedUsuariosClientes.length / itemsPerPage)}
              className="mx-1 px-3 py-1 bg-cyan-700 text-white rounded disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>

      {/* Sección de Usuarios Registrados (sin pedidos) */}
      <div className="w-11/12 mx-auto pt-8 pb-16">
        <h2 className="text-lg font-semibold mb-3">Usuarios Registrados</h2>
        <table className="w-full border border-gray-500">
          <TableHeaderRegistrados />
          <TableBody items={getCurrentItems(sortedUsuariosRegistrados, currentPageRegistrados)} />
        </table>

        {/* Paginación independiente para usuarios registrados */}
        {sortedUsuariosRegistrados.length > itemsPerPage && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setCurrentPageRegistrados(prev => Math.max(prev - 1, 1))}
              disabled={currentPageRegistrados === 1}
              className="mx-1 px-3 py-1 bg-cyan-700 text-white rounded disabled:opacity-50"
            >
              Anterior
            </button>
            <span className="mx-3 py-1">
              Página {currentPageRegistrados} de {Math.ceil(sortedUsuariosRegistrados.length / itemsPerPage)}
            </span>
            <button
              onClick={() => setCurrentPageRegistrados(prev =>
                prev < Math.ceil(sortedUsuariosRegistrados.length / itemsPerPage) ? prev + 1 : prev
              )}
              disabled={currentPageRegistrados >= Math.ceil(sortedUsuariosRegistrados.length / itemsPerPage)}
              className="mx-1 px-3 py-1 bg-cyan-700 text-white rounded disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>

      {/* Modal de detalle del cliente  */}
      <ClienteDetailModal
        cliente={selectedCliente}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Clientes;