// Detalle.tsx (corregido)
import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { Producto } from "../../types/Producto";
import Footer from "../../components/Footer";
import { usePedido } from "../../context/PedidoContext";
import ModalPedido from "../../components/modals/ModalPedido";

// Datos simulados
const productoData: Producto[] = [
  {
    id: 1,
    nombre: "BR10-046LP",
    descripcion: "Birlo rueda 3/4 - 16 * 2.375",
    precio: 150,
    stock: 10,
    img: "img",
    status: "existente",
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
  // const { id } = useParams(); // Obtener el ID de la URL
  const { dispatch } = usePedido();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // En una app real, aquí buscarías el producto por ID
  const producto = productoData[0]; // Por ahora usamos el primer producto

  const agregarAlPedido = (producto: Producto) => {
    dispatch({ type: "AGREGAR_ITEM", payload: producto });
    setIsModalOpen(true); // Abrir modal al agregar al pedido
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="w-11/12 mx-auto py-4">
        <nav className="flex text-sm text-gray-600">
          <Link to="/" className="hover:text-cyan-700 transition-colors">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link to="/tienda" className="hover:text-cyan-700 transition-colors">
            Tienda
          </Link>
          <span className="mx-2">/</span>
          <Link
            to={`/categoria/${producto.categoria?.id}`}
            className="hover:text-cyan-700 transition-colors"
          >
            {producto.categoria?.nombre}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{producto.nombre}</span>
        </nav>
      </div>

      {/* Detalle version escritorio*/}
      <div className="w-full hidden lg:block mb-16 ">
        <div className="flex flex-wrap">
          <div className=" w-11/12 mx-auto px-2 flex rounded-xl py-8 bg-white shadow-sm border border-gray-200">
            {/* Contenedor de imagen y descripción */}
            <div className="w-6/12 pr-8">
              {/* Título y botón del pedido */}
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 w-11/12 mx-auto">
                  {producto.nombre}
                </h1>
              </div>

              {/* Imagen y descripción */}
              <div className="w-11/12 mx-auto">
                <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-lg">
                    Imagen del producto
                  </span>
                </div>

                {/* Descripción y precio */}
                <div className="w-full mt-6">
                  <div className="w-11/12 mx-auto flex items-start gap-4">
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 mb-3">
                        {producto.descripcion}
                      </p>
                      {producto.acabado && (
                        <p className="text-lg text-gray-600 mb-2">
                          <span className="font-semibold">Acabado:</span>{" "}
                          {producto.acabado.nombre}
                        </p>
                      )}
                      {producto.categoria && (
                        <p className="text-lg text-gray-600 mb-2">
                          <span className="font-semibold">Categoría:</span>{" "}
                          {producto.categoria.nombre}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => agregarAlPedido(producto)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 hover:scale-110 shadow-md"
                      title="Agregar al pedido"
                    >
                      +
                    </button>
                  </div>
                  <div className="mt-6 w-11/12 mx-auto">
                    <p className="text-3xl font-bold text-cyan-800">
                      ${producto.precio}.00 MXN
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Precio unitario
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Especificaciones */}
            <div className="w-6/12 pl-8 border-l border-gray-200">
              {producto.especificacion && (
                <section className="p-4">
                  <h2 className="font-bold mb-6 text-2xl text-gray-900">
                    Especificaciones Técnicas
                  </h2>
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <table className="w-full">
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
                            categoria:
                              producto.categoria?.nombre ?? "Sin categoría",
                            acabado: producto.acabado?.nombre ?? "Sin acabado",
                            marca: producto.marca?.nombre ?? "Sin marca",
                          };

                          return Object.entries(allSpecs).map(
                            ([key, value], index) => {
                              if (key === "id" || key === "id_producto")
                                return null;
                              return (
                                <tr
                                  key={key}
                                  className={`${
                                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                  } border-b border-gray-200 last:border-b-0`}
                                >
                                  <td className="py-4 font-semibold text-gray-700 pl-6 w-2/5">
                                    {labelMap[key] ?? key}
                                  </td>
                                  <td className="py-4 text-gray-600 pl-6 border-l border-gray-200">
                                    {value as string}
                                  </td>
                                </tr>
                              );
                            }
                          );
                        })()}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Detalle version móvil */}
      <div className="w-11/12 pb-16 mx-auto lg:hidden">
        <div className=" w-full rounded-xl bg-white shadow-sm border border-gray-200 overflow-hidden">
          {/* Título */}
          <div className="px-6 pt-2  border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">
              {producto.nombre}
            </h1>
          </div>

          {/* Imagen */}
          <div className="p-6 ">
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Imagen del producto</span>
            </div>
          </div>

          {/* Descripción */}
          <section className=" px-6 ">
            <p className="font-semibold  text-xl text-gray-700 mb-2">
              {producto.descripcion}
            </p>

            <div className="flex justify-between">
              <div>
                {producto.acabado && (
                  <p className="text-gray-600">
                    <span className="font-semibold">Acabado:</span>{" "}
                    {producto.acabado.nombre}
                  </p>
                )}
                {producto.categoria && (
                  <p className="text-gray-600">
                    <span className="font-semibold">Categoría:</span>{" "}
                    {producto.categoria.nombre}
                  </p>
                )}
              </div>

              <div>
                <button
                  onClick={() => agregarAlPedido(producto)}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white w-12 h-12 pb-1 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 hover:scale-110 shadow-md"
                >
                  +
                </button>
              </div>
            </div>
          </section>

          {/* Precio  */}
          <div className="p-6 border-b text-end border-gray-200">
              <div>
                <p className="text-5xl font-bold text-cyan-800">
                  ${producto.precio}.00
                </p>
                <p className="text-sm text-gray-500">MXN</p>
              </div>
          </div>

          {/* Especificaciones */}
          {producto.especificacion && (
            <div className="p-6">
              <h2 className="font-bold mb-4 text-xl text-gray-900">
                Especificaciones
              </h2>
              <div className="space-y-3">
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

                  return Object.entries(allSpecs).map(([key, value]) => {
                    if (key === "id" || key === "id_producto") return null;
                    return (
                      <div
                        key={key}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-semibold text-gray-700">
                          {labelMap[key] ?? key}:
                        </span>
                        <span className="text-gray-600">{value as string}</span>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal del pedido */}
      <ModalPedido isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Detalle;
