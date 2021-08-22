import React from 'react';

import Header from './components/header/header.component';
import About from './components/about/about.component';
import EShop from './components/e-shop/e-shop.component';
import Users from './components/users/users.component';
import News from './components/news/news.component';
import Footer from './components/footer/footer.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <EShop />
      <Users />
      <News />
      <Footer />
    </div>
  );
}

export default App;
