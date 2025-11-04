// components/BotonPedido.tsx
import React from 'react';
import { usePedido } from '../context/PedidoContext';

const BotonPedido: React.FC = () => {
  const { pedido } = usePedido();
  
  return (
    <button className="relative border-cyan-950 border-8 bg-gray-200 ml-auto p-6 rounded-full transition-transform hover:scale-105 duration-300">
      <img src="/icons/order.png" alt="Ver pedido" className="w-8  mx-auto"/>
      {pedido.items.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full flex items-center justify-center  font-bold">
          {pedido.items.length}
        </span>
      )}
    </button>
  );
};

export default BotonPedido;