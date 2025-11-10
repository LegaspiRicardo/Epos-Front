// src/data/mockUsers.ts
import type { User } from "../types/User";


export const mockUsers: User[] = [
    {
        id: 1,
        nombre: "Ana",
        apellidos: "García Martínez",
        email: "ana.garcia@email.com",
        telefono: "555-123-4567",
        status: "activo",
        rol: "cliente",
        fechaRegistro: "2025-11-05",
        ultimoPedido: "2024-03-20",
        pedidosRealizados: 12,
        totalGastado: 24500,
        domicilios: [
            {
                id: 1,
                calle: "Av. Revolución",
                numero: "123",
                colonia: "Centro",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "06000",
                referencias: "Frente al banco BBVA",
                tipo: "casa",
                principal: true
            },
            {
                id: 2,
                calle: "Calle Morelos",
                numero: "45",
                colonia: "Industrial",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "06500",
                referencias: "Edificio blanco, piso 3",
                tipo: "trabajo",
                principal: false
            },
            {
                id: 3,
                calle: "Calle Tlalpan",
                numero: "234",
                colonia: "Industrial",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "45500",
                referencias: "Casa Morada cancel rojo",
                tipo: "casa",
                principal: false
            },
            {
                id: 4,
                calle: "Avenida Insurgentes",
                numero: "1800-A",
                colonia: "Centro Ciudad",
                ciudad: "Tamaulipas",
                estado: "Tamaulipas",
                codigoPostal: "23456",
                referencias: "Piso 18, departamento C",
                tipo: "casa",
                principal: false
            },
        ]
    },
    {
        id: 2,
        nombre: "Carlos",
        apellidos: "Rodríguez López",
        email: "carlos.rodriguez@email.com",
        telefono: "555-987-6543",
        status: "activo",
        rol: "cliente",
        fechaRegistro: "2025-11-05",
        ultimoPedido: "2024-03-18",
        pedidosRealizados: 8,
        totalGastado: 18750,
        domicilios: [
            {
                id: 1,
                calle: "Calle Juárez",
                numero: "789",
                colonia: "Del Valle",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "03100",
                referencias: "Esquina con Av. Insurgentes",
                tipo: "casa",
                principal: true
            }
        ]
    },
    {
        id: 3,
        nombre: "María",
        apellidos: "Hernández González",
        email: "maria.hernandez@email.com",
        telefono: "555-456-7890",
        status: "activo",
        rol: "registrado",
        fechaRegistro: "2025-11-05",
        totalGastado: 0,
        domicilios: []
    },
    {
        id: 4,
        nombre: "José",
        apellidos: "Martínez Sánchez",
        email: "jose.martinez@email.com",
        telefono: "555-234-5678",
        status: "activo",
        rol: "cliente",
        fechaRegistro: "2024-02-15",
        ultimoPedido: "2024-03-15",
        pedidosRealizados: 15,
        totalGastado: 32500,
        domicilios: [
            {
                id: 1,
                calle: "Av. Chapultepec",
                numero: "456",
                colonia: "Roma Norte",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "06700",
                referencias: "Cerca del metro Insurgentes",
                tipo: "casa",
                principal: true
            }
        ]
    },
    {
        id: 5,
        nombre: "Laura",
        apellidos: "Díaz Ramírez",
        email: "laura.diaz@email.com",
        telefono: "555-345-6789",
        status: "inactivo",
        rol: "cliente",
        fechaRegistro: "2024-01-05",
        ultimoPedido: "2024-02-28",
        pedidosRealizados: 5,
        totalGastado: 8900,
        domicilios: [
            {
                id: 1,
                calle: "Calle Durango",
                numero: "234",
                colonia: "Condesa",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "06140",
                referencias: "Frente al parque México",
                tipo: "casa",
                principal: true
            }
        ]
    },
    {
        id: 6,
        nombre: "Miguel",
        apellidos: "Torres Flores",
        email: "miguel.torres@email.com",
        telefono: "555-567-8901",
        status: "activo",
        rol: "registrado",
        fechaRegistro: "2024-03-01",
        pedidosRealizados: 0,
        totalGastado: 0,
        domicilios: []
    },
    {
        id: 7,
        nombre: "Elena",
        apellidos: "Vargas Castro",
        email: "elena.vargas@email.com",
        telefono: "555-678-9012",
        status: "activo",
        rol: "cliente",
        fechaRegistro: "2024-01-30",
        ultimoPedido: "2024-03-19",
        pedidosRealizados: 20,
        totalGastado: 45200,
        domicilios: [
            {
                id: 1,
                calle: "Av. Patriotismo",
                numero: "567",
                colonia: "San Pedro de los Pinos",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "03800",
                referencias: "Casa color azul",
                tipo: "casa",
                principal: true
            },
            {
                id: 2,
                calle: "Av. Universidad",
                numero: "1200",
                colonia: "Copilco",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "04360",
                referencias: "Departamento 504",
                tipo: "otro",
                principal: false
            }
        ]
    },
    {
        id: 8,
        nombre: "Fernando",
        apellidos: "Morales Ruiz",
        email: "fernando.morales@email.com",
        telefono: "555-789-0123",
        status: "activo",
        rol: "cliente",
        fechaRegistro: "2024-02-22",
        ultimoPedido: "2024-03-17",
        pedidosRealizados: 3,
        totalGastado: 6700,
        domicilios: [
            {
                id: 1,
                calle: "Calle Coahuila",
                numero: "89",
                colonia: "Roma Sur",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "06760",
                referencias: "Entre Durango y Colima",
                tipo: "casa",
                principal: true
            }
        ]
    },
    {
        id: 9,
        nombre: "Sofia",
        apellidos: "Cruz Mendoza",
        email: "sofia.cruz@email.com",
        telefono: "555-890-1234",
        status: "inactivo",
        rol: "registrado",
        fechaRegistro: "2024-02-28",
        pedidosRealizados: 0,
        totalGastado: 0,
        domicilios: []
    },
    {
        id: 10,
        nombre: "Ricardo",
        apellidos: "Ortiz Silva",
        email: "ricardo.ortiz@email.com",
        telefono: "555-901-2345",
        status: "activo",
        rol: "cliente",
        fechaRegistro: "2024-01-12",
        ultimoPedido: "2024-03-21",
        pedidosRealizados: 25,
        totalGastado: 58700,
        domicilios: [
            {
                id: 1,
                calle: "Av. Mazatlán",
                numero: "345",
                colonia: "Condesa",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "06170",
                referencias: "Casa con portón negro",
                tipo: "casa",
                principal: true
            },
            {
                id: 2,
                calle: "Av. Tamaulipas",
                numero: "678",
                colonia: "Condesa",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "06170",
                referencias: "Oficina 203",
                tipo: "trabajo",
                principal: false
            }
        ]
    },
    {
        id: 11,
        nombre: "Gabriela",
        apellidos: "Rios Navarro",
        email: "gabriela.rios@email.com",
        telefono: "555-012-3456",
        status: "activo",
        rol: "registrado",
        fechaRegistro: "2024-03-05",
        pedidosRealizados: 0,
        totalGastado: 0,
        domicilios: []
    },
    {
        id: 12,
        nombre: "Alejandro",
        apellidos: "Mendoza Pérez",
        email: "alejandro.mendoza@email.com",
        telefono: "555-123-7890",
        status: "activo",
        rol: "cliente",
        fechaRegistro: "2024-01-08",
        ultimoPedido: "2024-03-16",
        pedidosRealizados: 18,
        totalGastado: 41200,
        domicilios: [
            {
                id: 1,
                calle: "Calle Oaxaca",
                numero: "156",
                colonia: "Roma Norte",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "06700",
                referencias: "Edificio de departamentos",
                tipo: "casa",
                principal: true
            }
        ]
    },
    {
        id: 13,
        nombre: "Patricia",
        apellidos: "Lara Guzmán",
        email: "patricia.lara@email.com",
        telefono: "555-234-8901",
        status: "inactivo",
        rol: "cliente",
        fechaRegistro: "2024-02-05",
        ultimoPedido: "2024-02-20",
        pedidosRealizados: 2,
        totalGastado: 4500,
        domicilios: [
            {
                id: 1,
                calle: "Av. Yucatán",
                numero: "267",
                colonia: "Roma Sur",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "06760",
                referencias: "Casa color rosa",
                tipo: "casa",
                principal: true
            }
        ]
    },
    {
        id: 14,
        nombre: "Roberto",
        apellidos: "Soto Jiménez",
        email: "roberto.soto@email.com",
        telefono: "555-345-9012",
        status: "activo",
        rol: "registrado",
        fechaRegistro: "2024-03-10",
        pedidosRealizados: 0,
        totalGastado: 0,
        domicilios: []
    },
    {
        id: 15,
        nombre: "Carmen",
        apellidos: "Castillo Vega",
        email: "carmen.castillo@email.com",
        telefono: "555-456-0123",
        status: "activo",
        rol: "cliente",
        fechaRegistro: "2024-01-25",
        ultimoPedido: "2024-03-22",
        pedidosRealizados: 30,
        totalGastado: 72300,
        domicilios: [
            {
                id: 1,
                calle: "Av. Álvaro Obregón",
                numero: "789",
                colonia: "Roma Norte",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "06700",
                referencias: "Local comercial",
                tipo: "trabajo",
                principal: true
            },
            {
                id: 2,
                calle: "Calle Colima",
                numero: "123",
                colonia: "Roma Norte",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "06700",
                referencias: "Departamento 201",
                tipo: "casa",
                principal: false
            }
        ]
    },
    {
        id: 16,
        nombre: "Javier",
        apellidos: "Romero Herrera",
        email: "javier.romero@email.com",
        telefono: "555-567-1234",
        status: "activo",
        rol: "cliente",
        fechaRegistro: "2024-02-18",
        ultimoPedido: "2024-03-14",
        pedidosRealizados: 7,
        totalGastado: 15600,
        domicilios: [
            {
                id: 1,
                calle: "Calle Zacatecas",
                numero: "345",
                colonia: "Condesa",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "06140",
                referencias: "Casa con jardín",
                tipo: "casa",
                principal: true
            }
        ]
    },
    {
        id: 17,
        nombre: "Diana",
        apellidos: "Meza Ortega",
        email: "diana.meza@email.com",
        telefono: "555-678-2345",
        status: "inactivo",
        rol: "registrado",
        fechaRegistro: "2024-03-03",
        pedidosRealizados: 0,
        totalGastado: 0,
        domicilios: []
    },
    {
        id: 18,
        nombre: "Oscar",
        apellidos: "Reyes Delgado",
        email: "oscar.reyes@email.com",
        telefono: "555-789-3456",
        status: "activo",
        rol: "cliente",
        fechaRegistro: "2024-01-18",
        ultimoPedido: "2024-03-23",
        pedidosRealizados: 22,
        totalGastado: 49800,
        domicilios: [
            {
                id: 1,
                calle: "Av. Michoacán",
                numero: "456",
                colonia: "Condesa",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "06170",
                referencias: "Esquina con Nuevo León",
                tipo: "casa",
                principal: true
            }
        ]
    },
    {
        id: 19,
        nombre: "Teresa",
        apellidos: "Acosta Medina",
        email: "teresa.acosta@email.com",
        telefono: "555-890-4567",
        status: "activo",
        rol: "registrado",
        fechaRegistro: "2024-03-08",
        pedidosRealizados: 0,
        totalGastado: 0,
        domicilios: []
    },
    {
        id: 20,
        nombre: "Luis",
        apellidos: "Campos Rojas",
        email: "luis.campos@email.com",
        telefono: "555-901-5678",
        status: "activo",
        rol: "cliente",
        fechaRegistro: "2024-02-14",
        ultimoPedido: "2024-03-24",
        pedidosRealizados: 9,
        totalGastado: 21300,
        domicilios: [
            {
                id: 1,
                calle: "Calle Sonora",
                numero: "189",
                colonia: "Hipódromo",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "06100",
                referencias: "Cerca del hipódromo",
                tipo: "casa",
                principal: true
            },
            {
                id: 2,
                calle: "Av. Veracruz",
                numero: "234",
                colonia: "Condesa",
                ciudad: "Ciudad de México",
                estado: "CDMX",
                codigoPostal: "06170",
                referencias: "Oficina 501",
                tipo: "trabajo",
                principal: false
            }
        ]
    }
];