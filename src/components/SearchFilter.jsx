import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline'

function SearchFilter({ onFilter, categories }) {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    sort: 'default'
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  
  useEffect(() => {
    // Get search query from URL if it exists
    const searchQuery = searchParams.get('search') || ''
    
    // Apply filters
    onFilter({
      ...filters,
      search: searchQuery
    })
  }, [filters, searchParams, onFilter])
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleReset = () => {
    setFilters({
      category: '',
      minPrice: '',
      maxPrice: '',
      sort: 'default'
    })
  }
  
  return (
    <div className="mb-6">
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full flex items-center justify-center space-x-2 btn btn-outline"
        >
          <FunnelIcon className="h-5 w-5" />
          <span>{isFilterOpen ? 'Hide Filters' : 'Show Filters'}</span>
        </button>
      </div>
      
      {/* Filter Form */}
      <div className={`bg-white p-4 rounded-lg shadow-sm ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button 
            onClick={handleReset}
            className="text-sm text-primary-600 hover:text-primary-800 flex items-center"
          >
            <XMarkIcon className="h-4 w-4 mr-1" />
            Reset
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Category Filter */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={filters.category}
              onChange={handleChange}
              className="input"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* Price Range */}
          <div>
            <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">
              Min Price
            </label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              placeholder="Min"
              min="0"
              className="input"
            />
          </div>
          
          <div>
            <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
              Max Price
            </label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              placeholder="Max"
              min="0"
              className="input"
            />
          </div>
          
          {/* Sort */}
          <div>
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
              Sort By
            </label>
            <select
              id="sort"
              name="sort"
              value={filters.sort}
              onChange={handleChange}
              className="input"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchFilter