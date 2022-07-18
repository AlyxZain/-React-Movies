import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

import { Rutas } from './config/Rutas';

export function App() {
  return (
    <>
      <Header />
      <Rutas />
      <Footer />
    </>
  );
}
