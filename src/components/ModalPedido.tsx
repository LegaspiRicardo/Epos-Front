// components/ModalPedido.tsx
import React, { useState } from "react";
import { usePedido } from "../context/PedidoContext";
import ModalDomicilio from "./ModalDomicilio";
import type { Domicilio } from "./ModalDomicilio";

interface ModalPedidoProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalPedido: React.FC<ModalPedidoProps> = ({ isOpen, onClose }) => {
  const { pedido, dispatch } = usePedido();
  const [showDomicilioModal, setShowDomicilioModal] = useState(false);

  if (!isOpen) return null;

  const eliminarItem = (id: number) => {
    dispatch({ type: "ELIMINAR_ITEM", payload: id });
  };

  const actualizarCantidad = (id: number, cantidad: number) => {
    if (cantidad < 1) return;
    dispatch({ type: "ACTUALIZAR_CANTIDAD", payload: { id, cantidad } });
  };

  const limpiarPedido = () => {
    dispatch({ type: "LIMPIAR_PEDIDO" });
  };

  const handleContinuarCotizacion = () => {
    setShowDomicilioModal(true);
  };

  const handleDomicilioContinue = (domicilio: Domicilio) => {
    // Guardar el domicilio en el contexto
    dispatch({ type: "AGREGAR_DOMICILIO", payload: domicilio });
    
    // Aquí puedes manejar el envío completo de la cotización
    const cotizacionCompleta = {
      ...pedido,
      domicilio
    };
    
    console.log("Cotización completa:", cotizacionCompleta);
    
    // Aquí iría tu llamada a la API
    // await enviarCotizacion(cotizacionCompleta);
    
    alert("Cotización enviada correctamente con domicilio");
    
    // Limpiar y cerrar
    limpiarPedido();
    setShowDomicilioModal(false);
    onClose();
  };

  const handleDomicilioClose = () => {
    setShowDomicilioModal(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">Mi Pedido / Cotización</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Lista de items */}
          <div className="p-4">
            {pedido.items.length === 0 ? (
              <p className="text-center text-gray-500 py-8">
                No hay productos en tu pedido
              </p>
            ) : (
              <>
                {pedido.items.map((item) => (
                  <div
                    key={item.producto.id}
                    className="flex items-center justify-between py-3 border-b bg-gray-100/50 rounded-xl"
                  >
                    <div className="w-4/12 md:h-40 h-32 mx-auto bg-sky-100 rounded">
                      <p className="text-center md:pt-16 pt-12">Img</p>
                    </div>
                    <div className="w-7/12 mx-auto">
                      <div className="flex-1 ">
                        <div className="flex ">
                          <h4 className="font-semibold md:text-4xl text-2xl md:mt-0 mt-1">
                            {item.producto.nombre}
                          </h4>

                          <button
                            onClick={() => eliminarItem(item.producto.id)}
                            className="md:text-3xl text-xl px-4 pb-2 text-red-500 hover:text-red-700 ml-auto"
                          >
                            ×
                          </button>
                        </div>

                        <p className="text-sm text-gray-600">
                          {item.producto.descripcion}
                        </p>
                      </div>

                      <div className="flex mt-4 ml-auto">
                        <p className="flex-item md:text-2xl md:font-normal font-semibold text-xs">
                          ${item.producto.precio}.00 MXN
                        </p>
                        <div className="flex items-center md:space-x-2 ml-auto ">
                          <button
                            onClick={() =>
                              actualizarCantidad(
                                item.producto.id,
                                item.cantidad - 1
                              )
                            }
                            className="w-8 h-8 bg-gray-200 rounded-full md:text-4xl flex items-center justify-center md:pb-3 pb-1 hover:bg-gray-300 transition-colors"
                          >
                            -
                          </button>
                          <span className="w-8 md:text-3xl text-center mb-1">
                            {item.cantidad}
                          </span>
                          <button
                            onClick={() =>
                              actualizarCantidad(
                                item.producto.id,
                                item.cantidad + 1
                              )
                            }
                            className="w-8 h-8 bg-gray-200 rounded-full md:text-3xl flex items-center justify-center md:pb-2 pb-1 hover:bg-gray-300 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Footer con total y acciones */}
          {pedido.items.length > 0 && (
            <div className="p-4 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-xl font-bold">${pedido.total}.00 MXN</span>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={limpiarPedido}
                  className="flex-1 border border-gray-500 text-gray-500 py-2 rounded hover:bg-gray-600 hover:text-white transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleContinuarCotizacion}
                  className="flex-1 bg-cyan-800 text-white py-2 rounded hover:bg-cyan-900 transition-colors"
                >
                  Continuar Cotización
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal de domicilio */}
      <ModalDomicilio
        isOpen={showDomicilioModal}
        onClose={handleDomicilioClose}
        onContinue={handleDomicilioContinue}
      />
    </>
  );
};

export default ModalPedido;