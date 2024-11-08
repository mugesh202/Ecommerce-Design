import './App.css';
import Navbar from './Commponent/Navbar/Navbar';
import Hero from './Commponent/Hero/Hero';
import Menus from './Commponent/Menus/Menus';
import Banner from './Commponent/Banners/Banner';
import Banner2 from './Commponent/Banners/Banner2';
import Banner3 from './Commponent/Banners/Banner3';
import Footer from './Commponent/Footer/Footer';
function App() {
  return (
    <>
    <main className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Menus />
      <Banner />
      <Banner2 />
      <Banner3 />
      <Footer />
      </main>
    </>
  );
}

export default App;
