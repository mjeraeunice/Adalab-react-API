//import logo from './logo.svg';
import './App.css';
import Products from './Product';
import Login from './Login';
import Navigation from './Navigation';
import { BrowserRouter,Routes,Route,} from 'react-router-dom';
import ProductDetails from './ProductDetails';
function App() {
  return (
    <div>
      <Navigation/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/ProductDetails/:productId' element={<ProductDetails/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App;
