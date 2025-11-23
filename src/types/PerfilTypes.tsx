// src/types/PerfilTypes.ts
import type { ItemPedido } from './Pedido';
import type { Domicilio } from '../context/PedidoContext';

export interface PedidoPerfil {
    id: number;
    fechaCreacion: string;
    fechaEntregaEstimada: string;
    estado: "pendiente" | "procesando" | "en_transito" | "entregado" | "completado" | "cancelado";
    metodoPago: "transferencia" | "tarjeta" | "efectivo";
    items: ItemPedido[];
    subtotal: number;
    iva: number;
    total: number;
    domicilio?: Domicilio;
    trackingNumber?: string;
    clienteNombre: string;
    clienteEmail: string;
    clienteTelefono: string;
}