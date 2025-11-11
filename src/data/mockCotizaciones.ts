// src/data/mockCotizaciones.ts
import type { Cotizacion, PedidoFromCotizacion } from "../types/Cotizacion";

export const mockCotizaciones: Cotizacion[] = [
    {
        id: 1,
        clienteId: 1,
        clienteNombre: "Ana García Martínez",
        clienteEmail: "ana.garcia@email.com",
        clienteTelefono: "555-123-4567",
        fechaCreacion: "2024-03-20",
        estado: "enviada",
        items: [
            {
                producto: {
                    id: 101,
                    nombre: "Tornillo Hexagonal M8x1.25",
                    descripcion: "Tornillo hexagonal grado 8.8 para motor",
                    precio: 4.50,
                    stock: 500,
                    status: "existente",
                    id_marca: 1,
                    id_categoria: 1,
                    id_acabado: 1
                },
                cantidad: 100,
                precioUnitario: 4.50,
                subtotal: 450
            },
            {
                producto: {
                    id: 102,
                    nombre: "Tuerca M8 Nylock",
                    descripcion: "Tuerca de seguridad con anillo de nylon",
                    precio: 2.80,
                    stock: 300,
                    status: "existente",
                    id_marca: 1,
                    id_categoria: 2,
                    id_acabado: 2
                },
                cantidad: 100,
                precioUnitario: 2.80,
                subtotal: 280
            },
            {
                producto: {
                    id: 103,
                    nombre: "Arandela Plana M8",
                    descripcion: "Arandela plana de acero zincado",
                    precio: 0.80,
                    stock: 1000,
                    status: "existente",
                    id_marca: 2,
                    id_categoria: 3,
                    id_acabado: 1
                },
                cantidad: 100,
                precioUnitario: 0.80,
                subtotal: 80
            }
        ],
        subtotal: 810,
        iva: 129.60,
        total: 939.60,
        notasCliente: "Para reparación de motor Toyota Corolla 2020",
        domicilioEntrega: {
            calle: "Av. Revolución",
            numeroExterior: "123",
            colonia: "Centro",
            ciudad: "Ciudad de México",
            estado: "CDMX",
            codigoPostal: "06000",
            referencias: "Frente al banco BBVA"
        },
        fechaEnvio: "2024-03-21"
    },
    {
        id: 2,
        clienteId: 2,
        clienteNombre: "Carlos Rodríguez López",
        clienteEmail: "carlos.rodriguez@email.com",
        clienteTelefono: "555-987-6543",
        fechaCreacion: "2024-03-22",
        estado: "pendiente",
        items: [
            {
                producto: {
                    id: 104,
                    nombre: "Birlo M10x1.5 Grado 10.9",
                    descripcion: "Birlo para culata de motor diesel",
                    precio: 12.50,
                    stock: 150,
                    status: "existente",
                    id_marca: 3,
                    id_categoria: 4,
                    id_acabado: 3
                },
                cantidad: 12,
                precioUnitario: 12.50,
                subtotal: 150
            },
            {
                producto: {
                    id: 105,
                    nombre: "Resorte de Válvula",
                    descripcion: "Resorte para válvula de motor 4 cilindros",
                    precio: 45.00,
                    stock: 80,
                    status: "existente",
                    id_marca: 4,
                    id_categoria: 5,
                    id_acabado: 4
                },
                cantidad: 8,
                precioUnitario: 45.00,
                subtotal: 360
            }
        ],
        subtotal: 510,
        iva: 81.60,
        total: 591.60,
        notasCliente: "Para reconstrucción de motor Ford F-150"
    },
    {
        id: 3,
        clienteId: 4,
        clienteNombre: "José Martínez Sánchez",
        clienteEmail: "jose.martinez@email.com",
        clienteTelefono: "555-234-5678",
        fechaCreacion: "2024-03-18",
        estado: "aceptada",
        items: [
            {
                producto: {
                    id: 106,
                    nombre: "Tornillo Allen M6x1.0",
                    descripcion: "Tornillo cabeza allen para transmisión",
                    precio: 3.20,
                    stock: 400,
                    status: "existente",
                    id_marca: 2,
                    id_categoria: 1,
                    id_acabado: 2
                },
                cantidad: 50,
                precioUnitario: 3.20,
                subtotal: 160
            },
            {
                producto: {
                    id: 107,
                    nombre: "Muelle de Suspensión",
                    descripcion: "Muelle helicoidal para suspensión delantera",
                    precio: 280.00,
                    stock: 25,
                    status: "existente",
                    id_marca: 5,
                    id_categoria: 5,
                    id_acabado: 5
                },
                cantidad: 2,
                precioUnitario: 280.00,
                subtotal: 560
            },
            {
                producto: {
                    id: 108,
                    nombre: "Perno de Rueda M12x1.5",
                    descripcion: "Perno para rueda de camioneta",
                    precio: 8.75,
                    stock: 200,
                    status: "existente",
                    id_marca: 1,
                    id_categoria: 4,
                    id_acabado: 1
                },
                cantidad: 20,
                precioUnitario: 8.75,
                subtotal: 175
            }
        ],
        subtotal: 895,
        iva: 143.20,
        total: 1038.20,
        notasCliente: "Para taller mecánico - cliente frecuente",
        domicilioEntrega: {
            calle: "Av. Chapultepec",
            numeroExterior: "456",
            colonia: "Roma Norte",
            ciudad: "Ciudad de México",
            estado: "CDMX",
            codigoPostal: "06700",
            referencias: "Cerca del metro Insurgentes"
        },
        fechaEnvio: "2024-03-19",
        fechaRespuesta: "2024-03-25"
    }
];

export const mockPedidos: PedidoFromCotizacion[] = [
    {
        id: 1,
        cotizacionId: 3,
        clienteId: 4,
        clienteNombre: "José Martínez Sánchez",
        fechaPedido: "2024-03-25",
        estado: "confirmado",
        items: [
            {
                producto: {
                    id: 106,
                    nombre: "Tornillo Allen M6x1.0",
                    descripcion: "Tornillo cabeza allen para transmisión",
                    precio: 3.20,
                    stock: 400,
                    status: "existente",
                    id_marca: 2,
                    id_categoria: 1,
                    id_acabado: 2
                },
                cantidad: 50,
                precioUnitario: 3.20,
                subtotal: 160
            },
            {
                producto: {
                    id: 107,
                    nombre: "Muelle de Suspensión",
                    descripcion: "Muelle helicoidal para suspensión delantera",
                    precio: 280.00,
                    stock: 25,
                    status: "existente",
                    id_marca: 5,
                    id_categoria: 5,
                    id_acabado: 5
                },
                cantidad: 2,
                precioUnitario: 280.00,
                subtotal: 560
            },
            {
                producto: {
                    id: 108,
                    nombre: "Perno de Rueda M12x1.5",
                    descripcion: "Perno para rueda de camioneta",
                    precio: 8.75,
                    stock: 200,
                    status: "existente",
                    id_marca: 1,
                    id_categoria: 4,
                    id_acabado: 1
                },
                cantidad: 20,
                precioUnitario: 8.75,
                subtotal: 175
            }
        ],
        subtotal: 895,
        iva: 143.20,
        total: 1038.20,
        domicilioEntrega: {
            calle: "Av. Chapultepec",
            numeroExterior: "456",
            colonia: "Roma Norte",
            ciudad: "Ciudad de México",
            estado: "CDMX",
            codigoPostal: "06700",
            referencias: "Cerca del metro Insurgentes"
        },
        metodoPago: "Transferencia bancaria",
        fechaEntregaEstimada: "2024-04-05"
    },
    {
        id: 2,
        cotizacionId: 1,
        clienteId: 1,
        clienteNombre: "Ana García Martínez",
        fechaPedido: "2024-03-26",
        estado: "en_proceso",
        items: [
            {
                producto: {
                    id: 101,
                    nombre: "Tornillo Hexagonal M8x1.25",
                    descripcion: "Tornillo hexagonal grado 8.8 para motor",
                    precio: 4.50,
                    stock: 500,
                    status: "existente",
                    id_marca: 1,
                    id_categoria: 1,
                    id_acabado: 1
                },
                cantidad: 100,
                precioUnitario: 4.50,
                subtotal: 450
            },
            {
                producto: {
                    id: 102,
                    nombre: "Tuerca M8 Nylock",
                    descripcion: "Tuerca de seguridad con anillo de nylon",
                    precio: 2.80,
                    stock: 300,
                    status: "existente",
                    id_marca: 1,
                    id_categoria: 2,
                    id_acabado: 2
                },
                cantidad: 100,
                precioUnitario: 2.80,
                subtotal: 280
            },
            {
                producto: {
                    id: 103,
                    nombre: "Arandela Plana M8",
                    descripcion: "Arandela plana de acero zincado",
                    precio: 0.80,
                    stock: 1000,
                    status: "existente",
                    id_marca: 2,
                    id_categoria: 3,
                    id_acabado: 1
                },
                cantidad: 100,
                precioUnitario: 0.80,
                subtotal: 80
            }
        ],
        subtotal: 810,
        iva: 129.60,
        total: 939.60,
        domicilioEntrega: {
            calle: "Av. Revolución",
            numeroExterior: "123",
            colonia: "Centro",
            ciudad: "Ciudad de México",
            estado: "CDMX",
            codigoPostal: "06000",
            referencias: "Frente al banco BBVA"
        },
        metodoPago: "Tarjeta de crédito",
        numeroSeguimiento: "TRK789456123",
        fechaEntregaEstimada: "2024-03-30"
    }
];