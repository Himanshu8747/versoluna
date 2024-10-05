'use client'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Versoluna</h1>
        
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
            <CardDescription>Discover the journey of Versoluna</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Versoluna was born out of a passion for bringing high-quality, innovative products to our customers. Founded in 2023, we&apos;ve quickly grown to become a leading online destination for tech enthusiasts and lifestyle shoppers alike.
            </p>
            <p className="mb-4">
              Our mission is to curate a selection of products that enhance your daily life, from cutting-edge electronics to stylish accessories. We believe in the power of technology to improve our world, and we&apos;re committed to offering products that are not only functional but also environmentally conscious.
            </p>
            <p>
              At Versoluna, we prioritize customer satisfaction above all else. Our team works tirelessly to ensure a seamless shopping experience, from browsing our carefully selected inventory to swift delivery right to your doorstep. We&apos;re not just selling products; we&apos;re building lasting relationships with our customers.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I place an order?</AccordionTrigger>
            <AccordionContent>
              To place an order, simply browse our products, add items to your cart, and proceed to checkout. Follow the steps to enter your shipping and payment information, then confirm your order. You&apos;ll receive an order confirmation email once your purchase is complete.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
            <AccordionContent>
              We accept a variety of payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are securely processed to ensure your financial information is protected.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How long will it take to receive my order?</AccordionTrigger>
            <AccordionContent>
              Shipping times vary depending on your location and the shipping method chosen. Generally, orders are processed within 1-2 business days. Standard shipping typically takes 3-5 business days, while express shipping can deliver your items in 1-3 business days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              We offer a 30-day return policy for most items. If you&apos;re not satisfied with your purchase, you can return it within 30 days of delivery for a full refund or exchange. Items must be in their original condition and packaging. Please note that some products may have specific return restrictions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer international shipping to many countries. Shipping costs and delivery times vary depending on the destination. You can view available shipping options and costs during the checkout process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>How can I track my order?</AccordionTrigger>
            <AccordionContent>
              Once your order is shipped, you&apos;ll receive a shipping confirmation email with a tracking number. You can use this number to track your package on our website or the carrier&apos;s website. You can also check the status of your order by logging into your account on our website.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Are my personal and payment details secure?</AccordionTrigger>
            <AccordionContent>
              Yes, we take the security of your information very seriously. We use industry-standard encryption technologies to protect your personal and payment information. Our website is SSL-certified, ensuring that all data transmitted between your browser and our servers is encrypted and secure.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Do you offer warranty on your products?</AccordionTrigger>
            <AccordionContent>
              Many of our products come with a manufacturer&apos;s warranty. The duration and terms of the warranty vary by product and brand. You can find specific warranty information on each product&apos;s page. Additionally, we offer an extended warranty option on select items for added peace of mind.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}