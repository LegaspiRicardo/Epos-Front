import React from "react";
import { Link } from "react-router-dom"; 
import CategoriaTiendaCarousel from "../components/carousel/CategoriaTiendaCarousel";
import MarcaTiendaCarousel from "../components/carousel/MarcaTiendaCarousel";
import Footer from '../components/Footer';

interface CardItem {
    id: number;
    nombre: string;
    img: string;
    descripcion: string;
    acabado: string;
    precio: number;
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

const Tienda: React.FC = () => {
    return (
        <div>
            <div className="bg-gray-200 pt-4">
                <div className="w-11/12 mx-auto">
                    <CategoriaTiendaCarousel />
                </div>
            </div>
            <hr />
            <div className="mt-4">
                <MarcaTiendaCarousel />
            </div>

            <div className="w-11/12 mx-auto mt-8">
                {/* CONTENEDOR SCROLLABLE */}
                <div className="pb-4">
                    {cardData.map((card) => (
                        <Link to="/detalle" key={card.id}> 
                            <div className="my-4 w-full bg-cyan-900 text-white shadow-lg py-5 px-2 transition-transform hover:scale-105 duration-300">
                                <div className="flex w-full">
                                    <div className="w-5/12 h-32 bg-slate-300">
                                        <p className="text-center pt-14">Img</p>
                                    </div>
                                    <div className="w-7/12 ml-4">
                                        <h3 className="text-2xl font-semibold mb-1 text-justify">{card.nombre}</h3>
                                        <p className="text-xs">{card.descripcion}</p>
                                        <p className="text-xs mb-1">Acabado: {card.acabado}</p>
                                        <p className="mt-6 text-2xl">${card.precio}.00 MXN</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Tienda;