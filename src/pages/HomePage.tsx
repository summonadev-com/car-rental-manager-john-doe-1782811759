import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const whyItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Free Cancellation',
    description: 'Cancel or modify your booking up to 24 hours before pickup — no questions asked.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Wide Selection',
    description: 'From city sedans to luxury SUVs and electric cars — we have the perfect vehicle for every trip.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Best Price Guarantee',
    description: 'Find a lower price elsewhere? We will match it. Transparent pricing with no hidden fees.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: '24/7 Support',
    description: 'Our team is always on call. Get roadside assistance or booking help anytime, day or night.',
  },
];

const categories = [
  { label: 'SUV', image: '/suv.png', description: 'Spacious & capable' },
  { label: 'Sedan', image: '/sedan.png', description: 'Comfortable & efficient' },
  { label: 'Electric', image: '/electric.png', description: 'Clean & futuristic' },
  { label: 'Convertible', image: '/convertible.png', description: 'Fun & open-air' },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-amber-700 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-2xl">
            <span className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Premium Car Rental
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Find Your
              <br />
              <span className="text-amber-400">Perfect Ride</span>
            </h1>
            <p className="text-lg text-gray-400 mb-10 max-w-lg">
              Choose from our handpicked fleet of premium vehicles. Flexible rentals, transparent pricing, and a seamless experience from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/cars"
                className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold text-base px-8 py-4 rounded-xl transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-amber-900/30"
              >
                Browse All Cars
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/cars?category=Electric"
                className="border border-gray-700 hover:border-amber-500/50 text-gray-300 hover:text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
              >
                View Electric Cars
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-gray-800 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '200+', label: 'Vehicles Available' },
              { value: '50+', label: 'Pickup Locations' },
              { value: '98%', label: 'Customer Satisfaction' },
              { value: '24/7', label: 'Roadside Support' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Popular Categories</h2>
            <p className="text-gray-500 mt-2">Find the vehicle type that suits your journey</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => navigate(`/cars?category=${cat.label}`)}
                className="group bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-amber-500/50 rounded-2xl p-4 text-center transition-all cursor-pointer"
              >
                <div className="mb-3 flex items-center justify-center">
                  <img src={cat.image} alt={cat.label} className="w-full h-24 object-cover rounded-xl" />
                </div>
                <div className="font-semibold text-white group-hover:text-amber-400 transition-colors">{cat.label}</div>
                <div className="text-sm text-gray-500 mt-1">{cat.description}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Why Choose DriveEasy?</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              We make car rental simple, transparent, and stress-free every time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-amber-500/40 transition-colors"
              >
                <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-950 mb-4">Ready to Hit the Road?</h2>
          <p className="text-amber-900 mb-8 text-lg">
            Browse our full fleet and find the perfect car for your next adventure.
          </p>
          <Link
            to="/cars"
            className="bg-gray-950 text-amber-400 hover:bg-gray-800 font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2 transition-colors shadow-lg"
          >
            Explore All Cars
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
