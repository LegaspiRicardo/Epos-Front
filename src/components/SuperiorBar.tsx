// src/components/SuperiorBar.tsx
import { Link } from "react-router-dom";


const SuperiorBar = () => {
    return (
        <header className="bg-cyan-950 text-white py-3 px-6 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <Link
                        to="/"
                        className="hover:text-amber-400 transition-colors text-2xl"
                    >
                        EPOS
                    </Link>
                <p className="text-lg text-gray-300">
                    Birlos y tornillos para tu auto
                </p>
            </div>
        </header>
    );
};

export default SuperiorBar;
