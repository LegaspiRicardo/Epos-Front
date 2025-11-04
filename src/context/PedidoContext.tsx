// context/PedidoContext.tsx
import type {ReactNode}  from "react";
import React, { createContext, useContext, useReducer } from "react";
import type { Producto } from "../types/Producto";
import type {  PedidoState } from "../types/Pedido";

type PedidoAction =
  | { type: "AGREGAR_ITEM"; payload: Producto }
  | { type: "ELIMINAR_ITEM"; payload: number }
  | { type: "ACTUALIZAR_CANTIDAD"; payload: { id: number; cantidad: number } }
  | { type: "LIMPIAR_PEDIDO" };

const PedidoContext = createContext<{
  pedido: PedidoState;
  dispatch: React.Dispatch<PedidoAction>;
} | null>(null);

const pedidoReducer = (
  state: PedidoState,
  action: PedidoAction
): PedidoState => {
  switch (action.type) {
    case "AGREGAR_ITEM":
      const productoExistente = state.items.find(
        (item) => item.producto.id === action.payload.id
      );

      if (productoExistente) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.producto.id === action.payload.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          ),
          total: state.total + action.payload.precio,
        };
      }

      return {
        ...state,
        items: [...state.items, { producto: action.payload, cantidad: 1 }],
        total: state.total + action.payload.precio,
      };

    case "ELIMINAR_ITEM":
      const itemAEliminar = state.items.find(
        (item) => item.producto.id === action.payload
      );
      if (!itemAEliminar) return state;

      return {
        ...state,
        items: state.items.filter(
          (item) => item.producto.id !== action.payload
        ),
        total:
          state.total - itemAEliminar.producto.precio * itemAEliminar.cantidad,
      };

    case "ACTUALIZAR_CANTIDAD":
      const itemActual = state.items.find(
        (item) => item.producto.id === action.payload.id
      );
      if (!itemActual) return state;

      const diferencia = action.payload.cantidad - itemActual.cantidad;

      return {
        ...state,
        items: state.items.map((item) =>
          item.producto.id === action.payload.id
            ? { ...item, cantidad: action.payload.cantidad }
            : item
        ),
        total: state.total + itemActual.producto.precio * diferencia,
      };

    case "LIMPIAR_PEDIDO":
      return {
        items: [],
        total: 0,
      };

    default:
      return state;
  }
};

export const PedidoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pedido, dispatch] = useReducer(pedidoReducer, {
    items: [],
    total: 0,
  });

  return (
    <PedidoContext.Provider value={{ pedido, dispatch }}>
      {children}
    </PedidoContext.Provider>
  );
};

export const usePedido = () => {
  const context = useContext(PedidoContext);
  if (!context) {
    throw new Error("usePedido debe ser usado dentro de un PedidoProvider");
  }
  return context;
};
