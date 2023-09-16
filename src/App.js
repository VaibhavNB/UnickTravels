
import './App.css';
import Booking from './components/Booking';
import DestinationSec from './components/DestinationSec';
import Footer from './components/Footer';
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
      <Booking/>
      <Gallery/>
      <Footer/>

    </div>
  );
}

export default App;
