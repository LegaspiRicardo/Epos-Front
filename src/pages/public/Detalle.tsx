// Detalle.tsx (corregido)
import React, { useState } from "react";
import type { Producto } from "../../types/Producto";
import Footer from '../../components/Footer';
import { usePedido } from '../../context/PedidoContext';
import ModalPedido from '../../components/modals/ModalPedido';

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
    const { dispatch } = usePedido();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const agregarAlPedido = (producto: Producto) => {
        dispatch({ type: 'AGREGAR_ITEM', payload: producto });
    };

    return (
        <div>
            <div className="w-11/12 mx-auto py-2">
                <p className=""><a href="/categorias">Categoría</a> / Producto</p>
            </div>
            <hr />


            {/* Detalle version escritorio*/}
            <div className="w-full hidden lg:block mb-16 py-8">
                <div className="flex  flex-wrap">
                    {productoData.map((producto) => (
                        <div key={producto.id} className="my-6 w-11/12 mx-auto px-2 flex rounded-xl py-8 bg-gray-100">
                            {/* Contenedor de imagen y descripción */}
                            <div className=" w-6/12 pr-4">
                                {/* Título y botón del pedido */}
                                <div className="mb-4">
                                    <h3 className="text-5xl font-bold text-justify w-11/12 mx-auto  pt-2">
                                        {producto.nombre}
                                    </h3>
                                </div>

                                {/* Imagen y descripción */}
                                <div className="w-11/12 mx-auto  rounded">
                                        <p className="text-center bg-sky-100 py-40">Img</p>



                                    {/* Descripción y precio */}
                                    <div className="w-full mt-4">
                                        <div className="w-11/12 mx-auto flex">
                                            <div className="w-10/12">
                                                <p className="text-xl">{producto.descripcion}</p>
                                                {producto.acabado && (
                                                    <p className="text-xl mb-1">
                                                        Acabado: {producto.acabado.nombre}
                                                    </p>
                                                )}
                                                {producto.categoria && (
                                                    <p className="text-xl mb-1">
                                                        Categoría: {producto.categoria.nombre}
                                                    </p>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => agregarAlPedido(producto)}
                                                className="w-2/12 text-center rounded-full h-12 mt-1 text-3xl pb-2 font-bold bg-gray-200 transition-transform hover:scale-105 duration-300"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <p className="mt-6 text-4xl w-11/12 mx-auto font-semibold">
                                            ${producto.precio}.00 MXN
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Especificaciones */}
                            <div className=" w-6/12 px-4 pt-4">
                                {producto.especificacion && (
                                    <section className=" mx-auto  p-2 ">
                                        <h3 className="font-bold mb-3 text-2xl">Especificaciones</h3>
                                        <table className="w-full border-collapse  rounded-lg overflow-hidden ">
                                            <tbody>
                                                {(() => {
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
                                                                className={`${index % 2 === 0 ? "bg-slate-400/50" : "bg-gray-200"}`}
                                                            >
                                                                <td className="py-2 font-semibold pl-4 rounded-l-lg w-1/2">
                                                                    {labelMap[key] ?? key}
                                                                </td>
                                                                <td className="py-2 text-center border-l-2 rounded-r-lg w-1/2">
                                                                    {value as string}
                                                                </td>
                                                            </tr>
                                                        );
                                                    });
                                                })()}
                                            </tbody>
                                        </table>
                                    </section>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* Detalle version moviles */}
            <div className="w-11/12 mx-auto lg:hidden">
                {productoData.map((producto) => (
                    <div key={producto.id} className="my-6 w-full px-2 rounded-xl bg-gray-100">
                        {/* Título y botón del pedido */}
                        <div className="w-11/12 mx-auto mb-4">
                            <h3 className="text-3xl font-bold text-justify pt-2 w-5/6">
                                {producto.nombre}
                            </h3>
                        </div>

                        {/* Imagen */}
                        <div className=" w-11/12 md:py-48 py-32 mx-auto bg-sky-100 rounded">
                            <p className="text-center md:pt-28 ">Img</p>
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
                                <button
                                    onClick={() => agregarAlPedido(producto)}
                                    className="w-2/12 text-center rounded-full h-12 mt-1 text-3xl pb-2 font-bold bg-gray-200 transition-transform hover:scale-105 duration-300"
                                >
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
                                <table className="w-full border-collapse rounded-lg overflow-hidden">
                                    <tbody>
                                        {(() => {
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
                                                        className={`${index % 2 === 0 ? "bg-slate-400/50" : "bg-gray-200"}`}
                                                    >
                                                        <td className="py-2 font-semibold pl-4 rounded-l-lg w-1/2">
                                                            {labelMap[key] ?? key}
                                                        </td>
                                                        <td className="py-2 text-center border-l-2 rounded-r-lg w-1/2">
                                                            {value as string}
                                                        </td>
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

            {/* Modal del pedido */}
            <ModalPedido
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Detalle;