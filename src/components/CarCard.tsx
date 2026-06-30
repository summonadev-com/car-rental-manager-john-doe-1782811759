import { Link } from 'react-router-dom';
import { Car } from '@/types/car';

interface CarCardProps {
  car: Car;
}

const categoryColors: Record<string, string> = {
  SUV: 'bg-green-100 text-green-700',
  Sedan: 'bg-blue-100 text-blue-700',
  Electric: 'bg-purple-100 text-purple-700',
  Convertible: 'bg-orange-100 text-orange-700',
};

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={car.imageUrl}
          alt={`${car.brand} ${car.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {!car.available && (
          <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
            <span className="bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Unavailable
            </span>
          </div>
        )}
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[car.category] ?? 'bg-gray-100 text-gray-700'}`}>
          {car.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{car.brand}</p>
          <h3 className="text-base font-bold text-gray-900 leading-tight">{car.name}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{car.shortDescription}</p>
        </div>

        {/* Specs row */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            {car.seats} seats
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            {car.transmission}
          </span>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-2xl font-extrabold text-gray-900">${car.pricePerDay}</span>
            <span className="text-sm text-gray-400 ml-1">/day</span>
          </div>
          {car.available ? (
            <Link
              to={`/cars/${car.id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              View Details
            </Link>
          ) : (
            <span className="text-sm text-gray-400 font-medium">Not available</span>
          )}
        </div>
      </div>
    </div>
  );
}
