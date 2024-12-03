'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MenuIcon, X } from 'lucide-react'
import { strings } from '@/lib/strings'

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-4 px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <MenuIcon />}
        </button>
        {/* <div className="text-white">EN</div> */}
      </div>
      {isOpen && (
        <nav className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center">
          <ul className="text-center space-y-8">
            {Object.entries(strings.navigation).map(([key, value]) => (
              <li key={key}>
                <Link 
                  href={`/${key === 'home' ? '' : key}`} 
                  className="text-2xl hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {value}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

