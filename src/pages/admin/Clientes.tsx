// src/pages/admin/Clientes.tsx
import { useState, useMemo } from "react";

interface Usuario {
  id: number;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  tipo: "registrado" | "cliente";
  fechaRegistro: string;
  ultimoPedido?: string;
}

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
  const itemsPerPage = 8;

  const usuarios: Usuario[] = [
    {
      id: 1,
      nombre: "Hermenegildo Abraham",
      apellidos: "Zeferino Morales",
      email: "zefeheab@gmail.com",
      telefono: "3354864512",
      tipo: "cliente",
      fechaRegistro: "2024-01-15",
      ultimoPedido: "2024-03-20",
    },
    {
      id: 2,
      nombre: "María",
      apellidos: "García López",
      email: "maria.garcia@email.com",
      telefono: "3354864513",
      tipo: "registrado",
      fechaRegistro: "2024-02-10",
    },
    {
      id: 3,
      nombre: "Carlos",
      apellidos: "Rodríguez Pérez",
      email: "carlos.rodriguez@email.com",
      telefono: "3354864514",
      tipo: "cliente",
      fechaRegistro: "2024-01-20",
      ultimoPedido: "2024-03-18",
    },
    {
      id: 4,
      nombre: "Ana",
      apellidos: "Martínez Sánchez",
      email: "ana.martinez@email.com",
      telefono: "3354864515",
      tipo: "cliente",
      fechaRegistro: "2024-02-05",
      ultimoPedido: "2024-03-22",
    },
    {
      id: 5,
      nombre: "Javier",
      apellidos: "Hernández González",
      email: "javier.hernandez@email.com",
      telefono: "3354864516",
      tipo: "registrado",
      fechaRegistro: "2024-03-01",
    },
    {
      id: 6,
      nombre: "Laura",
      apellidos: "Díaz Castro",
      email: "laura.diaz@email.com",
      telefono: "3354864517",
      tipo: "cliente",
      fechaRegistro: "2024-01-30",
      ultimoPedido: "2024-03-15",
    },
    {
      id: 7,
      nombre: "Miguel",
      apellidos: "Torres Ramírez",
      email: "miguel.torres@email.com",
      telefono: "3354864518",
      tipo: "registrado",
      fechaRegistro: "2024-02-28",
    },
    {
      id: 8,
      nombre: "Elena",
      apellidos: "Flores Ortega",
      email: "elena.flores@email.com",
      telefono: "3354864519",
      tipo: "cliente",
      fechaRegistro: "2024-02-14",
      ultimoPedido: "2024-03-25",
    },
    {
      id: 9,
      nombre: "Roberto",
      apellidos: "Vargas Mendoza",
      email: "roberto.vargas@email.com",
      telefono: "3354864520",
      tipo: "registrado",
      fechaRegistro: "2024-03-10",
    },
    {
      id: 10,
      nombre: "Sofía",
      apellidos: "Ríos Navarro",
      email: "sofia.rios@email.com",
      telefono: "3354864521",
      tipo: "cliente",
      fechaRegistro: "2024-01-25",
      ultimoPedido: "2024-03-19",
    },
    {
      id: 11,
      nombre: "Diego",
      apellidos: "Silva Romero",
      email: "diego.silva@email.com",
      telefono: "3354864522",
      tipo: "cliente",
      fechaRegistro: "2024-02-08",
      ultimoPedido: "2024-03-21",
    },
    {
      id: 12,
      nombre: "Patricia",
      apellidos: "Molina Herrera",
      email: "patricia.molina@email.com",
      telefono: "3354864523",
      tipo: "registrado",
      fechaRegistro: "2024-03-05",
    },
    {
      id: 13,
      nombre: "Fernando",
      apellidos: "Cruz Domínguez",
      email: "fernando.cruz@email.com",
      telefono: "3354864524",
      tipo: "cliente",
      fechaRegistro: "2024-01-18",
      ultimoPedido: "2024-03-16",
    },
    {
      id: 14,
      nombre: "Gabriela",
      apellidos: "Reyes Paredes",
      email: "gabriela.reyes@email.com",
      telefono: "3354864525",
      tipo: "registrado",
      fechaRegistro: "2024-02-22",
    },
    {
      id: 15,
      nombre: "Ricardo",
      apellidos: "Ortiz Campos",
      email: "ricardo.ortiz@email.com",
      telefono: "3354864526",
      tipo: "cliente",
      fechaRegistro: "2024-02-12",
      ultimoPedido: "2024-03-24",
    },
    {
      id: 16,
      nombre: "Isabel",
      apellidos: "Guerrero Vega",
      email: "isabel.guerrero@email.com",
      telefono: "3354864527",
      tipo: "registrado",
      fechaRegistro: "2024-03-08",
    },
    {
      id: 17,
      nombre: "Oscar",
      apellidos: "Nuñez Rojas",
      email: "oscar.nunez@email.com",
      telefono: "3354864528",
      tipo: "cliente",
      fechaRegistro: "2024-01-28",
      ultimoPedido: "2024-03-17",
    },
    {
      id: 18,
      nombre: "Carmen",
      apellidos: "Medina Fuentes",
      email: "carmen.medina@email.com",
      telefono: "3354864529",
      tipo: "cliente",
      fechaRegistro: "2024-02-17",
      ultimoPedido: "2024-03-23",
    },
    {
      id: 19,
      nombre: "Héctor",
      apellidos: "Santos León",
      email: "hector.santos@email.com",
      telefono: "3354864530",
      tipo: "registrado",
      fechaRegistro: "2024-03-12",
    },
    {
      id: 20,
      nombre: "Adriana",
      apellidos: "Castillo Mora",
      email: "adriana.castillo@email.com",
      telefono: "3354864531",
      tipo: "cliente",
      fechaRegistro: "2024-02-03",
      ultimoPedido: "2024-03-26",
    },
    {
      id: 21,
      nombre: "Raúl",
      apellidos: "Lara Salazar",
      email: "raul.lara@email.com",
      telefono: "3354864532",
      tipo: "registrado",
      fechaRegistro: "2024-03-15",
    },
    {
      id: 22,
      nombre: "Teresa",
      apellidos: "Cortés Espinoza",
      email: "teresa.cortes@email.com",
      telefono: "3354864533",
      tipo: "cliente",
      fechaRegistro: "2024-01-22",
      ultimoPedido: "2024-03-14",
    },
    {
      id: 23,
      nombre: "Francisco",
      apellidos: "Mejía Cordero",
      email: "francisco.mejia@email.com",
      telefono: "3354864534",
      tipo: "registrado",
      fechaRegistro: "2024-02-25",
    },
    {
      id: 24,
      nombre: "Lucía",
      apellidos: "Peña Valdez",
      email: "lucia.pena@email.com",
      telefono: "3354864535",
      tipo: "cliente",
      fechaRegistro: "2024-02-09",
      ultimoPedido: "2024-03-27",
    },
    {
      id: 25,
      nombre: "Arturo",
      apellidos: "Delgado Ríos",
      email: "arturo.delgado@email.com",
      telefono: "3354864536",
      tipo: "registrado",
      fechaRegistro: "2024-03-03",
    },
    {
      id: 26,
      nombre: "Rosa",
      apellidos: "Vega Montes",
      email: "rosa.vega@email.com",
      telefono: "3354864537",
      tipo: "cliente",
      fechaRegistro: "2024-01-17",
      ultimoPedido: "2024-03-13",
    },
    {
      id: 27,
      nombre: "Manuel",
      apellidos: "Cabrera Ponce",
      email: "manuel.cabrera@email.com",
      telefono: "3354864538",
      tipo: "registrado",
      fechaRegistro: "2024-02-19",
    },
    {
      id: 28,
      nombre: "Verónica",
      apellidos: "Miranda Solís",
      email: "veronica.miranda@email.com",
      telefono: "3354864539",
      tipo: "cliente",
      fechaRegistro: "2024-02-11",
      ultimoPedido: "2024-03-28",
    },
    {
      id: 29,
      nombre: "Alberto",
      apellidos: "Rangel Serrano",
      email: "alberto.rangel@email.com",
      telefono: "3354864540",
      tipo: "registrado",
      fechaRegistro: "2024-03-07",
    },
    {
      id: 30,
      nombre: "Daniela",
      apellidos: "Escamilla Gallegos",
      email: "daniela.escamilla@email.com",
      telefono: "3354864541",
      tipo: "cliente",
      fechaRegistro: "2024-01-19",
      ultimoPedido: "2024-03-29",
    },
  ];

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

  const sortItems = (items: Usuario[], sortConfig: { key: string; direction: "asc" | "desc" } | null) => {
    if (!sortConfig) return items;

    return [...items].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof Usuario];
      const bValue = b[sortConfig.key as keyof Usuario];

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

  const sortedUsuariosClientes = useMemo(() => {
    const clientes = usuarios.filter(user => user.tipo === "cliente");
    return sortItems(clientes, sortConfigClientes);
  }, [usuarios, sortConfigClientes]);

  const sortedUsuariosRegistrados = useMemo(() => {
    const registrados = usuarios.filter(user => user.tipo === "registrado");
    return sortItems(registrados, sortConfigRegistrados);
  }, [usuarios, sortConfigRegistrados]);

  const getCurrentItems = (items: Usuario[], currentPage: number) => {
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

  const TableBody = ({ items }: { items: Usuario[] }) => (
    <tbody className="text-center text-xs lg:text-md xl:text-base border border-gray-500">
      {items.map((usuario) => (
        <tr
          key={usuario.id}
          className="h-10 hover:bg-cyan-700/20 cursor-pointer"
        >
          <th scope="row" className="border border-gray-500">
            {usuario.id}
          </th>
          <td className="border border-gray-500">{usuario.nombre}</td>
          <td className="border border-gray-500">{usuario.apellidos}</td>
          <td className="border border-gray-500">{usuario.email}</td>
          <td className="border border-gray-500">{usuario.telefono}</td>
          <td className="border border-gray-500">{usuario.fechaRegistro}</td>
          <td className="border border-gray-500">
            {usuario.ultimoPedido || "Sin pedidos"}
          </td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div>
      <div className="w-11/12 mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">Gestión de Clientes</h1>
      </div>

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
      <div className="w-11/12 mx-auto">
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
    </div>
  );
};

export default Clientes;