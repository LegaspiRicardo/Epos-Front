import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

//PUBLIC
import Home from "./pages/public/Home";
import Categorias from "./pages/public/Categorias";
import Marcas from "./pages/public/Marcas";
import Acabados from "./pages/public/Acabados";
import Tienda from "./pages/public/Tienda";
import Perfil from "./pages/public/Perfil";
import Detalle from "./pages/public/Detalle";



import { PedidoProvider } from './context/PedidoContext';
import Layout from "./components/Layout";




//ADMIN
import LayoutAdmin from "./components/LayoutAdmin";
import Dashboard from "./pages/admin/Dashboard";
import Productos from "./pages/admin/Productos";
import Clientes from "./pages/admin/Clientes";
import Analisis from "./pages/admin/Analisis";
import PerfilAdmin from "./pages/admin/Perfil";
import CMA from "./pages/admin/CMA";



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

          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<Dashboard />} />
            <Route path="productos" element={<Productos />} />
            <Route path="clientes" element={<Clientes />} />
            <Route path="analisis" element={<Analisis />} />
            <Route path="perfil" element={<PerfilAdmin />} />
            <Route path="acabados" element={<CMA />} />
            <Route path="categorias" element={<CMA />} />
            <Route path="marcas" element={<CMA />} />
          </Route>


        </Routes>
      </Router>
    </PedidoProvider>
  );
}

export default App;