// src/pages/admin/Clientes.tsx
import { useState, useMemo } from "react";
import type { User } from "../../types/User";
import ClienteDetailModal from "../../components/modals/ClienteDetailModal";

// Datos de ejemplo (puedes moverlos a un archivo separado después)
const usuarios: User[] =[
  {
    id: 1,
    nombre: "Ana",
    apellidos: "García Martínez",
    email: "ana.garcia@email.com",
    telefono: "555-123-4567",
    status: "activo",
    rol: "cliente",
    fechaRegistro: "2024-01-15",
    ultimoPedido: "2024-03-20",
    pedidosRealizados: 12,
    totalGastado: 24500,
    domicilios: [
      {
        id: 1,
        calle: "Av. Revolución",
        numero: "123",
        colonia: "Centro",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "06000",
        referencias: "Frente al banco BBVA",
        tipo: "casa",
        principal: true
      },
      {
        id: 2,
        calle: "Calle Morelos",
        numero: "45",
        colonia: "Industrial",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "06500",
        referencias: "Edificio blanco, piso 3",
        tipo: "trabajo",
        principal: false
      }
    ]
  },
  {
    id: 2,
    nombre: "Carlos",
    apellidos: "Rodríguez López",
    email: "carlos.rodriguez@email.com",
    telefono: "555-987-6543",
    status: "activo",
    rol: "cliente",
    fechaRegistro: "2024-01-20",
    ultimoPedido: "2024-03-18",
    pedidosRealizados: 8,
    totalGastado: 18750,
    domicilios: [
      {
        id: 1,
        calle: "Calle Juárez",
        numero: "789",
        colonia: "Del Valle",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "03100",
        referencias: "Esquina con Av. Insurgentes",
        tipo: "casa",
        principal: true
      }
    ]
  },
  {
    id: 3,
    nombre: "María",
    apellidos: "Hernández González",
    email: "maria.hernandez@email.com",
    telefono: "555-456-7890",
    status: "activo",
    rol: "registrado",
    fechaRegistro: "2024-02-10",
    pedidosRealizados: 0,
    totalGastado: 0,
    domicilios: []
  },
  {
    id: 4,
    nombre: "José",
    apellidos: "Martínez Sánchez",
    email: "jose.martinez@email.com",
    telefono: "555-234-5678",
    status: "activo",
    rol: "cliente",
    fechaRegistro: "2024-02-15",
    ultimoPedido: "2024-03-15",
    pedidosRealizados: 15,
    totalGastado: 32500,
    domicilios: [
      {
        id: 1,
        calle: "Av. Chapultepec",
        numero: "456",
        colonia: "Roma Norte",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "06700",
        referencias: "Cerca del metro Insurgentes",
        tipo: "casa",
        principal: true
      }
    ]
  },
  {
    id: 5,
    nombre: "Laura",
    apellidos: "Díaz Ramírez",
    email: "laura.diaz@email.com",
    telefono: "555-345-6789",
    status: "inactivo",
    rol: "cliente",
    fechaRegistro: "2024-01-05",
    ultimoPedido: "2024-02-28",
    pedidosRealizados: 5,
    totalGastado: 8900,
    domicilios: [
      {
        id: 1,
        calle: "Calle Durango",
        numero: "234",
        colonia: "Condesa",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "06140",
        referencias: "Frente al parque México",
        tipo: "casa",
        principal: true
      }
    ]
  },
  {
    id: 6,
    nombre: "Miguel",
    apellidos: "Torres Flores",
    email: "miguel.torres@email.com",
    telefono: "555-567-8901",
    status: "activo",
    rol: "registrado",
    fechaRegistro: "2024-03-01",
    pedidosRealizados: 0,
    totalGastado: 0,
    domicilios: []
  },
  {
    id: 7,
    nombre: "Elena",
    apellidos: "Vargas Castro",
    email: "elena.vargas@email.com",
    telefono: "555-678-9012",
    status: "activo",
    rol: "cliente",
    fechaRegistro: "2024-01-30",
    ultimoPedido: "2024-03-19",
    pedidosRealizados: 20,
    totalGastado: 45200,
    domicilios: [
      {
        id: 1,
        calle: "Av. Patriotismo",
        numero: "567",
        colonia: "San Pedro de los Pinos",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "03800",
        referencias: "Casa color azul",
        tipo: "casa",
        principal: true
      },
      {
        id: 2,
        calle: "Av. Universidad",
        numero: "1200",
        colonia: "Copilco",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "04360",
        referencias: "Departamento 504",
        tipo: "otro",
        principal: false
      }
    ]
  },
  {
    id: 8,
    nombre: "Fernando",
    apellidos: "Morales Ruiz",
    email: "fernando.morales@email.com",
    telefono: "555-789-0123",
    status: "activo",
    rol: "cliente",
    fechaRegistro: "2024-02-22",
    ultimoPedido: "2024-03-17",
    pedidosRealizados: 3,
    totalGastado: 6700,
    domicilios: [
      {
        id: 1,
        calle: "Calle Coahuila",
        numero: "89",
        colonia: "Roma Sur",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "06760",
        referencias: "Entre Durango y Colima",
        tipo: "casa",
        principal: true
      }
    ]
  },
  {
    id: 9,
    nombre: "Sofia",
    apellidos: "Cruz Mendoza",
    email: "sofia.cruz@email.com",
    telefono: "555-890-1234",
    status: "inactivo",
    rol: "registrado",
    fechaRegistro: "2024-02-28",
    pedidosRealizados: 0,
    totalGastado: 0,
    domicilios: []
  },
  {
    id: 10,
    nombre: "Ricardo",
    apellidos: "Ortiz Silva",
    email: "ricardo.ortiz@email.com",
    telefono: "555-901-2345",
    status: "activo",
    rol: "cliente",
    fechaRegistro: "2024-01-12",
    ultimoPedido: "2024-03-21",
    pedidosRealizados: 25,
    totalGastado: 58700,
    domicilios: [
      {
        id: 1,
        calle: "Av. Mazatlán",
        numero: "345",
        colonia: "Condesa",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "06170",
        referencias: "Casa con portón negro",
        tipo: "casa",
        principal: true
      },
      {
        id: 2,
        calle: "Av. Tamaulipas",
        numero: "678",
        colonia: "Condesa",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "06170",
        referencias: "Oficina 203",
        tipo: "trabajo",
        principal: false
      }
    ]
  },
  {
    id: 11,
    nombre: "Gabriela",
    apellidos: "Rios Navarro",
    email: "gabriela.rios@email.com",
    telefono: "555-012-3456",
    status: "activo",
    rol: "registrado",
    fechaRegistro: "2024-03-05",
    pedidosRealizados: 0,
    totalGastado: 0,
    domicilios: []
  },
  {
    id: 12,
    nombre: "Alejandro",
    apellidos: "Mendoza Pérez",
    email: "alejandro.mendoza@email.com",
    telefono: "555-123-7890",
    status: "activo",
    rol: "cliente",
    fechaRegistro: "2024-01-08",
    ultimoPedido: "2024-03-16",
    pedidosRealizados: 18,
    totalGastado: 41200,
    domicilios: [
      {
        id: 1,
        calle: "Calle Oaxaca",
        numero: "156",
        colonia: "Roma Norte",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "06700",
        referencias: "Edificio de departamentos",
        tipo: "casa",
        principal: true
      }
    ]
  },
  {
    id: 13,
    nombre: "Patricia",
    apellidos: "Lara Guzmán",
    email: "patricia.lara@email.com",
    telefono: "555-234-8901",
    status: "inactivo",
    rol: "cliente",
    fechaRegistro: "2024-02-05",
    ultimoPedido: "2024-02-20",
    pedidosRealizados: 2,
    totalGastado: 4500,
    domicilios: [
      {
        id: 1,
        calle: "Av. Yucatán",
        numero: "267",
        colonia: "Roma Sur",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "06760",
        referencias: "Casa color rosa",
        tipo: "casa",
        principal: true
      }
    ]
  },
  {
    id: 14,
    nombre: "Roberto",
    apellidos: "Soto Jiménez",
    email: "roberto.soto@email.com",
    telefono: "555-345-9012",
    status: "activo",
    rol: "registrado",
    fechaRegistro: "2024-03-10",
    pedidosRealizados: 0,
    totalGastado: 0,
    domicilios: []
  },
  {
    id: 15,
    nombre: "Carmen",
    apellidos: "Castillo Vega",
    email: "carmen.castillo@email.com",
    telefono: "555-456-0123",
    status: "activo",
    rol: "cliente",
    fechaRegistro: "2024-01-25",
    ultimoPedido: "2024-03-22",
    pedidosRealizados: 30,
    totalGastado: 72300,
    domicilios: [
      {
        id: 1,
        calle: "Av. Álvaro Obregón",
        numero: "789",
        colonia: "Roma Norte",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "06700",
        referencias: "Local comercial",
        tipo: "trabajo",
        principal: true
      },
      {
        id: 2,
        calle: "Calle Colima",
        numero: "123",
        colonia: "Roma Norte",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "06700",
        referencias: "Departamento 201",
        tipo: "casa",
        principal: false
      }
    ]
  },
  {
    id: 16,
    nombre: "Javier",
    apellidos: "Romero Herrera",
    email: "javier.romero@email.com",
    telefono: "555-567-1234",
    status: "activo",
    rol: "cliente",
    fechaRegistro: "2024-02-18",
    ultimoPedido: "2024-03-14",
    pedidosRealizados: 7,
    totalGastado: 15600,
    domicilios: [
      {
        id: 1,
        calle: "Calle Zacatecas",
        numero: "345",
        colonia: "Condesa",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "06140",
        referencias: "Casa con jardín",
        tipo: "casa",
        principal: true
      }
    ]
  },
  {
    id: 17,
    nombre: "Diana",
    apellidos: "Meza Ortega",
    email: "diana.meza@email.com",
    telefono: "555-678-2345",
    status: "inactivo",
    rol: "registrado",
    fechaRegistro: "2024-03-03",
    pedidosRealizados: 0,
    totalGastado: 0,
    domicilios: []
  },
  {
    id: 18,
    nombre: "Oscar",
    apellidos: "Reyes Delgado",
    email: "oscar.reyes@email.com",
    telefono: "555-789-3456",
    status: "activo",
    rol: "cliente",
    fechaRegistro: "2024-01-18",
    ultimoPedido: "2024-03-23",
    pedidosRealizados: 22,
    totalGastado: 49800,
    domicilios: [
      {
        id: 1,
        calle: "Av. Michoacán",
        numero: "456",
        colonia: "Condesa",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "06170",
        referencias: "Esquina con Nuevo León",
        tipo: "casa",
        principal: true
      }
    ]
  },
  {
    id: 19,
    nombre: "Teresa",
    apellidos: "Acosta Medina",
    email: "teresa.acosta@email.com",
    telefono: "555-890-4567",
    status: "activo",
    rol: "registrado",
    fechaRegistro: "2024-03-08",
    pedidosRealizados: 0,
    totalGastado: 0,
    domicilios: []
  },
  {
    id: 20,
    nombre: "Luis",
    apellidos: "Campos Rojas",
    email: "luis.campos@email.com",
    telefono: "555-901-5678",
    status: "activo",
    rol: "cliente",
    fechaRegistro: "2024-02-14",
    ultimoPedido: "2024-03-24",
    pedidosRealizados: 9,
    totalGastado: 21300,
    domicilios: [
      {
        id: 1,
        calle: "Calle Sonora",
        numero: "189",
        colonia: "Hipódromo",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "06100",
        referencias: "Cerca del hipódromo",
        tipo: "casa",
        principal: true
      },
      {
        id: 2,
        calle: "Av. Veracruz",
        numero: "234",
        colonia: "Condesa",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        codigoPostal: "06170",
        referencias: "Oficina 501",
        tipo: "trabajo",
        principal: false
      }
    ]
  }
];

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

  // CORRECCIÓN: Usar el campo 'tipo' en lugar de 'rol'
  const sortedUsuariosClientes = useMemo(() => {
    const clientes = usuarios.filter(user => user.rol === "cliente");
    return sortItems(clientes, sortConfigClientes);
  }, [sortConfigClientes]);

  const sortedUsuariosRegistrados = useMemo(() => {
    const registrados = usuarios.filter(user => user.rol === "registrado");
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

      {/* Modal de detalle del cliente - CORRECCIÓN: usar las props correctas */}
      <ClienteDetailModal
        cliente={selectedCliente}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Clientes;