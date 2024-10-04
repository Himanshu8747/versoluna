import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-600">
              Versoluna is your one-stop shop for all things stylish and modern.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:underline">Home</Link></li>
              <li><Link href="/products" className="text-sm text-gray-600 hover:underline">Products</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:underline">About</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-600">
              123 E-commerce Street<br />
              Shadcn City, SC 12345<br />
              Email: info@versoluna.com<br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          © 2024 Versoluna. All rights reserved.
        </div>
      </div>
    </footer>
  )
}