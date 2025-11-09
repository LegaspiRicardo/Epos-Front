

// Datos de ejemplo para cada categoría
const sampleData = {
    categorias: [
        {
            id: 1,
            nombre: "Muebles de Oficina",
            descripcion: "Muebles ergonómicos para espacios de trabajo",

        },
        {
            id: 2,
            nombre: "Muebles de Hogar",
            descripcion: "Muebles cómodos y estéticos para el hogar",

        },
        {
            id: 3,
            nombre: "Muebles Exteriores",
            descripcion: "Resistentes a la intemperie y diseño moderno",

        },
        {
            id: 4,
            nombre: "Muebles Infantiles",
            descripcion: "Diseños seguros y divertidos para niños",

        },
        {
            id: 5,
            nombre: "Muebles de Cocina",
            descripcion: "Funcionales y espaciosos para tu cocina",

        }
    ],
    marcas: [
        {
            id: 1,
            nombre: "Design Comfort",
            descripcion: "Calidad premium y diseño innovador",

        },
        {
            id: 2,
            nombre: "Eco Living",
            descripcion: "Materiales sostenibles y ecológicos",

        },
        {
            id: 3,
            nombre: "Modern Style",
            descripcion: "Tendencias contemporáneas y minimalistas",

        },
        {
            id: 4,
            nombre: "Classic Wood",
            descripcion: "Tradición y calidad en madera maciza",

        }
    ],
    acabados: [
        {
            id: 1,
            nombre: "Acabado Mate",
            descripcion: "Superficie no reflectante y elegante",

        },
        {
            id: 2,
            nombre: "Acabado Brillante",
            descripcion: "Superficie reflectante y lujosa",

        },
        {
            id: 3,
            nombre: "Acabado Texturizado",
            descripcion: "Superficie con relieve y carácter",

        },
        {
            id: 4,
            nombre: "Acabado Natural",
            descripcion: "Textura original de la madera",

        },
        {
            id: 5,
            nombre: "Acabado Lacado",
            descripcion: "Superficie lisa y resistente",

        },
        {
            id: 6,
            nombre: "Acabado Envejecido",
            descripcion: "Efecto vintage y rústico",

        }
    ]
};

function CMA() {
    const SectionCard = ({ item }: { item: any }) => (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 min-w-[280px] max-w-[280px] flex-shrink-0 hover:shadow-lg transition-shadow duration-200">
            <div className="h-40 bg-gray-200 rounded-t-lg overflow-hidden">
                <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/280x160/4FD1C5/FFFFFF?text=Imagen+No+Disponible';
                    }}
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.nombre}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{item.descripcion}</p>
            </div>
        </div>
    );

    const SectionCarousel = ({ title, items }: {
        title: string;
        items: any[];
    }) => (
        <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    {title}
                    <span className="ml-3 bg-cyan-100 text-cyan-800 text-sm px-2 py-1 rounded-full">
                        {items.length} items
                    </span>
                </h2>
                <button
                    className="bg-cyan-600 hover:bg-cyan-700 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-light transition-all duration-200 hover:scale-110 shadow-md"
                    title={`Agregar nueva ${title.toLowerCase()}`}
                >
                    +
                </button>
            </div>

            <div className="relative">
                {items.length > 0 ? (
                    <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-gray-100">
                        {items.map((item) => (
                            <SectionCard key={item.id} item={item} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
                        <p className="text-gray-500 text-lg mb-4">No hay {title.toLowerCase()} registradas</p>
                        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
                            Agregar Primera {title.slice(0, -1)}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="w-11/12 mx-auto py-8">


                {/* Secciones de contenido - una debajo de otra */}
                <SectionCarousel
                    title="Categorías"
                    items={sampleData.categorias}
                />

                <SectionCarousel
                    title="Marcas"
                    items={sampleData.marcas}
                />

                <SectionCarousel
                    title="Acabados"
                    items={sampleData.acabados}
                />

            </section>

           
        </div>
    );
}

export default CMA;