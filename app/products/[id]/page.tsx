'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const product = {
    id: params.id,
    name: 'Elegant Watch',
    price: 199.99,
    description: 'A stylish timepiece for any occasion. Features a stainless steel case, leather strap, and water resistance up to 30 meters.',
  }

  const handleAddToCart = () => {
    // Implement add to cart functionality
    console.log(`Added ${quantity} of product ${product.id} to cart`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{product.name}</CardTitle>
          <CardDescription className="text-xl">${product.price.toFixed(2)}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{product.description}</p>
          <div className="flex items-center gap-4">
            <Input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20"
            />
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-600">Product ID: {product.id}</p>
        </CardFooter>
      </Card>
    </div>
  )
}