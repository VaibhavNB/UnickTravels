
import './App.css';
import DestinationSec from './components/DestinationSec';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TrendingPackage from './components/TrendingPackage';
import VehiclesSec from './components/VehiclesSec';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header title="UNICK TRAVELS" subTitle="Your Travel-plan is Our Responsibilty" />
      <TrendingPackage title="Top Packages" subTitle="Choose from the below"/>
      <DestinationSec/>
      <VehiclesSec/>
      <Gallery/>
    </div>
  );
}

export default App;
