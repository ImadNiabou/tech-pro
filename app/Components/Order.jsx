import React from 'react'

const Order = () => {
    const products = [
        {id:1, name:"Product 1", quantity:2, paid:100, status:"in transit"},
        {id:2, name:"Product 2", quantity:1, paid:200, status:"delivered"},
    ]
  return (
    <div className='max-w-3xl mx-auto mt-[60px] mb-[160px]'>
        <h1 className='text-4xl font-bold m-10 text-purple text-center'>Your Orders</h1>
        <table className='w-full border-colapse'>
            <thead>
                <tr className='text-purple border-b border-gray-200'>
                    <th className='py-2 px-4'>Product</th>
                    <th className='py-2 px-4'>Quantity</th>
                    <th className='py-2 px-4'>Paid</th>
                    <th className='py-2 px-4'>Status</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                   <tr key={product.id} className='border-b border-gray-200 text-center hover:bg-gray-100 transition-all duration-300 border-b border-gray-200'>
                    <td className='py-6 px-4'>{product.name}</td>
                    <td className='py-6 px-4'>{product.quantity}</td>
                    <td className='py-6 px-4'>{product.paid}</td>
                    <td className='py-6 px-4'>{product.status}</td>
                   </tr> 
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Order