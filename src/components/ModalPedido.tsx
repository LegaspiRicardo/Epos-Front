// components/ModalPedido.tsx
import React from 'react';
import { usePedido } from '../context/PedidoContext';

interface ModalPedidoProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalPedido: React.FC<ModalPedidoProps> = ({ isOpen, onClose }) => {
  const { pedido, dispatch } = usePedido();

  if (!isOpen) return null;

  const eliminarItem = (id: number) => {
    dispatch({ type: 'ELIMINAR_ITEM', payload: id });
  };

  const actualizarCantidad = (id: number, cantidad: number) => {
    if (cantidad < 1) return;
    dispatch({ type: 'ACTUALIZAR_CANTIDAD', payload: { id, cantidad } });
  };

  const limpiarPedido = () => {
    dispatch({ type: 'LIMPIAR_PEDIDO' });
  };

  return (
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
                <div key={item.producto.id} className="flex items-center justify-between py-3 border-b">
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.producto.nombre}</h4>
                    <p className="text-sm text-gray-600">{item.producto.descripcion}</p>
                    <p className="text-lg font-bold">${item.producto.precio}.00 MXN</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => actualizarCantidad(item.producto.id, item.cantidad - 1)}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.cantidad}</span>
                    <button
                      onClick={() => actualizarCantidad(item.producto.id, item.cantidad + 1)}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                    >
                      +
                    </button>
                    <button
                      onClick={() => eliminarItem(item.producto.id)}
                      className="ml-4 text-red-500 hover:text-red-700"
                    >
                      Eliminar
                    </button>
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
                className="flex-1 bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
              >
                Limpiar Todo
              </button>
              <button
                onClick={() => {
                  // Aquí puedes implementar la lógica para enviar la cotización
                  console.log('Enviar cotización:', pedido);
                  alert('Cotización enviada correctamente');
                  limpiarPedido();
                  onClose();
                }}
                className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Enviar Cotización
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalPedido;