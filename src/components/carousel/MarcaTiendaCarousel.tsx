import React from "react";

interface CardItem {
    id: number;
    nombre: string;
}

const cardData: CardItem[] = [
    { id: 1, nombre: "Peugeot"},
    { id: 2, nombre: "Mitsubishi"},
    { id: 3, nombre: "Nissan"},
    { id: 4, nombre: "Continental"},
    { id: 5, nombre: "Mercedes Benz"},
];

const MarcaTiendaCarousel: React.FC = () => {
    return (
        <div className="w-11/12 mx-auto ">
            {/* CONTENEDOR SCROLLABLE */}
            <div
                className="flex overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory w-10/12"
            >
                {cardData.map((card) => (
                    <div key={card.id} className="flex-shrink-0 px-1 w-4/12 shadow-sm snap-start transition-transform hover:scale-105 duration-300">
                        <div  className="">
                            <div className="w-full">
                                <h3 className="uppercase text-xs mb-2 border-2 rounded-xl py-2 text-center bg-gray-100">{card.nombre}</h3>

                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarcaTiendaCarousel;
