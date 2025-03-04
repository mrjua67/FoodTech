import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">FoodTech Store</h3>
            <p className="text-gray-300">
              Your one-stop shop for delicious food and cutting-edge technology.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">Products</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white">Cart</Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/Fast Food" className="text-gray-300 hover:text-white">Fast Food</Link>
              </li>
              <li>
                <Link to="/products/Beverages" className="text-gray-300 hover:text-white">Beverages</Link>
              </li>
              <li>
                <Link to="/products/Laptops" className="text-gray-300 hover:text-white">Laptops</Link>
              </li>
              <li>
                <Link to="/products/Accessories" className="text-gray-300 hover:text-white">Accessories</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} FoodTech Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer