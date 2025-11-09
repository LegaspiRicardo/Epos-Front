// src/pages/admin/Productos.tsx
import { useState, useMemo } from 'react';
import ProductoModal from '../../components/modals/ProductoModal';
import type { Producto } from '../../types/Producto';

const Productos = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const itemsPerPage = 15;

    const productos: Producto[] = [
        {
            id: 1,
            nombre: 'BR80-033RP',
            descripcion: 'Birlo rueda 5/8-11 x 3.500',
            precio: 25.50,
            stock: 100,
            img: '',
            status: 'existente',
            id_marca: 1,
            id_categoria: 1,
            id_acabado: 1,
            marca: { id: 1, nombre: 'Sheumann' },
            categoria: { id: 1, nombre: 'Birlo' },
            acabado: { id: 1, nombre: 'Pavonado' },
            especificacion: {
                id: 1,
                id_producto: 1,
                uEmpaque: 'Caja x 100',
                uso: 'Agrícola',
                grado: '8.8',
                dRosca: '5/8"',
                pRosca: '11',
                longitud: '3.500"',
                familia: 'Birlos'
            }
        },
        {
            id: 2,
            nombre: 'BR80-027RP',
            descripcion: 'Birlo rueda 5/8-18 x 1.875',
            precio: 22.80,
            stock: 75,
            img: '',
            status: 'existente',
            id_marca: 2,
            id_categoria: 1,
            id_acabado: 1,
            marca: { id: 2, nombre: 'International' },
            categoria: { id: 1, nombre: 'Birlo' },
            acabado: { id: 1, nombre: 'Pavonado' },
            especificacion: {
                id: 2,
                id_producto: 2,
                uEmpaque: 'Caja x 50',
                uso: 'Agrícola',
                grado: '8.8',
                dRosca: '5/8"',
                pRosca: '18',
                longitud: '1.875"',
                familia: 'Birlos'
            }
        },
        {
            id: 3,
            nombre: 'BM00-114RP',
            descripcion: 'Birlo manifull flecha m10-1.25 x 70 mm',
            precio: 18.50,
            stock: 120,
            img: '',
            status: 'existente',
            id_marca: 3,
            id_categoria: 1,
            id_acabado: 2,
            marca: { id: 3, nombre: 'Nissan' },
            categoria: { id: 1, nombre: 'Birlo' },
            acabado: { id: 2, nombre: 'Tropicalizado' },
            especificacion: {
                id: 3,
                id_producto: 3,
                uEmpaque: 'Caja x 80',
                uso: 'Ligero',
                grado: '10.9',
                dRosca: 'M10',
                pRosca: '1.25',
                longitud: '70 mm',
                familia: 'Birlos automotrices'
            }
        },
        {
            id: 4,
            nombre: 'RO00-02100',
            descripcion: 'Rondana de aluminio para tapon carter 9/16',
            precio: 5.25,
            stock: 0,
            img: '',
            status: 'inexistente',
            id_marca: 4,
            id_categoria: 2,
            id_acabado: 3,
            marca: { id: 4, nombre: 'Volkswagen' },
            categoria: { id: 2, nombre: 'Rondana' },
            acabado: { id: 3, nombre: 'Natural' },
            especificacion: {
                id: 4,
                id_producto: 4,
                uEmpaque: 'Bolsa x 200',
                uso: 'Ligero',
                grado: 'Aluminio 6061',
                dRosca: '9/16"',
                pRosca: 'N/A',
                longitud: '0.8 mm',
                familia: 'Rondanas planas'
            }
        },
        {
            id: 5,
            nombre: 'TA30-218RC',
            descripcion: 'Tuerca de lujo 1/2-20 hex 13/16',
            precio: 12.75,
            stock: 45,
            img: '',
            status: 'revisar disp',
            id_marca: 5,
            id_categoria: 3,
            id_acabado: 4,
            marca: { id: 5, nombre: 'Refacciones Oropeza' },
            categoria: { id: 3, nombre: 'Tuerca' },
            acabado: { id: 4, nombre: 'Cromado' },
            especificacion: {
                id: 5,
                id_producto: 5,
                uEmpaque: 'Caja x 75',
                uso: 'Ligero',
                grado: '8',
                dRosca: '1/2"',
                pRosca: '20',
                longitud: '13/16"',
                familia: 'Tuercas hexagonales'
            }
        },
        {
            id: 6,
            nombre: 'TA10-122RT',
            descripcion: 'Tuerca conica m14-2 hex 13/16',
            precio: 15.20,
            stock: 88,
            img: '',
            status: 'existente',
            id_marca: 1,
            id_categoria: 3,
            id_acabado: 2,
            marca: { id: 1, nombre: 'Sheumann' },
            categoria: { id: 3, nombre: 'Tuerca' },
            acabado: { id: 2, nombre: 'Tropicalizado' },
            especificacion: {
                id: 6,
                id_producto: 6,
                uEmpaque: 'Caja x 60',
                uso: 'Ligero',
                grado: '10',
                dRosca: 'M14',
                pRosca: '2',
                longitud: '13/16"',
                familia: 'Tuercas cónicas'
            }
        },
        {
            id: 7,
            nombre: 'BR80-033RP',
            descripcion: 'Birlo rueda 5/8-11 x 3.500',
            precio: 26.00,
            stock: 30,
            img: '',
            status: 'existente',
            id_marca: 1,
            id_categoria: 1,
            id_acabado: 1,
            marca: { id: 1, nombre: 'Sheumann' },
            categoria: { id: 1, nombre: 'Birlo' },
            acabado: { id: 1, nombre: 'Pavonado' },
            especificacion: {
                id: 7,
                id_producto: 7,
                uEmpaque: 'Caja x 25',
                uso: 'Agrícola',
                grado: '8.8',
                dRosca: '5/8"',
                pRosca: '11',
                longitud: '3.500"',
                familia: 'Birlos'
            }
        },
        {
            id: 8,
            nombre: 'BR80-027RP',
            descripcion: 'Birlo rueda 5/8-18 x 1.875',
            precio: 23.50,
            stock: 65,
            img: '',
            status: 'existente',
            id_marca: 2,
            id_categoria: 1,
            id_acabado: 1,
            marca: { id: 2, nombre: 'International' },
            categoria: { id: 1, nombre: 'Birlo' },
            acabado: { id: 1, nombre: 'Pavonado' },
            especificacion: {
                id: 8,
                id_producto: 8,
                uEmpaque: 'Caja x 40',
                uso: 'Agrícola',
                grado: '8.8',
                dRosca: '5/8"',
                pRosca: '18',
                longitud: '1.875"',
                familia: 'Birlos'
            }
        },
        {
            id: 9,
            nombre: 'BM00-114RP',
            descripcion: 'Birlo manifull flecha m10-1.25 x 70 mm',
            precio: 19.00,
            stock: 95,
            img: '',
            status: 'existente',
            id_marca: 3,
            id_categoria: 1,
            id_acabado: 2,
            marca: { id: 3, nombre: 'Nissan' },
            categoria: { id: 1, nombre: 'Birlo' },
            acabado: { id: 2, nombre: 'Tropicalizado' },
            especificacion: {
                id: 9,
                id_producto: 9,
                uEmpaque: 'Caja x 70',
                uso: 'Ligero',
                grado: '10.9',
                dRosca: 'M10',
                pRosca: '1.25',
                longitud: '70 mm',
                familia: 'Birlos automotrices'
            }
        },
        {
            id: 10,
            nombre: 'RO00-02100',
            descripcion: 'Rondana de aluminio para tapon carter 9/16',
            precio: 5.50,
            stock: 0,
            img: '',
            status: 'inexistente',
            id_marca: 4,
            id_categoria: 2,
            id_acabado: 3,
            marca: { id: 4, nombre: 'Volkswagen' },
            categoria: { id: 2, nombre: 'Rondana' },
            acabado: { id: 3, nombre: 'Natural' },
            especificacion: {
                id: 10,
                id_producto: 10,
                uEmpaque: 'Bolsa x 150',
                uso: 'Ligero',
                grado: 'Aluminio 6061',
                dRosca: '9/16"',
                pRosca: 'N/A',
                longitud: '0.8 mm',
                familia: 'Rondanas planas'
            }
        },
        {
            id: 11,
            nombre: 'TA30-218RC',
            descripcion: 'Tuerca de lujo 1/2-20 hex 13/16',
            precio: 13.25,
            stock: 25,
            img: '',
            status: 'revisar disp',
            id_marca: 5,
            id_categoria: 3,
            id_acabado: 4,
            marca: { id: 5, nombre: 'Refacciones Oropeza' },
            categoria: { id: 3, nombre: 'Tuerca' },
            acabado: { id: 4, nombre: 'Cromado' },
            especificacion: {
                id: 11,
                id_producto: 11,
                uEmpaque: 'Caja x 50',
                uso: 'Ligero',
                grado: '8',
                dRosca: '1/2"',
                pRosca: '20',
                longitud: '13/16"',
                familia: 'Tuercas hexagonales'
            }
        },
        {
            id: 12,
            nombre: 'TA10-122RT',
            descripcion: 'Tuerca conica m14-2 hex 13/16',
            precio: 16.00,
            stock: 72,
            img: '',
            status: 'existente',
            id_marca: 1,
            id_categoria: 3,
            id_acabado: 2,
            marca: { id: 1, nombre: 'Sheumann' },
            categoria: { id: 3, nombre: 'Tuerca' },
            acabado: { id: 2, nombre: 'Tropicalizado' },
            especificacion: {
                id: 12,
                id_producto: 12,
                uEmpaque: 'Caja x 55',
                uso: 'Ligero',
                grado: '10',
                dRosca: 'M14',
                pRosca: '2',
                longitud: '13/16"',
                familia: 'Tuercas cónicas'
            }
        },
        {
            id: 13,
            nombre: 'TU45-112RC',
            descripcion: 'Tuerca hexagonal M12 x 1.75 grado 8',
            precio: 8.90,
            stock: 200,
            img: '',
            status: 'existente',
            id_marca: 6,
            id_categoria: 3,
            id_acabado: 5,
            marca: { id: 6, nombre: 'Dyna-Loc' },
            categoria: { id: 3, nombre: 'Tuerca' },
            acabado: { id: 5, nombre: 'Galvanizado' },
            especificacion: {
                id: 13,
                id_producto: 13,
                uEmpaque: 'Caja x 100',
                uso: 'Industrial',
                grado: '8',
                dRosca: 'M12',
                pRosca: '1.75',
                longitud: '18 mm',
                familia: 'Tuercas hexagonales'
            }
        },
        {
            id: 14,
            nombre: 'AR20-305ST',
            descripcion: 'Arandela plana 1/4 pulgada acero inox',
            precio: 3.20,
            stock: 500,
            img: '',
            status: 'existente',
            id_marca: 7,
            id_categoria: 2,
            id_acabado: 6,
            marca: { id: 7, nombre: 'Bossard' },
            categoria: { id: 2, nombre: 'Arandela' },
            acabado: { id: 6, nombre: 'Inoxidable' },
            especificacion: {
                id: 14,
                id_producto: 14,
                uEmpaque: 'Bolsa x 300',
                uso: 'Marino',
                grado: 'AISI 304',
                dRosca: '1/4"',
                pRosca: 'N/A',
                longitud: '1.5 mm',
                familia: 'Arandelas planas'
            }
        },
        {
            id: 15,
            nombre: 'TO80-418AL',
            descripcion: 'Tornillo allen cabeza cilíndrica M8 x 25mm',
            precio: 7.50,
            stock: 15,
            img: '',
            status: 'revisar disp',
            id_marca: 8,
            id_categoria: 4,
            id_acabado: 7,
            marca: { id: 8, nombre: 'Unbrako' },
            categoria: { id: 4, nombre: 'Tornillo' },
            acabado: { id: 7, nombre: 'Negro' },
            especificacion: {
                id: 15,
                id_producto: 15,
                uEmpaque: 'Caja x 50',
                uso: 'Maquinaria',
                grado: '12.9',
                dRosca: 'M8',
                pRosca: '1.25',
                longitud: '25 mm',
                familia: 'Tornillos allen'
            }
        },
        {
            id: 16,
            nombre: 'AB35-229BR',
            descripcion: 'Abrazadera para manguera 2 pulgadas',
            precio: 45.00,
            stock: 0,
            img: '',
            status: 'inexistente',
            id_marca: 9,
            id_categoria: 5,
            id_acabado: 8,
            marca: { id: 9, nombre: 'Norma' },
            categoria: { id: 5, nombre: 'Abrazadera' },
            acabado: { id: 8, nombre: 'Acero' },
            especificacion: {
                id: 16,
                id_producto: 16,
                uEmpaque: 'Caja x 20',
                uso: 'Automotriz',
                grado: 'Acero al carbón',
                dRosca: 'N/A',
                pRosca: 'N/A',
                longitud: '2"',
                familia: 'Abrazaderas de manguera'
            }
        },
        {
            id: 17,
            nombre: 'ES60-715ZG',
            descripcion: 'Espárrago roscado M10 x 120mm zincado',
            precio: 12.30,
            stock: 180,
            img: '',
            status: 'existente',
            id_marca: 10,
            id_categoria: 6,
            id_acabado: 9,
            marca: { id: 10, nombre: 'Hilti' },
            categoria: { id: 6, nombre: 'Espárrago' },
            acabado: { id: 9, nombre: 'Zincado' },
            especificacion: {
                id: 17,
                id_producto: 17,
                uEmpaque: 'Caja x 40',
                uso: 'Estructuras',
                grado: '8.8',
                dRosca: 'M10',
                pRosca: '1.5',
                longitud: '120 mm',
                familia: 'Espárragos'
            }
        },
        {
            id: 18,
            nombre: 'RE25-888CP',
            descripcion: 'Remache pop aluminio 4.8mm x 12mm',
            precio: 2.80,
            stock: 800,
            img: '',
            status: 'existente',
            id_marca: 11,
            id_categoria: 7,
            id_acabado: 10,
            marca: { id: 11, nombre: 'GESIPA' },
            categoria: { id: 7, nombre: 'Remache' },
            acabado: { id: 10, nombre: 'Aluminio' },
            especificacion: {
                id: 18,
                id_producto: 18,
                uEmpaque: 'Bolsa x 200',
                uso: 'Aeronáutico',
                grado: 'Aluminio 5052',
                dRosca: 'N/A',
                pRosca: 'N/A',
                longitud: '12 mm',
                familia: 'Remaches pop'
            }
        },
        {
            id: 19,
            nombre: 'CL90-634PT',
            descripcion: 'Clavija elástica 8mm x 40mm',
            precio: 6.75,
            stock: 8,
            img: '',
            status: 'revisar disp',
            id_marca: 12,
            id_categoria: 8,
            id_acabado: 11,
            marca: { id: 12, nombre: 'Ringfed' },
            categoria: { id: 8, nombre: 'Pasador' },
            acabado: { id: 11, nombre: 'Fosfatado' },
            especificacion: {
                id: 19,
                id_producto: 19,
                uEmpaque: 'Caja x 25',
                uso: 'Herramientas',
                grado: 'Acero resorte',
                dRosca: 'N/A',
                pRosca: 'N/A',
                longitud: '40 mm',
                familia: 'Pasadores elásticos'
            }
        },
        {
            id: 20,
            nombre: 'CH55-127NC',
            descripcion: 'Chaveta cilíndrica 5mm x 20mm',
            precio: 4.20,
            stock: 350,
            img: '',
            status: 'existente',
            id_marca: 13,
            id_categoria: 8,
            id_acabado: 8,
            marca: { id: 13, nombre: 'Spirolox' },
            categoria: { id: 8, nombre: 'Chaveta' },
            acabado: { id: 8, nombre: 'Acero' },
            especificacion: {
                id: 20,
                id_producto: 20,
                uEmpaque: 'Bolsa x 100',
                uso: 'Transmisiones',
                grado: 'Acero C1045',
                dRosca: 'N/A',
                pRosca: 'N/A',
                longitud: '20 mm',
                familia: 'Chavetas cilíndricas'
            }
        },
        {
            id: 21,
            nombre: 'CO70-341GH',
            descripcion: 'Conector hidráulico JIC 37° 3/8"',
            precio: 85.00,
            stock: 0,
            img: '',
            status: 'inexistente',
            id_marca: 14,
            id_categoria: 9,
            id_acabado: 12,
            marca: { id: 14, nombre: 'Parker' },
            categoria: { id: 9, nombre: 'Conexión' },
            acabado: { id: 12, nombre: 'Niquelado' },
            especificacion: {
                id: 21,
                id_producto: 21,
                uEmpaque: 'Caja x 10',
                uso: 'Hidráulico',
                grado: 'Acero 316',
                dRosca: '3/8"',
                pRosca: 'NPT',
                longitud: '45 mm',
                familia: 'Conectores JIC'
            }
        },
        {
            id: 22,
            nombre: 'BU15-956PL',
            descripcion: 'Buje de bronce 1" x 1.5" x 2"',
            precio: 32.50,
            stock: 25,
            img: '',
            status: 'existente',
            id_marca: 15,
            id_categoria: 10,
            id_acabado: 13,
            marca: { id: 15, nombre: 'BCA' },
            categoria: { id: 10, nombre: 'Buje' },
            acabado: { id: 13, nombre: 'Bronce' },
            especificacion: {
                id: 22,
                id_producto: 22,
                uEmpaque: 'Caja x 12',
                uso: 'Rodamientos',
                grado: 'Bronce SAE 660',
                dRosca: 'N/A',
                pRosca: 'N/A',
                longitud: '2"',
                familia: 'Bujes de bronce'
            }
        },
        {
            id: 23,
            nombre: 'SE40-672SP',
            descripcion: 'Seguro de castillo 3/16" zincado',
            precio: 1.80,
            stock: 22,
            img: '',
            status: 'revisar disp',
            id_marca: 16,
            id_categoria: 11,
            id_acabado: 9,
            marca: { id: 16, nombre: 'McGard' },
            categoria: { id: 11, nombre: 'Seguro' },
            acabado: { id: 9, nombre: 'Zincado' },
            especificacion: {
                id: 23,
                id_producto: 23,
                uEmpaque: 'Bolsa x 50',
                uso: 'Suspensiones',
                grado: 'Acero 1018',
                dRosca: '3/16"',
                pRosca: 'N/A',
                longitud: '1.5"',
                familia: 'Seguros de castillo'
            }
        },
        {
            id: 24,
            nombre: 'PR85-143TC',
            descripcion: 'Perno de anclaje M16 x 200mm',
            precio: 28.75,
            stock: 60,
            img: '',
            status: 'existente',
            id_marca: 17,
            id_categoria: 12,
            id_acabado: 14,
            marca: { id: 17, nombre: 'ITW' },
            categoria: { id: 12, nombre: 'Perno' },
            acabado: { id: 14, nombre: 'Epoxi' },
            especificacion: {
                id: 24,
                id_producto: 24,
                uEmpaque: 'Caja x 15',
                uso: 'Construcción',
                grado: '5.8',
                dRosca: 'M16',
                pRosca: '2',
                longitud: '200 mm',
                familia: 'Pernos de anclaje'
            }
        },
        {
            id: 25,
            nombre: 'CR30-529SS',
            descripcion: 'Cremallera recta módulo 2 300mm',
            precio: 120.00,
            stock: 8,
            img: '',
            status: 'existente',
            id_marca: 18,
            id_categoria: 13,
            id_acabado: 8,
            marca: { id: 18, nombre: 'KHK' },
            categoria: { id: 13, nombre: 'Engrane' },
            acabado: { id: 8, nombre: 'Acero' },
            especificacion: {
                id: 25,
                id_producto: 25,
                uEmpaque: 'Individual',
                uso: 'Robótica',
                grado: 'Acero 4140',
                dRosca: 'N/A',
                pRosca: 'N/A',
                longitud: '300 mm',
                familia: 'Cremalleras rectas'
            }
        },
        {
            id: 26,
            nombre: 'RO60-814BC',
            descripcion: 'Rodamiento rígido 6204 2RS',
            precio: 15.80,
            stock: 0,
            img: '',
            status: 'inexistente',
            id_marca: 19,
            id_categoria: 14,
            id_acabado: 7,
            marca: { id: 19, nombre: 'SKF' },
            categoria: { id: 14, nombre: 'Rodamiento' },
            acabado: { id: 7, nombre: 'Negro' },
            especificacion: {
                id: 26,
                id_producto: 26,
                uEmpaque: 'Caja x 10',
                uso: 'Motores',
                grado: 'Acero cromado',
                dRosca: 'N/A',
                pRosca: 'N/A',
                longitud: '14 mm',
                familia: 'Rodamientos rígidos'
            }
        },
        {
            id: 27,
            nombre: 'JU35-477NR',
            descripcion: 'Junta tórica NBR 70 shore 4"',
            precio: 8.50,
            stock: 150,
            img: '',
            status: 'existente',
            id_marca: 20,
            id_categoria: 15,
            id_acabado: 7,
            marca: { id: 20, nombre: 'Apple' },
            categoria: { id: 15, nombre: 'Junta' },
            acabado: { id: 7, nombre: 'Negro' },
            especificacion: {
                id: 27,
                id_producto: 27,
                uEmpaque: 'Bolsa x 25',
                uso: 'Sellado',
                grado: 'NBR 70',
                dRosca: 'N/A',
                pRosca: 'N/A',
                longitud: '4"',
                familia: 'Juntas tóricas'
            }
        }
    ];

    // Función para cambiar de página
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Función para ir a la página siguiente
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Función para ir a la página anterior
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Generar números de página para mostrar
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;

        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    // Función para abrir el modal con la información del producto
    const openProductModal = (producto: Producto) => {
        setSelectedProduct(producto);
        setIsModalOpen(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    // Función para manejar edición (puedes implementar la lógica que necesites)
    const handleEditProduct = (producto: Producto) => {
        console.log('Editar producto:', producto);
        // Aquí puedes abrir otro modal de edición o redirigir a otra página
        closeModal();
    };

    // Función para manejar el ordenamiento
    const handleSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    // Función para ordenar los productos
    const sortedProductos = useMemo(() => {
        if (!sortConfig) return productos;

        const sorted = [...productos].sort((a, b) => {
            // Para campos anidados, necesitamos manejar casos especiales
            if (sortConfig.key === 'marca') {
                const aVal = a.marca?.nombre || '';
                const bVal = b.marca?.nombre || '';
                if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            }
            if (sortConfig.key === 'categoria') {
                const aVal = a.categoria?.nombre || '';
                const bVal = b.categoria?.nombre || '';
                if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            }
            if (sortConfig.key === 'acabado') {
                const aVal = a.acabado?.nombre || '';
                const bVal = b.acabado?.nombre || '';
                if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            }
            if (sortConfig.key === 'uso') {
                const aVal = a.especificacion?.uso || '';
                const bVal = b.especificacion?.uso || '';
                if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            }

            // Para campos directos
            // @ts-ignore
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            // @ts-ignore
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
        return sorted;
    }, [productos, sortConfig]);

    // Calcular páginas
    const totalPages = Math.ceil(sortedProductos.length / itemsPerPage);

    // Obtener productos para la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedProductos.slice(indexOfFirstItem, indexOfLastItem);

    // Función para obtener la clase del badge según el estatus
    const getBadgeClass = (status: string) => {
        switch (status) {
            case 'existente':
                return 'bg-green-200 text-green-800';
            case 'inexistente':
                return 'bg-red-200 text-red-800';
            case 'revisar disp':
                return 'bg-yellow-200 text-yellow-800';
            default:
                return 'bg-gray-200 text-gray-800';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'existente': return 'Existente';
            case 'inexistente': return 'Inexistente';
            case 'revisar disp': return 'Revisar disp.';
            default: return status;
        }
    };

    return (
        <div>
            <section className="w-11/12 mx-auto">
                {/* Header con título y controles */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">Productos</h1>
                    <div className="flex items-center space-x-4">
                        <button className='bg-gray-200 text-white pt-1 pb-2 px-2 rounded-lg hover:bg-cyan-950 transition-colors shadow-sm flex items-center gap-2'>
                            <span className="text-2xl text-cyan-950 hover:text-white">+</span>
                        </button>
                        <div className="relative flex-1 max-w-md">
                            <input
                                type="search"
                                placeholder="Buscar productos..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-950 focus:border-transparent"
                            />
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                🔍
                            </span>
                        </div>
                    </div>
                </div>

                {/* Tabla */}
                <table className="w-full border border-gray-500">
                    <thead className="bg-blue-200/50 h-10">
                        <tr>
                            <th scope="col" className="border border-gray-500 bg-slate-300 px-2 py-1">
                                <div className="flex items-center justify-between">
                                    ID
                                    <button
                                        onClick={() => handleSort('id')}
                                        className="text-xs p-1 hover:bg-gray-300 rounded transition-colors"
                                        title="Ordenar por ID"
                                    >
                                        {sortConfig?.key === 'id' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '⇅'}
                                    </button>
                                </div>
                            </th>
                            <th scope="col" className="border border-gray-500 px-2 py-1">
                                <div className="flex items-center justify-between">
                                    Nombre
                                    <button
                                        onClick={() => handleSort('nombre')}
                                        className="text-xs p-1 hover:bg-gray-300 rounded transition-colors"
                                        title="Ordenar por Nombre"
                                    >
                                        {sortConfig?.key === 'nombre' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '⇅'}
                                    </button>
                                </div>
                            </th>
                            <th scope="col" className="border border-gray-500 px-2 py-1">
                                <div className="flex items-center justify-between">
                                    Descripción
                                    <button
                                        onClick={() => handleSort('descripcion')}
                                        className="text-xs p-1 hover:bg-gray-300 rounded transition-colors"
                                        title="Ordenar por Descripción"
                                    >
                                        {sortConfig?.key === 'descripcion' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '⇅'}
                                    </button>
                                </div>
                            </th>
                            <th scope="col" className="border border-gray-500 px-2 py-1">
                                <div className="flex items-center justify-between">
                                    Uso
                                    <button
                                        onClick={() => handleSort('uso')}
                                        className="text-xs p-1 hover:bg-gray-300 rounded transition-colors"
                                        title="Ordenar por Uso"
                                    >
                                        {sortConfig?.key === 'uso' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '⇅'}
                                    </button>
                                </div>
                            </th>
                            <th scope="col" className="border border-gray-500 px-2 py-1">
                                <div className="flex items-center justify-between">
                                    Marca
                                    <button
                                        onClick={() => handleSort('marca')}
                                        className="text-xs p-1 hover:bg-gray-300 rounded transition-colors"
                                        title="Ordenar por Marca"
                                    >
                                        {sortConfig?.key === 'marca' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '⇅'}
                                    </button>
                                </div>
                            </th>
                            <th scope="col" className="border border-gray-500 px-2 py-1">
                                <div className="flex items-center justify-between">
                                    Acabado
                                    <button
                                        onClick={() => handleSort('acabado')}
                                        className="text-xs p-1 hover:bg-gray-300 rounded transition-colors"
                                        title="Ordenar por Acabado"
                                    >
                                        {sortConfig?.key === 'acabado' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '⇅'}
                                    </button>
                                </div>
                            </th>
                            <th scope="col" className="border border-gray-500 px-2 py-1">
                                <div className="flex items-center justify-between">
                                    Categoría
                                    <button
                                        onClick={() => handleSort('categoria')}
                                        className="text-xs p-1 hover:bg-gray-300 rounded transition-colors"
                                        title="Ordenar por Categoría"
                                    >
                                        {sortConfig?.key === 'categoria' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '⇅'}
                                    </button>
                                </div>
                            </th>
                            <th scope="col" className="border border-gray-500 px-2 py-1">
                                <div className="flex items-center justify-between">
                                    Estatus
                                    <button
                                        onClick={() => handleSort('status')}
                                        className="text-xs p-1 hover:bg-gray-300 rounded transition-colors"
                                        title="Ordenar por Estatus"
                                    >
                                        {sortConfig?.key === 'status' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '⇅'}
                                    </button>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="text-center border border-gray-500">
                        {currentItems.map((producto) => (
                            <tr
                                key={producto.id}
                                className="h-10 hover:bg-cyan-700/20 cursor-pointer"
                                onClick={() => openProductModal(producto)}
                            >
                                <th scope="row" className="border border-gray-500">{producto.id}</th>
                                <td className="border border-gray-500">{producto.nombre}</td>
                                <td className="border border-gray-500">{producto.descripcion}</td>
                                <td className="border border-gray-500">
                                    {producto.especificacion?.uso || 'No especificado'}
                                </td>
                                <td className="border border-gray-500">
                                    {producto.marca?.nombre || 'No especificada'}
                                </td>
                                <td className="border border-gray-500">
                                    {producto.acabado?.nombre || 'No especificado'}
                                </td>
                                <td className="border border-gray-500">
                                    {producto.categoria?.nombre || 'No especificada'}
                                </td>
                                <td className="border border-gray-500">
                                    <span className={`badge p-1 rounded-xl ${getBadgeClass(producto.status)}`}>
                                        {getStatusText(producto.status)}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Paginación */}
                <div className="flex justify-between items-center mt-4">
                    {/* Información de la página actual */}
                    <div className="text-sm text-gray-600">
                        Mostrando {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, sortedProductos.length)} de {sortedProductos.length} productos
                    </div>

                    {/* Controles de paginación */}
                    <div className="flex items-center space-x-2">
                        {/* Botón anterior */}
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 rounded border ${currentPage === 1
                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            Anterior
                        </button>
                        {/* Números de página */}
                        {getPageNumbers().map((number) => (
                            <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`px-3 py-1 rounded border ${currentPage === number
                                    ? 'bg-cyan-950 text-white border-cyan-950'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {number}
                            </button>
                        ))}
                        {/* Botón siguiente */}
                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-1 rounded border ${currentPage === totalPages
                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            Siguiente
                        </button>
                    </div>
                    {/* Selector de página */}
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Ir a:</span>
                        <select
                            value={currentPage}
                            onChange={(e) => paginate(Number(e.target.value))}
                            className="border border-gray-300 rounded px-2 py-1"
                        >
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <option key={page} value={page}>
                                    Página {page}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </section>

            {/* Modal de Producto */}
            <ProductoModal
                isOpen={isModalOpen}
                onClose={closeModal}
                producto={selectedProduct}
                onEdit={handleEditProduct}
            />
        </div>
    );
};

export default Productos;