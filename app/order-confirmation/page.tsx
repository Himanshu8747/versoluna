'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface OrderDetails {
  orderId: string
  total: number
  status: string
  estimatedDelivery: string
  items: { name: string; quantity: number; price: number }[]
}

export default function OrderConfirmationPage() {
  const router = useRouter()
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null)

  useEffect(() => {
    // Simulating fetching order details
    // In a real application, you would fetch this data from your backend
    const mockOrderDetails: OrderDetails = {
      orderId: 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      total: 26748,
      status: 'Processing',
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      items: [
        { name: 'Product 1', quantity: 2, price: 9999 },
        { name: 'Product 2', quantity: 1, price: 5001 },
      ]
    }
    setOrderDetails(mockOrderDetails)
  }, [])

  if (!orderDetails) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Order Confirmation
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Order Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold">Order ID:</span>
              <span>{orderDetails.orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Status:</span>
              <span className="text-green-600 font-semibold">{orderDetails.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Estimated Delivery:</span>
              <span>{orderDetails.estimatedDelivery}</span>
            </div>
            <Separator />
            <div className="space-y-2">
              {orderDetails.items.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{orderDetails.total}</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={() => router.push('/')} variant="outline">
              Back to Home
            </Button>
            <Button onClick={() => window.open('https://versoluna.com', '_blank')}>
              Continue Shopping with Versoluna
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

