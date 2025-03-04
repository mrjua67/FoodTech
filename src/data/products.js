
export const products = [
  // Food Category - Fast Food
  {
    id: 1,
    name: "Classic Cheeseburger",
    price: 8.99,
    description: "Juicy beef patty with melted cheese, lettuce, tomato, and special sauce on a toasted bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    category: "Fast Food",
    stock: 50,
    rating: 4.5,
    featured: true
  },
  {
    id: 2,
    name: "Crispy Chicken Sandwich",
    price: 7.99,
    description: "Crispy fried chicken breast with pickles and mayo on a soft brioche bun.",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    category: "Fast Food",
    stock: 45,
    rating: 4.3
  },
  {
    id: 3,
    name: "Loaded French Fries",
    price: 5.99,
    description: "Crispy fries topped with melted cheese, bacon bits, sour cream, and green onions.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    category: "Fast Food",
    stock: 60,
    rating: 4.7
  },
  
  // Food Category - Beverages
  {
    id: 4,
    name: "Artisanal Coffee",
    price: 4.50,
    description: "Premium single-origin coffee, freshly ground and brewed to perfection.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    category: "Beverages",
    stock: 100,
    rating: 4.8,
    featured: true
  },
  {
    id: 5,
    name: "Fruit Smoothie",
    price: 6.50,
    description: "Blend of fresh seasonal fruits with yogurt and a touch of honey.",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    category: "Beverages",
    stock: 40,
    rating: 4.6
  },
  {
    id: 6,
    name: "Craft Soda Collection",
    price: 12.99,
    description: "Set of 4 artisanal sodas with unique flavors like lavender lemon and ginger lime.",
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    category: "Beverages",
    stock: 30,
    rating: 4.2
  },
  
  // Technology Category - Laptops
  {
    id: 7,
    name: "UltraBook Pro",
    price: 1299.99,
    description: "Powerful laptop with 16GB RAM, 512GB SSD, and a stunning 4K display for professionals.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    category: "Laptops",
    stock: 15,
    rating: 4.9,
    featured: true
  },
  {
    id: 8,
    name: "Gaming Powerhouse",
    price: 1899.99,
    description: "High-performance gaming laptop with dedicated GPU, RGB keyboard, and advanced cooling system.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    category: "Laptops",
    stock: 10,
    rating: 4.7
  },
  {
    id: 9,
    name: "Budget Notebook",
    price: 599.99,
    description: "Affordable laptop for everyday tasks with reliable performance and long battery life.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    category: "Laptops",
    stock: 25,
    rating: 4.1
  },
  
  // Technology Category - Accessories
  {
    id: 10,
    name: "Wireless Noise-Cancelling Headphones",
    price: 249.99,
    description: "Premium headphones with active noise cancellation, 30-hour battery life, and comfortable design.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    category: "Accessories",
    stock: 30,
    rating: 4.8,
    featured: true
  },
  {
    id: 11,
    name: "Smart Watch",
    price: 199.99,
    description: "Feature-packed smartwatch with health tracking, notifications, and customizable watch faces.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    category: "Accessories",
    stock: 20,
    rating: 4.5
  },
  {
    id: 12,
    name: "Portable Power Bank",
    price: 49.99,
    description: "High-capacity 20,000mAh power bank with fast charging for multiple devices on the go.",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    category: "Accessories",
    stock: 50,
    rating: 4.4
  },
  {
    id: 13,
    name: "Blueberries",
    price: 6.2,
    description: "1 pound of fresh, high-quality blueberries, sourced directly from Úmbita, Boyacá. These small berries are rich in antioxidants, with a sweet and slightly tangy flavor, perfect for enjoying on their own, in juices, desserts, or smoothies. Natural, nutritious, and delicious!✨ ",
    image: "https://images.unsplash.com/photo-1548692972-dd5753b37b9f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fruits and Vegetables",
    stock: 50,
    rating: 5
  },
  {
    id: 14,
    name: "Banana Passionfruit",
    price: 0.48,
    description: "1 pound of delicious banana passionfruit grown in the fertile lands of Chuscal, Boyacá. This exotic and aromatic fruit is perfect for juices, desserts, and smoothies, standing out for its sweet and slightly tangy flavor. Fresh, natural, and of the best quality! 🍈✨",
    image: "https://th.bing.com/th/id/OIP.fV9_NhwlICO-N9znqFmsjwHaHa?rs=1&pid=ImgDetMain",
    category: "Fruits and Vegetables",
    stock: 50,
    rating: 4.6
  },
  {
    id: 15,
    name: "Huawei Y9 Prime",
    price: 72.39,
    description: "The Huawei Y9 is a mid-range smartphone that features a large display, long-lasting battery, and balanced performance. It stands out for its sleek design, dual camera for quality photos, and efficient processor for smooth app and gaming experiences. Ideal for those looking for an affordable device with great features. 📱✨",
    image: "https://th.bing.com/th/id/OIP.RK_bWTZYazXSzvi9mJ2GBQHaIl?rs=1&pid=ImgDetMain",
    category: "Phones",
    stock: 50,
    rating: 4.0
  }
]

export const categories = [
  { id: 1, name: "Fruits and Vegetables", image: "https://images.unsplash.com/photo-1610415946201-295954703dd9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Fast Food", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" },
  { id: 3, name: "Beverages", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" },
  { id: 4, name: "Laptops", image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" },
  { id: 5, name: "Accessories", image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" },
  {id: 6, name: "Phones", image: "https://images.unsplash.com/photo-1584651432430-7e1ac8303a0a?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

export function getProductsByCategory(categoryName) {
  return products.filter(product => product.category === categoryName)
}

export function getFeaturedProducts() {
  return products.filter(product => product.featured)
}

export function getProductById(id) {
  return products.find(product => product.id === parseInt(id))
}

export function searchProducts(query) {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  )
}