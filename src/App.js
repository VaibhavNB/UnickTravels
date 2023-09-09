
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TrendingPackage from './components/TrendingPackage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header title="Unick Travels" subTitle="Subtitle here goes" />
      <TrendingPackage title="Top Packages" subTitle="Choose from the below"/>
    </div>
  );
}

export default App;
