import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 bg-amber-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-950" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
                  <circle cx="7.5" cy="14.5" r="1.5"/>
                  <circle cx="16.5" cy="14.5" r="1.5"/>
                </svg>
              </div>
              <span className="text-white font-bold text-lg">DriveEasy</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              Your trusted partner for premium car rentals — wherever the road takes you.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <p className="text-white font-semibold text-sm mb-3">Quick Links</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
                <li><Link to="/cars" className="hover:text-amber-400 transition-colors">Browse Cars</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-3">Categories</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/cars?category=SUV" className="hover:text-amber-400 transition-colors">SUVs</Link></li>
                <li><Link to="/cars?category=Sedan" className="hover:text-amber-400 transition-colors">Sedans</Link></li>
                <li><Link to="/cars?category=Electric" className="hover:text-amber-400 transition-colors">Electric</Link></li>
                <li><Link to="/cars?category=Convertible" className="hover:text-amber-400 transition-colors">Convertibles</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} DriveEasy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
