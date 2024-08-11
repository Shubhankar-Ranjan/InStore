import { Routes, Route } from 'react-router-dom';
import TalkToProduct from './components/TalkToProduct';


export default function App() {
  return (
    <Routes> {/* {{ edit_4 }} */}
        {/* <Route path="/" element={<Home />} />  */}
        <Route path="/TalkToProduct" element={<TalkToProduct />} /> 
     </Routes>
  )
}