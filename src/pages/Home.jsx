import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { categories, getFeaturedProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import CategoryCard from '../components/CategoryCard'

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  
  useEffect(() => {
    setFeaturedProducts(getFeaturedProducts())
  }, [])
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl overflow-hidden mb-12">
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Food & Tech Under One Roof
            </h1>
            <p className="text-lg mb-6">
              Discover the perfect blend of delicious food and cutting-edge technology.
              Shop our curated selection of products for your lifestyle needs.
            </p>
            <div className="flex space-x-4">
              <Link to="/products" className="btn bg-white text-primary-600 hover:bg-gray-100">
                Shop Now
              </Link>
              <Link to="/products/Fast Food" className="btn border border-white text-white hover:bg-white/10">
                Explore Food
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Food and Tech"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Shop by Category</h2>
          <Link to="/products" className="text-primary-600 hover:text-primary-800">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link to="/products" className="text-primary-600 hover:text-primary-800">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      {/* Promotional Banners */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <div className="p-6 flex flex-col h-full justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Food Lovers Special</h3>
              <p className="text-gray-600 mb-4">
                Discover our delicious selection of fast food and beverages.
                Perfect for satisfying your cravings!
              </p>
            </div>
            <Link 
              to="/products/Fast Food" 
              className="btn btn-primary self-start"
            >
              Shop Food
            </Link>
          </div>
        </div>
        
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <div className="p-6 flex flex-col h-full justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Tech Enthusiasts</h3>
              <p className="text-gray-600 mb-4">
                Explore our range of laptops and accessories.
                Stay connected with the latest technology!
              </p>
            </div>
            <Link 
              to="/products/Laptops" 
              className="btn btn-secondary self-start"
            >
              Shop Tech
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home