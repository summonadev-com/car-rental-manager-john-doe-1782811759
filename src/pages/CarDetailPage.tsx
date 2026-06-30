import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cars } from '@/lib/cars';

export default function CarDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [showToast, setShowToast] = useState(false);

  const car = cars.find((c) => c.id === id);

  function handleBook() {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  }

  if (!car) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-950">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center py-24 text-center px-4">
          <div className="text-6xl mb-4">🚗</div>
          <h1 className="text-2xl font-bold text-white mb-2">Car Not Found</h1>
          <p className="text-gray-500 mb-8">The vehicle you are looking for doesn't exist or has been removed.</p>
          <Link
            to="/cars"
            className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold px-6 py-3 rounded-xl transition-colors"
          >
            ← Back to Cars
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Navbar />

      {/* Toast notification */}
      {showToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-gray-900 border border-amber-500/40 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-xl flex items-center gap-2">
          <span>🎉</span>
          Booking coming soon! We'll notify you when this feature is ready.
        </div>
      )}

      <div className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Back link */}
        <Link
          to="/cars"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-amber-400 font-medium mb-6 transition-colors group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Cars
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left — Image */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-[16/10]">
              <img
                src={car.imageUrl}
                alt={`${car.brand} ${car.name}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Features list */}
            <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
              <h3 className="font-semibold text-white mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {car.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Details */}
          <div className="space-y-6">
            {/* Header */}
            <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">{car.brand}</p>
                  <h1 className="text-3xl font-extrabold text-white">{car.name}</h1>
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  {car.category}
                </span>
              </div>

              {/* Availability badge */}
              <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-5 ${car.available ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${car.available ? 'bg-green-400' : 'bg-red-400'}`} />
                {car.available ? 'Available Now' : 'Currently Unavailable'}
              </div>

              <p className="text-gray-500 text-sm leading-relaxed">{car.longDescription}</p>
            </div>

            {/* Specs grid */}
            <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
              <h3 className="font-semibold text-white mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-xl p-4">
                  <p className="text-xs text-gray-500 font-medium mb-1">Seats</p>
                  <p className="text-lg font-bold text-white">{car.seats} people</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4">
                  <p className="text-xs text-gray-500 font-medium mb-1">Transmission</p>
                  <p className="text-lg font-bold text-white">{car.transmission}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4">
                  <p className="text-xs text-gray-500 font-medium mb-1">Category</p>
                  <p className="text-lg font-bold text-white">{car.category}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4">
                  <p className="text-xs text-gray-500 font-medium mb-1">Brand</p>
                  <p className="text-lg font-bold text-white">{car.brand}</p>
                </div>
              </div>
            </div>

            {/* Pricing + CTA */}
            <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Price per day</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-amber-400">${car.pricePerDay}</span>
                    <span className="text-gray-500 text-sm">/day</span>
                  </div>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <p>Includes insurance</p>
                  <p>No hidden fees</p>
                </div>
              </div>

              <button
                onClick={handleBook}
                disabled={!car.available}
                className={`w-full py-4 rounded-xl font-bold text-base transition-all ${
                  car.available
                    ? 'bg-amber-500 hover:bg-amber-400 text-gray-950 active:scale-95'
                    : 'bg-gray-800 text-gray-600 cursor-not-allowed'
                }`}
              >
                {car.available ? '🚗 Book This Car' : 'Currently Unavailable'}
              </button>

              {car.available && (
                <p className="text-center text-xs text-gray-600 mt-3">
                  Free cancellation up to 24 hours before pickup
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
