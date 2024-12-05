'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'
import { CreditCard } from 'lucide-react'
import { StripeCardElement } from '../../components/StripeCardElement'

// Replace with your Stripe publishable key
const stripePromise = loadStripe('pk_test_51P4FNsSHPdjoWBFjHKC7Yoe26ffUiOGb73zuT0S8GO0XcNkToGCOD2zPCypgSmkyfVgvP1hb6G3cIWcW6VitbaX600IIwdjwuO')

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('credit-card')
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement checkout logic for non-Stripe payments
    console.log('Checkout submitted')
    handlePaymentSuccess()
  }

  const handlePaymentSuccess = () => {
    toast({
      title: 'Payment Successful',
      description: 'Your order has been placed successfully.',
      duration: 3000,
    })
    setTimeout(() => {
      router.push('/order-confirmation')
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Elegant Checkout
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Shipping Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                <Input id="firstName" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                <Input id="lastName" required className="mt-1" />
              </div>
            </div>
            <div>
              <Label htmlFor="address" className="text-sm font-medium">Address</Label>
              <Input id="address" required className="mt-1" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="city" className="text-sm font-medium">City</Label>
                <Input id="city" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="zipCode" className="text-sm font-medium">PIN Code</Label>
                <Input id="zipCode" required className="mt-1" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹24,999</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹499</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹1,250</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹26,748</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            {paymentMethod !== 'credit-card' && (
              <Button type="submit" className="w-full text-lg py-6" size="lg" onClick={handleSubmit}>
                Place Order
              </Button>
            )}
          </CardFooter>
        </Card>

        <Card className=" shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
              <div className="flex items-center space-x-3 border rounded-lg p-4 transition-colors hover:bg-secondary">
                <RadioGroupItem value="credit-card" id="credit-card" />
                <Label htmlFor="credit-card" className="flex items-center space-x-2 cursor-pointer">
                  <CreditCard className="w-5 h-5" />
                  <span>Credit Card</span>
                </Label>
              </div>
            </RadioGroup>
            {paymentMethod === 'credit-card' && (
              <div className="mt-6">
                <Elements stripe={stripePromise}>
                  <StripeCardElement onSuccess={handlePaymentSuccess} />
                </Elements>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

