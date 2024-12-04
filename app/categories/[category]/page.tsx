'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious
} from '@/components/ui/pagination'
import { fakedata } from '@/lib/commonData'

interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
  category: string
}

const PRODUCTS_PER_PAGE = 10

export default function CategoryPage() {
  const params = useParams()
  const category = params.category as string
  const [sortBy, setSortBy] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([])

  useEffect(() => {
    const filteredProducts = fakedata.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    )
    setCategoryProducts(filteredProducts)
  }, [category])

  const sortProducts = (products: Product[]) => {
    switch (sortBy) {
      case 'price-low-high':
        return [...products].sort((a, b) => a.price - b.price)
      case 'price-high-low':
        return [...products].sort((a, b) => b.price - a.price)
      case 'name-a-z':
        return [...products].sort((a, b) => a.name.localeCompare(b.name))
      case 'name-z-a':
        return [...products].sort((a, b) => b.name.localeCompare(a.name))
      default:
        return products
    }
  }

  const sortedProducts = sortProducts(categoryProducts)
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const currentProducts = sortedProducts.slice(startIndex, endIndex)

  return (
    <div className="container mx-auto px-8 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{category}</h1>
      
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600">
          Showing {startIndex + 1} - {Math.min(endIndex, sortedProducts.length)} of {sortedProducts.length} products
        </p>
        <Select onValueChange={setSortBy}>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {currentProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="flex flex-col h-full">
              <div className="relative h-40 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription className="text-xl font-semibold text-primary">
                  ₹ {product.price.toFixed(2)}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>
              </CardContent>
              <CardFooter className="p-4">
                <Link href={`/products/${product.id}`} className="w-full">
                  <Button className="w-full" size="sm">View Product</Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={currentPage === page}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  )
}