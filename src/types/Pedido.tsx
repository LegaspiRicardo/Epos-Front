// types/Pedido.tsx
import type { Producto } from './Producto';

export interface ItemPedido {
  producto: Producto;
  cantidad: number;
}

export interface PedidoState {
  items: ItemPedido[];
  total: number;
}