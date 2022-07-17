import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Catalog } from '../pages/Catalog';
import { Detail } from '../pages/Detail';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const Rutas = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:category/search/:keyword' element={<Catalog />} />
      <Route path='/:category/:id' element={<Detail />} />
      <Route path='/:category' element={<Catalog />} />

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
};
