import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { products, categories, getProductsByCategory, searchProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import SearchFilter from '../components/SearchFilter'

function ProductList() {
  const { category } = useParams()
  const [searchParams] = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setLoading(true)
    
    // Get initial products based on category or all products
    let initialProducts = category 
      ? getProductsByCategory(category)
      : [...products]
    
    // Check for search query
    const searchQuery = searchParams.get('search')
    if (searchQuery) {
      initialProducts = searchProducts(searchQuery)
    }
    
    setFilteredProducts(initialProducts)
    setLoading(false)
  }, [category, searchParams])
  
  const handleFilter = (filters) => {
    setLoading(true)
    
    // Start with all products or category-specific products
    let filtered = category 
      ? getProductsByCategory(category)
      : [...products]
    
    // Apply search if present
    if (filters.search) {
      filtered = searchProducts(filters.search)
    }
    
    // Apply category filter if selected and not already filtered by URL param
    if (filters.category && !category) {
      filtered = filtered.filter(product => product.category === filters.category)
    }
    
    // Apply price filters
    if (filters.minPrice) {
      filtered = filtered.filter(product => product.price >= parseFloat(filters.minPrice))
    }
    
    if (filters.maxPrice) {
      filtered = filtered.filter(product => product.price <= parseFloat(filters.maxPrice))
    }
    
    // Apply sorting
    switch (filters.sort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        // Default sorting (by id)
        filtered.sort((a, b) => a.id - b.id)
    }
    
    setFilteredProducts(filtered)
    setLoading(false)
  }
  
  // Determine the title based on context
  const getTitle = () => {
    if (searchParams.get('search')) {
      return `Search Results: "${searchParams.get('search')}"`
    }
    
    if (category) {
      return `${category} Products`
    }
    
    return 'All Products'
  }
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{getTitle()}</h1>
      
      <SearchFilter onFilter={handleFilter} categories={categories} />
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      ) : (
        <>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold mb-2">No products found</h2>
              <p className="text-gray-600">
                Try adjusting your filters or search criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default ProductList