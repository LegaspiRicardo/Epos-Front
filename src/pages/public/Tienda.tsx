import React from "react";
import { Link } from "react-router-dom";
import CategoriaTiendaCarousel from "../../components/carousel/CategoriaTiendaCarousel";
import MarcaTiendaCarousel from "../../components/carousel/MarcaTiendaCarousel";
import Footer from '../../components/Footer';

interface CardItem {
    id: number;
    nombre: string;
    descripcion: string;
    acabado: string;
    precio: number;
    categoria?: string;
    marca?: string;
}

const cardData: CardItem[] = [
    {
        id: 1,
        nombre: "BR10-046LP",
        descripcion: "Birlo rueda 3/4 - 16 * 2.375",
        acabado: "Pavonado",
        precio: 150,
        categoria: "Agricola",
        marca: "Nissan"
    },
    {
        id: 2,
        nombre: "TR15-089LP",
        descripcion: "Tornillo cabeza hexagonal 5/8 - 11",
        acabado: "Cromado",
        precio: 89,
        categoria: "Ligero",
        marca: "Volkswagen"
    },
    {
        id: 3,
        nombre: "AR20-156LP",
        descripcion: "Arandela plana 1/2 pulgada",
        acabado: "Galvanizado",
        precio: 45,
        categoria: "Media Carga",
        marca: "International"
    },
    {
        id: 4,
        nombre: "TU30-451LP",
        descripcion: "Tuerca hexagonal 3/4 - 10",
        acabado: "Niquelado",
        precio: 75,
        categoria: "Extra Pesado",
        marca: "Mercedes Benz"
    },
    {
        id: 5,
        nombre: "PE25-789LP",
        descripcion: "Perno estructural 7/8 - 9",
        acabado: "Zincado",
        precio: 220,
        categoria: "Especial",
        marca: "Peugeot"
    },
    {
        id: 6,
        nombre: "RE18-334LP",
        descripcion: "Remache pop 1/4 pulgada",
        acabado: "Lacado",
        precio: 35,
        categoria: "Ligero",
        marca: "Mitsubishi"
    },
    {
        id: 7,
        nombre: "CL12-667LP",
        descripcion: "Clavo estructural 3/8 * 3",
        acabado: "Brillante",
        precio: 28,
        categoria: "Agricola",
        marca: "Continental"
    },
    {
        id: 8,
        nombre: "AN09-223LP",
        descripcion: "Anclaje químico M12 * 160",
        acabado: "Mate",
        precio: 180,
        categoria: "Media Carga",
        marca: "Nissan"
    },
];

// Componente de placeholder para productos
const ProductoPlaceholder = () => (
    <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
        <div className="text-center text-gray-500">
            <div className="text-lg font-medium mb-1">Imagen</div>
            <div className="text-sm">No disponible</div>
        </div>
    </div>
);

const Tienda: React.FC = () => {
    return (
        <div className="min-h-screen ">
            {/* Header con fondo */}
            <div className="bg-white md:pt-4 py-2 md:pb-2 ">
                <div className="w-11/12 mx-auto">
                    <div className="flex items-center justify-between md:mb-2 mb-2">
                        <div>
                            <h1 className="text-3xl font-bold  md:mb-2">Catálogo de Productos</h1>
                        </div>
                        <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                            <span className="text-white font-medium">{cardData.length} productos</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categoria Section */}
            <section className="md:flex gap-8 md:w-11/12 mx-auto ">
                <div className="bg-gray-100 border-b  pt-3  md:w-6/12 rounded-lg">
                    <div className="w-11/12 mx-auto">
                        <CategoriaTiendaCarousel />
                        <p className="text-center text-gray-400">Desliza para ver más</p>
                    </div>
                </div>

                {/* Marcas Section */}
                <div className="bg-gray-100 border-b  pt-3  md:w-6/12 rounded-lg md:ml-auto">
                    <div className="w-11/12 mx-auto">
                        <MarcaTiendaCarousel />
                        <p className="text-center text-gray-400">Desliza para ver más</p>
                    </div>
                </div>
            </section>

            {/* Filtros y Ordenamiento */}
            <div className="bg-white border-b border-gray-200 py-4">
                <div className="w-11/12 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 bg-cyan-800 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-200">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                                </svg>
                                Filtros
                            </button>
                        </div>

                        <div className="flex items-center gap-4">
                            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-600">
                                <option>Ordenar por: </option>
                                <option>Precio: Menor a Mayor</option>
                                <option>Precio: Mayor a Menor</option>
                                <option>Nombre: A-Z</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid de Productos */}
            <div className="w-11/12 mx-auto py-8">
                {/* CONTENEDOR GRID MEJORADO */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {cardData.map((card) => (
                        <Link to={`/detalle/`} key={card.id} className="group">
                            <div className="bg-cyan-800 rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                                {/* Placeholder del Producto */}
                                <ProductoPlaceholder />

                                {/* Contenido de la Tarjeta */}
                                <div className="p-2 ">
                                    <section className="flex justify-between">
                                        {/* Nombre y Descripción */}
                                        <div>
                                            <h3 className="font-semibold text-white text-2xl  transition-colors duration-200">
                                                {card.nombre}
                                            </h3>
                                            <p className="text-white text-sm mb-3 line-clamp-2">
                                                {card.descripcion}
                                            </p>
                                        </div>
                                        {/* Icono Carrito*/}
                                        <div>
                                            <button
                                                className="bg-cyan-600 hover:bg-cyan-700 text-white p-2 rounded-lg transition-colors duration-200 group-hover:scale-110"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    // Aquí puedes agregar lógica para agregar al carrito si lo necesitas
                                                }}
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </button>

                                        </div>
                                    </section>


                                    {/*Categoría, Marca y Acabado */}
                                    <div className="flex justify-between items-center gap-2 my-4 ">
                                        <div>
                                            <div className="flex justify-between items-center " >

                                                <span className="bg-cyan-50/80 text-cyan-800 text-xs px-2 py-1 rounded-full">{card.acabado}</span>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex justify-between items-center ">
                                                <span className="bg-cyan-50/80 text-cyan-800 text-xs px-2 py-1 rounded-full">
                                                    {card.marca}
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <div >
                                                <span className="bg-cyan-50/80 text-cyan-800 text-xs px-2 py-1 rounded-full">
                                                    {card.categoria}
                                                </span>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Precio y Acción */}
                                    <div className="text-center py-3 border-t border-gray-100 ">
                                        <div> 
                                            <p className="text-2xl font-semibold text-white ">${card.precio}.00 <span className="text-white text-xs">MXN</span></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Paginación */}
                <div className="flex justify-center items-center gap-2 mt-12">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-200">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Anterior
                    </button>

                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(page => (
                            <button
                                key={page}
                                className={`w-10 h-10 rounded-lg transition-colors duration-200 ${page === 1
                                    ? 'bg-cyan-600 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-200">
                        Siguiente
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div >

            {/* Sección de Información Adicional 
            <div className="bg-cyan-50 border-t border-cyan-200 py-12">
                <div className="w-11/12 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-cyan-900 mb-2">Envío Gratis</h3>
                            <p className="text-cyan-700 text-sm">En compras mayores a $500 MXN</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-cyan-900 mb-2">Garantía</h3>
                            <p className="text-cyan-700 text-sm">12 meses en todos nuestros productos</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-cyan-900 mb-2">Soporte</h3>
                            <p className="text-cyan-700 text-sm">Asesoría técnica especializada</p>
                        </div>
                    </div>
                </div>
            </div>*/}

            {/* Footer */}
            <Footer />
        </div >
    );
};

export default Tienda;