import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })
  
  const [subtotal, setSubtotal] = useState(0)
  const [tax, setTax] = useState(0)
  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    
    const newSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    setSubtotal(newSubtotal)
    
    const newTax = newSubtotal * 0.1 // 10% tax
    setTax(newTax)
    
    setTotal(newSubtotal + newTax)
  }, [cart])
  
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        return [...prevCart, { ...product, quantity }]
      }
    })
  }
  
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }
  
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }
  
  const clearCart = () => {
    setCart([])
  }
  
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0)
  
  const value = {
    cart,
    cartCount,
    subtotal,
    tax,
    total,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}