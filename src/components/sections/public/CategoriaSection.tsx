import React from "react";

interface CardItem {
    id: number;
    nombre: string;
    img: string;  //Revisar que chow con la imagen
}

const cardData: CardItem[] = [
    { id: 1, nombre: "Agricola", img: "img" },
    { id: 2, nombre: "Extrapesado", img: "img" },
    { id: 3, nombre: "Media Carga", img: "img" },
    { id: 4, nombre: "Ligero", img: "img" },
    { id: 5, nombre: "Especial", img: "img" },
];

const CategoriaSection: React.FC = () => {
    return (
        <div className="grid grid-cols-2  bg-cyan-900">
            {cardData.map((card) => (
                <div
                    key={card.id}
                    className=" shadow-lg py-5 px-2 rounded-lg transition-transform hover:scale-105 duration-300 text-white"
                >
                    <div className="flex w-full">
                        <div className="w-11/12 mx-auto flex flex-col items-center">
                            <div className="w-full bg-slate-100 rounded text-center text-black">
                                <p className="text-xs bg-slate-300 mb-1 py-16">{card.img}</p>
                                <h3 className="text-md p-1">{card.nombre}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default CategoriaSection;
