// src/types/User.tsx
export interface User {
  id: number;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  status: "activo" | "inactivo";
  rol: "cliente" | "admin" | "registrado";
  fechaRegistro: string;
  ultimoPedido?: string;
  domicilios?: Domicilio[];
  pedidosRealizados?: number;
  totalGastado?: number;
  tipo?: "registrado" | "cliente";
}

export interface Domicilio {
  id: number;
  calle: string;
  numero: string;
  colonia: string;
  ciudad: string;
  estado: string;
  codigoPostal: string;
  referencias?: string;
  tipo: "casa" | "trabajo" | "otro";
  principal: boolean;
}