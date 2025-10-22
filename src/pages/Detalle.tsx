import React from "react";
import type { Producto } from "../types/Producto";

// Datos simulados
const productoData: Producto[] = [
    {
        id: 1,
        nombre: "BR10-046LP",
        descripcion: "Birlo rueda 3/4 - 16 * 2.375",
        precio: 150,
        stock: 10,
        img: "img",
        status: "activo",
        id_marca: 1,
        id_categoria: 1,
        id_acabado: 1,
        categoria: { id: 1, nombre: "Birlos", img: "", descripcion: "" },
        acabado: { id: 1, nombre: "Pavonado" },
        especificacion: {
            uEmpaque: "20",
            uso: "Automotriz",
            grado: "8",
            dRosca: "M22",
            pRosca: "1.5",
            longitud: "11mm",
            familia: "Birlo rueda",
            id: 1,
            id_producto: 1,
        },
    },
];

const Detalle: React.FC = () => {

    return (
        <div>
            <div className="w-11/12 mx-auto py-2">
                <p className="">  <a href="/categorias">Categoría</a> / Producto</p>
            </div>
            <hr />

            <div className="w-11/12 mx-auto">
                {productoData.map((producto) => (
                    <div key={producto.id} className="my-6 w-full px-2">
                        {/* Título y botón */}
                        <div className="flex mb-4">
                            <h3 className="text-3xl font-bold text-justify pt-2 w-5/6">
                                {producto.nombre}
                            </h3>
                            <button className="w-1/6 bg-gray-200 ml-auto py-3 rounded-full transition-transform hover:scale-105 duration-300">
                                img
                            </button>
                        </div>

                        {/* Imagen */}
                        <div className="w-11/12 h-64 mx-auto bg-sky-100 rounded">
                            <p className="text-center pt-28">Img</p>
                        </div>

                        {/* Descripción y precio */}
                        <div className="w-full mt-4">
                            <div className="w-11/12 mx-auto flex">
                                <div className="w-10/12">
                                    <p className="text-lg">{producto.descripcion}</p>
                                    {producto.acabado && (
                                        <p className="text-lg mb-1">
                                            Acabado: {producto.acabado.nombre}
                                        </p>
                                    )}
                                    {producto.categoria && (
                                        <p className="text-lg mb-1">
                                            Categoría: {producto.categoria.nombre}
                                        </p>
                                    )}
                                </div>
                                <button className="w-2/12 text-center rounded-full h-12 mt-1 text-3xl pb-2 font-bold bg-gray-200 transition-transform hover:scale-105 duration-300">
                                    +
                                </button>
                            </div>
                            <p className="mt-6 text-4xl w-11/12 mx-auto font-semibold">
                                ${producto.precio}.00 MXN
                            </p>
                        </div>

                        {/* Especificaciones */}
                        {producto.especificacion && (
                            <section className="w-full mx-auto mt-6 p-2 pb-24">
                                <h3 className="font-bold mb-3 text-xl">Especificaciones</h3>
                                <table className="w-full border-collapse rounded-lg overflow-hidden ">
                                    <tbody >
                                        {(() => {
                                            //Labels para renderizar nombres en las especificaciones
                                            const labelMap: Record<string, string> = {
                                                marca: "Marca",
                                                categoria: "Categoría",
                                                acabado: "Acabado",
                                                uEmpaque: "Unidad de empaque",
                                                uso: "Uso",
                                                grado: "Grado",
                                                dRosca: "Diámetro de rosca",
                                                pRosca: "Paso de rosca",
                                                longitud: "Longitud",
                                                familia: "Familia",
                                            };

                                            // Combinamos marca, categoría, acabado y especificaciones
                                            const allSpecs = {
                                                ...producto.especificacion,
                                                categoria: producto.categoria?.nombre ?? "Sin categoría",
                                                acabado: producto.acabado?.nombre ?? "Sin acabado",
                                                marca: producto.marca?.nombre ?? "Sin marca",

                                            };

                                            return Object.entries(allSpecs).map(([key, value], index) => {
                                                if (key === "id" || key === "id_producto") return null;
                                                return (
                                                    <tr
                                                        key={key}
                                                        className={`${index % 2 === 0 ? "bg-slate-100" : "bg-gray-300"}`}
                                                    >
                                                        <div className="py-2 font-semibold w-full ml-2 rounded-l-lg h-8 ">
                                                            <td className="rounded w-5/6 ">
                                                                {labelMap[key] ?? key}
                                                            </td>
                                                        </div>

                                                        <td className="py-2 text-center border-l-2 w-6/12 rounded-r-lg">{value as string}</td>
                                                    </tr>
                                                );
                                            });
                                        })()}
                                    </tbody>
                                </table>
                            </section>
                        )}

                    </div>
                ))}
            </div>

            <footer className="bg-cyan-950 text-white">
                <div className="w-11/12 mx-auto pt-8">
                    <div className="flex">
                        <div className="w-3/6 ">
                            <div className="flex mb-1">
                                <img src="/logoepos.png" alt="" className="filter brightness-100" />
                            </div>
                            <p className="text-sm text-justify">Calidad y confianza en cada pieza.</p>
                        </div>
                        <div className="w-2/6 mt-4 ml-auto ">
                            <h2 className="text-bold mb-2">Contacto</h2>
                            <p className="text-sm">33 4343 3234</p>
                            <p className="text-sm">33 4343 3234</p>
                            <p className="text-sm">epos@gmail.com</p>
                        </div>
                    </div>

                    <div className="mt-14">
                        <h3 className="text-center mb-4">Redes sociales</h3>
                        <div className="flex gap-16 w-10/12 mx-auto">
                            <p className="w-2/6 text-center rounded-full"><img src="/icons/facebook.png" className="w-12" alt="Logotipo Facebook" /></p>
                            <p className="w-2/6 text-center rounded-full"><img src="/icons/instagram.png" className="w-12" alt="Logotipo Instagram" /></p>
                            <p className="w-2/6 text-center rounded-full"><img src="/icons/youtube.png" className="w-12" alt="Logotipo Youtube" /></p>
                        </div>
                    </div>
                    <a href="https://portafolio-ricardo-legaspi.vercel.app/"><p className="text-center mt-8 text-xs">Made by RL </p></a>
                </div>
            </footer>
        </div>


    );
};

export default Detalle;
