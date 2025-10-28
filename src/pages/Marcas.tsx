import React from "react";
import { Link } from "react-router-dom"; 

interface CardItem {
    id: number;
    nombre: string;
    img: string;  //Revisar que chow con la imagen
}

const cardData: CardItem[] = [
    { id: 1, nombre: "Mazda", img: "img" },
    { id: 2, nombre: "Nissan", img: "img" },
    { id: 3, nombre: "Volkswagen", img: "img" },
    { id: 4, nombre: "Peugeot", img: "img" },
    { id: 5, nombre: "Renault", img: "img" },
    { id: 6, nombre: "BMW", img: "img" },
];

const Marcas: React.FC = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto mt-2">
                <p className="font-bold">Marcas</p>
                <p>Selecciona una</p>
            </div>
            <hr className="mb-4" />

            <div className="grid grid-cols-2 bg-gray-200">
                {cardData.map((card) => (
                    <div
                        key={card.id}
                        className="shadow-lg py-5 px-2 rounded-lg transition-transform hover:scale-105 duration-300 text-white"
                    >
                        <div className="flex w-full bg-gray-200">
                            <div className="w-11/12 mx-auto flex flex-col items-center">
                                <Link to="/tienda" className="w-full"> 
                                    <div className="w-full bg-white rounded text-center text-black">
                                        <p className="text-xs bg-slate-300 mb-1 py-16">{card.img}</p>
                                        <h3 className="text-md p-1">{card.nombre}</h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marcas;