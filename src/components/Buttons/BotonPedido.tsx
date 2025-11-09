// components/BotonPedido.tsx
import React from 'react';
import { usePedido } from '../../context/PedidoContext';

const BotonPedido: React.FC = () => {
  const { pedido } = usePedido();
  
  return (
    <div className="relative">
      <div className="border-cyan-950 border-4 bg-gray-200 p-3 rounded-full"> {/* Reducido border y padding */}
        <img src="/icons/order.png" alt="Ver pedido" className="w-6"/>
      </div>
      {pedido.items.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
          {pedido.items.length}
        </span>
      )}
    </div>
  );
};

export default BotonPedido;