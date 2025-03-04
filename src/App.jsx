import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Invoice from './pages/Invoice'
import NotFound from './pages/NotFound'
import { LanguageProvider } from './contexts/LanguageContext'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
  return (
    <LanguageProvider>
      {/* Agregamos el LanguageSwitcher en la parte superior para que esté disponible en toda la app */}
      <LanguageSwitcher />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:category" element={<ProductList />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </LanguageProvider>
  )
}

export default App
