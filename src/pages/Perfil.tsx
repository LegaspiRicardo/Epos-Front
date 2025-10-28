import React, { useState } from "react";

interface CardItem {
    id: number;
    nombre: string;
    img: string;
    descripcion: string;
    acabado: string;
    precio: number;
}

interface Cotizacion {
    id: number;
    nombre: string;
    fecha: string;
    estado: "pendiente" | "en_proceso" | "completada";
    enlaceDrive: string;
    total: number;
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

const cotizacionesData: Cotizacion[] = [
    { 
        id: 1, 
        nombre: "Cotización Proyecto Industrial", 
        fecha: "2024-01-15", 
        estado: "en_proceso", 
        enlaceDrive: "https://drive.google.com/...", 
        total: 12500 
    },
    { 
        id: 2, 
        nombre: "Refacciones Taller Mecánico", 
        fecha: "2024-01-10", 
        estado: "pendiente", 
        enlaceDrive: "https://drive.google.com/...", 
        total: 8500 
    },
    { 
        id: 3, 
        nombre: "Kit Mantenimiento Preventivo", 
        fecha: "2024-01-05", 
        estado: "completada", 
        enlaceDrive: "https://drive.google.com/...", 
        total: 23400 
    },
];

const Perfil: React.FC = () => {
    const [seccionActiva, setSeccionActiva] = useState<"pedidos" | "cotizaciones" | "favoritos">("favoritos");

    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case "pendiente": return "bg-yellow-100 text-yellow-800";
            case "en_proceso": return "bg-blue-100 text-blue-800";
            case "completada": return "bg-green-100 text-green-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const getEstadoTexto = (estado: string) => {
        switch (estado) {
            case "pendiente": return "Pendiente";
            case "en_proceso": return "En Proceso";
            case "completada": return "Completada";
            default: return estado;
        }
    };

    return (
        <div>
            <div className="w-11/12 mx-auto mt-2 py-2">
                <p className="">Mi perfil</p>
            </div>
            <hr />

            <div className="mx-auto">
                <div className="flex w-11/12 mx-auto mt-4">
                    <p className="bg-blue-200 text-8xl mx-auto pb-3 px-3 rounded-full">○</p>
                    <div className="w-4/6 ml-auto pl-4 mt-2">
                        <h2 className="text-xl font-bold mb-2">Lorem Ipsum Dolor</h2>
                        <p>loremipsum@gmail.com</p>
                        <p>+52 33 2343 2321</p>
                    </div>
                </div>
                <div className="mx-auto w-11/12">
                    <button className="mt-6 w-full mx-auto bg-cyan-800 text-white py-1 rounded-xl">Editar perfil</button>
                    <button className="mt-6 w-full mx-auto border-red-600 border text-red-600 py-1 rounded-xl">Cerrar sesión</button>
                </div>
            </div>

            {/* MENÚ DE NAVEGACIÓN */}
            <div className="w-full bg-gray-200 mt-6 py-2">
                <div className="w-11/12 mx-auto flex text-center font-bold text-sm">
                    <button 
                        className={`w-2/6 py-2 ${seccionActiva === "pedidos" ? "bg-cyan-800 text-white rounded-lg" : ""}`}
                        onClick={() => setSeccionActiva("pedidos")}
                    >
                        Mis Pedidos
                    </button>
                    <button 
                        className={`w-2/6 py-2 ${seccionActiva === "cotizaciones" ? "bg-cyan-800 text-white rounded-lg" : ""}`}
                        onClick={() => setSeccionActiva("cotizaciones")}
                    >
                        Mis Cotizaciones
                    </button>
                    <button 
                        className={`w-2/6 py-2 ${seccionActiva === "favoritos" ? "bg-cyan-800 text-white rounded-lg" : ""}`}
                        onClick={() => setSeccionActiva("favoritos")}
                    >
                        Favoritos
                    </button>
                </div>
            </div>

            {/* CONTENIDO DINÁMICO */}
            <div className="w-11/12 mx-auto mt-8 h-96 overflow-y-auto overflow-x-hidden">
                
                {/* SECCIÓN COTIZACIONES */}
                {seccionActiva === "cotizaciones" && (
                    <div className="pb-4">
                        {cotizacionesData.map((cotizacion) => (
                            <div key={cotizacion.id} className="my-4 w-full bg-white border border-gray-300 rounded-lg shadow-sm py-4 px-4 transition-transform hover:scale-[1.02] duration-300">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-semibold text-gray-800">{cotizacion.nombre}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEstadoColor(cotizacion.estado)}`}>
                                        {getEstadoTexto(cotizacion.estado)}
                                    </span>
                                </div>
                                
                                <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                                    <p>Fecha: {cotizacion.fecha}</p>
                                    <p className="text-lg font-bold text-cyan-800">${cotizacion.total.toLocaleString()} MXN</p>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-500">ID: #{cotizacion.id}</span>
                                    <a 
                                        href={cotizacion.enlaceDrive}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-cyan-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-cyan-700 transition-colors duration-200"
                                    >
                                        Ver Cotización
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* SECCIÓN FAVORITOS (tu contenido original) */}
                {seccionActiva === "favoritos" && (
                    <div className="pb-4">
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
                )}

                {/* SECCIÓN PEDIDOS (puedes agregarla después) */}
                {seccionActiva === "pedidos" && (
                    <div className="pb-4">
                        <div className="text-center py-8 text-gray-500">
                            <p className="text-lg">Próximamente...</p>
                            <p className="text-sm">Tu historial de pedidos aparecerá aquí</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Perfil;