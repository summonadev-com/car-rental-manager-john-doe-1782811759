import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import CarsPage from '@/pages/CarsPage';
import CarDetailPage from '@/pages/CarDetailPage';

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/cars/:id" element={<CarDetailPage />} />
      </Routes>
    </div>
  );
}
