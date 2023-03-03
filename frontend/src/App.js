import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './components/home/HomePage';
import Weather from './components/weather/Weather'

function App() {
  return( 
  <>
    <div className="App">
    </div>
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/weather' element={<Weather/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
