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
];

const HomeCarousel: React.FC = () => {
    return (
        <div className="w-11/12 mx-auto mt-8">
            {/* CONTENEDOR SCROLLABLE */}
            <div
                className="flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide snap-x snap-mandatory"
            >
                {cardData.map((card) => (
                    <div key={card.id} className="flex-shrink-0  w-72 bg-cyan-900 text-white shadow-lg py-5 px-2 snap-start transition-transform hover:scale-105 duration-300">
                        <div  className="flex w-full">
                            <div className="w-7/12">
                                <h3 className="text-2xl font-semibold mb-2 text-justify">{card.nombre}</h3>
                                <p className="text-xs mb-1">{card.descripcion}</p>
                            </div>
                            <div className="w-6/12 bg-slate-300 ml-4">
                                <p className="text-center pt-10">Img</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeCarousel;
