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

            <div className="bg-slate-50 pt-16 text-center pb-12">
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

            <footer className="bg-cyan-950 text-white">
                <div className="w-11/12 mx-auto pt-8">
                    <div className="flex">
                        <div className="w-3/6 ">
                            <div className="flex mb-1">
                                <img src="/logoepos.png" alt="" className="filter brightness-100"/>
                            </div>
                            <p className="text-sm text-justify">Calidad y confianza en cada pieza.</p>
                        </div>
                        <div className="w-2/6 mt-4 ml-auto ">
                            <h2 className="text-bold mb-2">Contacto</h2>
                            <p className="text-sm">33 4343 3234</p>
                            <p className="text-sm">33 4343 3234</p>
                            <p className="text-sm">epos@gmail.com</p>
                        </div>
                    </div>

                    <div className="mt-14">
                        <h3 className="text-center mb-4">Redes sociales</h3>
                        <div className="flex gap-16 w-10/12 mx-auto">
                            <p className="w-2/6 text-center rounded-full"><img src="/icons/facebook.png" className="w-12" alt="Logotipo Facebook" /></p>
                            <p className="w-2/6 text-center rounded-full"><img src="/icons/instagram.png" className="w-12"  alt="Logotipo Instagram" /></p>
                            <p className="w-2/6 text-center rounded-full"><img src="/icons/youtube.png" className="w-12"  alt="Logotipo Youtube" /></p>
                        </div>
                    </div>
                    <a href="https://portafolio-ricardo-legaspi.vercel.app/"><p className="text-center mt-8 text-xs">Made by RL </p></a>
                </div>
            </footer>


        </>
    );
}

export default HomePage;
