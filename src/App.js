import './App.css';
import Header from './components/header';
import About from './components/about';
import BannerOne from './components/bannerOne';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <BannerOne />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
