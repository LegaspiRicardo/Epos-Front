
import { Link } from "react-router-dom"; 
import React from "react";

interface CardItem {
    id: number;
    nombre: string;
    descripcion: string;
}

const cardData: CardItem[] = [
    { id: 1, nombre: "Birlos de seguridad", descripcion: "Protege tus llantas con máxima resistencia" },
    { id: 2, nombre: "Tornillos automotrices", descripcion: "Fabricados con materiales reforzados" },
    { id: 3, nombre: "Accesorios y herramientas", descripcion: "Todo lo que necesitas para la instalación" },
    { id: 4, nombre: "Pijas automotrices", descripcion: "Amplio catálogo de productos" },
    { id: 5, nombre: "Muelles reforzados", descripcion: "Fabricados con materiales reforzados" },
    { id: 6, nombre: "Tuercas resistentes", descripcion: "Encuentra el complemento ideal" },
];

const HomeCarousel: React.FC = () => {
    return (
        <div className=" mx-auto mt-12 mb-12">
            {/* CONTENEDOR SCROLLABLE */}
            <div
                className="flex gap-6 overflow-x-auto scroll-smooth pb-6 scrollbar-hide snap-x snap-mandatory"
            >
                {cardData.map((card) => (
                    <div key={card.id} className="flex-shrink-0 w-96 bg-cyan-900 text-white shadow-lg py-8 px-6 snap-start transition-transform hover:scale-105 duration-300 rounded-xl">

                        <Link to="/categorias" className="w-full">
                            <div className="flex w-full items-center">
                                <div className="w-7/12">
                                    <h3 className="text-2xl font-bold mb-4 text-justify leading-tight">{card.nombre}</h3>
                                    <p className="text-base mb-1 leading-relaxed">{card.descripcion}</p>
                                </div>
                                <div className="w-5/12 bg-slate-300 ml-6 h-32 flex items-center justify-center rounded-lg">
                                    <p className="text-center text-gray-600 font-medium">Imagen</p>
                                </div>

                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeCarousel;
