import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Catalog } from '../pages/Catalog';
import { Detail } from '../pages/detail/Detail';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Contact } from '../pages/contact/Contact';

export const Rutas = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:category/search/:keyword' element={<Catalog />} />
      <Route path='/:category/:id' element={<Detail />} />
      <Route path='/:category' element={<Catalog />} />

      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
};
