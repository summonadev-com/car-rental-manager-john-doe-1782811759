import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<div className="p-8 text-center text-gray-500">Cars page coming soon…</div>} />
        <Route path="/cars/:id" element={<div className="p-8 text-center text-gray-500">Car detail page coming soon…</div>} />
      </Routes>
    </div>
  );
}
