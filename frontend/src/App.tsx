import { Routes, Route } from 'react-router-dom';
import Navbar from "./pages/Navbar";
import LandingPage from "./pages/Landing";
import TalkToYourProduct from "./pages/TalkToYourProduct";
import CompareProducts from "./pages/CompareProducts";
import Billing from "./pages/Billing";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin';
import PayNow from './pages/PayNow';

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/TalkToYourProduct" element={<TalkToYourProduct />} />
        <Route path="/CompareProducts" element={<CompareProducts />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/paynow" element={<PayNow />} />
      </Routes>
    </main>
  );
}