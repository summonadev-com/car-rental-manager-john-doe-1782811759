import { useState, useMemo } from 'react';
import { Car, CarCategory, Transmission } from '@/types/car';

export interface CarFilters {
  search: string;
  category: CarCategory | 'All';
  maxPrice: number;
  minSeats: number;
  transmission: Transmission | 'Any';
}

const DEFAULT_FILTERS: CarFilters = {
  search: '',
  category: 'All',
  maxPrice: 300,
  minSeats: 1,
  transmission: 'Any',
};

export function useCarFilters(allCars: Car[], initialCategory?: CarCategory | 'All') {
  const [filters, setFilters] = useState<CarFilters>({
    ...DEFAULT_FILTERS,
    category: initialCategory ?? 'All',
  });

  const filteredCars = useMemo(() => {
    return allCars.filter((car) => {
      const matchesSearch =
        filters.search.trim() === '' ||
        car.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        car.brand.toLowerCase().includes(filters.search.toLowerCase());

      const matchesCategory =
        filters.category === 'All' || car.category === filters.category;

      const matchesPrice = car.pricePerDay <= filters.maxPrice;

      const matchesSeats = car.seats >= filters.minSeats;

      const matchesTransmission =
        filters.transmission === 'Any' || car.transmission === filters.transmission;

      return matchesSearch && matchesCategory && matchesPrice && matchesSeats && matchesTransmission;
    });
  }, [allCars, filters]);

  function setSearch(search: string) {
    setFilters((prev) => ({ ...prev, search }));
  }

  function setCategory(category: CarCategory | 'All') {
    setFilters((prev) => ({ ...prev, category }));
  }

  function setMaxPrice(maxPrice: number) {
    setFilters((prev) => ({ ...prev, maxPrice }));
  }

  function setMinSeats(minSeats: number) {
    setFilters((prev) => ({ ...prev, minSeats }));
  }

  function setTransmission(transmission: Transmission | 'Any') {
    setFilters((prev) => ({ ...prev, transmission }));
  }

  function resetFilters() {
    setFilters({ ...DEFAULT_FILTERS, category: 'All' });
  }

  return {
    filters,
    filteredCars,
    setSearch,
    setCategory,
    setMaxPrice,
    setMinSeats,
    setTransmission,
    resetFilters,
  };
}
