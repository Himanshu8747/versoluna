'use client'

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface ProductScrollerProps {
  title: string;
  products: Product[];
  className: string;
}

export default function Products({ title, products, className }: ProductScrollerProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const productElements = gsap.utils.toArray<HTMLElement>(`.${className}`);
    
    if (section && productElements.length > 0) {
      const totalWidth = productElements.reduce((width, product) => width + product.offsetWidth, 0);
      const extraScroll = section.offsetWidth * 0.29;

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
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div ref={productsRef} className="flex gap-8 overflow-x-hidden">
          {products.map((product) => (
            <Card key={product.id} className={`${className} bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-[300px]`}>
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
    </section>
  );
}