import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import Marcas from "./pages/Marcas";
import Acabados from "./pages/Acabados";
import Tienda from "./pages/Tienda";
import Perfil from "./pages/Perfil";
import Detalle from "./pages/Detalle";

import { PedidoProvider } from './context/PedidoContext';
import Layout from "./components/Layout";

function App() {
  return (
    <PedidoProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="categorias" element={<Categorias />} />
            <Route path="marcas" element={<Marcas />} />
            <Route path="acabados" element={<Acabados />} />
            <Route path="tienda" element={<Tienda />} />
            <Route path="perfil" element={<Perfil />} />
            <Route path="detalle" element={<Detalle />} />
          </Route>
        </Routes>
      </Router>
    </PedidoProvider>
  );
}

export default App;