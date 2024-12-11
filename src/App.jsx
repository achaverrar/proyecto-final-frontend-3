import { Route, Routes } from 'react-router-dom';
import { Cart, Checkout, Home, NotFound, PizzaDetails } from './pages';
import { DefaultLayout } from './components';

function App () {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path='/pizza/:id' element={<PizzaDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
