import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FilterPanel from '@/components/FilterPanel';
import CarCard from '@/components/CarCard';
import { cars } from '@/lib/cars';
import { useCarFilters } from '@/hooks/useCarFilters';
import { CarCategory } from '@/types/car';

export default function CarsPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as CarCategory | null) ?? 'All';
  const [filtersOpen, setFiltersOpen] = useState(false);

  const {
    filters,
    filteredCars,
    setSearch,
    setCategory,
    setMaxPrice,
    setMinSeats,
    setTransmission,
    resetFilters,
  } = useCarFilters(cars, initialCategory);

  const filterProps = { filters, setSearch, setCategory, setMaxPrice, setMinSeats, setTransmission, resetFilters };

  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Page header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Browse Cars</h1>
            <p className="text-sm text-gray-500 mt-1">
              Showing <span className="font-semibold text-amber-400">{filteredCars.length}</span> of {cars.length} vehicles
            </p>
          </div>
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="lg:hidden flex items-center gap-2 bg-gray-900 border border-gray-700 text-gray-300 font-medium text-sm px-4 py-2 rounded-lg hover:border-amber-500/50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
          </button>
        </div>

        {/* Mobile filter drawer */}
        {filtersOpen && (
          <div className="lg:hidden mb-6">
            <FilterPanel {...filterProps} />
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <FilterPanel {...filterProps} />
          </aside>

          {/* Car grid */}
          <div className="flex-1 min-w-0">
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-white mb-2">No cars found</h3>
                <p className="text-gray-500 text-sm max-w-sm mb-6">
                  No vehicles match your current filters. Try adjusting your search criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold text-sm px-6 py-2.5 rounded-lg transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
