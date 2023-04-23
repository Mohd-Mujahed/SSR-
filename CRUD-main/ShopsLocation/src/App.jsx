import AddShops from './components/addShops';
import AllShops from './components/allShops';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditShops from './components/editShop';
import GetShopNearme from './components/getShopNearme';
import Nearme from './components/nearme';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        {/* <Route path="/" element={<CodeForInterview /> } /> */}
        <Route path="/all" element={<AllShops /> } />
        <Route path="/add" element={<AddShops />} />
        <Route path="/edit/:id" element={<EditShops/>} />
<Route path="/getshopsnearme" element={<GetShopNearme/>}/>
<Route path="/nearme" element={<Nearme/>}/>

        {/* <Route path="/edit/:id" element={<EditUser />} /> */}
        {/* <Route path='/*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;