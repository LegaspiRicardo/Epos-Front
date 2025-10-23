import HomeCarousel from "../components/carousel/HomeCarousel";

function HomePage() {
    return (
        <>

            {/* Hero Section 
            <div className="mt-2">
                <div className="w-11/12 mx-auto">
                    <p className="font-bold">Productos de calidad</p>
                    <p>Resistentes y al mejor precio.</p>
                </div>
            </div>
            <hr />*/}


            {/* Sección Quiénes Somos */}
            <div className="min-h-screen pb-12 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/fondotornillos.jpg')" }}>
                <div className="w-11/12 mx-auto pt-24">
                    <img src="/logotipoepos.png" alt="" className="bg-white/60 rounded-xl " />
                    <div className="bg-white/70 bg-opacity-90 p-8 rounded-lg max-w-2xl mx-auto mt-12">
                        <p className="text-justify mb-8 text-gray-800 text-lg leading-relaxed font-semibold">
                            Somos una empresa mexicana dedicada a la distribución
                            y comercialización de refacciones automotrices, especializados en tornillería, birlos, muelles, entre otros
                        </p>
                        <div className="bg-cyan-950 text-white py-8 rounded-lg">
                            <p className="text-center font-semibold italic text-xl mx-auto w-11/12">
                                "Te entregamos justo lo que necesitas, cuando más lo necesitas."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección Productos */}
            <div className="mt-16 mb-24">
                <div className="w-11/12 mx-auto">
                    <p className="font-bold text-2xl">Nuestros Productos</p>
                    <p className="mb-8 mt-2 text-xl">Refacciones industriales de <span className="text-cyan-800 font-bold"> alta calidad</span></p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-white border rounded-lg p-4 text-center">
                            <p className="font-semibold text-lg">Birlos</p>
                        </div>
                        <div className="bg-white border rounded-lg p-4 text-center">
                            <p className="font-semibold text-lg">Tornillos</p>
                        </div>
                        <div className="bg-white border rounded-lg p-4 text-center">
                            <p className="font-semibold text-lg">Muelles</p>
                        </div>
                        <div className="bg-white border rounded-lg p-4 text-center">
                            <p className="font-semibold text-lg">Herramientas</p>
                        </div>
                        <div className="bg-white border rounded-lg p-4 text-center">
                            <p className="font-semibold text-lg">Pijas</p>
                        </div>
                        <div className="bg-white border rounded-lg p-4 text-center">
                            <p className="font-semibold text-lg">Tuercas</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección Kits EPOS */}
            <div className="bg-cyan-900 pt-14 pb-24">
                <div className="w-11/12 mx-auto">
                    <p className="font-bold text-2xl mb-2 text-white">Kits EPOS</p>
                    <p className="mb-6 text-xl text-white">Refacciones para cada necesidad</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white border rounded-lg p-6">
                            <p className="font-bold mb-2 text-xl">Kit Básico para Talleres</p>
                            <p className="text-lg text-justify">
                                Incluye refacciones esenciales para el mantenimiento diario de talleres mecánicos.
                            </p>
                        </div>
                        <div className="bg-white border rounded-lg p-6">
                            <p className="font-bold mb-2 text-xl">Kit Preventivo para Flotillas</p>
                            <p className="text-lg text-justify">
                                Diseñado para el mantenimiento preventivo de vehículos pesados y flotillas.
                            </p>
                        </div>
                        <div className="bg-white border rounded-lg p-6">
                            <p className="font-bold mb-2 text-xl">Kit de Refacciones Urgentes</p>
                            <p className="text-lg text-justify">
                                Componentes críticos para reparaciones urgentes y minimizar tiempos de inactividad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección Categorías */}
            <div className="mt-16">
                <div className="w-11/12 mx-auto">
                    <p className="font-bold text-2xl">Categorías</p>
                    <p className="text-xl mt-2">Explora nuestro catálogo</p>
                    <HomeCarousel />
                </div>
            </div>

            {/* Sección Modelo de Negocio */}
            <div className="mt-16 bg-cyan-950 text-white py-12">
                <div className="w-11/12 mx-auto">
                    <p className="font-bold text-2xl mb-8 ">¿Cómo trabajamos?</p>

                    <div className="mb-8">
                        <p className="font-semibold mb-2 text-xl w-11/12 mx-auto">Proceso de pedido:</p>
                        <ol className="list-decimal list-inside text-sm space-y-4 text-justify w-11/12 mx-auto">
                            <li className="text-lg py-2 bg-cyan-900 rounded-lg p-4">El cliente solicita cotización o disponibilidad</li>
                            <li className="text-lg py-2 bg-cyan-900 rounded-lg p-4">Verificamos stock y confirmamos precio/tiempo de entrega</li>
                            <li className="text-lg py-2 bg-cyan-900 rounded-lg p-4">Generamos orden de compra o factura</li>
                            <li className="text-lg py-2 bg-cyan-900 rounded-lg p-4">Preparamos el pedido y enviamos desde nuestro almacén</li>
                        </ol>
                    </div>
                </div>
            </div>



            <div className="py-16 w-11/12 mx-auto">
                <p className="font-bold text-2xl mb-10 text-center">Sectores que atendemos</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border-l-4 border-cyan-600 shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow">
                        <div className="flex items-start">
                            <div className="bg-cyan-100 p-3 rounded-full mr-6 mt-2">
                                <span className="text-cyan-600 font-bold ">B2B</span>
                            </div>
                            <p className="text-gray-700 text-lg">Talleres mecánicos, refaccionarias, flotillas, empresas de transporte y construcción</p>
                        </div>
                    </div>
                    <div className="bg-white border-l-4 border-green-600 shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow mt-2">
                        <div className="flex items-start">
                            <div className="bg-green-100 p-3 rounded-full mr-6">
                                <span className="green-600 font-bold">B2C</span>
                            </div>
                            <p className="text-gray-700 text-lg">Clientes individuales con envíos a todo el país</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección Contacto */}
            <div className="bg-slate-50 pt-16 text-center pb-12">
                <p className="font-bold text-2xl ">¿No encontró lo que buscaba?</p>
                <p className="pb-8 text-lg pt-4">Escríbanos y le responderemos a la brevedad</p>
                <form action="" className="text-sm">
                    <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-3/6 text-start">
                            <label htmlFor="email" className="text-md">
                                Correo
                            </label>
                            <input
                                type="email"
                                className="bg-white border w-full rounded-md py-2 px-3"
                            />
                        </div>
                        <div className="w-full md:w-3/6 text-start">
                            <label htmlFor="telefono" className="text-md">
                                Teléfono
                            </label>
                            <input
                                type="number"
                                className="bg-white border w-full rounded-md py-2 px-3"
                            />
                        </div>
                    </div>
                    <div className="w-11/12 mx-auto text-start mt-4 mb-4">
                        <label htmlFor="mensaje" className="text-md">
                            Mensaje
                        </label>
                        <textarea
                            className="bg-white border w-full rounded-md py-2 px-3 h-24"
                        />
                    </div>
                    <div className="w-11/12 mx-auto">
                        <button
                            type="submit"
                            className="border border-cyan-950 hover:bg-cyan-900 hover:text-white rounded text-cyan-900 px-8 py-1 transition duration-300 text-lg"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>

            <footer className="bg-cyan-950 text-white">
                <div className="w-11/12 mx-auto pt-16">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-3/6 mb-6 md:mb-0">
                            <div className="flex mb-4">

                                <div>
                                    <img src="/logoepos.png" alt="EPOS Comercializadora Industrial" className="filter brightness-100 max-h-12" />
                                    <p className="text-xs text-justify mb-2">
                                        Calidad y confianza en cada pieza.
                                    </p>
                                </div>
                                <div className="ml-auto">
                                    <div className="w-full md:w-2/6 md:mt-4 md:ml-auto ml-auto">
                                        <h2 className="font-bold ">Contacto</h2>
                                        <p className="text-sm mb-1">33 4343 3234</p>
                                        <p className="text-sm mb-1">33 4343 3234</p>
                                        <p className="text-sm mb-3">epos@gmail.com</p>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="mt-14">
                        <h3 className="text-center mb-4">Redes sociales</h3>
                        <div className="flex justify-center gap-8 md:gap-16">
                            <div className="w-12 h-12 flex items-center justify-center">
                                <img src="/icons/facebook.png" className="w-10" alt="Facebook EPOS" />
                            </div>
                            <div className="w-12 h-12 flex items-center justify-center">
                                <img src="/icons/instagram.png" className="w-10" alt="Instagram EPOS" />
                            </div>
                            <div className="w-12 h-12 flex items-center justify-center">
                                <img src="/icons/youtube.png" className="w-10" alt="YouTube EPOS" />
                            </div>
                        </div>
                    </div>
                    <a href="https://portafolio-ricardo-legaspi.vercel.app/">
                        <p className="text-center mt-8 text-xs pb-4">Made by RL</p>
                    </a>
                </div>
            </footer>
        </>
    );
}

export default HomePage;