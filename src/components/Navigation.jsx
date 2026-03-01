import { useState } from 'react'

const Navigation = () => {
  const [cartCount] = useState(3)

  const navItems = ['Shop', 'Equipment', 'Apparel', 'Supplements', 'About']

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-taupe-500/95 backdrop-blur-xl border-b border-taupe-400/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-black">💪</div>
            <span className="text-xl font-black tracking-tighter text-parchment-500 uppercase">
              IRON<span className="text-powder_blush-500">FORGE</span>
            </span>
          </div>

          <ul className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-xs font-black uppercase tracking-widest text-silver-500 hover:text-parchment-500 transition-all duration-300 relative group"
                >
                  {item}

                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-powder_blush-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <button className="relative group p-2">
            <svg
              className="w-6 h-6 text-parchment-500 group-hover:text-powder_blush-500 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>

            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-powder_blush-500 text-white text-[10px] font-black rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
