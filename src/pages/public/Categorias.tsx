import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

interface CardItem {
  id: number;
  nombre: string;
  img: string;
}

const cardData: CardItem[] = [
  { id: 1, nombre: "Agricola", img: "img" },
  { id: 2, nombre: "Extrapesado", img: "img" },
  { id: 3, nombre: "Media Carga", img: "img" },
  { id: 4, nombre: "Ligero", img: "img" },
  { id: 5, nombre: "Especial", img: "img" },
];

const Categorias: React.FC = () => {
  return (
    <div className="bg-cyan-900">
      <div className="w-full mt-2 bg-white">
        <div className="w-9/12 mx-auto">
          <p className="font-bold">Categorías</p>
          <p>Selecciona una</p>
        </div>
      </div>
      <hr className="mb-4" />

      <div className="grid grid-cols-2 pb-16 md:w-9/12 w-full mx-auto ">
        {cardData.map((card) => (
          <div
            key={card.id}
            className=" py-4 rounded-lg transition-transform hover:scale-105 duration-300"
          >
            <div className="flex w-full ">
              <div className=" mx-auto md:w-8/12 w-10/12 flex flex-col items-cente">
                <Link to="/marcas" className="w-full">
                  <div className="w-full bg-slate-100 rounded text-center text-black">
                    <p className="text-xs bg-slate-300 mb-1 md:py-16 py-12">
                      {card.img}
                    </p>
                    <h3 className="text-md p-1">{card.nombre}</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Categorias;
