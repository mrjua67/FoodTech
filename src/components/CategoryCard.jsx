import { Link } from 'react-router-dom'

function CategoryCard({ category }) {
  return (
    <Link 
      to={`/products/${category.name}`}
      className="relative overflow-hidden rounded-lg shadow-md group"
    >
      <img 
        src={category.image} 
        alt={category.name}
        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <h3 className="text-white text-xl font-bold p-4 w-full">{category.name}</h3>
      </div>
    </Link>
  )
}

export default CategoryCard