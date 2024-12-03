import Link from 'next/link'
import { strings } from '@/lib/strings'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-[12rem] font-bold leading-none">{strings.notFound.title}</h1>
        <p className="text-2xl">{strings.notFound.description}</p>
        <Link 
          href="/" 
          className="inline-block border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors"
        >
          {strings.notFound.button}
        </Link>
      </div>
    </div>
  )
}

