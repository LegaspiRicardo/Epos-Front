import React from "react";

interface CardItem {
    id: number;
    nombre: string;
}

const cardData: CardItem[] = [
    { id: 1, nombre: "Inoxidable" },
    { id: 2, nombre: "Metalico" },
    { id: 3, nombre: "Cromado" },
    { id: 4, nombre: "Plateado" },
    { id: 5, nombre: "Tropicalizado" },
];

const Acabados: React.FC = () => {
    return (
        <div className=" bg-white">
            {cardData.map((card) => (
                <div
                    key={card.id}
                    className="  py-1 px-2 rounded-lg transition-transform hover:scale-105 duration-300 text-white"
                >
                    <div className=" w-full border-2 my-5">
                        <div className="w-11/12 mx-auto items-center">
                            <div className="w-full rounded text-center text-black">
                                <h3 className="text-md p-1">{card.nombre}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Acabados;
