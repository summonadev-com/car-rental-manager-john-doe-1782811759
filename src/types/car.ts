export type CarCategory = 'SUV' | 'Sedan' | 'Electric' | 'Convertible';
export type Transmission = 'Auto' | 'Manual';

export interface Car {
  id: string;
  name: string;
  brand: string;
  category: CarCategory;
  seats: number;
  pricePerDay: number;
  transmission: Transmission;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  available: boolean;
}
