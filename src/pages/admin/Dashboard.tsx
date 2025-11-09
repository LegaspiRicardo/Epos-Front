// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
/*  
// Definir los tipos para las direcciones
type Direction = "up" | "down" | "left" | "right";

interface AnimatedSectionProps {
    children: React.ReactNode;
    delay?: number;
    direction?: Direction;
    className?: string;
}

// Componente animado reutilizable

const AnimatedSection = ({
    children,
    delay = 0,
    direction = "up",
    className = "",
}: AnimatedSectionProps) => {
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
};*/

function Dashboard() {
    return (
        <>
            <h1>Dashboard Admin</h1>


        </>
    );
}

export default Dashboard;
