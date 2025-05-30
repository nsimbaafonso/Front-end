import { BrowserRouter as Router, Routes, Route, Link, useLocation  } from 'react-router-dom';
import { useEffect } from 'react';

// Estilo global
// import './assets/css/style.css'; 
//import GlobalStyle from './assets/css/GlobalStyle';
import  GlobalStyle  from './globalStyles/GlobalStyle'

// Layout
import DashboardLayout from './layouts/DashboardLayout';

// Páginas do site
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Blog from './pages/Blog';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';
import Post from './pages/Post';
import Carrinho from './pages/Carrinho';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';

// Páginas do dashboard
import OverviewPage from "./dashboard/pages/OverviewPage";
import ProductsPage from "./dashboard/pages/ProductsPage";
import UsersPage from "./dashboard/pages/UsersPage";
import SalesPage from "./dashboard/pages/SalesPage";
import OrdersPage from "./dashboard/pages/OrdersPage";
import AnalyticsPage from "./dashboard/pages/AnalyticsPage";
import SettingsPage from "./dashboard/pages/SettingsPage";

// Componente separado para usar useLocation corretamente
function AppContent() {
  const location = useLocation();
 // console.log("Localização atual:", location);

  // Aplica GlobalStyle apenas fora do dashboard
  const isDashboardRoute = location.pathname.startsWith('/dashboard');
  

  return (
    <>
      {!isDashboardRoute && <GlobalStyle />}
      <Routes>
        {/*Rotas do site principal*/}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post/" element={<Post />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/checkout" element={<Checkout />} />

        {/*Rotas do dashboard com layout específico*/}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <OverviewPage />
            </DashboardLayout>
          }
        />
				<Route
          path="/dashboard/produtos"
          element={
            <DashboardLayout>
              <ProductsPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/clientes"
          element={
            <DashboardLayout>
              <UsersPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/vendas"
          element={
            <DashboardLayout>
              <SalesPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/pedidos"
          element={
            <DashboardLayout>
              <OrdersPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/analises"
          element={
            <DashboardLayout>
              <AnalyticsPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/definicoes"
          element={
            <DashboardLayout>
              <SettingsPage />
            </DashboardLayout>
          }
        />

        {/*Rotas não encontradas*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
