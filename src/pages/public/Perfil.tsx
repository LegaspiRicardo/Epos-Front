import React, { useState } from "react";
import Footer from '../../components/Footer';
import ModalCotizacion from '../../components/modals/ClienteCotizacionModal';
import ModalPedido from '../../components/modals/ClientePedidoModal';
import type { Cotizacion } from '../../types/Cotizacion';
import type { Categoria } from '../../types/Categoria';
import type { Acabado } from '../../types/Acabado';
import type { ItemPedido } from '../../types/Pedido';
import type { Producto } from '../../types/Producto';
import type { Domicilio } from '../../context/PedidoContext';

interface CardItem {
    id: number;
    nombre: string;
    img: string;
    descripcion: string;
    acabado: string;
    precio: number;
}

// Interface para domicilios en el perfil
interface DomicilioPerfil {
    id: number;
    calle: string;
    numero: string;
    colonia: string;
    ciudad: string;
    estado: string;
    codigoPostal: string;
    referencias?: string;
    tipo: "casa" | "negocio" | "otro";
    principal: boolean;
}

// Interface para pedidos en el perfil
interface PedidoPerfil {
    id: number;
    fechaCreacion: string;
    fechaEntregaEstimada: string;
    estado: "pendiente" | "procesando" | "en_transito" | "entregado" | "completado" | "cancelado";
    metodoPago: "transferencia" | "tarjeta" | "efectivo";
    items: ItemPedido[];
    subtotal: number;
    iva: number;
    total: number;
    domicilio?: Domicilio;
    trackingNumber?: string;
    clienteNombre: string;
    clienteEmail: string;
    clienteTelefono: string;
}

const cardData: CardItem[] = [
    { id: 1, nombre: "BR10-046LP", descripcion: "Birlo rueda 3/4 - 16 * 2.375", acabado: "Pavonado", precio: 150, img: "img" },
    { id: 2, nombre: "BR10-046LP", descripcion: "Birlo rueda 3/4 - 16 * 2.375", acabado: "Pavonado", precio: 150, img: "img" },
    { id: 3, nombre: "BR10-046LP", descripcion: "Birlo rueda 3/4 - 16 * 2.375", acabado: "Pavonado", precio: 150, img: "img" },
    { id: 4, nombre: "BR10-046LP", descripcion: "Birlo rueda 3/4 - 16 * 2.375", acabado: "Pavonado", precio: 150, img: "img" },
    { id: 5, nombre: "BR10-046LP", descripcion: "Birlo rueda 3/4 - 16 * 2.375", acabado: "Pavonado", precio: 150, img: "img" },
    { id: 6, nombre: "BR10-046LP", descripcion: "Birlo rueda 3/4 - 16 * 2.375", acabado: "Pavonado", precio: 150, img: "img" },
    { id: 7, nombre: "BR10-046LP", descripcion: "Birlo rueda 3/4 - 16 * 2.375", acabado: "Pavonado", precio: 150, img: "img" },
    { id: 8, nombre: "BR10-046LP", descripcion: "Birlo rueda 3/4 - 16 * 2.375", acabado: "Pavonado", precio: 150, img: "img" },
    { id: 9, nombre: "BR10-046LP", descripcion: "Birlo rueda 3/4 - 16 * 2.375", acabado: "Pavonado", precio: 150, img: "img" },
    { id: 10, nombre: "BR10-046LP", descripcion: "Birlo rueda 3/4 - 16 * 2.375", acabado: "Pavonado", precio: 150, img: "img" },
    { id: 11, nombre: "BR10-046LP", descripcion: "Birlo rueda 3/4 - 16 * 2.375", acabado: "Pavonado", precio: 150, img: "img" },
    { id: 12, nombre: "BR10-046LP", descripcion: "Birlo rueda 3/4 - 16 * 2.375", acabado: "Pavonado", precio: 150, img: "img" },
    { id: 13, nombre: "BR10-046LP", descripcion: "Birlo rueda 3/4 - 16 * 2.375", acabado: "Pavonado", precio: 150, img: "img" },
    { id: 14, nombre: "BR10-046LP", descripcion: "Birlo rueda 3/4 - 16 * 2.375", acabado: "Pavonado", precio: 150, img: "img" },
    { id: 15, nombre: "BR10-046LP", descripcion: "Birlo rueda 3/4 - 16 * 2.375", acabado: "Pavonado", precio: 150, img: "img" },
    { id: 16, nombre: "BR10-046LP", descripcion: "Birlo rueda 3/4 - 16 * 2.375", acabado: "Pavonado", precio: 150, img: "img" },
];

// Objetos mock para categorías y acabados
const categoriaMock: Categoria = {
    id: 1,
    nombre: "Tornillos",
    descripcion: "Tornillos y birlos"
};

const acabadoMock: Acabado = {
    id: 1,
    nombre: "Pavonado"
};

const marcaMock = {
    id: 1,
    nombre: "Marca Genérica"
};

// Mock de productos
const productoMock: Producto = {
    id: 1,
    nombre: "BR10-046LP",
    descripcion: "Birlo rueda 3/4 - 16 * 2.375",
    precio: 150,
    stock: 100,
    status: 'existente',
    id_marca: 1,
    id_categoria: 1,
    id_acabado: 1,
    categoria: categoriaMock,
    acabado: acabadoMock,
    marca: marcaMock
};

const productoMock2: Producto = {
    id: 2,
    nombre: "TR20-100LP",
    descripcion: "Tornillo hexagonal 1/2 - 13 * 3",
    precio: 200,
    stock: 50,
    status: 'existente',
    id_marca: 1,
    id_categoria: 1,
    id_acabado: 1,
    categoria: categoriaMock,
    acabado: acabadoMock,
    marca: marcaMock
};

// Mock de domicilio
const domicilioMock: Domicilio = {
    calle: "Av. Revolución",
    numeroExterior: "123",
    numeroInterior: "",
    colonia: "Centro",
    ciudad: "Guadalajara",
    estado: "Jalisco",
    codigoPostal: "44100",
    referencias: "Frente al parque"
};

// Datos mock para domicilios
const domiciliosData: DomicilioPerfil[] = [
    {
        id: 1,
        calle: "Av. Revolución",
        numero: "123",
        colonia: "Centro",
        ciudad: "Guadalajara",
        estado: "Jalisco",
        codigoPostal: "44100",
        referencias: "Frente al parque",
        tipo: "casa",
        principal: true
    },
    {
        id: 2,
        calle: "Calzada Independencia",
        numero: "456",
        colonia: "Jardines del Sol",
        ciudad: "Zapopan",
        estado: "Jalisco",
        codigoPostal: "45050",
        referencias: "Esquina con Av. Patria",
        tipo: "negocio",
        principal: false
    },
    {
        id: 3,
        calle: "Av. México",
        numero: "789",
        colonia: "Chapultepec",
        ciudad: "Guadalajara",
        estado: "Jalisco",
        codigoPostal: "44600",
        tipo: "casa",
        principal: false
    }
];

// Datos mock para pedidos
const pedidosData: PedidoPerfil[] = [
    {
        id: 1001,
        fechaCreacion: "2024-01-20",
        fechaEntregaEstimada: "2024-01-25",
        estado: "completado",
        metodoPago: "transferencia",
        items: [
            {
                producto: productoMock,
                cantidad: 5
            },
            {
                producto: productoMock2,
                cantidad: 10
            }
        ],
        subtotal: 1550,
        iva: 248,
        total: 1798,
        domicilio: domicilioMock,
        trackingNumber: "TRK123456789",
        clienteNombre: "Juan Pérez",
        clienteEmail: "juan@email.com",
        clienteTelefono: "33 1234 5678"
    },
    {
        id: 1002,
        fechaCreacion: "2024-01-18",
        fechaEntregaEstimada: "2024-01-23",
        estado: "en_transito",
        metodoPago: "tarjeta",
        items: [
            {
                producto: productoMock2,
                cantidad: 8
            }
        ],
        subtotal: 1600,
        iva: 256,
        total: 1856,
        domicilio: domicilioMock,
        trackingNumber: "TRK987654321",
        clienteNombre: "Juan Pérez",
        clienteEmail: "juan@email.com",
        clienteTelefono: "33 1234 5678"
    },
    {
        id: 1003,
        fechaCreacion: "2024-01-22",
        fechaEntregaEstimada: "2024-01-27",
        estado: "procesando",
        metodoPago: "efectivo",
        items: [
            {
                producto: productoMock,
                cantidad: 50
            }
        ],
        subtotal: 1250,
        iva: 200,
        total: 1450,
        domicilio: domicilioMock,
        clienteNombre: "Juan Pérez",
        clienteEmail: "juan@email.com",
        clienteTelefono: "33 1234 5678"
    }
];

const cotizacionesData: Cotizacion[] = [
    {
        id: 1,
        clienteId: 1,
        clienteNombre: "Juan Pérez",
        clienteEmail: "juan@email.com",
        clienteTelefono: "33 1234 5678",
        fechaCreacion: "2024-01-10",
        estado: "pendiente",
        items: [
            {
                producto: {
                    id: 1,
                    nombre: "BR10-046LP",
                    descripcion: "Birlo rueda 3/4 - 16 * 2.375",
                    precio: 150,
                    stock: 100,
                    status: 'existente',
                    id_marca: 1,
                    id_categoria: 1,
                    id_acabado: 1,
                    categoria: categoriaMock,
                    acabado: acabadoMock,
                    marca: marcaMock
                },
                cantidad: 10,
                precioUnitario: 150,
                subtotal: 1500
            }
        ],
        subtotal: 1500,
        iva: 240,
        total: 1740,
        domicilioEntrega: {
            calle: "Av. Revolución",
            numeroExterior: "123",
            numeroInterior: "",
            colonia: "Centro",
            ciudad: "Guadalajara",
            estado: "Jalisco",
            codigoPostal: "44100",
            referencias: "Frente al parque"
        }
    },
    {
        id: 2,
        clienteId: 1,
        clienteNombre: "Juan Pérez",
        clienteEmail: "juan@email.com",
        clienteTelefono: "33 1234 5678",
        fechaCreacion: "2024-01-15",
        estado: "enviada",
        items: [
            {
                producto: {
                    id: 2,
                    nombre: "TR20-100LP",
                    descripcion: "Tornillo hexagonal 1/2 - 13 * 3",
                    precio: 200,
                    stock: 50,
                    status: 'existente',
                    id_marca: 1,
                    id_categoria: 1,
                    id_acabado: 1,
                    categoria: categoriaMock,
                    acabado: acabadoMock,
                    marca: marcaMock
                },
                cantidad: 5,
                precioUnitario: 200,
                subtotal: 1000
            },
            {
                producto: {
                    id: 3,
                    nombre: "AR15-050LP",
                    descripcion: "Arandela plana 3/8",
                    precio: 25,
                    stock: 200,
                    status: 'existente',
                    id_marca: 1,
                    id_categoria: 1,
                    id_acabado: 1,
                    categoria: categoriaMock,
                    acabado: acabadoMock,
                    marca: marcaMock
                },
                cantidad: 20,
                precioUnitario: 25,
                subtotal: 500
            }
        ],
        subtotal: 1500,
        iva: 240,
        total: 1740,
        fechaEnvio: "2024-01-16",
        notasCliente: "Urgente para taller mecánico"
    },
];

const Perfil: React.FC = () => {
    const [seccionActiva, setSeccionActiva] = useState<"pedidos" | "domicilios" | "cotizaciones" | "favoritos">("pedidos");
    const [selectedCotizacion, setSelectedCotizacion] = useState<Cotizacion | null>(null);
    const [selectedPedido, setSelectedPedido] = useState<PedidoPerfil | null>(null);
    const [selectedDomicilio, setSelectedDomicilio] = useState<DomicilioPerfil | null>(null);
    const [showModalDomicilio, setShowModalDomicilio] = useState(false);

    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case "pendiente": return "bg-yellow-100 text-yellow-800";
            case "enviada": return "bg-blue-100 text-blue-800";
            case "aceptada": return "bg-green-100 text-green-800";
            case "rechazada": return "bg-red-100 text-red-800";
            case "expirada": return "bg-gray-100 text-gray-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getEstadoTexto = (estado: string) => {
        switch (estado) {
            case "pendiente": return "Pendiente";
            case "enviada": return "Enviada";
            case "aceptada": return "Aceptada";
            case "rechazada": return "Rechazada";
            case "expirada": return "Expirada";
            default: return estado;
        }
    };

    const getEstadoPedidoColor = (estado: string) => {
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

    const getEstadoPedidoTexto = (estado: string) => {
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

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="">
            <div className="w-full mt-2 bg-white">
                <div className="w-9/12 mx-auto py-2">
                    <p className="">Mi perfil</p>
                </div>
            </div>
            <hr />

            <section>
                <div className="sm:w-11/12 mx-auto w-full py-4">
                    <div className="flex md:w-8/12 xl:w-4/12 w-11/12 mx-auto ">
                        {/* IMAGEN */}
                        <div className=" w-2/6">
                            <p className="bg-blue-200 text-8xl text-center pb-3 md:px-3 md:w-8/12 mx-auto rounded-full">○</p>
                        </div>
                        {/* INFORMACIÓN CUENTA */}
                        <div className="w-4/6 ml-auto pl-4 mt-2 md:mt-0 ">
                            <div className="">
                                <div className="flex">
                                    <h2 className=" text-xl font-bold mt-2">Lorem Ipsum Dolor</h2>
                                    <button className=" mx-auto rounded-xl  mt-2 p-2"><img src="/icons/lapiz.png" alt="Icono editar" className="w-6 h-6" /></button>
                                </div>
                                <p>loremipsum@gmail.com</p>
                                <p>+52 33 2343 2321</p>

                            </div>
                        </div>
                    </div>
                    {/* BOTONES EDIT PERFIL Y CERRAR SESION */}
                    <div className="w-11/12 mx-auto md:w-8/12 xl:w-4/12">
                        <button className="mt-6 w-full mx-auto border-red-600 border text-red-600 py-1 rounded-xl">Cerrar sesión</button>
                    </div>
                </div>

            </section>

            {/* MENÚ DE NAVEGACIÓN */}
            <div className="w-full bg-gray-200 mt-6 py-2">
                <div className="md:w-9/12 w-full mx-auto flex text-center font-bold text-sm">
                    <button
                        className={`w-2/6 py-2 ${seccionActiva === "pedidos" ? "bg-cyan-800 text-white rounded-lg" : ""}`}
                        onClick={() => setSeccionActiva("pedidos")}
                    >
                        Pedidos
                    </button>
                    <button
                        className={`w-2/6 py-2 ${seccionActiva === "cotizaciones" ? "bg-cyan-800 text-white rounded-lg" : ""}`}
                        onClick={() => setSeccionActiva("cotizaciones")}
                    >
                        Cotizaciones
                    </button>
                    <button
                        className={`w-2/6 py-2 ${seccionActiva === "favoritos" ? "bg-cyan-800 text-white rounded-lg" : ""}`}
                        onClick={() => setSeccionActiva("favoritos")}
                    >
                        Favoritos
                    </button>
                    <button
                        className={`w-2/6 py-2 ${seccionActiva === "domicilios" ? "bg-cyan-800 text-white rounded-lg" : ""}`}
                        onClick={() => setSeccionActiva("domicilios")}
                    >
                        Domicilios
                    </button>
                </div>
            </div>

            {/* CONTENIDO DINÁMICO */}
            <div className="md:w-9/12 w-11/12 mx-auto md:max-h-[900px] max-h-[500px] mt-8 overflow-y-auto overflow-x-hidden mb-24">

                {/* SECCIÓN PEDIDOS */}
                {seccionActiva === "pedidos" && (
                    <div className="pb-4">
                        {pedidosData.map((pedido) => (
                            <div
                                key={pedido.id}
                                className="my-4 w-full bg-white border border-gray-300 rounded-lg shadow-sm py-4 px-4 transition-transform hover:scale-[1.02] duration-300 cursor-pointer"
                                onClick={() => setSelectedPedido(pedido)}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-semibold text-gray-800">Pedido #{pedido.id}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEstadoPedidoColor(pedido.estado)}`}>
                                        {getEstadoPedidoTexto(pedido.estado)}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                                    <div>
                                        <p><strong>Fecha:</strong> {formatDate(pedido.fechaCreacion)}</p>
                                        <p><strong>Entrega estimada:</strong> {formatDate(pedido.fechaEntregaEstimada)}</p>
                                        <p><strong>Productos:</strong> {pedido.items.length} item(s)</p>
                                        {pedido.trackingNumber && (
                                            <p><strong>Tracking:</strong> {pedido.trackingNumber}</p>
                                        )}
                                    </div>

                                    <p className="text-lg font-bold text-cyan-800">${pedido.total.toLocaleString()} MXN</p>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-500">
                                        Método de pago: {pedido.metodoPago}
                                    </span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedPedido(pedido);
                                        }}
                                        className="bg-cyan-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-cyan-700 transition-colors duration-200"
                                    >
                                        Ver Detalles
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* SECCIÓN COTIZACIONES */}
                {seccionActiva === "cotizaciones" && (
                    <div className="pb-4">
                        {cotizacionesData.map((cotizacion) => (
                            <div
                                key={cotizacion.id}
                                className="my-4 w-full bg-white border border-gray-300 rounded-lg shadow-sm py-4 px-4 transition-transform hover:scale-[1.02] duration-300 cursor-pointer"
                                onClick={() => setSelectedCotizacion(cotizacion)}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-semibold text-gray-800">Cotización #{cotizacion.id}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEstadoColor(cotizacion.estado)}`}>
                                        {getEstadoTexto(cotizacion.estado)}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                                    <div>
                                        <p><strong>Cliente:</strong> {cotizacion.clienteNombre}</p>
                                        <p><strong>Fecha:</strong> {formatDate(cotizacion.fechaCreacion)}</p>
                                        <p><strong>Productos:</strong> {cotizacion.items.length} item(s)</p>
                                    </div>

                                    <p className="text-lg font-bold text-cyan-800">${cotizacion.total.toLocaleString()} MXN</p>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-500">ID: #{cotizacion.id}</span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedCotizacion(cotizacion);
                                        }}
                                        className="bg-cyan-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-cyan-700 transition-colors duration-200"
                                    >
                                        Ver Detalles
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* SECCIÓN FAVORITOS  */}
                {seccionActiva === "favoritos" && (
                    <div className="pb-4  ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {cardData.map((card) => (
                                <a href="/detalle" key={card.id}>
                                    <div className="my-4 w-full bg-cyan-900 text-white shadow-lg py-5 px-2 transition-transform hover:scale-105 duration-300">
                                        <div className="flex w-full">
                                            <div className="w-5/12 h-32 bg-slate-300">
                                                <p className="text-center pt-14">Img</p>
                                            </div>
                                            <div className="w-7/12 ml-4">
                                                <div className="flex">
                                                    <h3 className="text-xl font-semibold mb-1 w-4/6 text-justify">{card.nombre}</h3>
                                                    <p className="mx-auto rounded-full px-2 pt-1 bg-slate-500">⭐</p>
                                                </div>
                                                <p className="text-xs">{card.descripcion}</p>
                                                <p className="text-xs mb-1">Acabado: {card.acabado}</p>
                                                <p className="mt-6 text-2xl">${card.precio}.00 MXN</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* SECCIÓN DOMICILIOS  */}
                {seccionActiva === "domicilios" && (
                    <div className="pb-4">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-semibold text-cyan-900 border-b pb-2">
                                Domicilios ({domiciliosData.length})
                            </h3>
                            <button
                                onClick={() => setShowModalDomicilio(true)}
                                className="bg-cyan-800 hover:bg-cyan-700 text-2xl text-white px-4 pb-1 rounded-lg transition-colors duration-200"
                            >
                                +
                            </button>
                        </div>

                        {domiciliosData.length > 0 ? (
                            <div className="overflow-x-auto">
                                <div className="flex space-x-4 pb-4 min-w-max">
                                    {domiciliosData.map((domicilio) => (
                                        <div
                                            key={domicilio.id}
                                            className={`border rounded-lg p-4 min-w-[280px] max-w-[320px] flex-shrink-0 cursor-pointer transition-all hover:shadow-md ${
                                                domicilio.principal 
                                                    ? "border-cyan-500 bg-cyan-50" 
                                                    : "border-gray-200 hover:border-gray-300"
                                            }`}
                                            onClick={() => setSelectedDomicilio(domicilio)}
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
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedDomicilio(domicilio);
                                                    }}
                                                    className="text-gray-500 hover:text-cyan-700"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </button>
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
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <div className="mb-4">
                                    <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <p className="text-gray-500 text-lg mb-2">No hay domicilios registrados</p>
                                <p className="text-gray-400 text-sm mb-4">Agrega tu primer domicilio para comenzar</p>
                                <button
                                    onClick={() => setShowModalDomicilio(true)}
                                    className="bg-cyan-800 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                                >
                                    Agregar Primer Domicilio
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Modal de Cotización */}
            <ModalCotizacion
                selectedCotizacion={selectedCotizacion}
                onClose={() => setSelectedCotizacion(null)}
            />

            {/* Modal de Pedido */}
            <ModalPedido
                selectedPedido={selectedPedido}
                onClose={() => setSelectedPedido(null)}
            />

            {/* Modal de Domicilio (para editar/ver) */}
            {selectedDomicilio && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {selectedDomicilio.principal ? " Domicilio Principal" : " Domicilio"}
                                </h3>
                                <button
                                    onClick={() => setSelectedDomicilio(null)}
                                    className="text-gray-500 hover:text-gray-700 text-2xl"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                                    <p className="text-gray-900">{selectedDomicilio.tipo.toUpperCase()}</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
                                    <p className="text-gray-900">{selectedDomicilio.calle} #{selectedDomicilio.numero}</p>
                                    <p className="text-gray-900">{selectedDomicilio.colonia}, {selectedDomicilio.ciudad}</p>
                                    <p className="text-gray-900">{selectedDomicilio.estado}, C.P. {selectedDomicilio.codigoPostal}</p>
                                </div>

                                {selectedDomicilio.referencias && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Referencias</label>
                                        <p className="text-gray-900">{selectedDomicilio.referencias}</p>
                                    </div>
                                )}

                                {selectedDomicilio.principal && (
                                    <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3">
                                        <p className="text-cyan-800 text-sm font-medium">Este es tu domicilio principal</p>
                                        <p className="text-cyan-600 text-xs mt-1">Las entregas se enviarán a esta dirección por defecto</p>
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-end space-x-3 pt-6 mt-6 border-t border-gray-200">
                                <button
                                    onClick={() => setSelectedDomicilio(null)}
                                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                                >
                                    Cerrar
                                </button>
                                <button
                                    onClick={() => {
                                        // Aquí iría la lógica para editar
                                        console.log("Editar domicilio:", selectedDomicilio);
                                    }}
                                    className="bg-cyan-800 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                                >
                                    Editar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal para agregar nuevo domicilio */}
            {showModalDomicilio && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-semibold text-gray-800">Agregar Domicilio</h3>
                                <button
                                    onClick={() => setShowModalDomicilio(false)}
                                    className="text-gray-500 hover:text-gray-700 text-2xl"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="space-y-4">
                                <p className="text-gray-600 text-sm">
                                    Completa la información de tu nuevo domicilio.
                                </p>
                                <div className="text-center py-8">
                                    <p className="text-gray-500">Formulario para agregar domicilio</p>
                                    <p className="text-gray-400 text-sm mt-2">(Próximamente)</p>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-3 pt-6 mt-6 border-t border-gray-200">
                                <button
                                    onClick={() => setShowModalDomicilio(false)}
                                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={() => {
                                        // Aquí iría la lógica para guardar
                                        setShowModalDomicilio(false);
                                    }}
                                    className="bg-cyan-800 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                                >
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Perfil;