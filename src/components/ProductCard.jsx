import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import { StarIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'


function ProductCard({ product }) {
  const { addToCart } = useCart()
  
  // Lista de categorías donde el botón estará deshabilitado
  const disabledCategories = ["Laptops", "Fast Food", "Bevarages"]
  const isDisabled = disabledCategories.includes(product.category)

  const handleAddToCart = (e) => {
    if (isDisabled) return // Evita agregar productos si está deshabilitado
    e.preventDefault()
    addToCart(product)
  }
  
  return (
    <Link to={`/product/${product.id}`} className="card group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
          {product.category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <StarIcon 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          
          <button
            onClick={handleAddToCart}
            disabled={isDisabled} 
            title={isDisabled ? "This category is not available for purchase" : ""}
            className={`btn btn-primary flex items-center space-x-1 ${isDisabled ? "disabled-btn" : ""}`}
          >
            <ShoppingCartIcon className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
