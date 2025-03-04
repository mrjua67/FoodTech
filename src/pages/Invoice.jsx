import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon, PrinterIcon } from '@heroicons/react/24/outline'

function Invoice() {
  const navigate = useNavigate()
  const [invoiceData, setInvoiceData] = useState(null)
  
  useEffect(() => {
    const data = localStorage.getItem('checkoutData')
    
    if (data) {
      setInvoiceData(JSON.parse(data))
    } else {
      // If no invoice data, redirect to home
      navigate('/')
    }
  }, [navigate])
  
  const handlePrint = () => {
    window.print()
  }
  
  if (!invoiceData) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    )
  }
  
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-8 print:hidden">
        <Link to="/" className="flex items-center text-gray-600 hover:text-primary-600">
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        
        <button
          onClick={handlePrint}
          className="btn btn-outline flex items-center"
        >
          <PrinterIcon className="h-5 w-5 mr-2" />
          Print Invoice
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        {/* Invoice Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Invoice</h1>
            <p className="text-gray-600">{invoiceData.invoiceNumber}</p>
          </div>
          
          <div className="text-right">
            <h2 className="text-xl font-bold text-primary-600">FoodTech Store</h2>
            <p className="text-gray-600">123 Commerce St.</p>
            <p className="text-gray-600">Anytown, ST 12345</p>
            <p className="text-gray-600">support@foodtech.example</p>
          </div>
        </div>
        
        {/* Invoice Info */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-gray-600 font-semibold mb-2">Bill To:</h3>
            <p className="font-medium">{invoiceData.customer.name}</p>
            <p className="text-gray-600">{invoiceData.customer.email}</p>
            <p className="text-gray-600">{invoiceData.customer.address}</p>
          </div>
          
          <div className="text-right">
            <div className="mb-2">
              <span className="text-gray-600 font-semibold">Invoice Date:</span>
              <span className="ml-2">{formatDate(invoiceData.date)}</span>
            </div>
            <div>
              <span className="text-gray-600 font-semibold">Payment Method:</span>
              <span className="ml-2">Credit Card</span>
            </div>
          </div>
        </div>
        
        {/* Invoice Items */}
        <div className="mb-8">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 text-left text-gray-600">Item</th>
                <th className="py-3 text-center text-gray-600">Quantity</th>
                <th className="py-3 text-right text-gray-600">Price</th>
                <th className="py-3 text-right text-gray-600">Total</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map(item => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="py-4">
                    <div className="flex items-center">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-md mr-3 hidden sm:block"
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-center">{item.quantity}</td>
                  <td className="py-4 text-right">${item.price.toFixed(2)}</td>
                  <td className="py-4 text-right">${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Invoice Summary */}
        <div className="flex justify-end">
          <div className="w-full sm:w-64">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal:</span>
              <span>${invoiceData.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Tax (10%):</span>
              <span>${invoiceData.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-2 mt-2">
              <span>Total:</span>
              <span>${invoiceData.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-8 print:hidden">
        <p className="text-gray-600 mb-4">
          Thank you for your purchase! We hope you enjoy your products.
        </p>
        <Link to="/" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}

export default Invoice