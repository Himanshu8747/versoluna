'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { categories} from '@/lib/commonData'


export default function Categories() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Explore Our Collections</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4">
                  <h2 className="text-xl font-semibold">{category.name}</h2>
                  <Link href={`/categories/${category.slug}`}>
                    <Button variant="ghost" className='bg-black text-white' size="sm">
                      Shop 
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}