'use client'

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ShoppingBag, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import { HeroImagesSlider } from './ImageSlider';
import Categories from './Categories';

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
    <div ref={containerRef} className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-20 py-20 flex flex-col md:flex-row items-center justify-center md:justify-between">
      <div className="text-center md:text-left">
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
      </div>
      <div className="mt-10 md:mt-0 md:ml-10 hero-image w-[40%] h-[25%]">
        <HeroImagesSlider/>
      </div>
    </section>
    <Categories/>
    <section className="mx-auto px-12 py-12">
        <h3 className='text-4xl font-bold text-center mb-12'>Why Choose Versoluna ?</h3>
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
    </div>
  );
}