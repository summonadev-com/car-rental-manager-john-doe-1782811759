import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-[Inter,sans-serif]">
      <Routes>
        <Route path="/" element={<div className="flex items-center justify-center h-screen text-gray-500">Car Rental App — Loading…</div>} />
      </Routes>
    </div>
  );
}
