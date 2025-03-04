import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import { TrashIcon, MinusIcon, PlusIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

function Cart() {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    subtotal,
    tax,
    total
  } = useCart()
  
  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="flex justify-center mb-4">
          <ShoppingBagIcon className="h-16 w-16 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Link to="/products" className="btn btn-primary">
          Start Shopping
        </Link>
      </div>
    )
  }
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {cart.map(item => (
                <li key={item.id} className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row">
                    {/* Product Image */}
                    <div className="sm:w-24 sm:h-24 flex-shrink-0 mb-4 sm:mb-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1 sm:ml-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                          <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className={`p-1 rounded-full ${
                              item.quantity <= 1 ? 'text-gray-400' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            <MinusIcon className="h-5 w-5" />
                          </button>
                          
                          <span className="mx-2 w-8 text-center">{item.quantity}</span>
                          
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full text-gray-600 hover:bg-gray-100"
                          >
                            <PlusIcon className="h-5 w-5" />
                          </button>
                        </div>
                        
                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 flex items-center"
                        >
                          <TrashIcon className="h-5 w-5 mr-1" />
                          <span className="text-sm">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6">
            <Link 
              to="/products"
              className="text-primary-600 hover:text-primary-800 flex items-center"
            >
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <Link
              to="/checkout"
              className="w-full btn btn-primary block text-center"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart