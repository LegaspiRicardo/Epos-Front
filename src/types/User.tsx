export interface User {
    id: number;
    nombre: string;
    email: string;
    telefono?: string;
    status: "activo" | "inactivo";
    rol: "cliente" | "admin";
}
