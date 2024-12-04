'use client'

import Link from 'next/link'
import { ShoppingCart, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
export default function Navbar() {
  const placeholders = [
    "Wide leg pants",
    "Charm Bracelet",
    "Floral prints",
    "Crochet knit",
    "Gucci",
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Versoluna
        </Link>
        <div className="flex-grow mx-4">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}