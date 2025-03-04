import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById } from '../data/products'
import { useCart } from '../contexts/CartContext'
import { StarIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setLoading(true)
    const foundProduct = getProductById(id)
    
    if (foundProduct) {
      setProduct(foundProduct)
    }
    
    setLoading(false)
  }, [id])
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value)
    if (value > 0 && value <= product.stock) {
      setQuantity(value)
    }
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity)
    navigate('/cart')
  }
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    )
  }
  
  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => navigate('/products')}
          className="btn btn-primary"
        >
          Browse Products
        </button>
      </div>
    )
  }
  
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-primary-600 mb-6"
      >
        <ArrowLeftIcon className="h-4 w-4 mr-1" />
        Back
      </button>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="md:w-1/2 p-6">
            <div className="mb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-gray-600 ml-2">{product.rating} rating</span>
            </div>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              <span className="ml-2 text-sm text-gray-500">
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </span>
            </div>
            
            {product.stock > 0 ? (
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-100"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 text-center border-t border-b border-gray-300 py-1"
                  />
                  <button
                    onClick={() => quantity < product.stock && setQuantity(quantity + 1)}
                    className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <span className="text-red-600 font-semibold">Out of Stock</span>
              </div>
            )}
            
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className={`w-full btn flex items-center justify-center space-x-2 ${
                product.stock > 0 ? 'btn-primary' : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              <ShoppingCartIcon className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail