'use client'

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ShoppingBag, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import Products from './Products';
import { featuredProducts, recommendedProducts } from '@/lib/commonData';
gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const featuredProductsRef = useRef<HTMLDivElement>(null);
  const recommendedProductsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero-text', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    })
    .from('.hero-button', {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: 'back.out(1.7)'
    }, '-=0.5')
    .from('.feature-card', {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=0.5');

    const setupScrollAnimation = (sectionRef: React.RefObject<HTMLElement>, productClass: string) => {
      const section = sectionRef.current;
      const productElements = gsap.utils.toArray<HTMLElement>(`.${productClass}`);
      
      if (section) {
        const totalWidth = productElements.reduce((width, product) => width + product.offsetWidth, 0);
        const extraScroll = section.offsetWidth * 0.25;

        gsap.to(productElements, {
          x: () => -(totalWidth - section.offsetWidth + extraScroll),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalWidth - section.offsetWidth + extraScroll}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          }
        });
      }
    };

    setupScrollAnimation(featuredProductsRef, 'product-card1');
    setupScrollAnimation(recommendedProductsRef, 'product-card2');

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="hero-text text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-black">
          Welcome to Versoluna
        </h1>
        <p className="hero-text text-xl md:text-2xl mb-8 text-gray-600">
          Discover our latest collection of trendy products.
        </p>
        <Link href="/products" className="hero-button inline-block">
          <Button size="lg" className="bg-black text-white">
            Shop Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="feature-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <ShoppingBag className="h-10 w-10 text-purple-600 mb-2" />
              <CardTitle>Wide Selection</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Browse through our extensive catalog of trendy products.</p>
            </CardContent>
          </Card>
          <Card className="feature-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Zap className="h-10 w-10 text-pink-600 mb-2" />
              <CardTitle>Fast Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get your orders delivered quickly to your doorstep.</p>
            </CardContent>
          </Card>
          <Card className="feature-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Shield className="h-10 w-10 text-indigo-600 mb-2" />
              <CardTitle>Secure Shopping</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Shop with confidence with our secure payment system.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Products title="Featured Products" products={featuredProducts} className="product-card1" />
      <Products title="Recommended Products" products={recommendedProducts} className="product-card2" />

      {/* <section ref={featuredProductsRef} className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="flex gap-8 overflow-x-hidden">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="product-card1 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-[300px]">
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-purple-600">
                    ${product.price.toFixed(2)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-gray-200 rounded-md mb-4"></div>
                  <p className="text-gray-600 line-clamp-2">{product.description}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/products/${product.id}`} className="w-full">
                    <Button className="w-full bg-black text-white">
                      View Product
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section ref={recommendedProductsRef} className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Recommended Products</h2>
          <div className="flex gap-8 overflow-x-hidden">
            {recommendedProducts.map((product) => (
              <Card key={product.id} className="product-card2 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-[300px]">
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-purple-600">
                    ${product.price.toFixed(2)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-gray-200 rounded-md mb-4"></div>
                  <p className="text-gray-600 line-clamp-2">{product.description}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/products/${product.id}`} className="w-full">
                    <Button className="w-full bg-black text-white">
                      View Product
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}