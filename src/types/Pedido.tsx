// types/Pedido.tsx
import type { Producto } from './Producto';
import type { Domicilio } from "../context/PedidoContext";

export interface ItemPedido {
  producto: Producto;
  cantidad: number;
}

export interface PedidoState {
  items: ItemPedido[];
  total: number;
  domicilio?: Domicilio;
}