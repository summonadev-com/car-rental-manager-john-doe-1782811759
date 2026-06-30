import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-950" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
              <circle cx="7.5" cy="14.5" r="1.5"/>
              <circle cx="16.5" cy="14.5" r="1.5"/>
            </svg>
          </div>
          <span className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
            DriveEasy
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          <NavLink
            to="/cars"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? 'text-amber-400' : 'text-gray-400 hover:text-white'
              }`
            }
          >
            Browse Cars
          </NavLink>
          <Link
            to="/cars"
            className="bg-amber-500 hover:bg-amber-400 text-gray-950 text-sm font-bold px-4 py-2 rounded-lg transition-colors"
          >
            Rent Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
