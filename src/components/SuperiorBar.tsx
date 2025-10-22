// src/components/SuperiorBar.tsx
import { Link } from "react-router-dom";


const SuperiorBar = () => {
    return (
        <header className="bg-cyan-950 text-white py-3 px-6 shadow-md">
            <div className=" ">
                    <Link
                        to="/"
                        className="hover:text-amber-400 transition-colors text-2xl"
                    >
                        <img src="/logoepos.png" alt="" className="w-32" />
                    </Link>
                <p className="text-sm text-gray-300 w-3/6">
                    Comercializadora industrial
                </p>
            </div>
        </header>
    );
};

export default SuperiorBar;
