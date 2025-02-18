import Header from './components/layout/Header';
import IntegritySlider from './components/IntegritySlider';
import Services from './components/sections/Services';
import News from './components/sections/News';
import References from './components/sections/References';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="w-full">
      <Header />
      <IntegritySlider />
      <Services />
      <News />
      <References />
      <Footer />
    </div>
  )
}

export default App