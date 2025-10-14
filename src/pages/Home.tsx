import HomeCarousel from "../components/carousel/HomeCarousel";
import CategoriaSection from "../components/sections/CategoriaSection";

function HomePage() {
    return (
        <>


            <div className=" mt-2">
                <div className="w-11/12 mx-auto">
                    <p className="font-bold">Productos de calidad</p>
                    <p>Resistentes y al mejor precio.</p>
                </div>
            </div>
            <hr />

            <HomeCarousel />

            <div className="mt-16">
                <div className="w-11/12 mx-auto">
                    <p className="font-bold">Categorías</p>
                    <p>Explora nuestro catálogo</p>
                </div>
            </div>

            <div className="mt-4">
                <CategoriaSection />
            </div>

            <div className="bg-slate-50 pt-16 text-center">
                <p>¿No encontró lo que buscaba?</p>
                <p className="py-16">Escríbanos</p>
                <p className="pb-16">Podemos ayudarle</p>
                <form action="" className="text-sm">
                    <div className="w-11/12 mx-auto flex">
                        <div className="w-3/6 text-start">
                            <label htmlFor="email" className="text-xs">
                                Correo
                            </label>
                            <input
                                type="email"
                                className="bg-white border w-11/12 rounded-md py-1"
                            />
                        </div>
                        <div className="w-3/6 text-start">
                            <label htmlFor="telefono" className="text-xs">
                                Teléfono
                            </label>
                            <input
                                type="number"
                                className="bg-white border w-11/12 rounded-md py-1"
                            />
                        </div>
                    </div>
                    <div className="w-11/12 mx-auto text-start mt-4 mb-8">
                        <label htmlFor="mensaje" className="text-xs">
                            Mensaje
                        </label>
                        <input
                            type="text"
                            className="bg-white border w-full rounded-md py-4"
                        />
                    </div>
                    <div className="w-11/12 mx-auto">
                        <button
                            type="submit"
                            className="bg-gray-400 rounded text-white w-2/6 ml-40 px-6 py-1"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default HomePage;
