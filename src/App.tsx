import { useNavigate, Routes, Route } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import Wallet from './pages/wallet';
import Home from './pages';
import OnBoarding from './pages/onboarding';
export default function App() {
  const navigate = useNavigate()
  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route
          path="/"
          element={<Home />} />
        <Route
          path='/onboarding'
          element={<OnBoarding />} />
        <Route
          path="/wallet"
          element={<Wallet />} />
      </Routes>
    </NextUIProvider>
  );
}