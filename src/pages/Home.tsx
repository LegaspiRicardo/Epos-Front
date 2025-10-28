import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HomeCarousel from "../components/carousel/HomeCarousel";

// Definir los tipos para las direcciones
type Direction = "up" | "down" | "left" | "right";

interface AnimatedSectionProps {
    children: React.ReactNode;
    delay?: number;
    direction?: Direction;
    className?: string;
}

// Componente animado reutilizable
const AnimatedSection = ({ children, delay = 0, direction = "up", className = "" }: AnimatedSectionProps) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const directions = {
        up: { y: 50, opacity: 0 },
        down: { y: -50, opacity: 0 },
        left: { x: 50, opacity: 0 },
        right: { x: -50, opacity: 0 },
    };

    return (
        <motion.div
            ref={ref}
            initial={directions[direction]}
            animate={inView ? { y: 0, x: 0, opacity: 1 } : directions[direction]}
            transition={{ duration: 0.6, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

function HomePage() {
    return (
        <>

            {/* Sección Quiénes Somos */}
            <div className="min-h-screen pb-12 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/fondotornillos.jpg')" }}>
                <div className="w-11/12 mx-auto pt-24">
                    <AnimatedSection delay={0.2} direction="down">
                        <img src="/logotipoepos.png" alt="" className="bg-white/60 rounded-xl" />
                    </AnimatedSection>

                    <AnimatedSection delay={0.4} direction="up">
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
                    </AnimatedSection>
                </div>
            </div>

            {/* Sección Nuestros Productos */}
            <AnimatedSection delay={0.2} direction="up">
                <div className="mt-16 mb-24">
                    <div className="w-11/12 mx-auto">
                        <p className="font-bold text-2xl">Nuestros Productos</p>
                        <p className="mb-8 mt-2 text-xl">Refacciones industriales de <span className="text-cyan-800 font-bold"> alta calidad</span></p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            {[
                                { href: "/categorias", icon: "/icons/birlo.png", name: "Birlos" },
                                { href: "/categorias", icon: "/icons/tornillo.png", name: "Tornillos" },
                                { href: "/marcas", icon: "/icons/muelle.png", name: "Muelles" },
                                { href: "/productos", icon: "/icons/tools.png", name: "Herramientas" },
                                { href: "/categorias", icon: "/icons/pijas.png", name: "Pijas" },
                                { href: "/categorias", icon: "/icons/tuerca.png", name: "Tuercas" },
                            ].map((product, index) => (
                                <AnimatedSection key={product.name} delay={0.1 * index} direction="up">
                                    <Link to={product.href}>
                                        <div className="bg-white border rounded-lg p-4 text-center hover:scale-110 transform transition-transform duration-300 ease-in-out">
                                            <img src={product.icon} alt={product.name} className="w-16 h-16 mx-auto mb-2" />
                                            <p className="font-semibold text-lg">{product.name}</p>
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Sección Kits EPOS */}
            <AnimatedSection delay={0.3} direction="up">
                <div className="relative bg-cyan-900 pt-14 pb-24 overflow-hidden">
                    {/* Fondo con efecto parallax */}
                    <div
                        className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat z-0"
                        style={{ backgroundImage: 'url(/images/kittornillos.jpg)' }}
                    ></div>
                    {/* Overlay para mejorar legibilidad */}
                    <div className="absolute inset-0 bg-zinc-900 bg-opacity-40 z-1"></div>

                    {/* Contenido */}
                    <div className="relative z-10 w-11/12 mx-auto">
                        <p className="font-bold text-2xl mb-2 text-white">Kits EPOS</p>
                        <p className="mb-6 text-xl text-white">Refacciones para cada necesidad</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Kit Básico para Talleres", desc: "Incluye refacciones esenciales para el mantenimiento diario de talleres mecánicos." },
                                { title: "Kit Preventivo para Flotillas", desc: "Diseñado para el mantenimiento preventivo de vehículos pesados y flotillas." },
                                { title: "Kit de Refacciones Urgentes", desc: "Componentes críticos para reparaciones urgentes y minimizar tiempos de inactividad." },
                            ].map((kit, index) => (
                                <AnimatedSection key={kit.title} delay={0.2 * index} direction="up">
                                    <div className="bg-white border rounded-lg p-6 shadow-lg">
                                        <p className="font-bold mb-2 text-xl">{kit.title}</p>
                                        <p className="text-lg text-justify">{kit.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Sección Categorías */}
            <AnimatedSection delay={0.2} direction="left">
                <div className="mt-16">
                    <div className="w-11/12 mx-auto">
                        <p className="font-bold text-2xl">Categorías</p>
                        <p className="text-xl mt-2">Explora nuestro catálogo</p>
                        <HomeCarousel />
                    </div>
                </div>
            </AnimatedSection>

            {/* Sección Modelo de Negocio */}
            <AnimatedSection delay={0.3} direction="right">
                <div className="mt-16 bg-cyan-950 text-white py-12">
                    <div className="w-11/12 mx-auto">
                        <p className="font-bold text-2xl mb-8">¿Cómo trabajamos?</p>

                        <div className="mb-8">
                            <p className="font-semibold mb-2 text-xl w-11/12 mx-auto">Proceso de pedido:</p>
                            <ol className="list-decimal list-inside text-sm space-y-4 text-justify w-11/12 mx-auto">
                                {[
                                    "El cliente solicita cotización o disponibilidad",
                                    "Verificamos stock y confirmamos precio/tiempo de entrega",
                                    "Generamos orden de compra o factura",
                                    "Preparamos el pedido y enviamos desde nuestro almacén"
                                ].map((step, index) => (
                                    <AnimatedSection key={index} delay={0.1 * index} direction="right">
                                        <li className="text-lg py-2 bg-cyan-900 rounded-lg p-4">{step}</li>
                                    </AnimatedSection>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Sección Sectores */}
            <AnimatedSection delay={0.2} direction="up">
                <div className="py-16 w-11/12 mx-auto">
                    <p className="font-bold text-2xl mb-10 text-center">Sectores que atendemos</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AnimatedSection delay={0.3} direction="left">
                            <div className="bg-white border-l-4 border-cyan-600 shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow">
                                <div className="flex items-start">
                                    <div className="bg-cyan-100 p-3 rounded-full mr-6 mt-2">
                                        <span className="text-cyan-600 font-bold">B2B</span>
                                    </div>
                                    <p className="text-gray-700 text-lg">Talleres mecánicos, refaccionarias, flotillas, empresas de transporte y construcción</p>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.4} direction="right">
                            <div className="bg-white border-l-4 border-green-600 shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow mt-2">
                                <div className="flex items-start">
                                    <div className="bg-green-100 p-3 rounded-full mr-6">
                                        <span className="text-green-600 font-bold">B2C</span>
                                    </div>
                                    <p className="text-gray-700 text-lg">Clientes individuales con envíos a todo el país</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </AnimatedSection>

            {/* Sección Contacto */}
            <AnimatedSection delay={0.3} direction="up">
                <div className="bg-slate-50 pt-16 text-center pb-12">
                    <p className="font-bold text-2xl">¿No encontró lo que buscaba?</p>
                    <p className="pb-8 text-lg pt-4">Escríbanos y le responderemos a la brevedad</p>
                    <form action="" className="text-sm">
                        <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-4">
                            <AnimatedSection delay={0.4} direction="left" className="w-full md:w-3/6 text-start">
                                <div>
                                    <label htmlFor="email" className="text-md">Correo</label>
                                    <input type="email" className="bg-white border w-full rounded-md py-2 px-3" />
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={0.5} direction="right" className="w-full md:w-3/6 text-start">
                                <div>
                                    <label htmlFor="telefono" className="text-md">Teléfono</label>
                                    <input type="number" className="bg-white border w-full rounded-md py-2 px-3" />
                                </div>
                            </AnimatedSection>
                        </div>
                        <AnimatedSection delay={0.6} direction="up" className="w-11/12 mx-auto text-start mt-4 mb-4">
                            <div>
                                <label htmlFor="mensaje" className="text-md">Mensaje</label>
                                <textarea className="bg-white border w-full rounded-md py-2 px-3 h-24" />
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.7} direction="up" className="w-11/12 mx-auto">
                            <button type="submit" className="border border-cyan-950 hover:bg-cyan-900 hover:text-white rounded text-cyan-900 px-8 py-1 transition duration-300 text-lg">
                                Enviar
                            </button>
                        </AnimatedSection>
                    </form>
                </div>
            </AnimatedSection>

            {/* Footer */}
            <AnimatedSection delay={0.2} direction="up">
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
                                            <h2 className="font-bold">Contacto</h2>
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
                                {['facebook', 'instagram', 'youtube'].map((social, index) => (
                                    <AnimatedSection key={social} delay={0.1 * index} direction="up">
                                        <div className="w-12 h-12 flex items-center justify-center">
                                            <img src={`/icons/${social}.png`} className="w-10" alt={`${social} EPOS`} />
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                        <a href="https://portafolio-ricardo-legaspi.vercel.app/">
                            <p className="text-center mt-8 text-xs pb-4">Made by RL</p>
                        </a>
                    </div>
                </footer>
            </AnimatedSection>
        </>
    );
}

export default HomePage;