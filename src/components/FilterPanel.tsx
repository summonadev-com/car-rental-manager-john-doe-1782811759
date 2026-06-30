import { CarFilters } from '@/hooks/useCarFilters';
import { CarCategory, Transmission } from '@/types/car';

interface FilterPanelProps {
  filters: CarFilters;
  setSearch: (v: string) => void;
  setCategory: (v: CarCategory | 'All') => void;
  setMaxPrice: (v: number) => void;
  setMinSeats: (v: number) => void;
  setTransmission: (v: Transmission | 'Any') => void;
  resetFilters: () => void;
}

const categories: (CarCategory | 'All')[] = ['All', 'SUV', 'Sedan', 'Electric', 'Convertible'];
const seatOptions = [1, 2, 4, 5, 7];

export default function FilterPanel({
  filters,
  setSearch,
  setCategory,
  setMaxPrice,
  setMinSeats,
  setTransmission,
  resetFilters,
}: FilterPanelProps) {
  return (
    <aside className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-900 text-base">Filters</h2>
        <button
          onClick={resetFilters}
          className="text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Reset all
        </button>
      </div>

      {/* Search */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Search
        </label>
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Brand or model…"
            value={filters.search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
          />
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Category
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                filters.category === cat
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Max Price */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Max Price / Day
          </label>
          <span className="text-sm font-bold text-blue-600">${filters.maxPrice}</span>
        </div>
        <input
          type="range"
          min={30}
          max={300}
          step={10}
          value={filters.maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-blue-600 cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>$30</span>
          <span>$300</span>
        </div>
      </div>

      {/* Min Seats */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Minimum Seats
        </label>
        <div className="flex gap-2">
          {seatOptions.map((n) => (
            <button
              key={n}
              onClick={() => setMinSeats(n)}
              className={`flex-1 text-xs font-medium py-2 rounded-lg border transition-colors ${
                filters.minSeats === n
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
              }`}
            >
              {n === 1 ? 'Any' : `${n}+`}
            </button>
          ))}
        </div>
      </div>

      {/* Transmission */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Transmission
        </label>
        <div className="flex gap-2">
          {(['Any', 'Auto', 'Manual'] as (Transmission | 'Any')[]).map((t) => (
            <button
              key={t}
              onClick={() => setTransmission(t)}
              className={`flex-1 text-xs font-medium py-2 rounded-lg border transition-colors ${
                filters.transmission === t
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
