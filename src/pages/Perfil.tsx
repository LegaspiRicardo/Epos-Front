
import React from "react";

interface CardItem { //Es de los favoritos
    id: number;
    nombre: string;
    img: string;  //Revisar que chow con la imagen
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

const Perfil: React.FC = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto mt-2 py-2">
                <p className="">Mi perfil</p>
            </div>
            <hr />

            <div className=" mx-auto">
                <div className="flex w-11/12 mx-auto  mt-4">
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

            <div className="w-full bg-gray-200 mt-6 py-2">
                <div className="w-11/12 mx-auto flex text-center font-bold text-sm">
                    <p className="w-2/6">Mis Pedidos</p>
                    <p className="w-2/6">Domicilio(s)</p>
                    <p className="w-2/6">Favoritos</p>
                </div>

            </div>


            <div className="w-11/12 mx-auto mt-8 h-96 overflow-y-auto overflow-x-hidden">
                {/* CONTENEDOR SCROLLABLE */}
                <div
                    className="pb-4 "
                >
                    {cardData.map((card) => (
                        <div key={card.id} className=" my-4 w-full bg-cyan-900 text-white shadow-lg py-5 px-2 transition-transform hover:scale-105 duration-300">
                            <div className="flex w-full">
                                <div className="w-5/12 h-32 bg-slate-300 ">
                                    <p className="text-center  pt-14">Img</p>
                                </div>
                                <div className="w-7/12 ml-4">
                                    <div className="flex ">
                                        <h3 className="text-2xl font-semibold mb-1 w-4/6 text-justify">{card.nombre}</h3>
                                        <p className=" mx-auto rounded-full px-2 pt-1 bg-slate-500">⭐</p>
                                    </div>

                                    <p className="text-xs ">{card.descripcion}</p>
                                    <p className="text-xs mb-1">Acabado: {card.acabado}</p>

                                    <p className="mt-6 text-2xl">${card.precio}.00 MXN</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Perfil;
