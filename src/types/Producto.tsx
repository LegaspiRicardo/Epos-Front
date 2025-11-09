import type { Categoria } from "./Categoria";
import type { Marca } from "./Marca";
import type { Acabado } from "./Acabado";
import type { Especificacion } from "./Especificacion";

export interface Producto {
    id: number;
    nombre: string;
    descripcion?: string;
    precio: number;
    stock: number;
    img?: string;
    status: 'existente' | 'inexistente' | 'revisar disp';
    id_marca: number;
    id_categoria: number;
    id_acabado: number;

    // Relaciones opcionales
    marca?: Marca;
    categoria?: Categoria;
    acabado?: Acabado;
    especificacion?: Especificacion;
}
