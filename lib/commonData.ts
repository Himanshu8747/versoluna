interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const featuredProducts: Product[] = [
    { id: 1, name: 'Elegant Watch', price: 9999.99, description: 'A stylish timepiece for any occasion.' },
    { id: 2, name: 'Leather Bag', price: 4999.99, description: 'Durable and fashionable leather bag.' },
    { id: 3, name: 'Wireless Earbuds', price: 2899.99, description: 'High-quality sound in a compact package.' },
    { id: 4, name: 'Smart Speaker', price: 3999.99, description: 'Voice-controlled speaker with amazing sound.' },
    { id: 5, name: 'Fitness Tracker', price: 2499.99, description: 'Track your health and fitness goals.' },
    { id: 6, name: 'Portable Charger', price: 1499.99, description: 'Keep your devices charged on the go.' },
    { id: 7, name: 'Noise Headphones', price: 7999.99, description: 'Immersive audio experience with top-notch noise cancellation.' },
    { id: 8, name: 'Ultra-Thin Laptop', price: 29999.99, description: 'Powerful computing in a sleek, portable design.' },
    { id: 9, name: 'Smart Home Hub', price: 5999.99, description: 'Control your entire smart home from one device.' },
  ];

  export const recommendedProducts: Product[] = [
    { id: 10, name: 'Wireless Mouse', price: 1299.99, description: 'Ergonomic design for comfortable use.' },
    { id: 11, name: 'Bluetooth Keyboard', price: 2499.99, description: 'Compact and versatile for all your devices.' },
    { id: 12, name: 'Portable SSD', price: 3999.99, description: 'Fast and reliable storage on the go.' },
    { id: 13, name: 'Wireless Charger', price: 999.99, description: 'Convenient charging for all Qi-enabled devices.' },
    { id: 14, name: 'Smart Bulb Set', price: 1799.99, description: 'Customize your home lighting with ease.' },
    { id: 15, name: 'Portable Projector', price: 8999.99, description: 'Big screen entertainment anywhere you go.' },
    { id: 16, name: 'Gaming Controller', price: 1999.99, description: 'Precision control for an immersive gaming experience.' },
    { id: 17, name: 'Noise Mic', price: 4999.99, description: 'Crystal clear audio for all your calls and recordings.' },
    { id: 18, name: 'Smart Scale', price: 1499.99, description: 'Track your fitness progress with detailed metrics.' },
  ];


  export const categories = [
    { name: "Women's Wear", image: "/placeholder.svg?height=300&width=400", slug: "womens-wear" },
    { name: "Men's Wear", image: "/placeholder.svg?height=300&width=400", slug: "mens-wear" },
    { name: "Accessories", image: "/placeholder.svg?height=300&width=400", slug: "accessories" },
    { name: "Footwear", image: "/placeholder.svg?height=300&width=400", slug: "footwear" },
    { name: "Activewear", image: "/placeholder.svg?height=300&width=400", slug: "activewear" },
    { name: "Formal Wear", image: "/placeholder.svg?height=300&width=400", slug: "formal-wear" },
  ]
  
  export const brands = [
    { name: "Gucci", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Prada", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Louis Vuitton", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Chanel", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Hermès", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Balenciaga", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Dior", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Versace", logo: "/placeholder.svg?height=100&width=100" },
  ]