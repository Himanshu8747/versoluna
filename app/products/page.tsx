import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function Page() {
  const products = [
    { id: 1, name: 'Elegant Watch', price: 199.99, description: 'A stylish timepiece for any occasion.' },
    { id: 2, name: 'Leather Bag', price: 149.99, description: 'Durable and fashionable leather bag.' },
    { id: 3, name: 'Wireless Earbuds', price: 89.99, description: 'High-quality sound in a compact package.' },
    { id: 4, name: 'Smart Speaker', price: 129.99, description: 'Voice-controlled speaker with amazing sound.' },
    { id: 5, name: 'Fitness Tracker', price: 79.99, description: 'Track your health and fitness goals.' },
    { id: 6, name: 'Portable Charger', price: 49.99, description: 'Keep your devices charged on the go.' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600">Showing {products.length} products</p>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-low-high">Price: Low to High</SelectItem>
            <SelectItem value="price-high-low">Price: High to Low</SelectItem>
            <SelectItem value="name-a-z">Name: A to Z</SelectItem>
            <SelectItem value="name-z-a">Name: Z to A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>${product.price.toFixed(2)}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{product.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/products/${product.id}`}>
                <Button>View Product</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}