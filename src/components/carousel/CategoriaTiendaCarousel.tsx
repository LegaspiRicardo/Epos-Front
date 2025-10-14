import React from "react";

interface CardItem {
    id: number;
    nombre: string;
}

const cardData: CardItem[] = [
    { id: 1, nombre: "Agricola"},
    { id: 2, nombre: "Extra pesado"},
    { id: 3, nombre: "Media Carga"},
    { id: 4, nombre: "Ligero"},
    { id: 5, nombre: "Especial"},
];

const CategoriaTiendaCarousel: React.FC = () => {
    return (
        <div className="w-full mx-auto ">
            {/* CONTENEDOR SCROLLABLE */}
            <div
                className="flex gap-4 overflow-x-auto scroll-smooth pb-2 scrollbar-hide snap-x snap-mandatory"
            >
                {cardData.map((card) => (
                    <div key={card.id} className="flex-shrink-0  w-4/12 shadow-sm  px-2 snap-start transition-transform hover:scale-105 duration-300">
                        <div  className="">
                            <div className="w-full">
                                <h3 className="font-semibold mb-2 text-center">{card.nombre}</h3>

                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriaTiendaCarousel;
