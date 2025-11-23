// CMA.tsx
import { useState } from 'react';
import ModalCategorias from '../../components/modals/admin/ModalCategorias';
import ModalMarcas from '../../components/modals/admin/ModalMarcas';
import ModalAcabados from '../../components/modals/admin/ModalAcabados';
import type { Categoria } from '../../types/Categoria';
import type { Marca } from '../../types/Marca';
import type { Acabado } from '../../types/Acabado';

// Datos de ejemplo para cada categoría
const sampleData = {
  categorias: [
    { id: 1, nombre: "Agricola" },
    { id: 2, nombre: "Ligero" },
    { id: 3, nombre: "Extra Pesado" },
    { id: 4, nombre: "Media Carga" },
    { id: 5, nombre: "Especial" },
  ],
  marcas: [
    { id: 1, nombre: "Nissan" },
    { id: 2, nombre: "Volkswagen" },
    { id: 3, nombre: "Peugeot" },
    { id: 4, nombre: "International" },
    { id: 5, nombre: "Mercedes Benz" },
  ],
  acabados: [
    { id: 1, nombre: "Mate" },
    { id: 2, nombre: "Brillante" },
    { id: 3, nombre: "Cromado" },
    { id: 4, nombre: "Natural" },
    { id: 5, nombre: "Lacado" },
    { id: 6, nombre: "Tropicalizado" },
  ],
};

function CMA() {
  const [categorias, setCategorias] = useState<Categoria[]>(sampleData.categorias);
  const [marcas, setMarcas] = useState<Marca[]>(sampleData.marcas);
  const [acabados, setAcabados] = useState<Acabado[]>(sampleData.acabados);

  // Estados para modales de categorías
  const [modalCategoria, setModalCategoria] = useState<{
    isOpen: boolean;
    mode: 'view' | 'create' | 'edit';
    categoria?: Categoria;
  }>({ isOpen: false, mode: 'view' });

  // Estados para modales de marcas
  const [modalMarca, setModalMarca] = useState<{
    isOpen: boolean;
    mode: 'view' | 'create' | 'edit';
    marca?: Marca;
  }>({ isOpen: false, mode: 'view' });

  // Estados para modales de acabados
  const [modalAcabado, setModalAcabado] = useState<{
    isOpen: boolean;
    mode: 'view' | 'create' | 'edit';
    acabado?: Acabado;
  }>({ isOpen: false, mode: 'view' });

  // Handlers para Categorías
  const handleCreateCategoria = (data: Omit<Categoria, 'id'>) => {
    const newCategoria: Categoria = {
      id: Math.max(...categorias.map(c => c.id), 0) + 1,
      ...data
    };
    setCategorias([...categorias, newCategoria]);
  };

  const handleEditCategoria = (data: Omit<Categoria, 'id'>) => {
    if (modalCategoria.categoria) {
      setCategorias(categorias.map(cat =>
        cat.id === modalCategoria.categoria!.id
          ? { ...cat, ...data }
          : cat
      ));
    }
  };

  const handleDeleteCategoria = (id: number) => {
    setCategorias(categorias.filter(cat => cat.id !== id));
  };

  // Handlers para Marcas
  const handleCreateMarca = (data: Omit<Marca, 'id'>) => {
    const newMarca: Marca = {
      id: Math.max(...marcas.map(m => m.id), 0) + 1,
      ...data
    };
    setMarcas([...marcas, newMarca]);
  };

  const handleEditMarca = (data: Omit<Marca, 'id'>) => {
    if (modalMarca.marca) {
      setMarcas(marcas.map(marca =>
        marca.id === modalMarca.marca!.id
          ? { ...marca, ...data }
          : marca
      ));
    }
  };

  const handleDeleteMarca = (id: number) => {
    setMarcas(marcas.filter(marca => marca.id !== id));
  };

  // Handlers para Acabados
  const handleCreateAcabado = (data: Omit<Acabado, 'id'>) => {
    const newAcabado: Acabado = {
      id: Math.max(...acabados.map(a => a.id), 0) + 1,
      ...data
    };
    setAcabados([...acabados, newAcabado]);
  };

  const handleEditAcabado = (data: Omit<Acabado, 'id'>) => {
    if (modalAcabado.acabado) {
      setAcabados(acabados.map(acabado =>
        acabado.id === modalAcabado.acabado!.id
          ? { ...acabado, ...data }
          : acabado
      ));
    }
  };

  const handleDeleteAcabado = (id: number) => {
    setAcabados(acabados.filter(acabado => acabado.id !== id));
  };

  const SectionCard = ({
    item,
    onEdit
  }: {
    item: any;
    onEdit: () => void;
    onDelete: () => void;
  }) => (
    <div className="group relative bg-white rounded-lg shadow-md border border-gray-200 min-w-[280px] max-w-[280px] flex-shrink-0 hover:shadow-lg transition-all duration-200 overflow-hidden">
      {/* Contenido principal - Click para editar */}
      <div
        onClick={onEdit}
        className="cursor-pointer"
      >
        <div className="h-40 bg-gray-200 rounded-t-lg overflow-hidden">
          <img
            src={item.img || "https://via.placeholder.com/280x160/4FD1C5/FFFFFF?text=Imagen+No+Disponible"}
            alt={item.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-800 group-hover:text-cyan-700 transition-colors duration-200">
            {item.nombre}
          </h3>
        </div>
      </div>


    </div>
  );

  const SectionCarousel = ({
    title,
    items,
    onAdd,
    onEdit,
    onDelete
  }: {
    title: string;
    items: any[];
    onAdd: () => void;
    onEdit: (item: any) => void;
    onDelete: (item: any) => void;
  }) => (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <div className="w-9/12 md:w-10/12 lg:w-11/12 mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
            {title}
            <span className="ml-3 bg-cyan-100 text-cyan-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
              {items.length}
            </span>
          </h2>
        </div>

        <button
          onClick={onAdd}
          className="bg-cyan-800 hover:bg-cyan-700 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-light transition-all duration-200 hover:scale-110 shadow-md group"
          title={`Agregar nueva ${title.toLowerCase()}`}
        >
          <span className="group-hover:rotate-90 mb-1 transition-transform duration-200">+</span>
        </button>
      </div>

      <div className="relative">
        {items.length > 0 ? (
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-gray-100">
            {items.map((item) => (
              <SectionCard
                key={item.id}
                item={item}
                onEdit={() => onEdit(item)}
                onDelete={() => {
                  if (confirm(`¿Estás seguro de eliminar ${title.toLowerCase().slice(0, -1)} "${item.nombre}"?`)) {
                    onDelete(item);
                  }
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <div className="text-gray-400 mb-3">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg mb-4">
              No hay {title.toLowerCase()} registradas
            </p>
            <button
              onClick={onAdd}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
            >
              Agregar Primera {title.slice(0, -1)}
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="lg:w-11/12 md:w-10/12 w-9/12  mx-auto py-4">
          <h1 className="text-3xl font-bold text-gray-900">Administración</h1>
          <p className="text-gray-600 mt-2">Gestiona categorías, marcas y acabados.</p>
        </div>
      </div>

      {/* Contenido */}
      <section className="w-11/12 mx-auto py-8">
        <SectionCarousel
          title="Categorías"
          items={categorias}
          onAdd={() => setModalCategoria({ isOpen: true, mode: 'create' })}
          onEdit={(categoria) => setModalCategoria({ isOpen: true, mode: 'edit', categoria })}
          onDelete={handleDeleteCategoria}
        />

        <SectionCarousel
          title="Marcas"
          items={marcas}
          onAdd={() => setModalMarca({ isOpen: true, mode: 'create' })}
          onEdit={(marca) => setModalMarca({ isOpen: true, mode: 'edit', marca })}
          onDelete={handleDeleteMarca}
        />

        <SectionCarousel
          title="Acabados"
          items={acabados}
          onAdd={() => setModalAcabado({ isOpen: true, mode: 'create' })}
          onEdit={(acabado) => setModalAcabado({ isOpen: true, mode: 'edit', acabado })}
          onDelete={handleDeleteAcabado}
        />
      </section>

      {/* Modales */}
      <ModalCategorias
        isOpen={modalCategoria.isOpen}
        onClose={() => setModalCategoria({ isOpen: false, mode: 'view' })}
        mode={modalCategoria.mode}
        categoria={modalCategoria.categoria}
        onSubmit={modalCategoria.mode === 'create' ? handleCreateCategoria : handleEditCategoria}
        onDelete={handleDeleteCategoria}
      />

      <ModalMarcas
        isOpen={modalMarca.isOpen}
        onClose={() => setModalMarca({ isOpen: false, mode: 'view' })}
        mode={modalMarca.mode}
        marca={modalMarca.marca}
        onSubmit={modalMarca.mode === 'create' ? handleCreateMarca : handleEditMarca}
        onDelete={handleDeleteMarca}
      />

      <ModalAcabados
        isOpen={modalAcabado.isOpen}
        onClose={() => setModalAcabado({ isOpen: false, mode: 'view' })}
        mode={modalAcabado.mode}
        acabado={modalAcabado.acabado}
        onSubmit={modalAcabado.mode === 'create' ? handleCreateAcabado : handleEditAcabado}
        onDelete={handleDeleteAcabado}
      />
    </div>
  );
}

export default CMA;