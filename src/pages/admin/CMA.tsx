// Datos de ejemplo para cada categoría
const sampleData = {
  categorias: [
    {
      id: 1,
      nombre: "Agricola",
    },
    {
      id: 2,
      nombre: "Ligero",
    },
    {
      id: 3,
      nombre: "Extra Pesado",
    },
    {
      id: 4,
      nombre: "Media Carga",
    },
    {
      id: 5,
      nombre: "Especial",
    },
  ],
  marcas: [
    {
      id: 1,
      nombre: "Nissan",
    },
    {
      id: 2,
      nombre: "Volkswagen",
    },
    {
      id: 3,
      nombre: "Peugeot",
    },
    {
      id: 4,
      nombre: "International",
    },
    {
      id: 5,
      nombre: "Mercedes Benz",
    },
  ],
  acabados: [
    {
      id: 1,
      nombre: "Mate",
    },
    {
      id: 2,
      nombre: "Brillante",
    },
    {
      id: 3,
      nombre: "Cromado",
    },
    {
      id: 4,
      nombre: "Natural",
    },
    {
      id: 5,
      nombre: "Lacado",
    },
    {
      id: 6,
      nombre: "Tropicalizado",
    },
  ],
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
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/280x160/4FD1C5/FFFFFF?text=Imagen+No+Disponible";
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          {item.nombre}
        </h3>
      </div>
    </div>
  );

  const SectionCarousel = ({
    title,
    items,
  }: {
    title: string;
    items: any[];
  }) => (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl w-8/12 md:w-10/12 lg:w-full mx-auto font-semibold text-gray-800 flex items-center">
          {title}
        </h2>
        <button
          className="bg-cyan-950 hover:bg-cyan-700 text-white w-10 h-10 pb-1 rounded-full flex items-center justify-center text-2xl font-light transition-all duration-200 hover:scale-110 shadow-md"
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
            <p className="text-gray-500 text-lg mb-4">
              No hay {title.toLowerCase()} registradas
            </p>
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
              Agregar Primera {title.slice(0, -1)}
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen overflow-x-hidden">
      <section className="w-11/12 mx-auto py-8">
        {/* Secciones de contenido - una debajo de otra */}
        <SectionCarousel title="Categorías" items={sampleData.categorias} />

        <SectionCarousel title="Marcas" items={sampleData.marcas} />

        <SectionCarousel title="Acabados" items={sampleData.acabados} />
      </section>
    </div>
  );
}

export default CMA;
