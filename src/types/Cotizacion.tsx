// src/types/Cotizacion.ts
import type { Producto } from './Producto';
import type { Domicilio } from "../context/PedidoContext";

export interface ItemCotizacion {
    producto: Producto;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
}

export interface Cotizacion {
    id: number;
    clienteId: number;
    clienteNombre: string;
    clienteEmail: string;
    clienteTelefono: string;
    fechaCreacion: string;
    estado: 'pendiente' | 'enviada' | 'aceptada' | 'rechazada' | 'expirada';
    items: ItemCotizacion[];
    subtotal: number;
    iva: number;
    total: number;
    notasCliente?: string;
    notasInternas?: string;
    domicilioEntrega?: Domicilio;
    fechaEnvio?: string;
    fechaRespuesta?: string;
}

export interface PedidoFromCotizacion {
    id: number;
    cotizacionId: number;
    clienteId: number;
    clienteNombre: string;
    fechaPedido: string;
    estado: 'pendiente' | 'confirmado' | 'en_proceso' | 'enviado' | 'entregado' | 'cancelado';
    items: ItemCotizacion[];
    subtotal: number;
    iva: number;
    total: number;
    domicilioEntrega: Domicilio;
    metodoPago: string;
    numeroSeguimiento?: string;
    fechaEntregaEstimada?: string;
}