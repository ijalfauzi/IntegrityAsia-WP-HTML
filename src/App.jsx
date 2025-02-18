import Header from './components/layout/Header';
import IntegritySlider from './components/IntegritySlider';
import Services from './components/sections/Services';
import News from './components/sections/News';

function App() {
  return (
    <div className="w-full">
      <Header />
      <IntegritySlider />
      <Services />
      <News />
    </div>
  )
}

export default App