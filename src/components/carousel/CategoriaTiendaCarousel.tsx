import React from "react";

interface CardItem {
    id: number;
    nombre: string;
}

const cardData: CardItem[] = [
    { id: 1, nombre: "Agricola"},
    { id: 2, nombre: "Extra Pesado"},
    { id: 3, nombre: "Media Carga"},
    { id: 4, nombre: "Ligero"},
    { id: 5, nombre: "Especial"},
];

const CategoriaTiendaCarousel: React.FC = () => {
    const getCategoriaIcon = (nombre: string) => {
        switch (nombre) {
            case 'Agricola': 
                return (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"/>
                    </svg>
                );
            case 'Extra Pesado': 
                return (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                );
            case 'Media Carga': 
                return (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
                    </svg>
                );
            case 'Ligero': 
                return (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                );
            case 'Especial': 
                return (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                );
            default: 
                return (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                );
        }
    };

    return (
        <div className="w-full ">
            <div className="flex items-center justify-between mb-4 md:mb-2">
                <h3 className="text-lg font-semibold ">Categorías</h3>
                <span className="text-sm ">{cardData.length} categorías</span>
            </div>
            
            <div className="flex gap-3 overflow-x-auto scroll-smooth pb-4 scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-cyan-900">
                {cardData.map((card) => (
                    <div 
                        key={card.id} 
                        className="flex-shrink-0 w-32 transition-all duration-300 hover:scale-105"
                    >
                        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-200 transition-colors duration-200">
                                <div className="text-gray-400 group-hover:text-cyan-600 transition-colors duration-200">
                                    {getCategoriaIcon(card.nombre)}
                                </div>
                            </div>
                            <h3 className="text-xs font-semibold text-gray-800 text-center group-hover:text-cyan-700 transition-colors duration-200 leading-tight">
                                {card.nombre}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriaTiendaCarousel;