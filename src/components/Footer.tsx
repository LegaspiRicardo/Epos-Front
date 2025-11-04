// components/Footer.jsx



const Footer = () => {
    return (
        <footer className="bg-cyan-950 text-white">
            <div className="w-11/12 mx-auto pt-16">
                <div className="flex flex-col md:flex-row md:justify-between">
                    {/* Logo y descripción */}
                    <div className="w-full md:w-full mb-6 md:mb-0">
                        <div className="flex flex-col md:flex-row md:items-start items-center">
                            <div className="mb-4 md:mb-0 md:mr-8 w-3/6 mt-4">
                                <img
                                    src="/logoepos.png"
                                    alt="EPOS Comercializadora Industrial"
                                    className="filter brightness-100 max-h-16 w-auto mx-auto"
                                />
                                <p className="text-xs text-center mt-2 max-w-md">
                                    Calidad y confianza en cada pieza.
                                </p>
                            </div>

                            {/* Información de contacto */}
                            <div className="w-2/6 text-center md:text-end mt-12 md:mt-0">
                                <h2 className="font-bold text-lg">Contacto</h2>
                                <p className="text-sm mb-1">33 4343 3234</p>
                                <p className="text-sm mb-1">33 4343 3234</p>
                                <p className="text-sm mb-3">epos@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Redes sociales */}
                <div className="mt-8 md:mt-16">
                    <h3 className="text-center mb-4 text-lg">Redes sociales</h3>
                    <div className="flex justify-center gap-8 md:gap-16">
                        {['facebook', 'instagram', 'youtube'].map((social, _) => (

                                <div className="w-12 h-12 flex items-center justify-center transition-transform hover:scale-110">
                                    <img
                                        src={`/icons/${social}.png`}
                                        className="w-10 h-10"
                                        alt={`${social} EPOS`}
                                    />
                                </div>

                        ))}
                    </div>
                </div>

                {/* Créditos */}
                <a href="https://portafolio-ricardo-legaspi.vercel.app/">
                    <p className="text-center mt-8 text-xs pb-4">Made by RL</p>
                </a>
            </div>
        </footer>
    );
};

export default Footer;